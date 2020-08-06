import { Component, HostBinding, Input } from "@angular/core";
import { MainLogicService } from "src/app/main-logic.service";
import { Cell } from "../board.component";

@Component({
	selector: "app-cell",
	templateUrl: "./cell.component.html",
	styleUrls: ["./cell.component.scss"],
})
export class CellComponent {
	@Input() public serialNumber: number;
	@Input() public isActive: boolean;
	@Input() public x: number;
	@Input() public y: number;

	public constructor(public mainLogicService: MainLogicService) {}

	@HostBinding("style.backgroundColor") public get backgroundColor() {
		return this.mainLogicService.changeBackgroundColor(this.x, this.y);
	}
}
