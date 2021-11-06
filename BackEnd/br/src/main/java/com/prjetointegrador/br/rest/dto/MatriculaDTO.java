package com.prjetointegrador.br.rest.dto;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MatriculaDTO {
  //  private Integer idDisciplinaDTO;
    private Integer idPessoaAlunoDTO;
    private String  dataMatriculaDTO;
    private String  valorPagoDTO;
    private String  periodoDTO;
}
