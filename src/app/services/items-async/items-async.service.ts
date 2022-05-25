import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { debounceTime, delay, switchMap, takeUntil } from 'rxjs/operators';
import { ItemList } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsAsyncService {

  public items: BehaviorSubject<ItemList[]> = 
    new BehaviorSubject<ItemList[]>([]);

  public cancelSubscription: Subject<void> = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  public getItems(): void  {
    this.cancelSubscription.next();
    
    const url = `${environment.apiUrl}/items`;

    const recipe = this.httpClient.get<ItemList[]>(url);

    recipe.pipe(
      takeUntil(this.cancelSubscription)
     )
    .subscribe(result => {
      this.items.next(result);
    });
  }

  public deleteItem(id: number): void {
    const url = `${environment.apiUrl}/items/${id}`;

    const recipe = this.httpClient.delete(url);

    recipe.subscribe(() => {
      this.getItems()
    });
  }

  public createItem(item: ItemList): void {
    const url = `${environment.apiUrl}/items}`;

    const recipe = this.httpClient.post<ItemList>(url, item);

    recipe.subscribe();
  }
}
