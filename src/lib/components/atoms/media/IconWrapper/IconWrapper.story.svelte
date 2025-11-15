<script lang="ts">
  import IconWrapper from './IconWrapper.svelte';
  import Icon from '../Icon/Icon.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type IconSize = 'sm' | 'md' | 'lg';
  type IconVariant = 'solid' | 'outline' | 'ghost';
  type IconShape = 'circle' | 'square' | 'rounded';
  type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

  type IconWrapperStoryProps = {
    size: IconSize;
    variant: IconVariant;
    shape: IconShape;
    color: IconColor;
    icon: 'search' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-down' | 'chevron-up';
  };

  const controls: ControlConfig[] = [
    { name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
    { name: 'variant', type: 'select', defaultValue: 'solid', options: ['solid', 'outline', 'ghost'] },
    { name: 'shape', type: 'select', defaultValue: 'circle', options: ['circle', 'square', 'rounded'] },
    { name: 'color', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
    { name: 'icon', type: 'select', defaultValue: 'check', options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up'] }
  ];
</script>

{#snippet primaryIcon()}
  <Icon name="check" size="sm" class="text-current" />
{/snippet}

{#snippet secondaryIcon()}
  <Icon name="search" size="sm" class="text-current" />
{/snippet}

{#snippet successIcon()}
  <Icon name="plus" size="sm" class="text-current" />
{/snippet}

{#snippet warningIcon()}
  <Icon name="minus" size="sm" class="text-current" />
{/snippet}

{#snippet dangerIcon()}
  <Icon name="x" size="sm" class="text-current" />
{/snippet}

<Story
  id="atoms-icon-wrapper"
  title="IconWrapper"
  category="Atoms"
  component={IconWrapper}
  description="Styles any icon-sized content with consistent sizing, color tokens, and decorative variants."
  tags={['icon', 'badge', 'tokens']}
  controls={controls}
>
  {#snippet children(props: IconWrapperStoryProps)}
    {#snippet iconContent()}
      <Icon name={props.icon} size="sm" class="text-current" />
    {/snippet}

    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-4 rounded-xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
        <IconWrapper
          size={props.size}
          variant={props.variant}
          shape={props.shape}
          color={props.color}
          content={iconContent}
        />

        <div class="text-sm text-gray-600 dark:text-gray-300">
          <p class="font-semibold text-gray-900 dark:text-white">Interactive preview</p>
          <p>Variant: {props.variant}, Shape: {props.shape}</p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
          <p class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Primary</p>
          <div class="flex items-center gap-3">
            <IconWrapper size="sm" variant="outline" color="primary" content={primaryIcon} />
            <IconWrapper size="md" variant="ghost" color="primary" content={primaryIcon} />
            <IconWrapper size="lg" variant="solid" color="primary" content={primaryIcon} />
          </div>
        </div>

        <div class="rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
          <p class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Secondary</p>
          <div class="flex items-center gap-3">
            <IconWrapper size="sm" variant="outline" color="secondary" content={secondaryIcon} />
            <IconWrapper size="md" variant="ghost" color="secondary" content={secondaryIcon} />
            <IconWrapper size="lg" variant="solid" color="secondary" content={secondaryIcon} />
          </div>
        </div>

        <div class="rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
          <p class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Success</p>
          <div class="flex items-center gap-3">
            <IconWrapper size="sm" variant="outline" color="success" content={successIcon} />
            <IconWrapper size="md" variant="ghost" color="success" content={successIcon} />
            <IconWrapper size="lg" variant="solid" color="success" content={successIcon} />
          </div>
        </div>

        <div class="rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
          <p class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Warning</p>
          <div class="flex items-center gap-3">
            <IconWrapper size="sm" variant="outline" color="warning" content={warningIcon} />
            <IconWrapper size="md" variant="ghost" color="warning" content={warningIcon} />
            <IconWrapper size="lg" variant="solid" color="warning" content={warningIcon} />
          </div>
        </div>

        <div class="rounded-lg border border-gray-200/80 p-3 dark:border-gray-700/80">
          <p class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Danger</p>
          <div class="flex items-center gap-3">
            <IconWrapper size="sm" variant="outline" color="danger" content={dangerIcon} />
            <IconWrapper size="md" variant="ghost" color="danger" content={dangerIcon} />
            <IconWrapper size="lg" variant="solid" color="danger" content={dangerIcon} />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>
