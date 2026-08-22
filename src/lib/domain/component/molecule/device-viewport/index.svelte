<script lang="ts">
	import { DEVICE_FRAME_VIEWPORT } from '$stylist/domain/const/array/device-frame-viewport';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';

	interface DeviceViewportProps {
		value?: DeviceFrameViewport;
		onChange?: (value: DeviceFrameViewport) => void;
		class?: string;
	}

	let { value = 'desktop', onChange, class: className = '' }: DeviceViewportProps = $props();

	const LABEL: Record<DeviceFrameViewport, string> = {
		mobile: 'Mobile',
		tablet: 'Tablet',
		desktop: 'Desktop',
		fullscreen: 'Fullscreen'
	};
</script>

<nav class="c-device-viewport {className}" aria-label="Preview viewport">
	{#each DEVICE_FRAME_VIEWPORT as device (device)}
		<button
			type="button"
			class:active={value === device}
			class="viewport-button"
			onclick={() => onChange?.(device)}
			aria-pressed={value === device}
			aria-label={LABEL[device]}
			title={LABEL[device]}
		>
			{#if device === 'mobile'}
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="7" y="2" width="10" height="20" rx="2" />
					<path d="M11 18h2" />
				</svg>
			{:else if device === 'tablet'}
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="4" y="2" width="16" height="20" rx="2" />
					<path d="M12 18h.01" />
				</svg>
			{:else if device === 'desktop'}
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="2" y="4" width="20" height="13" rx="2" />
					<path d="M8 21h8" />
					<path d="M12 17v4" />
				</svg>
			{:else}
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M8 3H5a2 2 0 0 0-2 2v3" />
					<path d="M21 8V5a2 2 0 0 0-2-2h-3" />
					<path d="M3 16v3a2 2 0 0 0 2 2h3" />
					<path d="M16 21h3a2 2 0 0 0 2-2v-3" />
				</svg>
			{/if}
		</button>
	{/each}
</nav>

<style>
	.c-device-viewport {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 18px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow:
			0 16px 38px rgba(15, 23, 42, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.55);
		backdrop-filter: blur(14px);
	}

	.viewport-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.85rem;
		height: 2.85rem;
		padding: 0;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 999px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 97%, white 3%) 0%,
			color-mix(in srgb, var(--color-background-primary) 92%, var(--color-background-secondary) 8%)
				100%
		);
		color: var(--color-text-primary);
		cursor: pointer;
		box-shadow:
			0 8px 20px rgba(15, 23, 42, 0.06),
			inset 0 1px 0 rgba(255, 255, 255, 0.55);
		transition:
			transform 120ms ease,
			background-color 120ms ease,
			border-color 120ms ease,
			color 120ms ease;
	}

	.viewport-button:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--color-primary-500) 44%, var(--color-border-primary) 56%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 86%, var(--color-primary-500) 14%) 0%,
			color-mix(in srgb, var(--color-background-primary) 82%, var(--color-primary-500) 18%) 100%
		);
	}

	.viewport-button.active {
		border-color: color-mix(in srgb, var(--color-primary-500) 48%, var(--color-border-primary) 52%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 78%, var(--color-primary-500) 22%) 0%,
			color-mix(in srgb, var(--color-background-primary) 72%, var(--color-primary-600) 28%) 100%
		);
		color: var(--color-text-primary);
		box-shadow:
			0 10px 24px rgba(15, 23, 42, 0.16),
			inset 0 1px 0 rgba(255, 255, 255, 0.22);
	}

	.viewport-button.active:hover {
		border-color: color-mix(in srgb, var(--color-primary-500) 56%, var(--color-border-primary) 44%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 70%, var(--color-primary-500) 30%) 0%,
			color-mix(in srgb, var(--color-background-primary) 66%, var(--color-primary-600) 34%) 100%
		);
	}

	@media (max-width: 840px) {
		.c-device-viewport {
			flex-wrap: wrap;
			justify-content: flex-end;
		}
	}
</style>
