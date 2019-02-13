import {prompt} from 'inquirer';

export class Perguntas {
    imputUsuario : string = '';

    public facaUmaPergunta(){
        console.log('Passo 1');
        prompt(
            [
                {
                    name: 'name',
                    type: 'input',
                    message: 'Qual o seu nome',
                }
            ]
        ).then(
                (answers : any) => {
                    console.log('Passo 2');
                    console.log(`\nOlá ${answers.name}!\n`);
                    console.log('\nOlá' + answers.name + '!');
                }
            );
        console.log('Passo 3');
    }

    public getSabores(){
        
    }
}