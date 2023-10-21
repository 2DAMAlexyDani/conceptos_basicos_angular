import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

import { AboutInfoComponent } from 'src/app/shared/components/about-info/about-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    AboutPageModule,
  ],
  declarations: [AboutPage, AboutInfoComponent]
})
export class AboutPageModule {}
