import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alertRef: ComponentRef<AlertComponent>; // referencia ao componente para mostrar e tirar da tela
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  // pega o elemento baseado no template e transforma para um ViewContainerRef
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox: ViewContainerRef;

  constructor(private ComponentFacToryResolver: ComponentFactoryResolver) { }

  alert(date) {
    // se o alerta ainda não foi criado
    if (!this.alertRef) {
      const alertComponent = this.ComponentFacToryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }
}
