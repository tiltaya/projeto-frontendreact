import React from "react";
import { Container } from "./styles";

const Header = () => {

  return (
    <Container>
      <input type="text" placeholder="Buscar" />
      <select>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <button>Adicionar ao carrinho</button>
    </Container>
  );
};

export default Header;