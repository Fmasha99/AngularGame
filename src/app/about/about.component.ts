import { Component } from "@angular/core";
import { MainLogicService } from "../main-logic.service";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
	public constructor(public mainLogicService: MainLogicService) {}
}
