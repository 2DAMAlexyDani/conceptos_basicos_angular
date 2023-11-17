import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArenasPageRoutingModule } from './arenas-routing.module';
import { ArenasPage } from './arenas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule, 
    ArenasPageRoutingModule,
    SharedModule],
  declarations: [ArenasPage],
})
export class ArenasPageModule {}
