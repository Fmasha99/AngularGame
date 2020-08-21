import { ChangeDetectorRef, Component, } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface AuthorizeForm {
	log: string;
	pass: string;
}

@Component({
	selector: "app-authorize",
	templateUrl: "./authorize.component.html",
	styleUrls: ["./authorize.component.scss"],
})
export class AuthorizeComponent {
	public playerForm: FormGroup;
	public arrayOfUsers: AuthorizeForm[] = [
		{ log: "Fmasha", pass: "Fmasha99" },
		{ log: "AlinaD", pass: "CDf02dnljA" },
		{ log: "KirKorol", pass: "Kamc122FF" },
		{ log: "SkibDasha", pass: "PG32ooHsmv" },
		{ log: "HalinaFil", pass: "gitClone55" }
	];

	public constructor(
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef) {
		this.playerForm = this.formBuilder.group({
			login: [null, [
				Validators.required,
				Validators.minLength(5),
				Validators.pattern("^[a-zA-Z]+$")]
			],
			password: [null, [
				Validators.required,
				Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
				Validators.minLength(4),
				Validators.maxLength(12)]
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
