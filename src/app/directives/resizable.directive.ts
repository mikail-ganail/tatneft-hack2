import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective implements AfterViewInit {
  private isResizing = false;
  private startX!: number;
  private startY!: number;
  private startWidth!: number;
  private startHeight!: number;
  private currentHandle!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.createResizeHandles();
  }

  private createResizeHandles() {
    const handlesPositions = ['top', 'right', 'bottom', 'left'];
    handlesPositions.forEach(pos => {
      const handle = this.createHandle(pos);
      this.renderer.appendChild(this.el.nativeElement, handle);

      handle.addEventListener('mousedown', (event: MouseEvent) => this.startResize(event, pos));
    });
  }

  private createHandle(position: string) {
    const handle = this.renderer.createElement('div');
    this.renderer.setStyle(handle, 'position', 'absolute');
    this.renderer.setStyle(handle, 'background', 'transparent');
    this.renderer.setStyle(handle, 'zIndex', '1');

    switch (position) {
      case 'top':
        this.renderer.setStyle(handle, 'cursor', 'n-resize');
        this.renderer.setStyle(handle, 'top', '0');
        this.renderer.setStyle(handle, 'left', '0');
        this.renderer.setStyle(handle, 'right', '0');
        this.renderer.setStyle(handle, 'height', '10px');
        break;
    //   case 'right':
    //     this.renderer.setStyle(handle, 'cursor', 'e-resize');
    //     this.renderer.setStyle(handle, 'top', '0');
    //     this.renderer.setStyle(handle, 'right', '0');
    //     this.renderer.setStyle(handle, 'bottom', '0');
    //     this.renderer.setStyle(handle, 'width', '10px');
    //     break;
    //   case 'bottom':
    //     this.renderer.setStyle(handle, 'cursor', 's-resize');
    //     this.renderer.setStyle(handle, 'left', '0');
    //     this.renderer.setStyle(handle, 'right', '0');
    //     this.renderer.setStyle(handle, 'bottom', '0');
    //     this.renderer.setStyle(handle, 'height', '10px');
    //     break;
      case 'left':
        this.renderer.setStyle(handle, 'cursor', 'w-resize');
        this.renderer.setStyle(handle, 'top', '0');
        this.renderer.setStyle(handle, 'bottom', '0');
        this.renderer.setStyle(handle, 'left', '0');
        this.renderer.setStyle(handle, 'width', '10px');
        break;
    }

    return handle;
  }

  private startResize(event: MouseEvent, direction: string) {
    event.stopPropagation();
    event.preventDefault();

    this.isResizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startWidth = this.el.nativeElement.clientWidth;
    this.startHeight = this.el.nativeElement.clientHeight;
    this.currentHandle = event.target as HTMLElement;

    document.addEventListener('mousemove', (e) => this.resize(e, direction));
    document.addEventListener('mouseup', (e) => this.stopResize(e));
  }

  private resize(event: MouseEvent, direction: string) {
    if (!this.isResizing) return;

    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;

    switch (direction) {
      case 'top':
        this.renderer.setStyle(this.el.nativeElement, 'height', `${this.startHeight - dy}px`);
        break;
    //   case 'right':
    //     this.renderer.setStyle(this.el.nativeElement, 'width', `${this.startWidth + dx}px`);
    //     break;
    //   case 'bottom':
    //     this.renderer.setStyle(this.el.nativeElement, 'height', `${this.startHeight + dy}px`);
    //     break;
      case 'left':
        this.renderer.setStyle(this.el.nativeElement, 'width', `${this.startWidth - dx}px`);
        break;
    }
  }

  private stopResize(event: MouseEvent) {
    this.isResizing = false;
    document.removeEventListener('mousemove', this.resize as EventListener);
    document.removeEventListener('mouseup', this.stopResize as EventListener);
  }
}