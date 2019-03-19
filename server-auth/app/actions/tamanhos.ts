import {Post, Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class TamanhosAction extends Action {

    @Get('/tamanhos')
    public getTamanhos(){
        let tamanhos = [
            {
                id : 1,
                name : "Pequeno",
                quantidade_sabores : 1
            },
            {
                id : 2,
                name : "Médio",
                quantidade_sabores : 2
            },
            {
                id : 3,
                name : "Grande",
                quantidade_sabores : 3
            }
        ]

        this.sendAnswer(tamanhos);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}