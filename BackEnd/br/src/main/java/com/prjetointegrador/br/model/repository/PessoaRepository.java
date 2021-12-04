package com.prjetointegrador.br.model.repository;

import com.prjetointegrador.br.model.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

    Optional<List<Pessoa>> findByNomePessoaOrCpf(String nome, String cpf);

}
