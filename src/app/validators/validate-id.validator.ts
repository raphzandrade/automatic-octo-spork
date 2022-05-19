import { AbstractControl, AsyncValidatorFn, ValidationErrors,  } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { ItemsService } from "../services/items/items.service";


export function 
validateId(itemsService: ItemsService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => 
    {
        const controlValue = control.value;
        
        return itemsService.getItems().pipe(map(items => {
            const idExists = !!items.find(item => item.id === controlValue);

            return idExists ? {"invalidId": true} : null
        }));
    }
}


// export function validateId(): ValidatorFn {
//     return (): ValidationErrors | null => { return null}
// }
