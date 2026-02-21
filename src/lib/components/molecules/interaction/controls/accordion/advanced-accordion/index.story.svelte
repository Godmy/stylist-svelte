<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import AdvancedAccordion from './index.svelte';
  import { createRawSnippet } from 'svelte';
  import type { IAdvancedAccordionItem } from '$stylist/design-system/props/interaction/advanced-accordion';

  const createHtmlSnippet = (html: string) =>
    createRawSnippet(() => ({
      render: () => html
    }));

  const defaultItems: IAdvancedAccordionItem[] = [
    {
      title: 'Getting Started',
      content: createHtmlSnippet(`<div class="p-4">
            <h3 class="text-lg font-semibold mb-2">Getting Started</h3>
            <p class="mb-2">Welcome to our application! Here you'll find everything you need to get started.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Create your account</li>
              <li>Configure your settings</li>
              <li>Start exploring features</li>
            </ul>
          </div>`)
    },
    {
      title: 'Installation Guide',
      content: createHtmlSnippet(`<div class="p-4">
            <h3 class="text-lg font-semibold mb-2">Installation Guide</h3>
            <p class="mb-2">Follow these steps to install our software:</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Download the installer</li>
              <li>Run as administrator</li>
              <li>Follow the wizard</li>
              <li>Complete setup</li>
            </ol>
          </div>`)
    },
    {
      title: 'FAQ',
      content: createHtmlSnippet(`<div class="p-4">
            <h3 class="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
            <div class="space-y-2">
              <div>
                <p class="font-medium">How do I reset my password?</p>
                <p class="text-gray-700">Visit the account settings page and click on "Forgot Password".</p>
              </div>
              <div>
                <p class="font-medium">Can I upgrade my plan later?</p>
                <p class="text-gray-700">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
            </div>
          </div>`)
    }
  ];
</script>

<Story
  title="AdvancedAccordion Component"
  description="Interactive advanced accordion with customizable content"
>
  <div class="p-4">
    <div class="max-w-2xl mx-auto">
      <AdvancedAccordion
        items={defaultItems}
      />
    </div>
  </div>
</Story>