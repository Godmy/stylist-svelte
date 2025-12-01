<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Volume2, VolumeX, Play, Square, Circle, Mic, Headphones } from 'lucide-svelte';
  import { ScreenReaderTesterStyleManager } from './ScreenReaderTester.styles';

  type TestItem = {
    id: string;
    name: string;
    description: string;
    text: string;
    ariaLabel?: string;
    ariaDescription?: string;
  };

  type Props = {
    items?: TestItem[];
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    itemClass?: string;
    playerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    items = [
      {
        id: '1',
        name: 'Button',
        description: 'A simple button with aria-label',
        text: 'Click me',
        ariaLabel: 'Submit form',
      },
      {
        id: '2',
        name: 'Link',
        description: 'A link with descriptive text',
        text: 'Visit our documentation',
        ariaLabel: 'External documentation link',
      },
      {
        id: '3',
        name: 'Icon Button',
        description: 'An icon button with accessible name',
        text: '',
        ariaLabel: 'Close modal',
      },
      {
        id: '4',
        name: 'Form Input',
        description: 'Input with associated label',
        text: 'Enter your email',
        ariaLabel: 'Email address input field',
      }
    ],
    title = 'Screen Reader Tester',
    description = 'Test how your content sounds to screen readers',
    class: className = '',
    headerClass = '',
    itemClass = '',
    playerClass = '',
    ...restProps
  }: Props = $props();

  let currentItem: TestItem | null = $state(null);
  let isPlaying = $state(false);
  let volume = $state(80); // Default volume at 80%

  function readAloud(item: TestItem) {
    if (isPlaying && currentItem?.id === item.id) {
      // Stop if clicking the same item
      isPlaying = false;
      currentItem = null;
      return;
    }

    currentItem = item;
    isPlaying = true;

    // In a real implementation, this would use the browser's speech synthesis API
    console.log(`Reading aloud: ${item.ariaLabel || item.text}`);

    // Simulate reading
    setTimeout(() => {
      isPlaying = false;
      currentItem = null;
    }, 3000);
  }

  function stopReading() {
    isPlaying = false;
    currentItem = null;
  }

  function adjustVolume(newVolume: number) {
    volume = Math.min(Math.max(newVolume, 0), 100); // Clamp between 0 and 100
  }

  function getReadableText(item: TestItem): string {
    return item.ariaLabel || item.text || item.description || `Item ${item.id}`;
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(ScreenReaderTesterStyleManager.getContainerClass(className));
  const headerClassComputed = $derived(ScreenReaderTesterStyleManager.getHeaderClass(headerClass));
  const contentAreaClass = $derived(ScreenReaderTesterStyleManager.getContentAreaClass());
  const playerClassComputed = $derived(ScreenReaderTesterStyleManager.getPlayerClass(playerClass));
  const playbackIndicatorClass = $derived(ScreenReaderTesterStyleManager.getPlaybackIndicatorClass());
  const playbackDotClass = $derived(ScreenReaderTesterStyleManager.getPlaybackDotClass());
  const playbackTextClass = $derived(ScreenReaderTesterStyleManager.getPlaybackTextClass());
  const readyStateTextClass = $derived(ScreenReaderTesterStyleManager.getReadyStateTextClass());
  const volumeControlContainerClass = $derived(ScreenReaderTesterStyleManager.getVolumeControlContainerClass());
  const volumeIconClass = $derived(ScreenReaderTesterStyleManager.getVolumeIconClass());
  const volumeInputClass = $derived(ScreenReaderTesterStyleManager.getVolumeInputClass());
  const volumePercentageClass = $derived(ScreenReaderTesterStyleManager.getVolumePercentageClass());
  const stopButtonClass = $derived(ScreenReaderTesterStyleManager.getStopButtonClass());
  const testElementsContainerClass = $derived(ScreenReaderTesterStyleManager.getTestElementsContainerClass());
  const testElementsHeaderClass = $derived(ScreenReaderTesterStyleManager.getTestElementsHeaderClass());
  const tipsSectionClass = $derived(ScreenReaderTesterStyleManager.getTipsSectionClass());
  const tipsHeaderClass = $derived(ScreenReaderTesterStyleManager.getTipsHeaderClass());
  const tipsIconClass = $derived(ScreenReaderTesterStyleManager.getTipsIconClass());
  const tipsListClass = $derived(ScreenReaderTesterStyleManager.getTipsListClass());
  const elementPreviewClass = $derived(ScreenReaderTesterStyleManager.getElementPreviewClass());
</script>

<div class={containerClass} {...restProps}>
  <div class={headerClassComputed}>
    <div class="flex items-center">
      <Headphones class="h-6 w-6 text-[--color-text-secondary] mr-2" />
      <h3 class="text-lg font-medium text-[--color-text-primary]">{title}</h3>
    </div>
    <p class="mt-1 text-sm text-[--color-text-secondary]">{description}</p>
  </div>

  <div class={contentAreaClass}>
    <div class={playerClassComputed}>
      <div class="flex items-center">
        {#if isPlaying && currentItem}
          <div class="flex items-center">
            <div class={playbackIndicatorClass}>
              <div class={playbackDotClass}></div>
              <div class={playbackDotClass}></div>
              <div class={playbackDotClass}></div>
            </div>
            <span class={playbackTextClass}>
              Reading: {getReadableText(currentItem)}
            </span>
          </div>
        {:else}
          <div class={readyStateTextClass}>
            <Volume2 class="h-5 w-5 mr-2" />
            <span class="text-sm">Ready to test screen reader</span>
          </div>
        {/if}
      </div>

      <div class="flex items-center space-x-4">
        <div class={volumeControlContainerClass}>
          <Volume2 class={volumeIconClass} />
          <input
            type="range"
            min="0"
            max="100"
            bind:value={volume}
            class={volumeInputClass}
            oninput={(event) => adjustVolume(parseInt((event.target as HTMLInputElement).value))}
          />
          <span class={volumePercentageClass}>{volume}%</span>
        </div>

        {#if isPlaying}
          <button
            type="button"
            class={stopButtonClass}
            onclick={stopReading}
            aria-label="Stop reading"
          >
            <Square class="h-5 w-5" />
          </button>
        {/if}
      </div>
    </div>

    <div class={testElementsContainerClass}>
      <h4 class={testElementsHeaderClass}>Test Elements</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each items as item}
          <div class={ScreenReaderTesterStyleManager.getTestItemClass(currentItem?.id === item.id && isPlaying, itemClass)}>
            <div>
              <h5 class="font-medium text-[--color-text-primary]">{item.name}</h5>
              <p class="text-sm text-[--color-text-secondary] mt-1">{item.description}</p>

              <div class={elementPreviewClass}>
                {item.text ?
                  `<${item.text}>` :
                  item.ariaLabel ?
                    `<icon aria-label="${item.ariaLabel}">` :
                    `<element id="${item.id}">`
                }
              </div>
            </div>

            <button
              type="button"
              class={ScreenReaderTesterStyleManager.getTestButtonClass(currentItem?.id === item.id && isPlaying)}
              onclick={() => readAloud(item)}
              aria-label={`Test ${item.name} for screen readers`}
            >
              {#if currentItem?.id === item.id && isPlaying}
                <Square class="h-5 w-5" />
              {:else}
                <Play class="h-5 w-5" />
              {/if}
            </button>
          </div>
        {/each}
      </div>
    </div>

    <div class={tipsSectionClass}>
      <h4 class={tipsHeaderClass}>
        <Mic class={tipsIconClass} />
        Screen Reader Tips
      </h4>
      <ul class={tipsListClass}>
        <li>Always provide meaningful aria-labels or titles for interactive elements</li>
        <li>Use semantic HTML elements when possible (button, nav, main, etc.)</li>
        <li>Include alternative text for images and visual content</li>
        <li>Structure your content with proper headings hierarchy</li>
      </ul>
    </div>
  </div>
</div>