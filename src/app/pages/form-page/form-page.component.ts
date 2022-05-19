import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { ItemList } from 'src/app/interfaces';
import { ItemsService } from 'src/app/services/items/items.service';
import { validateId } from 'src/app/validators';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private itemsService: ItemsService,
    private router: Router) { 
    this.myForm = this.formBuilder.group({
      id: [0, 
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/)
        ]),
        // validateId(itemsService)
    ],
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.myForm.get("id")?.valueChanges
    .pipe(debounceTime(2000))
    .subscribe(newId => this.onValidateId(newId))

  }

  onValidateId(newId: number): void {
    this.itemsService.getItems().pipe(map(items => {
      const idExists = !!items.find(item => item.id === newId);

      return idExists;
    })).subscribe(idExists => {
      if(idExists) { 
        this.myForm.get("id")?.setErrors({"invalidId": true})
        return;
      }
    });
  }

  onSubmit(): void {
    if(this.myForm.invalid){
      return;
    }

    const id = this.myForm.get("id")?.value;
    const name = this.myForm.get("name")?.value;
    const description = this.myForm.get("description")?.value;

    const listItem: ItemList = new ItemList(
      id, name, description
    );

    this.itemsService
    .createItem(listItem)
    .subscribe(result => {

      console.log('item criado: ', result);
      this.router.navigateByUrl("/minha-lista")
    },
      () => {
        // tratamento de erro
        console.log('Deu ruim')
      })
  }
}