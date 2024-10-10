import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleSize]'
})
export class TitleSizeDirective {
  constructor(private el: ElementRef<HTMLElement>) { 
    this.applyStyles();
  }

  applyStyles(): void {
    this.el.nativeElement.style.fontSize = '20px'
    this.el.nativeElement.style.fontWeight = '600'
  }
}
