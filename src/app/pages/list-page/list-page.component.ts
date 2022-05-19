import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { ItemList } from '../../interfaces';
import { switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myList: ItemList[] = [];

  constructor(private itemService: ItemsService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(result =>
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