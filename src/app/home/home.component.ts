import { LoadingService } from './../core/components/loading/loading.service';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jvn-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
    this.loadingService.show('From home with love: Redux');

    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }

}
