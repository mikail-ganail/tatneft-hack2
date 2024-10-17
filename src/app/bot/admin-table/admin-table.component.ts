import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent {
  listSorau: [string, number][] = [
    ['Год основания Татнефти', 15],
    ['Миссия Татнефти', 10],
    ['Химический состав', 7]
  ]
}
