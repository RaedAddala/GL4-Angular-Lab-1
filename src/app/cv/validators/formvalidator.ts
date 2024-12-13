import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const addFormCustomValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const age = control.get('age');
  const cin = control.get('cin');
  if (!(age?.value && cin?.value && cin?.value.length >= 2)) return null;
  const twoDigits = Number(cin?.value.substring(0, 2));
  const invalid =
    (age?.value >= 60 && twoDigits > 19) ||
    (age?.value < 60 && twoDigits <= 19);
  return invalid ? { ageCinProblem: true } : null;
};
