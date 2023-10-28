import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonajeInfoComponent } from './components/personaje-info/personaje-info.component';
import { PersonajeDetailComponent } from './components/personaje-detail/personaje-detail.component';



@NgModule({
  declarations: [
    //Components
    PersonajeInfoComponent,
    PersonajeDetailComponent,

    ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule, 
    IonicModule, 
    FormsModule,
    //Components
    PersonajeInfoComponent,
    PersonajeDetailComponent
  ]
})
export class SharedModule { }