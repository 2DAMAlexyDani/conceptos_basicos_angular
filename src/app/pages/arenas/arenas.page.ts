import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController, ToastOptions } from '@ionic/angular';
import { Arena } from 'src/app/core/Interfaces/arenas';
import { ArenasService } from 'src/app/core/services/arenas.service';
import { ArenaDetailComponent } from 'src/app/shared/components/arena-detail/arena-detail.component';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.page.html',
  styleUrls: ['./arenas.page.scss'],
})
export class ArenasPage implements OnInit {

  constructor(
    private router:Router,
    public arenasService:ArenasService,
    private toast:ToastController,
    private modal:ModalController
  ) { }

  ngOnInit(): void{
    this.arenasService.getAllArenas().subscribe();
  }

  public async onCardClicked(arena:Arena){
    var onDismiss = (info:any)=>{
      console.log(info);
      switch(info.role){
        case 'newarena':{
          this.arenasService.updateArena(info.data).subscribe()
        }
        break;
        case 'delete':{
          this.arenasService.delArena(info.data).subscribe()
        }
        break;
        default:{
          console.error("No debería entrar");
        }
      }
    }
    this.presentForm(arena, onDismiss);
  }

  async presentForm(data:Arena|null, onDismiss:(result:any)=>void){
    const modal = await this.modal.create({
      component:ArenaDetailComponent,
      componentProps:{
        mode:data?'Edit':'New',
        arena:data
      },
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        onDismiss(result);
      }
    });
  }

  onNewArena(){
    var onDismiss = (info:any)=>{
      console.log(info);
      switch(info.role){
        case 'newdata':{
          this.arenasService.addArena(info.data).subscribe()
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
