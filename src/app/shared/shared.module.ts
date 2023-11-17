import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaInfoComponent } from './components/arena-info/arena-info.component';
import { PersonajeInfoComponent } from './components/personaje-info/personaje-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArenaDetailComponent } from './components/arena-detail/arena-detail.component';
import { PersonajeDetailComponent } from './components/personaje-detail/personaje-detail.component';
import { PersonajeSelectableComponent } from './components/personaje-selectable/personaje-selectable.component';
import { PersonajeItemComponent } from './components/personaje-item/personaje-item.component';



@NgModule({
  declarations: [
    //Components
    PersonajeInfoComponent,
    PersonajeDetailComponent,
    PersonajeSelectableComponent,
    PersonajeItemComponent,
    ArenaInfoComponent,
    ArenaDetailComponent

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
    PersonajeDetailComponent,
    PersonajeSelectableComponent,
    PersonajeItemComponent,
    ArenaInfoComponent,
    ArenaDetailComponent
  ]
})
export class SharedModule { }