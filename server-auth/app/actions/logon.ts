import {Post} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';

export class LogonAction extends Action{

    @Post('/logon')
    public Post(){
        let userName = this.req.body.userName;
        let password = this.req.body.password;

        this.sendAnswer({token : "Teste"});
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}