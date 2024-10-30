import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appFormHoverBorder]',
  standalone: true,
})
export class FormHoverBorderDirective implements OnInit {
  private paragraph: HTMLParagraphElement | null = null

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.paragraph = this.el.nativeElement.querySelector('mat-card-title')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #42a5f5')

    if (this.paragraph) {
      this.renderer.addClass(this.paragraph, 'form-hover-weight')
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'border')

    if (this.paragraph) {
      this.renderer.removeClass(this.paragraph, 'form-hover-weight')
    }
  }
}
