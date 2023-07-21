import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from'@angular/material/divider';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatIconModule} from'@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import {MatMenuModule} from'@angular/material/menu';
import {MatListModule} from'@angular/material/list';


//import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
   // AreaComponent,
    //CardComponent,
    //PieComponent
  ]
})
export class SharedModule { }
