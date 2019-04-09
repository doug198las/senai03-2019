import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import { KernelUtils } from '../kernel/kernel-utils';

export class ProdutosAction extends Action {
    @Get('/produtos/:idcategoria')
    public getProdutos(){
        let produtos : any = [];
        let idcategoria = this.req.params.idcategoria;

        new KernelUtils().createExceptionApiError('1002', 'Cidade não informada', (idcategoria == null || idcategoria == undefined));

        if (idcategoria == 1){
            produtos.push(
                {
                    id : 1,
                    name : "Cerveja",
                    quantity: 10
                },
                {
                    id : 2,
                    name : "Vinho",
                    quantity: 15
                },
                {
                    id : 3,
                    name : "Cachaça",
                    quantity: 7
                }
               );
        }

        if (idcategoria == 2){
            produtos.push(
                {
                    id : 4,
                    name : "Hamburguer",
                    quantity: 8
                },
                {
                    id : 5,
                    name : "Escondidinho",
                    quantity: 2
                },
                {
                    id : 6,
                    name : "Filé de salmão",
                    quantity: 3
                }
               );
        }

        if (idcategoria == 3){
            produtos.push(
                {
                    id : 7,
                    name : "Balas",
                    quantity: 8
                },
                {
                    id : 8,
                    name : "Picolé",
                    quantity: 2
                },
                {
                    id : 9,
                    name : "Guloseimas",
                    quantity: 3
                }
               );
        }


        this.sendAnswer(produtos);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}