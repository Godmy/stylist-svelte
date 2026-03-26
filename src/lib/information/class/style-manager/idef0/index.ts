import { cn } from '$stylist/information/function/cn/index';

export class Idef0StyleManager {
	static getDiagramContainerClasses(className = ''): string {
		return cn('c-idef0-diagram inline-flex flex-col gap-3 rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-3', className);
	}

	static getDiagramSvgClasses(className = ''): string {
		return cn('c-idef0-diagram__svg block overflow-visible', className);
	}

	static getFunctionBoxGroupClasses(className = ''): string {
		return cn('c-idef0-function-box', className);
	}

	static getFunctionBoxRectClasses(className = ''): string {
		return cn('fill-[--color-background-secondary] stroke-[--color-border-primary]', className);
	}

	static getFunctionBoxTitleClasses(className = ''): string {
		return cn('c-idef0-function-box__title fill-[--color-text-primary] text-sm font-semibold', className);
	}

	static getFunctionBoxSubtitleClasses(className = ''): string {
		return cn('c-idef0-function-box__subtitle fill-[--color-text-secondary] text-xs', className);
	}

	static getConnectorGroupClasses(className = ''): string {
		return cn('c-idef0-connector', className);
	}

	static getConnectorLineClasses(className = ''): string {
		return cn('c-idef0-connector__line stroke-[--color-text-secondary]', className);
	}

	static getConnectorLabelClasses(className = ''): string {
		return cn('c-idef0-connector__label fill-[--color-text-secondary] text-xs', className);
	}

	static getPortLabelClasses(className = ''): string {
		return cn('c-idef0-port-label fill-[--color-text-secondary] text-xs font-medium', className);
	}
}



