import {Post, Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class SaboresAction extends Action {

    @Get('/sabores')
    public Get(){
        this.sendAnswer( [
            {
                sabor : "Calabresa"
            },
            {
                sabor : "Quatro queijos"
            },
            {
                sabor : "Bacon"
            },
            {
                sabor : "Chocolate"
            }
        ]);
    }    

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}