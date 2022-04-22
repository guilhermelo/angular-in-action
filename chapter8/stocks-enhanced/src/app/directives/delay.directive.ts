import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  @Input() set delay(ms: number) {
    setTimeout(() => {
      
      // acessando a view e criando uma view nova
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, ms);
  }

  // * antes do nome da diretiva diz ao angular que a diretiva precisa capturar o template e criar
  // um view container
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
