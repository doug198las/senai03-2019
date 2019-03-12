import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaAlunos = [];
  public exibirLista : boolean = true;

  constructor(public navCtrl: NavController) {

  }

  public esconderAlunos(){
    this.exibirLista = !this.exibirLista;
  }

  public limparLista(){
    this.listaAlunos = [];
  }

  public addAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
    this.listaAlunos.push({nome : "Aluno E"});
  }

}
