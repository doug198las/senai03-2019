import { Injectable } from '@angular/core';
import { LoadingController, Loading} from 'ionic-angular';

@Injectable()
export class Messages{

    private loading : Loading = null;

    constructor(private loadingController : LoadingController){

    }

    private presentLoading(message : string){
        let options = {
            content: message,
            duration: 20000
          }
      
          this.loading = this.loadingController.create(options);
      
          this.loading.dismissAll();
          this.loading.present();
      
          return this.loading;
    }

    public loadingShow(message : string = "Processando"){
        this.presentLoading(message);
    }

    public loadingHide(){
        if (this.loading === null || this.loading === undefined){
            return;
        }

        this.loading.dismissAll();
    }
}