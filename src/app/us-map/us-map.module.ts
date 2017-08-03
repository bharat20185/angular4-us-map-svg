import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsMapService } from './us-map.service';
import { UsMapComponent } from './us-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsMapComponent],
  providers: [UsMapService],
  exports: [UsMapComponent]
})
export class UsMapModule { }
