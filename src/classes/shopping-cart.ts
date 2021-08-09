import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  // Composição e Injeção de dependencia
  constructor(private readonly discount: Discount) {}

  addItem(cartItem: CartItem): void {
    this._items.push(cartItem);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, { price }) => (total += price), 0)
      .toFixed(2);
  }

  totalWithDicount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');

    this._items.length === 0;
  }
}
