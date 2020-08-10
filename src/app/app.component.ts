import { Component } from "@angular/core";
import { MainLogicService } from "./main-logic.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	public title = "angularGame";

	public constructor(public mainLogicService: MainLogicService) {}
}
