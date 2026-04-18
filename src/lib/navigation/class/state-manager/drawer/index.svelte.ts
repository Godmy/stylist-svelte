import type { DrawerProps, DrawerPosition } from '$stylist/navigation/type/struct/drawer-props';
import { DrawerStyleManager } from '$stylist/navigation/class/style-manager/drawer';
import { close } from '$stylist/navigation/function/script/close';
import { handleBackdropClick } from '$stylist/navigation/function/script/handle-backdrop-click';
import { handleBackdropKeyDown } from '$stylist/navigation/function/script/handle-backdrop-key-down';
import { handleEscape } from '$stylist/navigation/function/script/handle-escape';

export class DrawerManager {
	drawerEl = $state<HTMLElement | null>(null);
	backdropEl = $state<HTMLElement | null>(null);

	constructor(private readonly props: DrawerProps) {}

	get isOpen(): boolean {
		return this.props.open ?? false;
	}

	get position(): DrawerPosition {
		return (this.props.position ?? 'right') as DrawerPosition;
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
		return DrawerStyleManager.getBackdropClasses(this.showBackdrop);
	}

	get drawerClasses(): string {
		return DrawerStyleManager.getDrawerClasses(
			this.position,
			typeof this.props.class === 'string' ? this.props.class : ''
		);
	}

	get drawerOpenClasses(): string {
		return DrawerStyleManager.getDrawerOpenClasses(this.isOpen, this.position);
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
