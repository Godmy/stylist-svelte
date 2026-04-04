export interface ComponentPreviewCodeOptions {
	componentName?: string;
	props?: Record<string, any>;
	svelteCode?: string;
}

function formatPreviewPropValue(value: any): string {
	if (typeof value === 'string') return `${value.replace(/"/g, '&quot;')}`;
	if (typeof value === 'boolean') return value ? '' : '{false}';
	return `{${JSON.stringify(value)}}`;
}

function buildPreviewPropsString(props: Record<string, any>): string {
	return Object.entries(props)
		.map(([key, value]) => {
			if (typeof value === 'boolean') {
				return value ? key : `${key}={false}`;
			}
			if (typeof value === 'string') {
				return `${key}="${value}"`;
			}
			return `${key}=${formatPreviewPropValue(value)}`;
		})
		.join(' ');
}

export function buildComponentPreviewCode({
	componentName = '',
	props = {},
	svelteCode = ''
}: ComponentPreviewCodeOptions): string {
	if (svelteCode) return svelteCode;

	const resolvedComponentName = componentName || 'Component';
	const propsString = buildPreviewPropsString(props);
	const propsBlock = propsString ? ` ${propsString}` : '';

	return `<script lang="ts">
  import { ${resolvedComponentName} } from '@stylist-svelte/components';
</script>

<${resolvedComponentName}${propsBlock} />`;
}

export const generateCode = buildComponentPreviewCode;
export type ComponentProps = ComponentPreviewCodeOptions;
