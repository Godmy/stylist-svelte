<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { createAudioPlayerState, type AudioPlayerProps } from '$stylist/media/function/state/audio-player';
  import { Icon as BaseIcon } from '$stylist';
const Play = 'play';
const Pause = 'pause';
const Volume2 = 'volume-2';
const VolumeX = 'volume-x';
const RotateCcw = 'rotate-ccw';

  import { Button } from '$lib';

  let props: AudioPlayerProps = $props();
  const vm = createAudioPlayerState(props);

  let audioRef: HTMLAudioElement | null = null;
  let isPlaying = $state(false);
  let isMuted = $state(vm.muted);
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

  function reloadAudio() {
    if (audioRef) {
      audioRef.load();
      currentTime = 0;
    }
  }
</script>

<div class={vm.hostClasses} {...vm.restProps}>
  <audio
    bind:this={audioRef}
    src={vm.src}
    autoplay={vm.autoPlay}
    loop={vm.loop}
    muted={vm.muted}
    onloadedmetadata={handleLoadedMetadata}
    ontimeupdate={handleTimeUpdate}
  ></audio>

  {#if vm.title}
    <div class="font-medium text-[var(--color-text-primary)] mb-2 truncate">
      {vm.title}
    </div>
  {/if}

  {#if vm.showControls}
    <div class={`flex items-center justify-between ${vm.controlsClass}`}>
      <div class="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onclick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {#if isPlaying}
            <BaseIcon name={Pause} class="h-5 w-5" />
          {:else}
            <BaseIcon name={Play} class="h-5 w-5" />
          {/if}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onclick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {#if isMuted}
            <BaseIcon name={VolumeX} class="h-5 w-5" />
          {:else}
            <BaseIcon name={Volume2} class="h-5 w-5" />
          {/if}
        </Button>
      </div>

      <div class="flex items-center space-x-2 flex-1 mx-4">
        <span class="text-xs text-[var(--color-text-secondary)] w-10">{vm.formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          oninput={handleProgressChange}
          class="flex-1 accent-blue-500"
        />
        <span class="text-xs text-[var(--color-text-secondary)] w-10">{vm.formatTime(duration)}</span>
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
          <BaseIcon name={RotateCcw} class="h-4 w-4" />
        </Button>
      </div>
    </div>
  {/if}
</div>
