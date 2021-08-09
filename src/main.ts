import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividalCustomer } from './classes/customer';

/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(new NoDiscount());
const messaging = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividalCustomer(
  'Fulano',
  'da silva',
  '154.962.659-65',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'Fulano Enterprise inc.',
  '15496265965',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 54.6));
shoppingCart.addItem(new Product('Caderno', 12.5));
shoppingCart.addItem(new Product('Lapis', 1.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
