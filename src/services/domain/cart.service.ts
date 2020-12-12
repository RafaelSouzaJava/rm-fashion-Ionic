import { Injectable } from "@angular/core";
import { StorageService } from '../storage.service';
import { Cart } from 'src/models/cart';
import { ProdutoFemininoDTO } from 'src/models/produto.feminino.dto';
import { ProdutoMasculinoDTO } from 'src/models/produto.masculino.dto';
import { ProdutoSexShopDTO } from 'src/models/produto.sexshop.dto';
import { ProdutoVariadoDTO } from 'src/models/produto.variado.dto';

@Injectable()
export class CartService {


    constructor(public storage: StorageService) {

    }
    createOrClearCart(): Cart {
        let cart: Cart = { itemsFem: [], itemsMasc: [], itemsSex: [], itemVar: [] }
        this.storage.setCart(cart);
        console.log("createOrClearCart" + cart);
        console.log("createOrClearCart" + this.storage);
        return cart;


    }

    getCart(): Cart {
        let cart: Cart = this.storage.getCart();

        if (cart == null) {
            cart = this.createOrClearCart();
        }
        console.log("get Cart" + cart)
        return cart;
    }

    addProdutoFem(produtoFem: ProdutoFemininoDTO): Cart {
        let cart = this.getCart();
        let positionfem = cart.itemsFem.findIndex(x => x.produto.id == produtoFem.id);
        if (positionfem == -1) {
            cart.itemsFem.push({ quantidade: 1, produto: produtoFem });
        }
        this.storage.setCart(cart);
        return cart;
    }


    addProdutoMasc(produtoMasc: ProdutoMasculinoDTO): Cart {
        let cart = this.getCart();
        let positionmasc = cart.itemsMasc.findIndex(x => x.produto.id == produtoMasc.id);
        if (positionmasc == -1) {
            cart.itemsMasc.push({ quantidade: 1, produto: produtoMasc });
        }
        this.storage.setCart(cart);
        return cart;

    }

    addProdutoSex(produtoSex: ProdutoSexShopDTO): Cart {
        let cart = this.getCart();
        let positionsex = cart.itemsSex.findIndex(x => x.produto.id == produtoSex.id);
        if (positionsex == -1) {
            cart.itemsSex.push({ quantidade: 1, produto: produtoSex });
        }
        this.storage.setCart(cart);
        return cart;
    }

    addProdutoVar(produtoVar: ProdutoVariadoDTO): Cart {
        let cart = this.getCart();
        let positionvar = cart.itemVar.findIndex(x => x.produto.id == produtoVar.id);
        if (positionvar == -1) {
            cart.itemVar.push({ quantidade: 1, produto: produtoVar });
        }
        this.storage.setCart(cart);
        return cart;
    }


    removeProdutoFem(produtoFem: ProdutoFemininoDTO): Cart {
        let cart = this.getCart();
        let positionfem = cart.itemsFem.findIndex(x => x.produto.id == produtoFem.id);
        if (positionfem != -1) {
            cart.itemsFem.splice(positionfem, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }

    removeProdutoMasc(produtoMasc: ProdutoMasculinoDTO): Cart {
        let cart = this.getCart();
        let positionmasc = cart.itemsMasc.findIndex(x => x.produto.id == produtoMasc.id);
        if (positionmasc != -1) {
            cart.itemsMasc.splice(positionmasc, 1);
        }
        this.storage.setCart(cart);
        return cart;

    }

    removeProdutoSex(produtoSex: ProdutoSexShopDTO): Cart {
        let cart = this.getCart();
        let positionsex = cart.itemsSex.findIndex(x => x.produto.id == produtoSex.id);
        if (positionsex != -1) {
            cart.itemsSex.splice(positionsex, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }

    removeProdutoVar(produtoVar: ProdutoVariadoDTO): Cart {
        let cart = this.getCart();
        let positionvar = cart.itemVar.findIndex(x => x.produto.id == produtoVar.id);
        if (positionvar != -1) {
            cart.itemVar.splice(positionvar, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }

    increaseQuantityFem(produtoFem: ProdutoFemininoDTO): Cart {
        let cart = this.getCart();
        let positionfem = cart.itemsFem.findIndex(x => x.produto.id == produtoFem.id);
        if (positionfem != -1) {
            cart.itemsFem[positionfem].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }

    increaseQuantityMac(produtoMasc: ProdutoMasculinoDTO): Cart {
        let cart = this.getCart();
        let positionmasc = cart.itemsMasc.findIndex(x => x.produto.id == produtoMasc.id);
        if (positionmasc != -1) {
            cart.itemsMasc[positionmasc].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;

    }

    increaseQuantitySex(produtoSex: ProdutoSexShopDTO): Cart {
        let cart = this.getCart();
        let positionsex = cart.itemsSex.findIndex(x => x.produto.id == produtoSex.id);
        if (positionsex != -1) {
            cart.itemsSex[positionsex].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }

    increaseQuantityVar(produtoVar: ProdutoVariadoDTO): Cart {
        let cart = this.getCart();
        let positionvar = cart.itemVar.findIndex(x => x.produto.id == produtoVar.id);
        if (positionvar != -1) {
            cart.itemVar[positionvar].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }

    decreaseQuantityFem(produtoFem: ProdutoFemininoDTO): Cart {
        let cart = this.getCart();
        let positionfem = cart.itemsFem.findIndex(x => x.produto.id == produtoFem.id);
        if (positionfem != -1) {
            cart.itemsFem[positionfem].quantidade--;
            if(cart.itemsFem[positionfem].quantidade < 1) {
                cart = this.removeProdutoFem(produtoFem);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }

    decreaseQuantityMac(produtoMasc: ProdutoMasculinoDTO): Cart {
        let cart = this.getCart();
        let positionmasc = cart.itemsMasc.findIndex(x => x.produto.id == produtoMasc.id);
        if (positionmasc != -1) {
            cart.itemsMasc[positionmasc].quantidade--;
            if(cart.itemsMasc[positionmasc].quantidade < 1) {
                cart = this.removeProdutoMasc(produtoMasc);
            }
        }
        this.storage.setCart(cart);
        return cart;

    }

    decreaseQuantitySex(produtoSex: ProdutoSexShopDTO): Cart {
        let cart = this.getCart();
        let positionsex = cart.itemsSex.findIndex(x => x.produto.id == produtoSex.id);
        if (positionsex != -1) {
            cart.itemsSex[positionsex].quantidade--;
            if(cart.itemsSex[positionsex].quantidade < 1) {
                cart = this.removeProdutoSex(produtoSex);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }

    decreaseQuantityVar(produtoVar: ProdutoVariadoDTO): Cart {
        let cart = this.getCart();
        let positionvar = cart.itemVar.findIndex(x => x.produto.id == produtoVar.id);
        if (positionvar != -1) {
            cart.itemVar[positionvar].quantidade--;
            if(cart.itemVar[positionvar].quantidade < 1) {
                cart = this.removeProdutoVar(produtoVar);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }

    total() : number {
        let cart = this.getCart();
        let sum = 0;
        for (var i=0; i<cart.itemsFem.length; i++){
            sum += cart.itemsFem[i].produto.preco * cart.itemsFem[i].quantidade;
        }
        for (var i=0; i<cart.itemsMasc.length; i++){
            sum += cart.itemsMasc[i].produto.preco * cart.itemsMasc[i].quantidade;
        }
        for (var i=0; i<cart.itemsSex.length; i++){
            sum += cart.itemsSex[i].produto.preco * cart.itemsSex[i].quantidade;
        }
        for (var i=0; i<cart.itemVar.length; i++){
            sum += cart.itemVar[i].produto.preco * cart.itemVar[i].quantidade;
        }

        return sum;

    }

}