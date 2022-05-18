import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemList } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<ItemList[]> {
    const url = `http://localhost:3000/items`;

    const recipe = this.httpClient.get<ItemList[]>(url);

    return recipe;
  }

  public deleteItem(id: number): Observable<unknown> {
    const url = `http://localhost:3000/items/${id}`;

    const recipe = this.httpClient.delete(url);

    return recipe;
  }

  public createItem(item: ItemList): Observable<ItemList> {
    const url = `http://localhost:3000/items`;

    const recipe = this.httpClient.post<ItemList>(url, item);

    return recipe;
  }
}
