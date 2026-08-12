export class ComponentPreviewManager {
	private static formatPreviewPropValue(value: unknown): string {
		if (typeof value === 'string') return `${value.replace(/"/g, '&quot;')}`;
		if (typeof value === 'boolean') return value ? '' : '{false}';
		return `{${JSON.stringify(value)}}`;
	}

	private static buildPreviewPropsString(props: Record<string, unknown>): string {
		return Object.entries(props)
			.map(([key, value]) => {
				if (typeof value === 'boolean') return value ? key : `${key}={false}`;
				if (typeof value === 'string') return `${key}="${value}"`;
				return `${key}=${ComponentPreviewManager.formatPreviewPropValue(value)}`;
			})
			.join(' ');
	}

	static buildComponentPreviewCode({
		componentName = '',
		props = {},
		svelteCode = ''
	}: {
		componentName?: string;
		props?: Record<string, unknown>;
		svelteCode?: string;
	}): string {
		if (svelteCode) return svelteCode;
		const resolvedComponentName = componentName || 'Component';
		const propsString = ComponentPreviewManager.buildPreviewPropsString(props);
		const propsBlock = propsString ? ` ${propsString}` : '';

		return `<script lang="ts">
  import { ${resolvedComponentName} } from '@stylist-svelte/components';
</script>

<${resolvedComponentName}${propsBlock} />`;
	}
}
