import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})
export class ButtonColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
@Input() set appButtonColor(condition: string){
  if(condition==='courses'){
    this.renderer.addClass(this.element.nativeElement,'btn-course');
  }
  else{
    this.renderer.addClass(this.element.nativeElement,'btn-movies');
  }
}
}
