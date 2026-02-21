import {
	ABBR_CLASSES,
	DEFINITION_DESCRIPTION_CLASSES,
	DEFINITION_TERM_CLASSES,
	EM_CLASSES,
	HIGHLIGHT_CLASSES,
	INLINE_CODE_BASE_CLASSES,
	INLINE_CODE_CLASSES,
	KBD_CLASSES,
	LINK_DISABLED_CLASSES,
	LINK_HOVER_CLASSES,
	LINK_SIZE_CLASSES,
	LINK_UNDERLINE_CLASSES,
	LINK_VARIANT_CLASSES
} from '../../classes/interaction/link';

export class LinkStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getAbbrClasses(className = ''): string {
		return this.join([ABBR_CLASSES, className]);
	}

	static getDefinitionDescriptionClasses(className = ''): string {
		return this.join([DEFINITION_DESCRIPTION_CLASSES, className]);
	}

	static getDefinitionTermClasses(className = ''): string {
		return this.join([DEFINITION_TERM_CLASSES, className]);
	}

	static getEmClasses(className = ''): string {
		return this.join([EM_CLASSES, className]);
	}

	static getHighlightClasses(className = ''): string {
		return this.join([HIGHLIGHT_CLASSES, className]);
	}

	static getInlineCodeClasses(
		variant: 'default' | 'subtle' = 'default',
		className = ''
	): string {
		return this.join([INLINE_CODE_BASE_CLASSES, INLINE_CODE_CLASSES[variant], className]);
	}

	static getKbdClasses(className = ''): string {
		return this.join([KBD_CLASSES, className]);
	}

	static getLinkClasses(
		variant:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'solid'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'subtle'
			| 'neutral'
			| 'gray'
			| 'muted'
			| 'dark'
			| 'light' = 'default',
		size: 'sm' | 'md' | 'lg' = 'md',
		disabled = false,
		underline = true,
		className = ''
	): string {
		const variantClass =
			LINK_VARIANT_CLASSES[variant as keyof typeof LINK_VARIANT_CLASSES] ??
			LINK_VARIANT_CLASSES.default;
		const sizeClass = LINK_SIZE_CLASSES[size];
		return this.join([
			variantClass,
			sizeClass,
			disabled ? LINK_DISABLED_CLASSES : '',
			!disabled ? LINK_HOVER_CLASSES : '',
			underline ? LINK_UNDERLINE_CLASSES : '',
			className
		]);
	}
}
