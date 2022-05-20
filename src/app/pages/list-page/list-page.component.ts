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
  public numberList: number[] = [1,2,3,4,5,6];
  public showDiv: boolean = false;
  public messageValue: string = 'option1';
  public showClass2: boolean = false;

  constructor(private itemService: ItemsService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(result =>
      this.myList = result);
  }

  public toggleDiv(): void {
    this.showDiv = true;
  }
  
  public toggleMessageValue(): void {
    this.messageValue = 'option2';
  }

  public toggleClass(): void {
    this.showClass2 = true;
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