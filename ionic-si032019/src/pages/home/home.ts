import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Messages} from '../../providers/messages';
import {Toast} from '../../providers/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaAlunos = [];
  public exibirConteudo : boolean = true;

  constructor(public navCtrl: NavController, private messages : Messages, private toast: Toast) {

  }

 public showToast(){
  this.toast.show("Entrou no app", 10000);
 }

  public showMessage(){
    this.messages.loadingShow();
  }

  public limparAlunos(){
    this.listaAlunos = [];
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
    this.listaAlunos.push({nome : "Aluno E"});
  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
/*
    if (this.exibirConteudo === true){
      this.exibirConteudo = false;
    } else {
      this.exibirConteudo = true;
    }*/
  }

}
