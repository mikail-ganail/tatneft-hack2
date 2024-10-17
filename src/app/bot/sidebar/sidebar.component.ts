import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    chats: {
        name: string;
        lastReq: string;
        date: string;
    }[] = [
        {
            name: 'myy4Chat',
            lastReq: 'Что в составе нефти соде..',
            date: '20 августа 19:33',
        },
        {
            name: 'Где нефть',
            lastReq: 'Куда исчезла вся нефть в..',
            date: '15 августа 14:28',
        },
        {
            name: 'Структура татнефть',
            lastReq: 'Кто самый главный в ком..',
            date: '15 августа 14:05',
        },
        {
            name: 'Добыча нефти',
            lastReq: 'Сколько нефти в Татарста..',
            date: '8 августа 13:12',
        },
    ];

    @Input() isAdmin!: boolean;
    @Output() isAdminChange = new EventEmitter();

    changeAdmin() {
        this.isAdminChange.emit()
    }
}
