import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemList } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<ItemList[]> {
  
    const url = `${environment.apiUrl}/items`;

    const recipe = this.httpClient.get<ItemList[]>(url);

    return recipe;
  }

  public deleteItem(id: number): Observable<unknown> {
    const url = `${environment.apiUrl}/items/${id}`;

    const recipe = this.httpClient.delete(url);

    return recipe;
  }

  public createItem(item: ItemList): Observable<ItemList> {
    const url = `${environment.apiUrl}/items`;

    const recipe = this.httpClient.post<ItemList>(url, item);

    return recipe;
  }

  public getText(): Observable<string> {
    const url = `${environment.apiUrl}/texts`;

    const recipe = this.httpClient.get<string[]>(url)
    .pipe(map(result => result[0]));

    return recipe;
  }
}
