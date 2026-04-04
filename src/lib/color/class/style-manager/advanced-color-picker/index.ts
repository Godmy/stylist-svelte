import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';

export class StyleManagerAdvancedColorPicker {
	static root(className?: string): string {
		return InteractionInputStyleManager.root(
			'c-advanced-color-picker relative inline-block',
			className ?? ''
		);
	}

	static trigger(): string {
		return InteractionInputStyleManager.input(
			'flex items-center px-3 py-2 min-w-[140px]'
		);
	}

	static panel(): string {
		return InteractionInputStyleManager.panel(
			'absolute top-full left-0 mt-2 p-3 z-[var(--z-index-popover)]'
		);
	}

	static preview(): string {
		return 'w-6 h-6 rounded border mr-2';
	}

	static textInput(): string {
		return 'outline-none bg-transparent w-24';
	}

	static palette(): string {
		return 'grid grid-cols-5 gap-1 mb-2';
	}

	static paletteButton(): string {
		return 'w-6 h-6 rounded border';
	}

	static acceptButton(): string {
		return 'ml-2 px-2 py-1 border rounded';
	}
}
