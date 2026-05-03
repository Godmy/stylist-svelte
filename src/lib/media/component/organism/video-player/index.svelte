<script lang="ts">
	import {
		createVideoPlayerState
	} from '$stylist/media/function/state/video-player';
	import type { VideoPlayerProps } from '$stylist/media/interface/recipe/video-player-video-player-props';
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$lib';

	let props: VideoPlayerProps = $props();
	const state = createVideoPlayerState(props);
</script>

<div class={state.hostClasses} style={state.hostStyle} {...state.restProps}>
	<video
		bind:this={state.videoRef}
		src={state.src}
		poster={state.poster}
		width={state.width}
		height={state.height}
		autoplay={state.autoPlay}
		loop={state.loop}
		onloadedmetadata={() => state.handleLoadedMetadata()}
		ontimeupdate={() => state.handleTimeUpdate()}
		class={`w-full h-full object-contain ${state.videoClass}`}
		controls={false}
	>
		<track kind="captions" label="No captions available" srclang="en" src="" />
	</video>

	{#if state.showControls}
		<div
			class={`absolute bottom-0 left-0 right-0 p-4 text-[var(--color-text-inverse)] ${state.controlsClass}`}
			style="--gradient-start: transparent; --gradient-end: color-mix(in srgb, var(--color-text-primary) 80%, transparent); background-image: var(--gradient-directional-vertical);"
		>
			<div class="flex items-center justify-between mb-2">
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

					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={state.volume}
						oninput={(e) => state.handleVolumeChange(e)}
						class="w-20 accent-white"
					/>
				</div>

				<Button
					variant="ghost"
					size="sm"
					onclick={() => state.reloadVideo()}
					aria-label="Reload video"
				>
					<BaseIcon name={state.icons.ROTATE_CCW} class="h-5 w-5" />
				</Button>
			</div>

			<div class="flex items-center">
				<span class="text-xs mr-2">{state.formatTime(state.currentTime)}</span>
				<input
					type="range"
					min="0"
					max={state.duration || 100}
					value={state.currentTime}
					oninput={(e) => state.handleProgressChange(e)}
					class="flex-1 accent-white"
				/>
				<span class="text-xs ml-2">{state.formatTime(state.duration)}</span>
			</div>
		</div>
	{/if}

	{#if state.title}
		<div class="p-2 text-[var(--color-text-inverse)] bg-[var(--color-neutral-900)]/50 text-sm">
			{state.title}
		</div>
	{/if}
</div>
