package com.prjetointegrador.br.rest;


import com.prjetointegrador.br.model.entity.Disciplina;
import com.prjetointegrador.br.model.entity.Matricula;
import com.prjetointegrador.br.model.entity.Pessoa;
import com.prjetointegrador.br.model.repository.DisciplinaRepository;
import com.prjetointegrador.br.model.repository.MatriculaRepository;
import com.prjetointegrador.br.model.repository.PessoaRepository;
import com.prjetointegrador.br.rest.dto.MatriculaDTO;
import com.prjetointegrador.br.util.BigdecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/matriculas")
@CrossOrigin("http://localhost:4200")
public class MatriculaController {

    private final MatriculaRepository matriculaRepository;
    private final PessoaRepository pessoaRepository;
    private final DisciplinaRepository disciplinaRepository;
    private final BigdecimalConverter bigdecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Matricula salvar(@RequestBody MatriculaDTO matriculaDTO) {
        LocalDate data = LocalDate.parse(matriculaDTO.getDataMatriculaDTO(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        Integer idPessoa = matriculaDTO.getIdPessoaAlunoDTO();
        Pessoa pessoaAluno = pessoaRepository
                .findById(idPessoa)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Aluno inexistente"));

        Integer idDisciplina = matriculaDTO.getIdDisciplinaDTO();
        Disciplina disciplinaAluno = disciplinaRepository
                .findById(idDisciplina)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Disciplina inexistente"));

        Matricula matricula = new Matricula();
        matricula.setDataMatricula(data);
        matricula.setAluno(pessoaAluno);
        matricula.setDisciplina(disciplinaAluno);
        matricula.setPeriodo(matriculaDTO.getPeriodoDTO());
        matricula.setValorPago(bigdecimalConverter.converter(matriculaDTO.getValorPagoDTO()));

        return matriculaRepository.save(matricula);
    }

    @GetMapping("{id}")
    public Matricula pesquisarPorId(@PathVariable Integer id){
        return matriculaRepository.findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){

        matriculaRepository.findById(id)
                .map(matricula -> {
                    matriculaRepository.delete(matricula);
                    return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Matricula matriculaAtualizado){
        matriculaRepository.findById(id)
                .map(matricula -> {
                    matricula.setValorPago(matriculaAtualizado.getValorPago());
                    matricula.setPeriodo(matriculaAtualizado.getPeriodo());
                    return matriculaRepository.save(matriculaAtualizado);
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    @GetMapping
    public List<Matricula> obterTodos(){
        return matriculaRepository.findAll();
    }

}




