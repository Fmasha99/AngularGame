import { ChangeDetectorRef, Component, } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-authorize",
	templateUrl: "./authorize.component.html",
	styleUrls: ["./authorize.component.scss"],
})
export class AuthorizeComponent {
	public playerForm: FormGroup;
	public arrayOfPlayers: [];

	public constructor(
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef) {
		this.playerForm = this.formBuilder.group({
			login: [null, [
				Validators.required,
				Validators.minLength(6),
				Validators.pattern("^[a-zA-Z]+$")]
			],
			password: [null, [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9]+$ && [A-Z] && [0-9]/),
				Validators.minLength(4),
				Validators.maxLength(8)]
			]
		})

	} // constructor

	public get login() {
		return this.playerForm.get("login");
	}

	public get password() {
		return this.playerForm.get("password");
	}
}
