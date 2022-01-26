import React from "react";
import { Box, Button } from '../UI'

import { extratoLista } from '../../info';

export const Extrato = () => {

  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => {
          return (
            <div key={id}>
              <div>{type}</div>
              <div>{from}</div>
            </div>
          )
        })
      }
      <Button>Ver Mais</Button>
    </Box>
  )
}