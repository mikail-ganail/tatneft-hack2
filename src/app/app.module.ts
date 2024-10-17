import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotBoxComponent } from './bot/bot-box/bot-box.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './bot/messages/messages.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableDirective } from './directives/resizable.directive';
import { SidebarComponent } from './bot/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminTableComponent } from './bot/admin-table/admin-table.component';

@NgModule({
    declarations: [
        AppComponent,
        BotBoxComponent,
        HomeComponent,
        MessagesComponent,
        ResizableDirective,
        SidebarComponent,
        AdminTableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
