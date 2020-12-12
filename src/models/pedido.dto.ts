import { RefDTO } from './ref.dto';
import { PagamentoDTO } from './pagamento.dto';
import { ItemPedidoFemininoDTO } from './item-pedido-feminino.dto';
import { ItemPedidoVariadoDTO } from './item-pedido-variado.dto';
import { ItemPedidoSexShopDTO } from './item-pedido-sexshop.dto';
import { ItemPedidoMasculinoDTO } from './item-pedido-masculino.dto';



export interface PedidoDTO{
    cliente : RefDTO;
    enderecoDeEntrega : RefDTO;
    pagamento : PagamentoDTO;
    itemsFem : ItemPedidoFemininoDTO[];
    itemsVar : ItemPedidoVariadoDTO[];
    itemsSex : ItemPedidoSexShopDTO[];
    itemsMasc : ItemPedidoMasculinoDTO[];
   
}