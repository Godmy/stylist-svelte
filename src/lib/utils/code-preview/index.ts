/**
 * Utility for generating Svelte code previews for components.
 */
export interface ComponentProps {
  componentName?: string;
  props?: Record<string, any>;
  /**
   * If provided, returned as-is to allow custom snippets.
   */
  svelteCode?: string;
}

function formatPropValue(value: any): string {
  if (typeof value === 'string') return `${value.replace(/"/g, '&quot;')}`;
  if (typeof value === 'boolean') return value ? '' : '{false}';
  return `{${JSON.stringify(value)}}`;
}

function buildPropsString(props: Record<string, any>): string {
  return Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return value ? key : `${key}={false}`;
      }
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      }
      return `${key}=${formatPropValue(value)}`;
    })
    .join(' ');
}

export function generateCode({ componentName = '', props = {}, svelteCode = '' }: ComponentProps): string {
  if (svelteCode) return svelteCode;

  const compName = componentName || 'Component';
  const propsString = buildPropsString(props);
  const propsBlock = propsString ? ` ${propsString}` : '';

  return `<script lang="ts">
  import { ${compName} } from '@stylist-svelte/components';
</script>

<${compName}${propsBlock} />`;
}
