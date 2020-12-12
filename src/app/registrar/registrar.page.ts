import { Component } from '@angular/core';
import { MenuController, AlertController, NavController } from '@ionic/angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { format } from 'url';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';
import { ClienteService } from 'src/services/domain/cliente.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {

  form: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(public menu: MenuController,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {

      this.form = this.formBuilder.group({
        nome: ['' , [Validators.required, Validators.minLength(10), Validators.maxLength(120)] ],
        email:['' ,[Validators.required, Validators.email] ],
        tipo: ['' , [Validators.required]],
        cpfOuCnpj: ['' , [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        rg: ['' , []],
        dataNascimento:['', []],
        senha: ['' , [Validators.required]],
        logradouro: ['' , [Validators.required]],
        numero: ['' , [Validators.required]],
        complemento: ['' , []],
        bairro: ['', [Validators.required]],
        cep: ['' , [Validators.required]],
        telefone1: ['', [Validators.required]],
        telefone2: ['' , []],
        telefone3: ['' , []],
        estadoId: ['', [Validators.required]],
        cidadeId: ['', [Validators.required]]
      });
     
     }

  ngOnInit() {
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response;
      this.form.controls.estadoId.setValue(this.estados[0].id);
      this.updateCidade();
    },
    error => {});  
    
    console.log(this.form.value);
  }

  updateCidade(){
    let estado_id = this.form.value.estadoId;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response;
      this.form.controls.cidadeId.setValue(null);
    },
    error => {});
  }

  ionViewWillEnter() {
    this.menu.swipeGesture(false);
    }

    signupUser(){
      console.log(this.form.value);
      this.clienteService.insert(this.form.value)
      .subscribe(response => {
        this.showInsertOk();
        this.navCtrl.navigateRoot('/login');
      },
      error => {});
    }

    showInsertOk(){
      let alert = this.alertCtrl.create({
        header: 'Sucesso!',
        message: 'Cadastro efetuado com sucesso',
        backdropDismiss: false,
        buttons:[
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.pop();
            }
          }
        ]
      }).then(alert => alert.present());
      
    }

}
