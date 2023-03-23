import { ProductCartt } from "./productCardStyle"
import { FilterProdCart } from "./productCardStyle"
import { Card } from "./productCardStyle"
import { CartProdCart } from "./productCardStyle"

export function ProductCart() {
    return (
      <>
      <FilterProdCart>
        <h2>Filters</h2>
        <p>Valor mínimo:</p>
        <input type="text"/>
        <p>Valor máximo:</p>
        <input type="text"/>
        <p>Busca por nome:</p>
        <input type="text"/>
      </FilterProdCart>
      <ProductCartt>
        <p>Quantidade de produtos:</p>
        <p>Ordenar:</p>
        <select>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <Card>
        <p>ProductCard</p>
        <p>Nome do produto</p>
        <p>Valor</p>
        <button>Adicionar ao carrinho</button>
        </Card>
        <CartProdCart>
        <h2>Cart</h2>
        <p>x0</p>
        <p>Nome do produto</p>
        <button>Remover</button>
        <p>Valor total: 0</p>
        </CartProdCart>
      </ProductCartt>
      </>
    )
  }