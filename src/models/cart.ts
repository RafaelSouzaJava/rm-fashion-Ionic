import { CartItemFeminino } from './cart-item.feminino';
import { CartItemMasculino } from './cart-item.masculino';
import { CartItemSexShop } from './cart-item.sexshop';
import { CartItemVariado } from './cart-item.variado';

export interface Cart {
    itemsFem: CartItemFeminino[],
    itemsMasc: CartItemMasculino[],
    itemsSex: CartItemSexShop[],
    itemVar: CartItemVariado[]
}