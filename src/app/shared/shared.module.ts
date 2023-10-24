import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeInfoComponent } from './components/personaje-info/personaje-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    //Components
    PersonajeInfoComponent,

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
  ]
})
export class SharedModule { }