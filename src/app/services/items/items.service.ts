import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemList } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService) { }

  public getItems(): Observable<ItemList[]> {
    const url = `${environment.apiUrl}/660/items`;

    const token: string = this.authService.getUserAccessToken();

    // const myHeaders: HttpHeaders = new HttpHeaders({
    //   "Authorization": `Bearer ${token}`
    // });

    const recipe = this.httpClient.get<ItemList[]>(url, {
      // headers: myHeaders
    });

    return recipe;
  }

  public deleteItem(id: number): Observable<unknown> {
    const url = `${environment.apiUrl}/items/${id}`;

    const recipe = this.httpClient.delete(url);

    return recipe;
  }

  public createItem(item: ItemList): Observable<ItemList> {
    const url = `${environment.apiUrl}/660/items`;

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
