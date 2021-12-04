package com.prjetointegrador.br.rest;


import com.prjetointegrador.br.model.entity.Disciplina;
import com.prjetointegrador.br.model.entity.Pessoa;
import com.prjetointegrador.br.model.repository.DisciplinaRepository;
import com.prjetointegrador.br.model.repository.PessoaRepository;
import com.prjetointegrador.br.rest.dto.DisciplinaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/disciplina")
@CrossOrigin("http://localhost:4200")
public class DisciplinaController {

    private final PessoaRepository pessoaRepository;
    private final DisciplinaRepository disciplinaRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Disciplina salvar(@RequestBody DisciplinaDTO disciplinaDTO) {

        Integer idPessoaProfessor = disciplinaDTO.getIdDisciplinaProfessorDTO();
        Pessoa pessoaProfessor = pessoaRepository
                .findById(idPessoaProfessor)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Professor inexistente"));

        Disciplina disciplina = new Disciplina();
        disciplina.setNomeDisciplina(disciplinaDTO.getNomeDisciplinaDTO());
        disciplina.setProfessor(pessoaProfessor);
        disciplina.setCargaHoraria(disciplinaDTO.getCargaHorariaDTO());
        disciplina.setLimiteAlunos(disciplinaDTO.getLimiteAlunosDTO());

        return disciplinaRepository.save(disciplina);
    }

    @GetMapping("{id}")
    public Disciplina pesquisarPorId(@PathVariable Integer id){
        return disciplinaRepository.findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){

        disciplinaRepository.findById(id)
                .map(disciplina -> {
                    disciplinaRepository.delete(disciplina);
                    return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Disciplina disciplinaaAtualizado){
        disciplinaRepository.findById(id)
                .map(disciplina -> {
                    disciplina.setNomeDisciplina(disciplinaaAtualizado.getNomeDisciplina());
                    disciplina.setCargaHoraria(disciplinaaAtualizado.getCargaHoraria());
                    disciplina.setLimiteAlunos(disciplinaaAtualizado.getLimiteAlunos());
                    disciplina.setProfessor(disciplinaaAtualizado.getProfessor());
                    return disciplinaRepository.save(disciplinaaAtualizado);
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    @GetMapping
    public List<Disciplina> obterTodos(){
        return disciplinaRepository.findAll();
    }

}
