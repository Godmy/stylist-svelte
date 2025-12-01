/**
 * LazyLoader Component
 *
 * This component follows the SAMO (SOLID, Atomic Design) principles:
 *
 * S - Single Responsibility Principle: This component is responsible only for lazy loading content functionality
 * O - Open/Closed Principle: Extensible through properties without modifying the component's core logic
 * L - Liskov Substitution Principle: Can be replaced with another lazy loader without affecting the API
 * I - Interface Segregation Principle: Provides a minimal and focused interface for lazy loading
 * D - Dependency Inversion Principle: Depends on abstractions rather than concrete implementations
 *
 * @since 2025.1
 * @status stable
 */
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ILazyLoaderProps } from './types';
  import { LazyLoaderStyleManager } from './styles';
  import { Loader, FileText } from 'lucide-svelte';

  let {
    content = [],
    threshold = 0.1,
    rootMargin = '0px',
    placeholder = 'Loading...',
    fallback = 'Failed to load content',
    preload = true,
    showPlaceholder = true,
    showProgress = true,
    variant = 'default',
    size = 'md',
    class: className = '',
    placeholderClass = '',
    contentClass = '',
    errorClass = '',
    ...restProps
  }: ILazyLoaderProps & HTMLAttributes<HTMLDivElement> = $props();

  let loadedContent: Record<string, boolean> = $state({});
  let loadingProgress: Record<string, number> = $state({});
  let loadError: Record<string, boolean> = $state({});
  let element: HTMLElement | null = $state(null);
  let elementRefs: Record<string, HTMLElement> = $state({});

  // Определяем стили
  const baseClasses = $derived(`${LazyLoaderStyleManager.getBaseClasses()} ${className}`);
  const contentContainerClasses = $derived(`${LazyLoaderStyleManager.getContentContainerClasses()} ${LazyLoaderStyleManager.getVariantClasses(variant)} ${contentClass}`);
  const placeholderContainerClasses = $derived(`${LazyLoaderStyleManager.getPlaceholderContainerClasses()} ${placeholderClass}`);
  const errorContainerClasses = $derived(`${LazyLoaderStyleManager.getErrorContainerClasses()} ${errorClass}`);
  const progressContainerClasses = $derived(LazyLoaderStyleManager.getProgressContainerClasses());
  const progressBarClasses = $derived(LazyLoaderStyleManager.getProgressBarClasses());
  const progressFillClasses = $derived(LazyLoaderStyleManager.getProgressFillClasses());
  const placeholderTextClasses = $derived(LazyLoaderStyleManager.getPlaceholderTextClasses());
  const errorTextClasses = $derived(LazyLoaderStyleManager.getErrorTextClasses());
  const footerClasses = $derived(LazyLoaderStyleManager.getFooterClasses());

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

<div class={baseClasses} {...restProps} bind:this={element}>
  {#each content as item}
    <div
      class={contentContainerClasses}
      bind:this={elementRefs[item.id]}
      use:makeRef={(item.id)}
    >
      {#if loadError[item.id]}
        <div class={errorContainerClasses}>
          <div class="text-center">
            <FileText class="h-12 w-12 text-red-400 mx-auto mb-2" />
            <p class={errorTextClasses}>{fallback}</p>
          </div>
        </div>
      {:else if !loadedContent[item.id]}
        <div class={placeholderContainerClasses}>
          {#if showPlaceholder}
            <div class="text-center mb-4">
              <Loader class="h-8 w-8 text-[--color-primary-500] animate-spin mx-auto" />
              <p class={placeholderTextClasses}>{placeholder}</p>
            </div>
          {/if}

          {#if showProgress && loadingProgress[item.id] > 0}
            <div class={progressContainerClasses}>
              <div class="flex justify-between text-xs text-[--color-text-secondary] mb-1">
                <span>Loading...</span>
                <span>{loadingProgress[item.id]}%</span>
              </div>
              <div class={progressBarClasses}>
                <div
                  class={progressFillClasses}
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
            <p class="text-sm text-[--color-text-secondary] mt-2">{item.title || item.src}</p>
          </div>
        {/if}
      {/if}

      {#if item.title}
        <div class={footerClasses}>
          <h3 class="text-sm font-medium text-[--color-text-primary]">{item.title}</h3>
        </div>
      {/if}
    </div>
  {/each}
</div>