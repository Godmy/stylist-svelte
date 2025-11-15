/**
 * Utility functions for generating code in different formats
 */
export type ExportFormat = 'svelte' | 'react' | 'vue' | 'html' | 'typescript';

export interface ComponentProps {
  componentName?: string;
  props?: Record<string, any>;
  svelteCode?: string;
}

export function generateCode({ componentName = '', props = {}, svelteCode = '' }: ComponentProps, format: ExportFormat): string {
  const propsString = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'string') return `${key}="${value}"`;
      if (typeof value === 'boolean') return value ? key : `${key}={false}`;
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(' ');

  switch (format) {
    case 'svelte':
      const compName = componentName || 'Component';
      return svelteCode || `<script lang="ts">
  import { ${compName} } from '@stylist-svelte/components';
</script>

<${compName} ${propsString} />`;
    case 'react':
      const compNameReact = componentName || 'Component';
      return `import React from 'react';
import { ${compNameReact} } from '@stylist-react/components';

export default function Example() {
  return (
    <${compNameReact} ${propsString} />
  );
}`;
    case 'vue':
      const compNameVue = componentName || 'Component';
      return `<template>
  <${compNameVue} ${propsString} />
</template>

<script setup lang="ts">
import { ${compNameVue} } from '@stylist-vue/components';
</script>`;
    case 'html':
      const compNameHtml = (componentName || 'component').toLowerCase();
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${componentName} Example</title>
  <script type="module" src="https://unpkg.com/@stylist-svelte/components"></script>
</head>
<body>
  <${compNameHtml} ${propsString}></${compNameHtml}>
</body>
</html>`;
    case 'typescript':
      const compNameTs = componentName || 'Component';
      const tsType = `${compNameTs}Props`;
      return `import type { ComponentProps } from 'svelte';
import { ${compNameTs} } from '@stylist-svelte/components';

type ${tsType} = ComponentProps<typeof ${compNameTs}>;

const props: ${tsType} = ${JSON.stringify(props, null, 2)};

export { props };`;
    default:
      return svelteCode;
  }
}