import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainComponentsModule } from './components/main-components.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainComponentsModule
  ]
})
export class MainModule { }
