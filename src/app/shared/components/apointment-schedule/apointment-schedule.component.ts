import { Component } from '@angular/core';
import{ View, EventSettingsModel} from'@syncfusion/ej2-angular-schedule';
import{DataManager,WebApiAdaptor} from'@syncfusion/ej2-data';

@Component({
  selector: 'app-apointment-schedule',
  templateUrl: './apointment-schedule.component.html',
  styleUrls: ['./apointment-schedule.component.scss']
})
export class ApointmentScheduleComponent {

  public setView: View='Month';
  public setDate: Date = new Date(2023,1,4);

  private EventData: DataManager=new DataManager(
    {
      url : '',
      adaptor: new WebApiAdaptor,
      crossDomain: true
    }
  );
  public eventObject: EventSettingsModel={
    dataSource:this.EventData
  }

//   public eventObject: EventSettingsModel={
//     dataSource:[{
//       EventTitle: "Test",
//       EventStart: new Date(2023,0,1,4,0),
//       EventEnd: new Date(2023,0,1,5,0),
//       isBlock:true,
//       isAllDay:true,

//     }],
//     fields: {
//       subject: { name:'EventTitle', default:'DEFAULT EVENT', title:'Event Title'},
//       startTime: {name:'EventStart'},
//       endTime :{name:'EventEnd'}

//   }
// }

}
