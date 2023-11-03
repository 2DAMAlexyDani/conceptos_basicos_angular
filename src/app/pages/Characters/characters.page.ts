import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController, ToastOptions } from '@ionic/angular';
import { Personaje } from 'src/app/core/Interfaces/personaje';
import { PersonajesService } from 'src/app/core/services/personajes.service';
import { PersonajeDetailComponent } from 'src/app/shared/components/personaje-detail/personaje-detail.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class characters implements OnInit {

  constructor(
    private router:Router,
    public personajeService:PersonajesService,
    private toast:ToastController,
    private modal:ModalController
  ) { }

  ngOnInit(): void{
    this.personajeService.getAllPerson().subscribe();
  }


  public async onCardClicked(pers:Personaje){
    var onDismiss = (info:any)=>{
      console.log(info);
      switch(info.role){
        case 'newdata':{
          this.personajeService.updatePerson(info.data).subscribe()
        }
        break;
        case 'delete':{
          this.personajeService.delPerson(info.data).subscribe()
        }
        break;
        default:{
          console.error("No debería entrar");
        }
      }
    }
    this.presentForm(pers, onDismiss);
  }
  
  async presentForm(data:Personaje|null, onDismiss:(result:any)=>void){
    const modal = await this.modal.create({
      component:PersonajeDetailComponent,
      componentProps:{
        mode:data?'Edit':'New',
        pers:data
      },
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        onDismiss(result);
      }
    });
  }

  onNewCharacter(){
    var onDismiss = (info:any)=>{
      console.log(info);
      switch(info.role){
        case 'newdata':{
          this.personajeService.addPerson(info.data).subscribe()
        }
        break;
        default:{
          console.error("No debería entrar");
        }
      }
    }
    this.presentForm(null, onDismiss);
  }
}