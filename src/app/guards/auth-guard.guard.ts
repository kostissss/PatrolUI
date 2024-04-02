import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router:Router = inject(Router);
  const authService = inject(AuthServiceService);
  
  if (authService.authToken!='') {
    return true;
  } else {
    // Redirect the user to the login page and store the attempted URL for redirection after login
   router.navigate(['/login'],);
    return false;
  }
  /*
  
 let flag = false;
  authService.authState$.subscribe(authResponse => {
    if (authResponse && authResponse.authToken) {
      flag =true; // Authenticated, allow access
    }
    else{
    router.navigate(['/login']); // Redirect to login
    flag= false; // Not authenticated, block access
    }
  });
  return flag; */

};
