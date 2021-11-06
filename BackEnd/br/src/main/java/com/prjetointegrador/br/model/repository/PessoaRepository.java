package com.prjetointegrador.br.model.repository;

import com.prjetointegrador.br.model.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
}
