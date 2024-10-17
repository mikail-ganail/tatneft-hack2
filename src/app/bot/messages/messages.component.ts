import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
    @Input() message!: {
        links?: [string[], boolean];
        text: string;
        date: Date;
        author: string;
    };

    isOpenLink() {
        if (this.message.links) {
            this.message.links[1] = !this.message.links[1]
        }
    }
}
