package com.prjetointegrador.br.rest;

import com.prjetointegrador.br.model.entity.Pessoa;
import com.prjetointegrador.br.model.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/pessoa")
@CrossOrigin("http://localhost:4200")
public class PessoaController {

    private final PessoaRepository pessoaRepository;

    @Autowired
    public PessoaController(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    @GetMapping
    public List<Pessoa> obterTodos(){
        return pessoaRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pessoa salvar( @RequestBody Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }

    @GetMapping("{id}")
    public Pessoa pesquisarPorId(@PathVariable Integer id){
        return pessoaRepository.findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/pesquisa")
    public List<Pessoa> pesquisarPorNomeCPF(@RequestParam("nome") String nome, @RequestParam("cpf") String cpf){
        return pessoaRepository.findByNomePessoaOrCpf(nome, cpf)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){
        pessoaRepository.findById(id)
                .map(pessoa -> {
                    pessoaRepository.delete(pessoa);
                    return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Pessoa pessoaAtualizado){
        pessoaRepository.findById(id)
                .map(pessoa -> {
                    pessoa.setNomePessoa(pessoaAtualizado.getNomePessoa());
                    pessoa.setCpf(pessoaAtualizado.getCpf());
                   return pessoaRepository.save(pessoaAtualizado);
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));


    }


}
