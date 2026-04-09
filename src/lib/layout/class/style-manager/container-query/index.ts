import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type ContainerQueryType = 'inline-size' | 'size' | 'normal';

export class ContainerQueryStyleManager {
	/**
	 * Returns the host class. The @container CSS property is set via inline style
	 * since Tailwind's @container class only handles inline-size.
	 * Named containers use `container-name` via inline style too.
	 */
	static getHostClass(className?: string): string {
		return mergeClassNames('@container', className);
	}

	/**
	 * Builds the inline style string for container-type and optional container-name.
	 * Named containers allow children to target `@container/name` breakpoints.
	 */
	static getContainerStyle(
		containerType: ContainerQueryType,
		containerName?: string
	): string {
		const parts: string[] = [`container-type: ${containerType}`];
		if (containerName) parts.push(`container-name: ${containerName}`);
		return parts.join('; ');
	}
}
