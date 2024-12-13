import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FormService {
  constructor() {
  }
  //get a form from local storage
  getForm(): any {
    if(localStorage.getItem('form')){
      return JSON.parse(localStorage.getItem('form') as string);
    }
    return null;
  }
  //save a form in local storage
  saveForm(form: any): void {
    localStorage.setItem('form', JSON.stringify(form));
  }

  //verify if the form is saved in local storage
  isFormSaved(): boolean {
    return localStorage.getItem('form') !== null;
  }
  //clear the form from local storage
  clearForm(): void {
    localStorage.removeItem('form');
  }
}
