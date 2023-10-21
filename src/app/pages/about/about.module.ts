import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { PrimeraLetraMayusculaPipe } from 'src/app/shared/Pipes/primera-letra-mayuscula.pipe';
import { AboutinfoComponent } from 'src/app/shared/components/aboutinfo/aboutinfo.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage,PrimeraLetraMayusculaPipe,AboutinfoComponent]
})
export class AboutPageModule {}
