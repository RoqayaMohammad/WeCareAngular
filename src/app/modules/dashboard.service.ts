import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(): { name: string, data: number[] }[] {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  // bigChart() {
  //   return [{
  //     name: 'Asia',
  //     data: [502, 635, 809, 947, 1402, 3634, 5268]
  //   }, {
  //     name: 'Africa',
  //     data: [106, 107, 111, 133, 221, 767, 1766]
  //   }, {
  //     name: 'Europe',
  //     data: [163, 203, 276, 408, 547, 729, 628]
  //   }, {
  //     name: 'America',
  //     data: [18, 31, 54, 156, 339, 818, 1201]
  //   }, {
  //     name: 'Oceania',
  //     data: [2, 2, 2, 6, 13, 30, 46]
  //   }];
  // }

  cards(): { title: string, count: number }[] {
    return [
      { title: 'New Users', count: 71 },
      { title: 'New Orders', count: 78 },
      { title: 'Bounce Rate', count: 39 },
      { title: 'Revenue', count: 66 }
    ];
  }

  pieChart(): { name: string, value: number, sliced?: boolean, selected?: boolean }[] {
    return [
      { name: 'Chrome', value: 61.41, sliced: true, selected: true },
      { name: 'Internet Explorer', value: 11.84 },
      { name: 'Firefox', value: 10.85 },
      { name: 'Edge', value: 4.67 },
      { name: 'Safari', value: 4.18 },
      { name: 'Sogou Explorer', value: 1.64 },
      { name: 'Opera', value: 1.6 },
      { name: 'QQ', value: 1.2 },
      { name: 'Other', value: 2.61 }
    ];
  }

  // cards() {
  //   return [71, 78, 39, 66];
  // }

  // pieChart() {
  //   return [{
  //     name: 'Chrome',
  //     y: 61.41,
  //     sliced: true,
  //     selected: true
  //   }, {
  //     name: 'Internet Explorer',
  //     y: 11.84
  //   }, {
  //     name: 'Firefox',
  //     y: 10.85
  //   }, {
  //     name: 'Edge',
  //     y: 4.67
  //   }, {
  //     name: 'Safari',
  //     y: 4.18
  //   }, {
  //     name: 'Sogou Explorer',
  //     y: 1.64
  //   }, {
  //     name: 'Opera',
  //     y: 1.6
  //   }, {
  //     name: 'QQ',
  //     y: 1.2
  //   }, {
  //     name: 'Other',
  //     y: 2.61
  //   }];
  // }
}
