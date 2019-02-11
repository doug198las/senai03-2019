import {Answers, prompt} from 'inquirer';

export class Packages {

    public askName(){
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
                        console.log(`\nOlá ${answers.name}!\n`);
                    }
                );
    }

    public selectCar(){
        console.log('Passo 1');
        prompt(
                [
                    {
                        name: 'name',
                        type: 'input',
                        message: 'Qual o seu nome?',
                    }, 
                    {
                        name: 'car',
                        type: 'list',
                        message: 'Qual a sua marca de carro favorita?',
                        choices: ['BMW', 'Audi', 'Toyota', 'Mercedes-Benz', 'Honda'],
                        default: 3,
                    }
                ]
            ).then(
                    (answers : any) => {
                        console.log('Passo 2');
                        console.log(`\nOlá ${answers.name}. Você gosta da marca ${answers.car}. Obrigado! \n`);
                    }
                );
        console.log('Passo 3');
    }
}