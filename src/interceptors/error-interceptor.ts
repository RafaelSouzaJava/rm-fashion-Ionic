import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { StorageService } from 'src/services/storage.service';
import { AlertController } from '@ionic/angular';
import { FieldMessage } from 'src/models/fieldmessage';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(public storage: StorageService, public alertCtrl: AlertController){    
  }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
        return next.handle(req)
        .catch((error, caught) => {

          let errorObj = error;
          if (errorObj.error) {
            errorObj = errorObj.error;
          }
          if (!errorObj.status) {
            errorObj = JSON.parse(errorObj);
          }

          console.log("Error detectado pelo interceptor:");
          console.log(errorObj);

          switch(errorObj.status) {
            case 401:
              this.handle401();
            break;

            case 403:
              this.handle403();
              break;

            case 422:
            this.handle422(errorObj);
            break;


              default:
                this.handleDefaultError(errorObj);
          }


            return Observable.throw(errorObj);
        }) as any;

    }

    handle403(){
      this.storage.setLocalUser(null);
    }
    handle401(){
      let alert = this.alertCtrl.create({
        header: 'Erro 401: falha de autenticação',
        message: 'Email ou Senha incorretos',
        backdropDismiss: false,
        buttons: [
          {
            text: 'OK'
          }
        ]
      }).then(alert => alert.present());
      
    }

    handle422(errorObj) {
      let alert = this.alertCtrl.create({
        header: 'Error 422: Validação',
        message: this.listErrors(errorObj.errors),
        backdropDismiss: false,
        buttons: [
          {
            text: 'OK'
          }
        ]
      }).then(alert => alert.present());
    
    }

    handleDefaultError(errorObj){
      let alert = this.alertCtrl.create({
        header: 'Erro' + errorObj.status + ': ' + errorObj.error,
        message: errorObj.message,
        backdropDismiss: false,
        buttons: [
          {
            text: 'OK'
          }
        ]
      }).then(alert => alert.present());
    }

    private listErrors(messages : FieldMessage[]) : string {
      let s : string = '';
      for (var i=0; i<messages.length; i++) {
        s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
      }
      return s;
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};