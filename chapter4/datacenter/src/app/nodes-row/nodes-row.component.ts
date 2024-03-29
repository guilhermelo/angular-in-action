import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  // Define o modo de detecção de mudança como onpush, ou seja,
  // só vai ser alterado os componentes filhos que usam o input que foi alterado
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent{

  @Input() node: any;

  constructor(private modalService: NgbModal) {}

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

}
