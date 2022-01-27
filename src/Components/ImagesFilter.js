import React from "react";

import restauranteIMG from '../assets/images/alimentacao.svg';
import utilidadesIMG from '../assets/images/utilidades.svg';
import saudeIMG from '../assets/images/saude.svg';
import transporteIMG from '../assets/images/transporte.svg';
import outrosIMG from '../assets/images/outros.svg';

import { Icon, IconTema } from './UI'

export default (type) => {
  const Images = {
    Restaurante: <IconTema src={restauranteIMG} alt="Restaurante" />,
    Utilidades: <IconTema src={utilidadesIMG} alt="Utilidades" />,
    Saude: <IconTema src={saudeIMG} alt="Saude" />,
    Transporte: <IconTema src={transporteIMG} alt="Transporte" />,
    default: <IconTema src={outrosIMG} alt="Outros"/>
   };

   return Images[type] || Images.default;
}
