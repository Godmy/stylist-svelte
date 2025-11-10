<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Volume2, VolumeX, Play, Square, Circle, Mic, Headphones } from 'lucide-svelte';

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
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Headphones class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">{description}</p>
  </div>

  <div class="p-6">
    <div class={`flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg ${playerClass}`}>
      <div class="flex items-center">
        {#if isPlaying && currentItem}
          <div class="flex items-center">
            <div class="animate-pulse flex space-x-1">
              <div class="h-2 w-2 bg-blue-500 rounded-full"></div>
              <div class="h-2 w-2 bg-blue-500 rounded-full"></div>
              <div class="h-2 w-2 bg-blue-500 rounded-full"></div>
            </div>
            <span class="ml-3 text-sm font-medium text-gray-700">
              Reading: {getReadableText(currentItem)}
            </span>
          </div>
        {:else}
          <div class="flex items-center text-gray-500">
            <Volume2 class="h-5 w-5 mr-2" />
            <span class="text-sm">Ready to test screen reader</span>
          </div>
        {/if}
      </div>
      
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <Volume2 class="h-4 w-4 text-gray-500 mr-2" />
          <input
            type="range"
            min="0"
            max="100"
            bind:value={volume}
            class="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            oninput={(event) => adjustVolume(parseInt((event.target as HTMLInputElement).value))}
          />
          <span class="ml-2 text-sm text-gray-500 w-10">{volume}%</span>
        </div>
        
        {#if isPlaying}
          <button
            type="button"
            class="p-2 text-red-600 hover:text-red-800"
            onclick={stopReading}
            aria-label="Stop reading"
          >
            <Square class="h-5 w-5" />
          </button>
        {/if}
      </div>
    </div>

    <div class="space-y-4">
      <h4 class="text-sm font-medium text-gray-900">Test Elements</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each items as item}
          <div class={`border rounded-lg p-4 flex items-start justify-between ${itemClass} ${
            currentItem?.id === item.id && isPlaying ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}>
            <div>
              <h5 class="font-medium text-gray-900">{item.name}</h5>
              <p class="text-sm text-gray-500 mt-1">{item.description}</p>
              
              <div class="mt-2 p-2 bg-gray-100 rounded text-sm">
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
              class={`p-2 rounded-full ${
                currentItem?.id === item.id && isPlaying 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
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

    <div class="mt-8 p-4 bg-blue-50 rounded-lg">
      <h4 class="text-sm font-medium text-blue-800 flex items-center">
        <Mic class="h-4 w-4 mr-2" />
        Screen Reader Tips
      </h4>
      <ul class="mt-2 text-sm text-blue-700 list-disc pl-5 space-y-1">
        <li>Always provide meaningful aria-labels or titles for interactive elements</li>
        <li>Use semantic HTML elements when possible (button, nav, main, etc.)</li>
        <li>Include alternative text for images and visual content</li>
        <li>Structure your content with proper headings hierarchy</li>
      </ul>
    </div>
  </div>
</div>