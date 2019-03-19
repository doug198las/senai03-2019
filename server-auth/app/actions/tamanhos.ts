import {Post, Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class TamanhosAction extends Action {

    @Get('/tamanhos')
    public getTamanhos(){
        let tamanhos = [
            {
                id : 1,
                name : "Pequeno"
            },
            {
                id : 2,
                name : "Médio"
            },
            {
                id : 3,
                name : "Grande"
            }
        ]

        this.sendAnswer(tamanhos);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}