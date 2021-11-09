package com.prjetointegrador.br.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_disciplina")
    private Disciplina disciplina;

    @Column(name = "data_matricula")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataMatricula;

    @Column
    private BigDecimal valorPago;

    @ManyToOne
    @JoinColumn(name = "id_Pessoa")
    private Pessoa aluno;

    @Column
    private String periodo;


}
