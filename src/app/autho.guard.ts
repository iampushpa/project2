import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './Services/api-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {

  public data : any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.api.getData().subscribe(
        ((res:any)=>{
          this.data = res;
          if(this.data.length>9){
              return true;
          }else return false;
        })
      )
      return true;
      
   
  }
  constructor(private api : ApiService){

  }
  
}

