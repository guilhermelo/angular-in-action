import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [`.btn { background-color: #999999}`]
})
export class NavbarComponent implements OnInit {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  refresh() {
    this.onRefresh.emit();
  }

}
