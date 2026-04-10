import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import {
	DRAWER_BACKDROP_BASE_CLASS,
	DRAWER_BACKDROP_VISIBLE_CLASS,
	DRAWER_BASE_CLASS,
	DRAWER_OPEN_POSITION_CLASSES,
	DRAWER_POSITION_CLASSES
} from '$stylist/navigation/const/record/drawer-position-classes';
import type { DrawerPosition } from '$stylist/navigation/type/struct/drawer-props';

export class DrawerStyleManager {
	static getBackdropClasses(showBackdrop: boolean): string {
		return mergeClassNames(
			DRAWER_BACKDROP_BASE_CLASS,
			showBackdrop ? DRAWER_BACKDROP_VISIBLE_CLASS : 'opacity-[var(--opacity-0)]'
		);
	}

	static getDrawerClasses(position: DrawerPosition, hostClass = ''): string {
		return mergeClassNames(
			DRAWER_BASE_CLASS,
			DRAWER_POSITION_CLASSES[position] ?? '',
			hostClass
		);
	}

	static getDrawerOpenClasses(isOpen: boolean, position: DrawerPosition): string {
		return isOpen ? DRAWER_OPEN_POSITION_CLASSES[position] ?? '' : '';
	}

	static getHeaderClasses(): string {
		return 'drawer-header flex items-center justify-between p-[var(--spacing-4)] border-b border-[var(--color-border-primary)]';
	}

	static getContentClasses(): string {
		return 'drawer-content flex-1 overflow-y-auto p-[var(--spacing-4)]';
	}

	static getActionsClasses(): string {
		return 'drawer-actions p-[var(--spacing-4)] border-t border-[var(--color-border-primary)]';
	}

	static getCloseButtonClasses(): string {
		return 'close-button bg-transparent border-none text-[var(--font-size-6)] cursor-pointer p-[var(--spacing-1)] rounded-[var(--border-radius-base)] hover:bg-[var(--color-background-secondary)]';
	}
}

export default DrawerStyleManager;
