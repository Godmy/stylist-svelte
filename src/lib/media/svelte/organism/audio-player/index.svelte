<script lang="ts">
	import {
		createAudioPlayerState,
		type AudioPlayerProps
	} from '$stylist/media/function/state/audio-player';
	import { Icon as BaseIcon } from '$stylist';
	import { Button } from '$lib';

	let props: AudioPlayerProps = $props();
	const state = createAudioPlayerState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<audio
		bind:this={state.audioRef}
		src={state.src}
		autoplay={state.autoPlay}
		loop={state.loop}
		onloadedmetadata={() => state.handleLoadedMetadata()}
		ontimeupdate={() => state.handleTimeUpdate()}
	></audio>

	{#if state.title}
		<div class="font-medium text-[var(--color-text-primary)] mb-2 truncate">
			{state.title}
		</div>
	{/if}

	{#if state.showControls}
		<div class={`flex items-center justify-between ${state.controlsClass}`}>
			<div class="flex items-center space-x-2">
				<Button
					variant="ghost"
					size="sm"
					onclick={() => state.togglePlay()}
					aria-label={state.isPlaying ? 'Pause' : 'Play'}
				>
					{#if state.isPlaying}
						<BaseIcon name={state.icons.PAUSE} class="h-5 w-5" />
					{:else}
						<BaseIcon name={state.icons.PLAY} class="h-5 w-5" />
					{/if}
				</Button>

				<Button
					variant="ghost"
					size="sm"
					onclick={() => state.toggleMute()}
					aria-label={state.isMuted ? 'Unmute' : 'Mute'}
				>
					{#if state.isMuted}
						<BaseIcon name={state.icons.VOLUME_X} class="h-5 w-5" />
					{:else}
						<BaseIcon name={state.icons.VOLUME_2} class="h-5 w-5" />
					{/if}
				</Button>
			</div>

			<div class="flex items-center space-x-2 flex-1 mx-4">
				<span class="text-xs text-[var(--color-text-secondary)] w-10"
					>{state.formatTime(state.currentTime)}</span
				>
				<input
					type="range"
					min="0"
					max={state.duration || 100}
					value={state.currentTime}
					oninput={(e) => state.handleProgressChange(e)}
					class="flex-1 accent-blue-500"
				/>
				<span class="text-xs text-[var(--color-text-secondary)] w-10"
					>{state.formatTime(state.duration)}</span
				>
			</div>

			<div class="flex items-center space-x-2">
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={state.volume}
					oninput={(e) => state.handleVolumeChange(e)}
					class="w-20 accent-blue-500"
				/>
				<Button
					variant="ghost"
					size="sm"
					onclick={() => state.reloadAudio()}
					aria-label="Reload audio"
				>
					<BaseIcon name={state.icons.ROTATE_CCW} class="h-4 w-4" />
				</Button>
			</div>
		</div>
	{/if}
</div>
