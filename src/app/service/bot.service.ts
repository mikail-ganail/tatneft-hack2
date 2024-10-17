import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_URL } from '../url.constants';
import { IBotAnswer } from '../bot/bot.model';

@Injectable({
    providedIn: 'root',
})
export class BotService {
    //answerSignal = signal<IBotAnswer | undefined>(undefined);

    constructor(private readonly http: HttpClient) {}

    getAnswer(question: string): Observable<IBotAnswer> {
        return this.http
            .post<IBotAnswer>(`${API_URL}/chat/answer`, { question })
            .pipe(
                catchError((err) => {
                    this.handeError(err);
                    throw new Error(err.message);
                })
            );
    }

    private handeError(err: HttpErrorResponse): void {
        console.error(err.error.message);
    }
}
