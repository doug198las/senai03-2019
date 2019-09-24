import { Mamifero } from "./mamifero";

export class Gato extends Mamifero {

    public fazerBarulho() : void {
        console.log("Miau");
    }
}