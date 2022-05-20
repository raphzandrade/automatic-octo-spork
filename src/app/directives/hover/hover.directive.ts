import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() public appHover: string;

  private defaultColor: string;

  constructor(private element: ElementRef) { 
    this.defaultColor = element.nativeElement.style.backgroundColor;
    this.appHover = '';
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.element.nativeElement.style.backgroundColor = this.appHover || "yellow";
  }


  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.element.nativeElement.style.backgroundColor = this.defaultColor;
  }

}

