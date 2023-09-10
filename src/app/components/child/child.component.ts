import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data = '';
  @Output() emitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onDateSelect(date: NgbDate) {
    console.log(date);
  }

  emitData() {
    this.emitEvent.emit('已送出');
  }
}
