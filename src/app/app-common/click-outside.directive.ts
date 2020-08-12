import { Directive, ElementRef, EventEmitter, OnDestroy, Output, Renderer2 } from "@angular/core";

@Directive({
	selector: "[appClickOutside]"
})
export class ClickOutsideDirective implements OnDestroy {
	@Output() public appClickOutside = new EventEmitter();
	private clickOutsideListeners: (() => void)[];

	public constructor(
		private readonly elementRef: ElementRef<HTMLElement>,
		private readonly renderer: Renderer2,
	) {
		this.clickOutsideListeners = initClickOutsideListeners(this.elementRef, this.renderer, () => {
			this.appClickOutside.emit();
		});
	}

	public ngOnDestroy() {
		destroyClickOutsideListeners(this.clickOutsideListeners);
	}
}

function initClickOutsideListeners(
	elementRef: ElementRef,
	renderer: Renderer2,
	handler: () => void): (() => void)[] {
	const context = { arm: false };
	const mousedown = (event: MouseEvent) => {
		context.arm = (event.target instanceof Node && !elementRef.nativeElement?.contains(event.target))
			?? false;
	};
	const mouseup = () => {
		if (context.arm)
			handler();
	};

	return [
		renderer.listen("document", "mousedown", mousedown),
		renderer.listen("document", "touchstart", mousedown),
		renderer.listen("document", "mouseup", mouseup),
		renderer.listen("document", "touchend", mouseup),
	];
}

function destroyClickOutsideListeners(listeners: (() => void)[]) {
	for (const listener of listeners)
		listener();
	return [];
}
