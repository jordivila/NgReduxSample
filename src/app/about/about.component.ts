import { LoadingService } from './../core/components/loading/loading.service';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jvn-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
    this.loadingService.show('From "about" with love: Redux');

    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }

}
