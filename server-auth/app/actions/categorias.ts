import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class CategoriasAction extends Action {

    @Get('/categorias')
    public getCategorias(){
        let categorias : any = [];

        categorias.push(
                    {
                        id : 1,
                        name : "Bebidas"
                    },
                    {
                        id : 2,
                        name : "Alimentos"
                    },
                    {
                        id : 3,
                        name : "Diversos"
                    }
                   );

        this.sendAnswer(categorias);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}