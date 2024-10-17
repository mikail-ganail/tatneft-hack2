import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotService } from 'src/app/service/bot.service';
import { IBotAnswer } from '../bot.model';

@Component({
    selector: 'app-bot-box',
    templateUrl: './bot-box.component.html',
    styleUrls: ['./bot-box.component.scss'],
})
export class BotBoxComponent {
    @Input() isBot!: boolean;
    @Output() isBotChange = new EventEmitter();
    isAdmin: boolean = false;
    count: number = 0;

    constructor(private botService: BotService) {}

    closeBot() {
        this.isBotChange.emit();
    }

    openAdmin() {
        this.isAdmin = !this.isAdmin
    }

    messages: {
        text: string;
        date: Date;
        author: string;
        links?: [string[], boolean];
    }[] = [];
    newMessage: string = '';

    sendMessage() {
        if (this.newMessage.trim()) {
            this.messages.push({
                text: this.newMessage,
                date: new Date(),
                author: 'user',
            });
            let text: string;
            let listLink: string[];
            this.botService
                .getAnswer(this.newMessage)
                .subscribe((response: IBotAnswer) => {
                    text = response.answer_question;
                    listLink = response.url_list;
                    this.messages.push({
                        text,
                        date: new Date(),
                        author: 'bot',
                        links: [listLink, false],
                    });
                });
            this.newMessage = '';
        }
    }

    onEnterKeyPress(event: any): void {
        console.log(event.key);
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    counterAuthor(): string {
        this.count++;
        return this.count % 2 ? 'user' : 'bot';
    }
}
