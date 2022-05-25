import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss']
})
export class PipesPageComponent implements OnInit {

  public dateObject: Date = new Date();
  public lowercaseText: string = 'meu texto em caixa baixa';
  public uppercaseText: string = 'MEU TEXTO EM CAIXA ALTA';
  public currency: number = 18.0;

  public myObservable: BehaviorSubject<string> = new BehaviorSubject("valor default");

  public emptyObservable: Subject<boolean> = new Subject();

  public getObservable: Observable<string> = this.itemsService.getText();

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getText().subscribe(value => 
      this.myObservable.next(value));
  }

  public onChange(): void {
    this.emptyObservable.next(true);
  }

}
