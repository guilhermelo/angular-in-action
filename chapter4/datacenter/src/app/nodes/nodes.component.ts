import { Component, OnInit } from '@angular/core';

@Component({
  // o seletor com [] envolta do nome quer dizer que é um atributo de um outro componente
  // ex: <table app-nodes></table>
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
