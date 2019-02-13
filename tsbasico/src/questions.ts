import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

export class Questions {

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
                        console.log(`\nOlá ${answers.name}. Você gosta da marca ${answers.car}. Obrigado! \n`);
                    }
                );
    }

    public getSabores(){
        new VpHttp('http://5c61683a1325a20014976426.mockapi.io/sabor').get().subscribe(
            (data : any) => {
                new VpHttp('http://5c61683a1325a20014976426.mockapi.io/sabor').post({}).subscribe(
                    (data : any) => {
                        console.log('Conseguiu dar o post no mockapi')
                    },
                    (error : any) => {
                        console.log('Não conseguiu dar o post no mockapi');
                    }
                )
            },
            (error : any) => {
                console.log(error);
            }
        );
    }
}