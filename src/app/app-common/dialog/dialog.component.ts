import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";

@Component({
	selector: "app-dialog",
	templateUrl: "./dialog.component.html",
	styleUrls: ["./dialog.component.scss"],
})

export class DialogComponent {
	@Input() public message: string;
	@Output() public cancel = new EventEmitter<void>();

	public close() {
		this.cancel.emit();
	}
}
