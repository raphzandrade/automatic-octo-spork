import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { ItemList } from '../../interfaces';
import { switchMap, takeUntil} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {

  public myList: ItemList[] = [];
  public cancelSubscriptions: Subject<void> = new Subject();

  constructor(
    private itemService: ItemsService, 
    private router: Router) {}

  ngOnInit(): void {
    this.getItems();
  }

  ngOnDestroy(): void {
    this.cancelSubscriptions.next();
    this.cancelSubscriptions.complete();
  }

  public getItems(): void {
    this.cancelSubscriptions.next();

    this.itemService.getItems()
    .pipe(takeUntil(this.cancelSubscriptions))
    .subscribe(result =>
      this.myList = result);
  }

  public onDelete(id: number): void {
    this.itemService.deleteItem(id).pipe(
      switchMap(() => this.itemService.getItems())
    ).subscribe((result: ItemList[]) => {
      this.myList = result
    })
  }

  public onCreate(): void {
    this.router.navigateByUrl("/cadastrar-item");
  }
}