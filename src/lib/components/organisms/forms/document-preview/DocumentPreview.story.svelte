<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DocumentPreview from './DocumentPreview.svelte';

  const typeOptions = ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx', 'ppt', 'pptx', 'image'] as const;

  type Props = {
    type: (typeof typeOptions)[number];
    showToolbar: boolean;
    showDownload: boolean;
    showPrint: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'type', type: 'select', options: [...typeOptions], defaultValue: 'pdf' },
    { name: 'showToolbar', type: 'boolean', defaultValue: true },
    { name: 'showDownload', type: 'boolean', defaultValue: true },
    { name: 'showPrint', type: 'boolean', defaultValue: true }
  ];

  const attachments = [
    { name: 'SLA.pdf', type: 'pdf', size: '1.2 MB' },
    { name: 'Roadmap.pptx', type: 'pptx', size: '4.8 MB' },
    { name: 'Checklist.docx', type: 'docx', size: '320 KB' }
  ];
</script>

<Story
  id="molecules-document-preview"
  title="DocumentPreview"
  component={DocumentPreview}
  category="Molecules"
  description="Inline reader with zoom, rotation, and download controls."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Preview panel</p>
            <p class="text-lg text-[--color-text-primary]">Switch document types or toggle toolbar controls.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.type.toUpperCase()}
          </span>
        </header>

        <DocumentPreview
          src="/docs/sample.pdf"
          title="Q2 Strategy Deck"
          type={props.type}
          showToolbar={props.showToolbar}
          showDownload={props.showDownload}
          showPrint={props.showPrint}
        />
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Attachment tray</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Pair the previewer with a quick selector for multi-file workspaces.
        </p>

        <div class="mt-5 space-y-3 text-sm text-[--color-text-primary]">
          {#each attachments as attachment}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-semibold">{attachment.name}</span>
                  <p class="text-xs text-[--color-text-secondary]">{attachment.type.toUpperCase()} · {attachment.size}</p>
                </div>
                <button class="rounded-full border border-[--color-border-primary] px-3 py-1 text-xs font-semibold">
                  Preview
                </button>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
