import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeInfoComponent } from './components/personaje-info/personaje-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesPipe } from './pipes.pipe';
import { PrimeraLetraMayusculaPipe } from './Pipes/primera-letra-mayuscula.pipe';



@NgModule({
  declarations: [
    //Components
    PersonajeInfoComponent,
    PipesPipe,
    PrimeraLetraMayusculaPipe,
    ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
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