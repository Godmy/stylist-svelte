<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Loader, FileText } from 'lucide-svelte';

  type LazyContent = {
    id: string;
    type: 'image' | 'iframe' | 'component';
    src: string;
    alt?: string;
    title?: string;
    loading?: 'lazy' | 'eager';
  };

  type Props = {
    content: LazyContent[];
    threshold?: number; // Intersection observer threshold
    rootMargin?: string; // Intersection observer root margin
    placeholder?: string; // Placeholder content while loading
    fallback?: string; // Content to show if loading fails
    preload?: boolean; // Preload resources when approaching viewport
    showPlaceholder?: boolean;
    showProgress?: boolean;
    class?: string;
    placeholderClass?: string;
    contentClass?: string;
    errorClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    content = [],
    threshold = 0.1,
    rootMargin = '0px',
    placeholder = 'Loading...',
    fallback = 'Failed to load content',
    preload = true,
    showPlaceholder = true,
    showProgress = true,
    class: className = '',
    placeholderClass = '',
    contentClass = '',
    errorClass = '',
    ...restProps
  }: Props = $props();

  let loadedContent: Record<string, boolean> = $state({});
  let loadingProgress: Record<string, number> = $state({});
  let loadError: Record<string, boolean> = $state({});
  let element: HTMLElement | null = $state(null);
  let elementRefs: Record<string, HTMLElement> = $state({});

  // Effect to handle intersection observer
  $effect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Use the first content item when the container is observed
            if (content.length > 0) {
              loadContent(content[0].id);
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );
    
    observer.observe(element);
    
    // Cleanup function
    return () => {
      observer.disconnect();
    };
  });

  // Function to load content lazily
  function loadContent(id: string) {
    if (loadedContent[id]) return; // Already loaded

    loadedContent = { ...loadedContent, [id]: true };

    // Simulate loading progress
    if (showProgress) {
      loadingProgress = { ...loadingProgress, [id]: 0 };

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        loadingProgress = { ...loadingProgress, [id]: progress };

        if (progress >= 100) {
          clearInterval(interval);
          // Remove progress once fully loaded
          setTimeout(() => {
            if (loadingProgress[id]) {
              delete loadingProgress[id];
              loadingProgress = { ...loadingProgress };
            }
          }, 300);
        }
      }, 100);
    }
  }

  // Function to handle loading error
  function handleError(id: string) {
    loadError = { ...loadError, [id]: true };
  }
  
  // Action function to handle element binding
  function makeRef(node: HTMLElement, id: string) {
    elementRefs = { ...elementRefs, [id]: node };
    
    return {
      destroy() {
        // Clean up the reference when the node is destroyed
        delete elementRefs[id];
        elementRefs = { ...elementRefs };
      }
    };
  }

  // Initialize loading state for all content
  $effect(() => {
    const initialLoaded: Record<string, boolean> = {};
    const initialProgress: Record<string, number> = {};
    const initialError: Record<string, boolean> = {};

    content.forEach(item => {
      initialLoaded[item.id] = false;
      initialProgress[item.id] = 0;
      initialError[item.id] = false;
    });

    loadedContent = initialLoaded;
    loadingProgress = initialProgress;
    loadError = initialError;
  });
</script>

<div class={`space-y-6 ${className}`} {...restProps}>
  {#each content as item}
    <div
      class={`relative rounded-lg overflow-hidden border border-gray-200 ${contentClass}`}
      bind:this={elementRefs[item.id]}
      use:makeRef={(item.id)}
    >
      {#if loadError[item.id]}
        <div class={`flex items-center justify-center p-8 ${errorClass}`}>
          <div class="text-center">
            <FileText class="h-12 w-12 text-red-400 mx-auto mb-2" />
            <p class="text-sm text-gray-500">{fallback}</p>
          </div>
        </div>
      {:else if !loadedContent[item.id]}
        <div class={`flex flex-col items-center justify-center p-8 ${placeholderClass}`}>
          {#if showPlaceholder}
            <div class="text-center mb-4">
              <Loader class="h-8 w-8 text-blue-500 animate-spin mx-auto" />
              <p class="mt-2 text-sm text-gray-500">{placeholder}</p>
            </div>
          {/if}

          {#if showProgress && loadingProgress[item.id] > 0}
            <div class="w-full max-w-xs">
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Loading...</span>
                <span>{loadingProgress[item.id]}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-blue-500 transition-all duration-300"
                  style={`width: ${loadingProgress[item.id]}%`}
                ></div>
              </div>
            </div>
          {/if}
        </div>
      {:else}
        {#if item.type === 'image'}
          <img
            src={item.src}
            alt={item.alt || item.title || `Content ${item.id}`}
            class="w-full h-auto"
            onerror={() => handleError(item.id)}
          />
        {:else if item.type === 'iframe'}
          <iframe
            src={item.src}
            title={item.title}
            class="w-full h-64"
            onerror={() => handleError(item.id)}
          ></iframe>
        {:else}
          <div class="p-4">
            <p>Content component would be loaded here: {item.id}</p>
            <p class="text-sm text-gray-500 mt-2">{item.title || item.src}</p>
          </div>
        {/if}
      {/if}

      {#if item.title}
        <div class="p-3 bg-gray-50 border-t border-gray-200">
          <h3 class="text-sm font-medium text-gray-900">{item.title}</h3>
        </div>
      {/if}
    </div>
  {/each}
</div>