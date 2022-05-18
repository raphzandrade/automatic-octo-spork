import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemList } from 'src/app/interfaces';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Output() delete: EventEmitter<number>;

  constructor() {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }


}
