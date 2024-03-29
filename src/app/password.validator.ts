import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordValidator: ValidatorFn = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    const password = control.value;
  // Define a regex that includes the specific special characters you're looking for
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumeric = /[0-9]/.test(password);
  const hasSpecialCharacter = /[$&+,:;=?@#|'<>.^*()%!-]/.test(password);


  const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter;

  return !passwordValid ? { appFormsDirective: true } : null; 
    
  };