import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StateService } from "../core/state.service";
import { AuthorizeForm } from "./authorize.component";

@Injectable()
export class AutorizeGuard implements CanActivate {

	public constructor(private readonly router: Router,
		private stateService: StateService) { }

	public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.stateService.user)
			return true;
		const urlTree = this.router.parseUrl("/login");
		return urlTree;
	}

}
