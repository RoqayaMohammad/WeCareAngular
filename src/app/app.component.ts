import { Component } from '@angular/core';
import{ View} from'@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  //template:'<ejs-schedule height="850" width="1250" [currentView]="setView" [selectedDate]="setDate" ></ejs-schedule>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeCare';
  // public setView: View='Month';
  // public setDate: Date = new Date(2023,1,4);
}
