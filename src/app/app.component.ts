import { Component } from "@angular/core";
import { DialogService } from "./app-common/dialog.service"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	providers: [DialogService],
})
export class AppComponent {
	public isActiveMenu = false;
	public title = "angularGame";
	public activeMenu = false;

	public constructor() { }

	// tslint:disable-next-line:use-lifecycle-interface
	public ngDoCheck() {
		this.isActiveMenu = this.getActiveMenu();
	}

	public showBurgerMenu(bool) {
		this.activeMenu = bool;
	}

	public getActiveMenu() {
		return this.activeMenu;
	}
}
