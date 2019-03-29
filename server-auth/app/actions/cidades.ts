import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class CidadesAction extends Action {

    @Get('/cidades')
    public getCidades(){
        let cidades : any = [];

        cidades.push(
                    {
                        id : 1,
                        name : "Jaraguá do Sul"
                    },
                    {
                        id : 2,
                        name : "Corupá"
                    },
                    {
                        id : 3,
                        name : "Guaramirim"
                    }
                   );
        

        this.sendAnswer(cidades);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}