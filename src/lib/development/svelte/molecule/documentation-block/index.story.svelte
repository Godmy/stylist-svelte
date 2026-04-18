<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipeDocumentationBlock from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Deployment Guide' },
    { name: 'variant', type: 'select', options: ['default', 'info', 'warning', 'success', 'danger'], defaultValue: 'info' },
    { name: 'showCodeExamples', type: 'boolean', defaultValue: true },
    { name: 'tags', type: 'text', defaultValue: 'docs,deploy' }
  ];

  const content = `
    <h3>Overview</h3>
    <p>This block explains deployment prerequisites and rollout sequence.</p>
    <h3>Checklist</h3>
    <ul>
      <li>Run tests</li>
      <li>Build artifacts</li>
      <li>Monitor first 15 minutes</li>
    </ul>
  `;

  const codeExamples = [
    {
      title: 'Build command',
      code: 'yarn check\\nyarn build',
      language: 'bash',
      showLineNumbers: true
    },
    {
      title: 'Deploy command',
      code: 'kubectl apply -f deploy.yaml',
      language: 'bash',
      showLineNumbers: false
    }
  ];

  function parseTags(value: string): string[] {
    return value.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);
  }
</script>

<Story
  id="molecules-documentation-block"
  title="Molecules / Information / Development / RecipeDocumentationBlock"
  component={RecipeDocumentationBlock}
  category="Molecules/Information/Development"
  description="Rich documentation section with HTML content and optional code examples."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <RecipeDocumentationBlock
        title={args.title}
        content={content}
        variant={args.variant}
        tags={parseTags(args.tags)}
        codeExamples={args.showCodeExamples ? codeExamples : []}
      />
    </div>
  {/snippet}
</Story>



