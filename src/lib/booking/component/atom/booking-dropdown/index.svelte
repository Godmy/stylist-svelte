<script lang="ts">
	import type { Snippet } from 'svelte';
	import { tick } from 'svelte';

	type Props = {
		trigger: Snippet<[{ open: boolean; toggle: () => void }]>;
		content: Snippet<[{ close: () => void }]>;
		align?: 'left' | 'right';
		panelWidth?: string;
		class?: string;
	};

	let { trigger, content, align = 'left', panelWidth, class: className }: Props = $props();

	let open = $state(false);
	let flipUp = $state(false);
	let rootEl: HTMLDivElement | undefined = $state();
	let panelEl: HTMLDivElement | undefined = $state();

	function toggle(): void {
		open = !open;
	}

	function close(): void {
		open = false;
	}

	$effect(() => {
		if (!open) return;

		function handlePointerDown(event: PointerEvent): void {
			if (rootEl && event.target instanceof Node && !rootEl.contains(event.target)) {
				close();
			}
		}
		function handleKeydown(event: KeyboardEvent): void {
			if (event.key === 'Escape') close();
		}

		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	$effect(() => {
		if (!open) {
			flipUp = false;
			return;
		}
		tick().then(() => {
			if (!rootEl || !panelEl) return;
			const triggerRect = rootEl.getBoundingClientRect();
			const panelHeight = panelEl.getBoundingClientRect().height;
			const spaceBelow = window.innerHeight - triggerRect.bottom;
			flipUp = spaceBelow < panelHeight + 16 && triggerRect.top > panelHeight + 16;
		});
	});
</script>

<div class={['bk-dropdown', className].filter(Boolean).join(' ')} bind:this={rootEl}>
	{@render trigger({ open, toggle })}

	{#if open}
		<div
			class="bk-dropdown__panel"
			data-align={align}
			data-flip={flipUp || undefined}
			style:width={panelWidth}
			bind:this={panelEl}
		>
			{@render content({ close })}
		</div>
	{/if}
</div>

<style>
	.bk-dropdown {
		position: relative;
	}

	.bk-dropdown__panel {
		position: absolute;
		top: calc(100% + 10px);
		left: 0;
		z-index: var(--z-index-docked, 40);
		min-width: 260px;
		border-radius: 16px;
		border: 1px solid rgba(23, 35, 31, 0.08);
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(20px);
		box-shadow: 0 24px 60px rgba(20, 36, 31, 0.22);
	}

	.bk-dropdown__panel[data-align='right'] {
		left: auto;
		right: 0;
	}

	.bk-dropdown__panel[data-flip] {
		top: auto;
		bottom: calc(100% + 10px);
	}
</style>
