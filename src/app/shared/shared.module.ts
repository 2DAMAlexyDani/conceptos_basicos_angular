import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaInfoComponent } from './components/arena-info/arena-info.component';
import { PersonajeInfoComponent } from './components/personaje-info/personaje-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArenaDetailComponent } from './components/arena-detail/arena-detail.component';
import { PersonajeDetailComponent } from './components/personaje-detail/personaje-detail.component';
import { ArenaSelectableComponent } from './components/arena-selectable/arena-selectable.component';
import { PersonajeSelectableComponent } from './components/personaje-selectable/personaje-selectable.component';
import { ArenaItemComponent } from './components/arena-item/arena-item.component';
import { PersonajeItemComponent } from './components/personaje-item/personaje-item.component';



@NgModule({
  declarations: [
    //Components
    PersonajeInfoComponent,
    PersonajeDetailComponent,
    PersonajeSelectableComponent,
    PersonajeItemComponent,
    ArenaInfoComponent,
    ArenaDetailComponent,
    ArenaSelectableComponent,
    ArenaItemComponent
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
    ArenaDetailComponent,
    ArenaSelectableComponent,
    ArenaItemComponent
  ]
})
export class SharedModule { }