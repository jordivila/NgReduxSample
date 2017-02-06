import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RouteTitleComponent } from './routeTitle/routeTitle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        ToolbarComponent,
        NavbarComponent,
        RouteTitleComponent,
        FooterComponent
    ],
    exports: [
        ToolbarComponent,
        NavbarComponent,
        RouteTitleComponent,
        FooterComponent
    ],
})
export class LayoutModule { }
