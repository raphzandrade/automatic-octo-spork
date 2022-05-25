import { Component, OnInit } from '@angular/core';
import { ItemList } from '../../interfaces';
import { Router } from '@angular/router';
import { ItemsAsyncService } from 'src/app/services/items-async/items-async.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-page-async',
  templateUrl: './list-page-async.component.html',
  styleUrls: ['./list-page-async.component.scss']
})
export class ListPageAsyncComponent implements OnInit {

  public myListAsync: Observable<ItemList[]> = this.itemsAsyncService.items;

  constructor(
    private router: Router, 
    private itemsAsyncService: ItemsAsyncService) {}

  ngOnInit(): void {
    this.itemsAsyncService.getItems();
  }

  public getItems(): void {
    this.itemsAsyncService.getItems();
  }

  public onDelete(id: number): void {
    this.itemsAsyncService.deleteItem(id);
  }

  public onCreate(): void {
    this.router.navigateByUrl("/cadastrar-item");
  }
}