import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import { CoreModule } from '../core/core.module';
// import { NameListService } from '../core/services/name-list/name-list.service';

@NgModule({
  imports: [CommonModule, FormsModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
