import { Items } from "../Items/Items"
import { Cartt } from "./CartStyle"

export function Cart() {
    return (
      <Cartt>
        <p>Cart</p>
        <Items/>
      </Cartt>
    )
  }