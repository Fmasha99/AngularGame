import { ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from "@angular/core";
import { DialogComponent } from "./dialog/dialog.component";

@Injectable()
export class DialogService {

	public constructor(
		private injector: Injector,
	) { }

	public showMessage(message: string) {
		const vcr = this.injector.get(ViewContainerRef); // найди ближайший vcr(в данном случае - vcr для AuthorizeComponent)
		const cfr = this.injector.get(ComponentFactoryResolver); // найди cfr
		const cf = cfr.resolveComponentFactory(DialogComponent); // найди фабрику компонентов для типа DialogComponent
		const compRef = cf.create(this.injector); // создать экземпляр DialogComponent и его окружение
		compRef.instance.message = message; // инициализировать свойство
		compRef.instance.cancel.subscribe(() => {
			vcr.remove();
		});
		vcr.insert(compRef.hostView);
	}

}
