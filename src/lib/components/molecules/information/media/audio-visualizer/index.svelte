<script lang="ts">
  let {
    src = '',
    alt = 'Audio Visualization',
    title = 'Audio Track',
    author = 'Unknown Artist',
    duration = '0:00',
    isPlaying = false,
    onPlayToggle = (isPlaying: boolean) => {},
    class: className = ''
  } = $props<{
    src?: string;
    alt?: string;
    title?: string;
    author?: string;
    duration?: string;
    isPlaying?: boolean;
    onPlayToggle?: (isPlaying: boolean) => void;
    class?: string;
  }>();

  let localIsPlaying = $state(isPlaying);

  $effect(() => {
    localIsPlaying = isPlaying;
  });

  const togglePlay = () => {
    localIsPlaying = !localIsPlaying;
    onPlayToggle(localIsPlaying);
  };
</script>

<div class={`flex items-center p-4 bg-white rounded-lg shadow ${className}`}>
  {#if src}
    <img src={src} alt={alt} class="w-16 h-16 rounded-md mr-4" />
  {/if}
  <div class="flex-1 min-w-0">
    <h4 class="font-semibold truncate">{title}</h4>
    <p class="text-sm text-gray-600 truncate">{author}</p>
  </div>
  <div class="text-sm text-gray-500 mr-4">{duration}</div>
  <button
    onclick={togglePlay}
    class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
  >
    {#if localIsPlaying}
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
    {:else}
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
      </svg>
    {/if}
  </button>
</div>