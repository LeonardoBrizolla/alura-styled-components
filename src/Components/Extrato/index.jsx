import React from "react";
import { Box, Button } from '../UI'

import { extratoLista } from '../../info';
import { Items } from "../Items";

export const Extrato = () => {

  return (
    <Box>
      {extratoLista.updates.map((extrato) => {
          return (
            <Items key={extrato.id} {...extrato}/>
          )
        })
      }
      <Button>Ver Mais</Button>
    </Box>
  )
}
