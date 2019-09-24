import { Mamifero } from "./mamifero";

export class Cachoro extends Mamifero{
    private nome : string;

    constructor(){
        super();
        this.nome = '';
    }

    fazerBarulho() : void{
        console.log('au au au');        
    }

    public andar() : void {
        super.andar();
        this.setTamanho('Grande');
        console.log('Cachoro andando');
    }

    public getNome() : string{
        return this.nome;
    }

    public setNome(nome : string){
        this.nome = nome;
    }
}