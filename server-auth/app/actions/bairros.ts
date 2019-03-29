import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import { KernelUtils } from '../kernel/kernel-utils';

export class BairrosAction extends Action {

    @Get('/bairros/:idcidade')
    public getBairros(){
        let bairros : any = [];

        let idcidade = this.req.params.idcidade;
        
        new KernelUtils().createExceptionApiError('1002', 'Cidade não informada', (idcidade == null || idcidade == undefined));

        if (idcidade == 1){
            bairros.push(
                    {
                        name : "Centro",
                        value : 1.50
                    },
                    {
                        name : "Agua Verde",
                        value : 2.35
                    },
                    {
                        name : "Chico de Paula",
                        value : 3.80
                    },
                    {
                        name : "Figueira",
                        value : 4
                    }
                   );
        }

        if (idcidade == 2){
            bairros.push(
                    {
                        name : "Seminário",
                        value : 6.8
                    },
                    {
                        name : "Ano bom",
                        value : 6.75
                    },
                    {
                        name : "Centro",
                        value : 6
                    }
                   )
                };

                
        if (idcidade == 3){
            bairros.push(
                    {
                        name : "Amizade",
                        value : 12
                    },
                    {
                        name : "Centro",
                        value : 8
                    },
                    {
                        name : "Avai",
                        value : 7
                    },
                    {
                        name : "Corticeira",
                        value : 7
                    }
                   )
        };
        

        this.sendAnswer(bairros);
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}