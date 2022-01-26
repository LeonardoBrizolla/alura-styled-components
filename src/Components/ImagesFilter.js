import React from "react";

import restauranteIMG from '../assets/images/alimentacao.svg';
import utilidadesIMG from '../assets/images/utilidades.svg';
import saudeIMG from '../assets/images/saude.svg';
import transporteIMG from '../assets/images/transporte.svg';
import outrosIMG from '../assets/images/outros.svg';

import { Icon } from './UI'

export default (type) => {
  const Images = {
    Restaurante: <Icon src={restauranteIMG} alt="Restaurante" />,
    Utilidades: <Icon src={utilidadesIMG} alt="Utilidades" />,
    Saude: <Icon src={saudeIMG} alt="Saude" />,
    Transporte: <Icon src={transporteIMG} alt="Transporte" />,
    default: <Icon src={outrosIMG} alt="Outros"/>
   };

   return Images[type] || Images.default;
}
