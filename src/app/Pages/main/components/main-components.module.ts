import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    CarouselComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MainComponentsModule { }
