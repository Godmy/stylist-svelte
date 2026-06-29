import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props/drawer-props';
import { close } from '$stylist/navigation/function/script/close';
import { handleBackdropClick } from '$stylist/navigation/function/script/handle-backdrop-click';
import { handleBackdropKeyDown } from '$stylist/navigation/function/script/handle-backdrop-key-down';
import { handleEscape } from '$stylist/navigation/function/script/handle-escape';

import type { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
export class DrawerManager {
	drawerEl = $state<HTMLElement | null>(null);
	backdropEl = $state<HTMLElement | null>(null);

	constructor(private readonly props: DrawerProps) {}

	get isOpen(): boolean {
		return this.props.open ?? false;
	}

	get position(): (typeof TOKEN_ALIGNMENT)[number] {
		return (this.props.position ?? 'right') as (typeof TOKEN_ALIGNMENT)[number];
	}

	get size(): string {
		return this.props.size ?? '300px';
	}

	get closable(): boolean {
		return this.props.closable ?? true;
	}

	get showBackdrop(): boolean {
		return this.props.showBackdrop ?? true;
	}

	get backdropClasses(): string {
		return ['drawer__backdrop', this.showBackdrop ? `drawer__backdrop--selected` : '']
			.filter(Boolean)
			.join(' ');
	}

	get drawerClasses(): string {
		return 'drawer__drawer';
	}

	get drawerOpenClasses(): string {
		return ['drawer__drawer-open', this.isOpen ? `drawer__drawer-open--selected` : '']
			.filter(Boolean)
			.join(' ');
	}

	close(): void {
		close(this.props, this.closable);
	}

	handleBackdropClick(e: MouseEvent): void {
		handleBackdropClick(e, this.backdropEl, this.closable, () => this.close());
	}

	handleBackdropKeyDown(e: KeyboardEvent): void {
		handleBackdropKeyDown(e, this.backdropEl, this.closable, () => this.close());
	}

	handleEscape(e: KeyboardEvent): void {
		handleEscape(e, this.closable, () => this.close());
	}
}
