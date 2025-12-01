<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    src?: string;
    title?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    controlsClass?: string;
  };

  let {
    src,
    title,
    showControls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    class: hostClass = '',
    controlsClass = '',
    ...restProps
  }: Props = $props();

  let audioRef: HTMLAudioElement | null = null;
  let isPlaying = $state(false);
  let isMuted = $state(muted);
  let currentTime = $state(0);
  let duration = $state(0);
  let volume = $state(1.0);

  function togglePlay() {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      isPlaying = !isPlaying;
    }
  }

  function toggleMute() {
    if (audioRef) {
      audioRef.muted = !audioRef.muted;
      isMuted = !isMuted;
    }
  }

  function handleLoadedMetadata() {
    if (audioRef) {
      duration = audioRef.duration;
    }
  }

  function handleTimeUpdate() {
    if (audioRef) {
      currentTime = audioRef.currentTime;
    }
  }

  function handleVolumeChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newVolume = parseFloat(target.value);
    if (audioRef) {
      audioRef.volume = newVolume;
      volume = newVolume;
      if (newVolume === 0) {
        isMuted = true;
        audioRef.muted = true;
      } else if (isMuted) {
        isMuted = false;
        audioRef.muted = false;
      }
    }
  }

  function handleProgressChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newTime = parseFloat(target.value);
    if (audioRef) {
      audioRef.currentTime = newTime;
      currentTime = newTime;
    }
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function reloadAudio() {
    if (audioRef) {
      audioRef.load();
      currentTime = 0;
    }
  }
</script>

<div class={`audio-player bg-white rounded-lg p-4 border border-gray-200 ${hostClass}`} {...restProps}>
  <audio
    bind:this={audioRef}
    src={src}
    autoplay={autoPlay}
    loop={loop}
    muted={muted}
    onloadedmetadata={handleLoadedMetadata}
    ontimeupdate={handleTimeUpdate}
  ></audio>

  {#if title}
    <div class="font-medium text-gray-900 mb-2 truncate">
      {title}
    </div>
  {/if}

  {#if showControls}
    <div class={`flex items-center justify-between ${controlsClass}`}>
      <div class="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onclick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {#if isPlaying}
            <Pause class="h-5 w-5" />
          {:else}
            <Play class="h-5 w-5" />
          {/if}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onclick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {#if isMuted}
            <VolumeX class="h-5 w-5" />
          {:else}
            <Volume2 class="h-5 w-5" />
          {/if}
        </Button>
      </div>
      
      <div class="flex items-center space-x-2 flex-1 mx-4">
        <span class="text-xs text-gray-500 w-10">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          oninput={handleProgressChange}
          class="flex-1 accent-blue-500"
        />
        <span class="text-xs text-gray-500 w-10">{formatTime(duration)}</span>
      </div>
      
      <div class="flex items-center space-x-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          oninput={handleVolumeChange}
          class="w-20 accent-blue-500"
        />
        <Button
          variant="ghost"
          size="sm"
          onclick={reloadAudio}
          aria-label="Reload audio"
        >
          <RotateCcw class="h-4 w-4" />
        </Button>
      </div>
    </div>
  {/if}
</div>
