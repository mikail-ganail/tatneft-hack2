import {
    Component,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
} from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
    @Input() message!: { text: string; date: Date; author: string };
}
