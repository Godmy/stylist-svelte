import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class NodePaletteStyleManager {
	static root(className = ''): string {
		return mergeClassNames('node-palette', className);
	}

	static header(): string {
		return 'node-palette__header';
	}

	static headerTitle(): string {
		return 'node-palette__header-title';
	}

	static title(): string {
		return 'node-palette__title';
	}

	static search(): string {
		return 'node-palette__search';
	}

	static actions(): string {
		return 'node-palette__actions';
	}

	static categories(): string {
		return 'node-palette__categories';
	}

	static category(isActive: boolean): string {
		return mergeClassNames('node-palette__category', isActive && 'node-palette__category--active');
	}

	static content(): string {
		return 'node-palette__content';
	}

	static empty(): string {
		return 'node-palette__empty';
	}

	static group(): string {
		return 'node-palette__group';
	}

	static groupTitle(): string {
		return 'node-palette__group-title';
	}

	static item(): string {
		return 'node-palette__item';
	}

	static itemIcon(): string {
		return 'node-palette__item-icon';
	}

	static itemInfo(): string {
		return 'node-palette__item-info';
	}

	static itemTitle(): string {
		return 'node-palette__item-title';
	}

	static itemDescription(): string {
		return 'node-palette__item-description';
	}

	static grid(): string {
		return 'node-palette__grid';
	}

	static gridItem(): string {
		return 'node-palette__grid-item';
	}

	static gridItemIcon(): string {
		return 'node-palette__grid-item-icon';
	}

	static gridItemTitle(): string {
		return 'node-palette__grid-item-title';
	}
}

