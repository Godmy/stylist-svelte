import {
	AUTH_GUARD_ACTION_LINK_CLASSES,
	AUTH_GUARD_ROOT_CLASS,
	AUTH_GUARD_SECTION_CLASSES,
	AUTH_GUARD_TEXT_CLASSES,
	AUTH_GUARD_TITLE_CLASSES
} from '$stylist/design-system/classes/interaction/auth-guard';

export class AuthGuardStyleManager {
	static getRootClasses(hostClass: string): string {
		return `${AUTH_GUARD_ROOT_CLASS} ${hostClass}`.trim();
	}

	static getSectionClasses(fallbackClass: string): string {
		return `${AUTH_GUARD_SECTION_CLASSES} ${fallbackClass}`.trim();
	}

	static getTitleClasses(contentClass: string): string {
		return `${AUTH_GUARD_TITLE_CLASSES} ${contentClass}`.trim();
	}

	static getTextClasses(contentClass: string): string {
		return `${AUTH_GUARD_TEXT_CLASSES} ${contentClass}`.trim();
	}

	static getActionLinkClasses(): string {
		return AUTH_GUARD_ACTION_LINK_CLASSES;
	}
}
