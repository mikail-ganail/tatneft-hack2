import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BotBoxComponent } from './bot/bot-box/bot-box.component';

const routes: Routes = [
	{
		path: 'bot',
		component: BotBoxComponent,
		title: 'ботинок',
	},

	{
		path: 'home',
		component: HomeComponent,
		title: 'home',
	},
	{
		path: '**',
		component: HomeComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
