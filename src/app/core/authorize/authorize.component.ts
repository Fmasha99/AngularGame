import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DialogService } from "src/app/app-common/dialog.service";
import { StateService } from "../state.service";

export interface AuthorizeForm {
	log: string;
	pass: string;
}

@Component({
	selector: "app-authorize",
	templateUrl: "./authorize.component.html",
	styleUrls: ["./authorize.component.scss"],
})
export class AuthorizeComponent implements OnInit {
	public playerForm: FormGroup;
	public arrayOfUsers: AuthorizeForm[] = [
		{ log: "Fmasha", pass: "Fmasha99" },
		{ log: "AlinaD", pass: "CDf02dnljA" },
		{ log: "KirKorol", pass: "Kamc122FF" },
		{ log: "SkibDasha", pass: "PG32ooHsmv" },
		{ log: "HalinaFil", pass: "gitClone55" }
	];

	public constructor(
		public stateService: StateService,
		public router: Router,
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef,
		public dialogService: DialogService) {
	}

	public ngOnInit() {
		this.playerForm = this.formBuilder.group({
			log: [null, [
				Validators.required,
				Validators.minLength(5),
				Validators.pattern("^[a-zA-Z]+$")]
			],
			pass: [null, [
				Validators.required,
				Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
				Validators.minLength(4),
				Validators.maxLength(12)]
			]
		})
	}

	public get login() {
		return this.playerForm.get("log");
	}

	public get password() {
		return this.playerForm.get("pass");
	}

	public submit(value: AuthorizeForm) {
		const user = this.arrayOfUsers.find(el => el.log === value.log && el.pass === value.pass);
		if (user) {
			this.stateService.user = user.log;
			this.router.navigate(["game"]);
		} else {
			this.playerForm.reset();
			this.dialogService.showMessage("Incorrect login or password");
		};
	}
}
