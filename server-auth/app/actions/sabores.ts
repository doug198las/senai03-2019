import {Post, Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import { KernelUtils } from '../kernel/kernel-utils';

export class SaboresAction extends Action {

    @Get('/sabores/:tamanho')
    public Get(){
        let tamanho = this.req.params.tamanho;

        new KernelUtils().createExceptionApiError('1002', 'Tamanho da pizza não informado', (tamanho == null || tamanho == undefined));
        new KernelUtils().createExceptionApiError('1003', 'Tamanho da pizza inválido', (tamanho < 1 || tamanho > 3));

        let pizzas = [];
        if (tamanho == 1){
            pizzas.push(this.createPizzaObject('Calabresa', 12.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 15.00));
            pizzas.push(this.createPizzaObject('Bacon', 13.00));
            pizzas.push(this.createPizzaObject('Chocolate', 14.00));
            pizzas.push(this.createPizzaObject('Brocolis', 16.00));
        }

        if (tamanho == 2){
            pizzas.push(this.createPizzaObject('Calabresa', 18.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 21.00));
            pizzas.push(this.createPizzaObject('Bacon', 19.00));
            pizzas.push(this.createPizzaObject('Chocolate', 20.00));
            pizzas.push(this.createPizzaObject('Brocolis', 22.00));
        }
        
        if (tamanho == 3){
            pizzas.push(this.createPizzaObject('Calabresa', 25.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 28.00));
            pizzas.push(this.createPizzaObject('Bacon', 26.00));
            pizzas.push(this.createPizzaObject('Chocolate', 27.00));
            pizzas.push(this.createPizzaObject('Brocolis', 29.00));
        }
        this.sendAnswer(pizzas);
    }

    private createPizzaObject(name : string, price : number){
        return {
            sabor : name,
            preco : price
        };
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}