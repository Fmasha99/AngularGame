import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-dialog",
	templateUrl: "./dialog.component.html",
	styleUrls: ["./dialog.component.scss"],
})

export class DialogComponent {
	@Input() public message: string;
	@Output() public closeMessage = new EventEmitter<void>();

	public constructor() {
		this.message = "This user is not found";
		this.closeMessage.emit();
	}

	public close(event) {
		console.log(event);
	}
}
