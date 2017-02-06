import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found.routes';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundModule { }
