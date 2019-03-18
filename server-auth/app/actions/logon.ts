import {Post} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import {VPUtils} from '../utils/vputils';
import {KernelUtils} from '../kernel/kernel-utils';

export class LogonAction extends Action{

    @Post('/logon')
    public Post(){
        let userName = this.req.body.userName;
        let password = this.req.body.password;

        if (userName === "admin@senai" && password === "1234"){
            this.sendAnswer(
                            {
                                token : new VPUtils().generateGUID().toUpperCase(),
                                userName : userName,
                                password : password
                            }
                           );
            return;
        }
        new KernelUtils().createExceptionApiError('1001', 'Usuário e senha inválidos');
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}