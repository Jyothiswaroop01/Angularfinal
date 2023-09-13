import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MyserviceService } from "./myservice.service";

@Injectable()
export class DashboardAuthentication1 implements CanActivate
{

    constructor(private obj:MyserviceService, private mynavigation:Router){    }
    canActivate(): boolean
    {
        if(this.obj.AdminloggedIn())
        {
            return true;
        }
        else
        {
            alert('Sorry You are not allowed whithout logging')
            this.mynavigation.navigate(['login']);
            return false;
        }
        
    }
}
