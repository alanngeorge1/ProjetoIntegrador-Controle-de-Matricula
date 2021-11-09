package com.prjetointegrador.br.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DisciplinaDTO {
    private Integer idPessoaProfessor;
    private String   nomeDisciplinaDTO;
    private Integer   cargaHorariaDTO;
    private Integer   limiteAlunosDTO;
}
