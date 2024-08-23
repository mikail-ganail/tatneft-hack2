import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('videoElement')
  videoElement!: ElementRef;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.muted = true; // Убедитесь, что видео беззвучное
    video.play().catch(error => {
      console.error('Error attempting to play video:', error);
    });
  }
}
