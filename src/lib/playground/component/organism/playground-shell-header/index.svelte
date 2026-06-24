<script lang="ts">
	import type { RecipePlaygroundShellHeader } from '$stylist/playground/interface/recipe/playground-shell-header';

	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import { createPlaygroundShellHeaderState } from '$stylist/playground/function/state/playground-shell-header/index.svelte';

	const ZoomIn = 'zoom-in';

	const ZoomOut = 'zoom-out';

	const Smartphone = 'smartphone';

	const Tablet = 'tablet';

	const Monitor = 'monitor';

	const ChevronDown = 'chevron-down';

	const Check = 'check';

	const Camera = 'camera';

	const Sparkles = 'sparkles';

	const Pencil = 'pencil';

	const X = 'x';

	let props: RecipePlaygroundShellHeader = $props();

	const state = createPlaygroundShellHeaderState(props);
</script>

ï»¿<svelte:window
	onclick={() => {
		state.closeAllMenus();
	}}
/>

<div class={`playground-shell-header ${state.className}`}>
	<div class="psh-left">
		<a href="/" class="psh-logo-link">
			<img
				src="/stylist.png"
				alt="RecipeStylist"
				style="width:2.5rem;height:2.5rem"
				loading="lazy"
				decoding="async"
			/>
		</a>

		<button
			onclick={state.onToggleComponentTree}
			class={`${state.showComponentTree ? 'psh-btn-active' : 'psh-btn-hover'} _c1`}
		>
			<span class={state.showComponentTree ? 'psh-text-accent _c2' : 'psh-text-default _c2'}>
				STYLIST
			</span>
		</button>

		<button
			onclick={state.onToggleAIPanel}
			class={`${state.showAIPanel ? 'psh-btn-active' : 'psh-btn-hover'} _c1`}
			title="AI Panel"
		>
			<BaseIcon
				name={Sparkles}
				class={state.showAIPanel ? 'psh-text-accent' : 'psh-icon-muted'}
				style="width:1.25rem;height:1.25rem"
			/>

			<span class={state.showAIPanel ? 'psh-text-accent _c3' : 'psh-text-default _c3'}>AI</span>
		</button>

		<button
			onclick={state.onToggleDrawingMode}
			class={`${state.drawingMode ? 'psh-draw-on' : 'psh-draw-off'} _c4 _c2`}
			title="Drawing mode"
		>
			<BaseIcon name={Pencil} style="width:1.25rem;height:1.25rem" />
		</button>

		{#if state.drawingMode}
			<div class="psh-color-dot-wrap">
				<div
					onclick={(e) => {
						e.stopPropagation();
						state.drawColorMenuOpen = !state.drawColorMenuOpen;
					}}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							e.stopPropagation();
							state.drawColorMenuOpen = !state.drawColorMenuOpen;
						}
					}}
					class="psh-draw-dot"
					style="background-color: {state.drawColor}; border-color: {state.drawingMode
						? 'var(--color-error-500)'
						: 'currentColor'};"
					title="Select drawing color"
					role="button"
					tabindex="0"
				></div>

				{#if state.drawColorMenuOpen}
					<div class="psh-color-menu">
						<div class="psh-color-grid">
							{#each state.drawColors as color}
								<button
									onclick={(e) => {
										e.stopPropagation();
										state.onChangeDrawColor?.(color.value);
										state.drawColorMenuOpen = false;
									}}
									class={`psh-color-btn ${color.value === state.drawColor ? 'psh-color-active' : 'psh-color-inactive'} _c3`}
									style="background-color: {color.value};"
									title={color.name}
								></button>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<button
				onclick={state.onToggleDrawingMode}
				class="psh-draw-close-btn"
				title="Close drawing mode"
			>
				<BaseIcon name={X} style="width:1.25rem;height:1.25rem" />
			</button>
		{/if}

		<button onclick={state.onTakeScreenshot} class="psh-icon-btn" title="Take screenshot">
			<BaseIcon name={Camera} style="width:1.25rem;height:1.25rem" />
		</button>
	</div>

	{#if state.showComponentTree}
		<div class="psh-center">
			<div class="psh-device-wrap">
				<button
					class="psh-device-btn"
					aria-haspopup="listbox"
					aria-expanded={state.deviceMenuOpen}
					onclick={(e) => {
						e.stopPropagation();
						state.deviceMenuOpen = !state.deviceMenuOpen;
					}}
				>
					{#if state.selectedDevice}
						<BaseIcon
							name={state.selectedDevice.icon}
							style="width:1rem;height:1rem;color:var(--playground-accent)"
						/>

						<div class="psh-device-info">
							<span class="psh-device-label">{state.selectedDevice.label}</span>

							<span class="psh-device-desc">{state.selectedDevice.description}</span>
						</div>
					{/if}

					<BaseIcon
						name={ChevronDown}
						class={`${state.deviceMenuOpen ? 'psh-rotate-180' : ''} _c7`}
						style="width:0.875rem;height:0.875rem"
					/>
				</button>

				{#if state.deviceMenuOpen}
					<div class="psh-device-menu" role="listbox">
						{#each state.deviceOptions as option}
							<button
								class={`${option.id === state.currentViewport ? 'psh-viewport-active' : 'psh-viewport'} _c8`}
								role="option"
								aria-selected={option.id === state.currentViewport}
								onclick={(e) => {
									e.stopPropagation();
									state.selectDevice(option.id);
								}}
							>
								<BaseIcon name={option.icon} style="width:1rem;height:1rem;margin-top:0.125rem" />

								<div class="psh-device-option-info">
									<span style="font-size:0.75rem;font-weight:600">{option.label}</span>

									<span class="psh-device-desc">{option.description}</span>
								</div>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			{#if state.currentViewport !== 'fullscreen'}
				<button
					class={state.toggleButtonClasses(state.showDeviceFrame)}
					aria-pressed={state.showDeviceFrame}
					title="SlotToggle device frame"
					onclick={state.onToggleDeviceFrame}
				>
					<span class={state.showDeviceFrame ? 'psh-toggle-on _c5' : 'psh-toggle-off _c5'}></span>

					<svg
						style="width:0.875rem;height:0.875rem"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<rect x="4" y="3" width="16" height="18" rx="2" stroke-width="2" />

						<path d="M9 21h6" stroke-width="2" stroke-linecap="round" />
					</svg>

					<span class="psh-toggle-label"
						>Frame <span class="psh-toggle-state">{state.showDeviceFrame ? 'ON' : 'OFF'}</span
						></span
					>
				</button>
			{/if}

			<div class="psh-zoom-wrap">
				<button onclick={state.onZoomOut} class="psh-zoom-btn" title="Zoom out (Ctrl + -)">
					<BaseIcon name={ZoomOut} class="_c6 _c4" />
				</button>

				<span class="psh-zoom-pct">{Math.round(state.zoom * 100)}%</span>

				<button onclick={state.onZoomIn} class="psh-zoom-btn" title="Zoom in (Ctrl + +)">
					<BaseIcon name={ZoomIn} class="_c6 _c4" />
				</button>
			</div>

			<button
				class={state.toggleButtonClasses(state.showGrid)}
				aria-pressed={state.showGrid}
				title="SlotToggle grid"
				onclick={state.onToggleGrid}
			>
				<span class={`${state.showGrid ? 'psh-toggle-on' : 'psh-toggle-off'} _c5`}></span>

				<svg
					style="width:0.875rem;height:0.875rem"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 10h16M4 14h16M4 18h16"
					/>
				</svg>

				<span class="psh-toggle-label"
					>Grid <span class="psh-toggle-state">{state.showGrid ? 'ON' : 'OFF'}</span></span
				>
			</button>
		</div>
	{:else}
		<div></div>
	{/if}

	<div class="psh-right">
		<a
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="psh-icon-link"
			aria-label="Svelte"
			title="Built with Svelte"
		>
			<svg style="width:1.25rem;height:1.25rem" viewBox="0 0 98.1 118" fill="none">
				<path
					d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"
					fill="var(--color-danger-500)"
				/>

				<path
					d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"
					fill="var(--color-background-primary)"
				/>
			</svg>
		</a>

		<a
			href="https://tailwindcss.com"
			target="_blank"
			rel="noopener noreferrer"
			class="psh-icon-link"
			aria-label="Tailwind CSS"
			title="Styled with Tailwind CSS"
		>
			<svg style="width:1.25rem;height:1.25rem" viewBox="0 0 54 33" fill="none">
				<g clip-path="url(#prefix__clip0)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
						fill="var(--color-info-500)"
					/>
				</g>
			</svg>
		</a>

		<button
			onclick={state.onToggleDarkMode}
			class="psh-icon-link"
			aria-label="SlotToggle dark mode"
		>
			{#if state.darkMode}
				<svg
					style="width:1.25rem;height:1.25rem"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					style="width:1.25rem;height:1.25rem"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>

		<div class="psh-color-scheme-wrap">
			<button
				class="psh-color-scheme-btn"
				aria-haspopup="menu"
				aria-expanded={state.colorMenuOpen}
				aria-label="Select color scheme"
				onclick={(e) => {
					e.stopPropagation();
					state.colorMenuOpen = !state.colorMenuOpen;
				}}
				style={`--gradient-start: ${state.selectedColorScheme?.accent ?? 'var(--color-warning-500)'}; --gradient-end: ${state.selectedColorScheme?.accentStrong ?? 'var(--color-warning-600)'}; background-image: var(--gradient-directional-diagonal);`}
			></button>

			{#if state.colorMenuOpen}
				<div class="psh-color-scheme-menu">
					<p class="psh-color-scheme-heading">Color Schemes</p>

					{#each state.colorSchemes as scheme}
						<button
							class="psh-color-scheme-option"
							onclick={() => state.selectColorScheme(scheme.id)}
						>
							<span class="psh-scheme-name">{scheme.name}</span>

							<div class="psh-swatch-wrap">
								<span
									class="psh-swatch"
									style={`--gradient-start: ${scheme.accent}; --gradient-end: ${scheme.accentStrong}; background-image: var(--gradient-directional-diagonal);`}
								></span>

								{#if scheme.id === state.selectedColorScheme?.id}
									<BaseIcon
										name={Check}
										style={`width:1rem;height:1rem;color: ${scheme.accent};`}
									/>
								{/if}
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.playground-shell-header {
		position: relative;

		z-index: var(--z-index-modal);

		display: flex;

		min-height: 4rem;

		align-items: center;

		justify-content: space-between;

		padding-left: 1rem;

		padding-right: 1rem;

		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 84%, transparent);

		background:
			radial-gradient(
				circle at top right,

				color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 10%, transparent),
				transparent 28%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 82%, white 18%),
				color-mix(in srgb, var(--color-background-primary) 88%, transparent)
			);

		backdrop-filter: blur(18px);

		box-shadow: 0 10px 24px rgb(15 23 42 / 0.05);
	}

	.psh-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.psh-logo-link {
		display: flex;
		align-items: center;
	}

	.psh-icon-btn {
		border-radius: 0.5rem;

		padding: 0.5rem;

		color: #4b5563;

		transition: all 0.15s;

		background: none;

		border: none;

		cursor: pointer;
	}

	.psh-icon-btn:hover {
		background: #f3f4f6;
	}

	@media (prefers-color-scheme: dark) {
		.psh-icon-btn {
			color: #9ca3af;
		}

		.psh-icon-btn:hover {
			background: #1f2937;
		}
	}

	.psh-color-dot-wrap {
		position: relative;
	}

	.psh-draw-dot {
		height: 2rem;

		width: 2rem;

		cursor: pointer;

		border-radius: 9999px;

		border-width: 2px;

		border-style: solid;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		transition: all 0.15s;
	}

	.psh-draw-dot:hover {
		transform: scale(1.1);
	}

	.psh-color-menu {
		position: absolute;

		top: 100%;

		left: 0;

		z-index: var(--z-index-modal);

		margin-top: 0.5rem;

		border-radius: 0.5rem;

		border: 1px solid #e5e7eb;

		background: white;

		padding: 0.5rem;

		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	@media (prefers-color-scheme: dark) {
		.psh-color-menu {
			border-color: #374151;
			background: #1f2937;
		}
	}

	.psh-color-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.375rem;
	}

	.psh-color-btn {
		height: 2rem;

		width: 2rem;

		border-radius: 0.375rem;

		border-width: 2px;

		border-style: solid;

		transition: all 0.15s;

		cursor: pointer;
	}

	.psh-color-btn:hover {
		transform: scale(1.1);
	}

	.psh-draw-close-btn {
		border-radius: 0.5rem;

		padding: 0.5rem;

		color: #ef4444;

		transition: all 0.15s;

		background: none;

		border: none;

		cursor: pointer;
	}

	.psh-draw-close-btn:hover {
		background: #fef2f2;
	}

	@media (prefers-color-scheme: dark) {
		.psh-draw-close-btn:hover {
			background: rgb(153 27 27 / 0.3);
		}
	}

	.psh-center {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.psh-device-wrap {
		position: relative;
	}

	.psh-device-btn {
		display: flex;

		height: 2.25rem;

		min-width: 11rem;

		align-items: center;

		gap: 0.75rem;

		border-radius: 0.5rem;

		border: 1px solid #e5e7eb;

		background: white;

		padding: 0.375rem 0.75rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		cursor: pointer;
	}

	@media (prefers-color-scheme: dark) {
		.psh-device-btn {
			border-color: #374151;
			background: #1f2937;
		}
	}

	.psh-device-info {
		display: flex;
		flex-direction: column;
		text-align: left;
		line-height: 1.25;
	}

	.psh-device-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: #111827;
	}

	@media (prefers-color-scheme: dark) {
		.psh-device-label {
			color: white;
		}
	}

	.psh-device-desc {
		font-size: 0.6875rem;
		color: #6b7280;
	}

	@media (prefers-color-scheme: dark) {
		.psh-device-desc {
			color: #9ca3af;
		}
	}

	.psh-device-menu {
		position: absolute;

		top: 100%;

		z-index: var(--z-index-modal);

		margin-top: 0.5rem;

		width: 14rem;

		border-radius: 0.75rem;

		border: 1px solid #e5e7eb;

		background: white;

		padding: 0.25rem;

		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	@media (prefers-color-scheme: dark) {
		.psh-device-menu {
			border-color: #374151;
			background: #1f2937;
		}
	}

	.psh-device-option-info {
		display: flex;
		flex-direction: column;
		line-height: 1.25;
	}

	.psh-toggle-label {
		font-size: 0.75rem;
		font-weight: 500;
	}

	.psh-toggle-state {
		margin-left: 0.25rem;
		font-size: 0.625rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.psh-zoom-wrap {
		display: flex;

		height: 2.25rem;

		align-items: center;

		gap: 0.125rem;

		border-radius: 0.5rem;

		border: 1px solid #e5e7eb;

		background: white;

		padding: 0.125rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	@media (prefers-color-scheme: dark) {
		.psh-zoom-wrap {
			border-color: #374151;
			background: #1f2937;
		}
	}

	.psh-zoom-btn {
		height: 2rem;

		border-radius: 0.375rem;

		padding: 0.375rem;

		transition: all 0.15s;

		background: none;

		border: none;

		cursor: pointer;
	}

	.psh-zoom-btn:hover {
		background: #f3f4f6;
	}

	@media (prefers-color-scheme: dark) {
		.psh-zoom-btn:hover {
			background: #374151;
		}
	}

	.psh-zoom-pct {
		display: flex;

		height: 2rem;

		min-width: 2.5rem;

		align-items: center;

		justify-content: center;

		padding-left: 0.5rem;

		padding-right: 0.5rem;

		text-align: center;

		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

		font-size: 0.75rem;

		font-weight: 600;

		color: var(--playground-accent);
	}

	.psh-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.psh-icon-link {
		display: flex;

		align-items: center;

		justify-content: center;

		border-radius: 0.5rem;

		padding: 0.5rem;

		transition: background-color 0.15s;

		background: none;

		border: none;

		cursor: pointer;

		text-decoration: none;
	}

	.psh-icon-link:hover {
		background: #f3f4f6;
	}

	@media (prefers-color-scheme: dark) {
		.psh-icon-link:hover {
			background: #1f2937;
		}
	}

	.psh-color-scheme-wrap {
		position: relative;
	}

	.psh-color-scheme-btn {
		display: flex;

		height: 2.25rem;

		width: 2.25rem;

		align-items: center;

		justify-content: center;

		border-radius: 9999px;

		border: 1px solid #e5e7eb;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		transition: all 0.15s;

		cursor: pointer;
	}

	@media (prefers-color-scheme: dark) {
		.psh-color-scheme-btn {
			border-color: #374151;
		}
	}

	.psh-color-scheme-menu {
		position: absolute;

		right: 0;

		z-index: var(--z-index-modal);

		margin-top: 0.5rem;

		width: 14rem;

		border-radius: 0.75rem;

		border: 1px solid #e5e7eb;

		background: white;

		padding: 0.5rem;

		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	@media (prefers-color-scheme: dark) {
		.psh-color-scheme-menu {
			border-color: #374151;
			background: #111827;
		}
	}

	.psh-color-scheme-heading {
		padding: 0 0.75rem 0.5rem;

		font-size: 0.75rem;

		letter-spacing: 0.05em;

		text-transform: uppercase;

		color: #6b7280;
	}

	@media (prefers-color-scheme: dark) {
		.psh-color-scheme-heading {
			color: #9ca3af;
		}
	}

	.psh-color-scheme-option {
		display: flex;

		width: 100%;

		align-items: center;

		justify-content: space-between;

		gap: 0.75rem;

		border-radius: 0.5rem;

		padding: 0.5rem 0.75rem;

		font-size: 0.875rem;

		color: #1f2937;

		transition: background-color 0.15s;

		background: none;

		border: none;

		cursor: pointer;
	}

	.psh-color-scheme-option:hover {
		background: #f3f4f6;
	}

	@media (prefers-color-scheme: dark) {
		.psh-color-scheme-option {
			color: #e5e7eb;
		}

		.psh-color-scheme-option:hover {
			background: #1f2937;
		}
	}

	.psh-scheme-name {
		font-weight: 500;
	}

	.psh-swatch-wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.psh-swatch {
		height: 1.5rem;

		width: 1.5rem;

		border-radius: 9999px;

		border: 1px solid rgb(255 255 255 / 0.7);

		box-shadow: 0 0 0 1px #e5e7eb;
	}

	@media (prefers-color-scheme: dark) {
		.psh-swatch {
			box-shadow: 0 0 0 1px #374151;
		}
	}

	:global(.dark) .playground-shell-header {
		background:
			radial-gradient(
				circle at top right,

				color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 12%, transparent),
				transparent 28%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 92%, black 8%),
				color-mix(in srgb, var(--color-background-primary) 88%, transparent)
			);
	}

	._c1 {
		display: flex;

		align-items: center;

		gap: 0.5rem;

		border-radius: 0.5rem;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	._c2 {
		font-size: 1.25rem;

		line-height: 1.75rem;

		font-weight: 900;

		letter-spacing: -0.025em;
	}

	._c3 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 700;
	}

	._c4 {
		border-radius: 0.5rem;

		padding: 0.5rem;

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

		color: #ffffff;
	}

	._c5 {
		display: inline-flex;

		height: 0.5rem;

		width: 0.5rem;

		border-radius: 9999px;
	}

	._c6 {
		height: 0.875rem;

		width: 0.875rem;

		color: #4b5563;

		transition-property: color, background-color, border-color;

		transition-duration: 150ms;
	}

	._c1 {
		box-shadow: 0 0 0 3px var(--playground-accent);
	}

	._c2:hover {
		background-color: var(--color-red-50);
	}

	._c3 {
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	@media (prefers-color-scheme: dark) {
		._c4 {
			color: #9ca3af;
		}
	}

	._c1 {
		transition-duration: var(--duration-200);
	}

	._c1 {
		transition-duration: var(--duration-200);
	}

	._c4 {
		transition-duration: var(--duration-200);
	}

	._c7 {
		margin-left: auto;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		color: var(--color-gray-500);
	}

	._c8 {
		display: flex;
		width: 100%;
		align-items: flex-start;
		gap: 0.75rem;
		border-radius: 0.5rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		text-align: left;
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}

	.psh-zoom-btn:hover ._c6 {
		color: var(--playground-accent);
	}
	.psh-toggle-on {
		background-color: #ffffff;
	}
	.psh-toggle-off {
		background-color: rgb(156 163 175 / 0.7);
	}

	.psh-btn-active {
		background-color: var(--playground-accent-surface);
		box-shadow: 0 15px 30px var(--playground-accent-shadow);
	}
	.psh-btn-hover:hover {
		background-color: var(--playground-accent-surface);
	}
	.psh-text-accent {
		color: var(--playground-accent);
	}
	.psh-text-default {
		color: var(--color-text-primary);
	}
	.psh-icon-muted {
		color: var(--color-text-secondary);
	}
	.psh-draw-on {
		background-color: var(--color-danger-500);
		box-shadow: 0 4px 6px -1px rgb(0 0 0/0.1);
	}
	.psh-draw-off {
		color: var(--color-danger-500);
	}
	.psh-rotate-180 {
		transform: rotate(180deg);
	}
	.psh-color-active {
		border-color: var(--color-danger-500);
		box-shadow: 0 0 0 3px var(--color-danger-500);
	}
	.psh-color-inactive {
		border-color: var(--color-border-primary);
	}
	.psh-viewport-active {
		background-color: var(--playground-accent-surface);
		color: var(--playground-accent);
	}
	.psh-viewport {
		color: var(--playground-text-secondary);
	}
	.psh-viewport:hover {
		background-color: var(--playground-accent-surface);
	}
</style>
