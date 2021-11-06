package com.prjetointegrador.br.model.repository;

import com.prjetointegrador.br.model.entity.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.criteria.CriteriaBuilder;

public interface MatriculaRepository extends JpaRepository <Matricula, Integer > {
}
