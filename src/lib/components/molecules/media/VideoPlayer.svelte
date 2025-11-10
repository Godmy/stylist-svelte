<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    src?: string;
    poster?: string;
    title?: string;
    width?: string;
    height?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    videoClass?: string;
    controlsClass?: string;
  };

  let {
    src,
    poster,
    title,
    width = '100%',
    height = 'auto',
    showControls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    class: hostClass = '',
    videoClass = '',
    controlsClass = '',
    ...restProps
  }: Props = $props();

  let videoRef: HTMLVideoElement | null = null;
  let isPlaying = $state(false);
  let isMuted = $state(muted);
  let currentTime = $state(0);
  let duration = $state(0);
  let volume = $state(1.0);

  function togglePlay() {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      isPlaying = !isPlaying;
    }
  }

  function toggleMute() {
    if (videoRef) {
      videoRef.muted = !videoRef.muted;
      isMuted = !isMuted;
    }
  }

  function handleLoadedMetadata() {
    if (videoRef) {
      duration = videoRef.duration;
    }
  }

  function handleTimeUpdate() {
    if (videoRef) {
      currentTime = videoRef.currentTime;
    }
  }

  function handleVolumeChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newVolume = parseFloat(target.value);
    if (videoRef) {
      videoRef.volume = newVolume;
      volume = newVolume;
      if (newVolume === 0) {
        isMuted = true;
        videoRef.muted = true;
      } else if (isMuted) {
        isMuted = false;
        videoRef.muted = false;
      }
    }
  }

  function handleProgressChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newTime = parseFloat(target.value);
    if (videoRef) {
      videoRef.currentTime = newTime;
      currentTime = newTime;
    }
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function reloadVideo() {
    if (videoRef) {
      videoRef.load();
      currentTime = 0;
    }
  }
</script>

<div class={`video-player bg-black rounded-lg overflow-hidden ${hostClass}`} style={`width: ${width}; height: ${height};`} {...restProps}>
  <video
    bind:this={videoRef}
    src={src}
    poster={poster}
    width={width}
    height={height}
    autoplay={autoPlay}
    loop={loop}
    muted={muted}
    onloadedmetadata={handleLoadedMetadata}
    ontimeupdate={handleTimeUpdate}
    class={`w-full h-full object-contain ${videoClass}`}
    controls={false}
  ></video>

  {#if showControls}
    <div class={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white ${controlsClass}`}>
      <div class="flex items-center justify-between mb-2">
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
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            oninput={handleVolumeChange}
            class="w-20 accent-white"
          />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onclick={reloadVideo}
          aria-label="Reload video"
        >
          <RotateCcw class="h-5 w-5" />
        </Button>
      </div>
      
      <div class="flex items-center">
        <span class="text-xs mr-2">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          oninput={handleProgressChange}
          class="flex-1 accent-white"
        />
        <span class="text-xs ml-2">{formatTime(duration)}</span>
      </div>
    </div>
  {/if}
  
  {#if title}
    <div class="p-2 text-white bg-black/50 text-sm">
      {title}
    </div>
  {/if}
</div>
