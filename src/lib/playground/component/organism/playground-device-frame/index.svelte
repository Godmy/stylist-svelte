<script lang="ts">
	import createPlaygroundDeviceFrameState from '$stylist/playground/function/state/playground-device-frame/index.svelte';
	import type { PlaygroundDeviceFrameProps } from '$stylist/playground/type/struct/playground-device-frame-props';
	let props: PlaygroundDeviceFrameProps = $props();
	const state = createPlaygroundDeviceFrameState(props);
</script>

{#if state.showFrame}
	<div class="flex items-center justify-center p-8">
		<!-- Device Frame -->
		<div class="relative flex flex-col items-center">
			<!-- Device Name Badge -->
			<div
				class="mb-4 rounded-full bg-gradient-to-r px-4 py-2 {state.spec
					.color} text-xs font-bold text-white shadow-lg"
			>
				{state.spec.name} | {state.spec.width}px x {state.spec.height}px
			</div>

			<!-- Frame Container -->
			<div class="relative">
				{#if state.device === 'mobile'}
					<!-- Mobile Phone Frame -->
					<div class="relative">
						<!-- Phone body -->
						<div
							class="bg-gradient-to-br {state.spec.color} rounded-[3rem] p-3 shadow-2xl"
							style="width: {state.spec.width + 24}px;"
						>
							<!-- Notch (iPhone style) -->
							<div class="mb-2 flex justify-center">
								<div class="flex h-6 w-32 items-center justify-center gap-2 rounded-full bg-black">
									<div class="h-1 w-12 rounded-full bg-gray-800"></div>
									<div class="h-2 w-2 rounded-full bg-gray-800"></div>
								</div>
							</div>

							<!-- Screen -->
							<div
								class="overflow-hidden rounded-[2.5rem] bg-white shadow-inner dark:bg-gray-900"
								style="width: {state.spec.width}px; height: {state.spec.height}px;"
							>
								<div class="h-full w-full overflow-auto">
									{#if state.children}
										{#if state.children}{@render state.children()}{/if}
									{/if}
								</div>
							</div>

							<!-- Home indicator (iPhone style) -->
							<div class="mt-2 flex justify-center">
								<div class="h-1 w-32 rounded-full bg-gray-600"></div>
							</div>
						</div>

						<!-- Volume buttons -->
						<div class="absolute top-24 left-0 h-12 w-1 rounded-l-full bg-gray-800"></div>
						<div class="absolute top-40 left-0 h-12 w-1 rounded-l-full bg-gray-800"></div>

						<!-- Power button -->
						<div class="absolute top-32 right-0 h-16 w-1 rounded-r-full bg-gray-800"></div>
					</div>
				{:else if state.device === 'tablet'}
					<!-- Tablet Frame -->
					<div class="relative">
						<!-- Tablet body -->
						<div
							class="bg-gradient-to-br {state.spec.color} rounded-[2rem] p-4 shadow-2xl"
							style="width: {state.spec.width + 32}px;"
						>
							<!-- Camera -->
							<div class="mb-2 flex justify-center">
								<div class="h-3 w-3 rounded-full bg-gray-900"></div>
							</div>

							<!-- Screen -->
							<div
								class="overflow-hidden rounded-[1.5rem] bg-white shadow-inner dark:bg-gray-900"
								style="width: {state.spec.width}px; height: {state.spec.height}px;"
							>
								<div class="h-full w-full overflow-auto">
									{#if state.children}
										{#if state.children}{@render state.children()}{/if}
									{/if}
								</div>
							</div>

							<!-- Home button -->
							<div class="mt-2 flex justify-center">
								<div class="h-12 w-12 rounded-full border-2 border-gray-700 bg-gray-900"></div>
							</div>
						</div>

						<!-- Volume buttons -->
						<div class="absolute top-32 right-0 h-16 w-1 rounded-r-full bg-gray-800"></div>
					</div>
				{:else if state.device === 'desktop'}
					<!-- Desktop Monitor Frame -->
					<div class="relative flex flex-col items-center">
						<!-- Monitor -->
						<div class="bg-gradient-to-br {state.spec.color} rounded-2xl p-4 shadow-2xl">
							<!-- Bezel -->
							<div class="rounded-xl bg-black p-6">
								<!-- Screen -->
								<div
									class="overflow-hidden rounded-lg bg-white shadow-inner dark:bg-gray-900"
									style="width: {state.spec.width}px; height: {state.spec.height}px;"
								>
									<div class="h-full w-full overflow-auto">
										{#if state.children}
											{#if state.children}{@render state.children()}{/if}
										{/if}
									</div>
								</div>
							</div>

							<!-- Monitor logo/light -->
							<div class="mt-2 flex justify-center">
								<div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
							</div>
						</div>

						<!-- Stand -->
						<div class="h-2 w-32 bg-gradient-to-r {state.spec.color} mt-2 rounded-full"></div>
						<div class="h-3 w-48 bg-gradient-to-r {state.spec.color} mt-1 rounded-full"></div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<!-- Fullscreen mode - no frame -->
	<div class="h-full w-full">
		{#if state.children}
			{#if state.children}{@render state.children()}{/if}
		{/if}
	</div>
{/if}

<style>
	/* Add smooth scrolling */
	:global(.device-content) {
		scroll-behavior: smooth;
	}
</style>
