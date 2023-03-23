import { Filterss } from "./FiltersStyle"

export function Filters() {
    return (
      <Filterss>
        <h2>Filters</h2>
        <p>Valor mínimo:</p>
        <input type="text"/>
        <p>Valor máximo:</p>
        <input type="text"/>
        <p>Busca por nome:</p>
        <input type="text"/>
      </Filterss>
    )
  }