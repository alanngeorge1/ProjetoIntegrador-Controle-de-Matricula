package com.prjetointegrador.br.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String nomeDisciplina;

    @Column
    private Integer cargaHoraria;

    @Column
    private Integer limiteAlunos;

    @ManyToOne
    @JoinColumn(name = "id_pessoa")
    private Pessoa  professor;

}
