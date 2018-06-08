import { FormControl } from '@angular/forms';


export function validateDate(control: FormControl) {
    var day = control.value.substring(0,2);
    var month = control.value.substring(3,5);
    var year = control.value.slice(-4);

    if (day>31 || month>12 || year<1991 || year>2018) {
      return {invalid : true}
    }
    else {
      return null;
    }
}


  
