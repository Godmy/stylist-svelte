<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';
	import { ManagerStoryViewportContext } from '$stylist/theme/class/manager/story-viewport-context';
	import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';
	import type { ContractStory } from '$stylist/html/interface/contract/story';
	import WorkspaceHints from '$stylist/domain/component/molecule/workspace-hints/index.svelte';
	import StoryCanvas from '$stylist/domain/component/molecule/story-canvas/index.svelte';

	type StoryModule = { default: Component | ContractStory };

	const stories = import.meta.glob<StoryModule>([
		'/src/lib/**/component/**/index.story.{svelte,ts}',
		'/modules/*/*/component/**/index.story.{svelte,ts}',
		'/modules/*/component/**/index.story.{svelte,ts}'
	]);
	const logicalStories: Record<string, (() => Promise<StoryModule>) | undefined> =
		Object.fromEntries(
			Object.entries(stories).map(([path, load]) => [
				path
					.replace(/^\/modules\/([^/]+)\/component\//, '/src/lib/$1/component/')
					.replace(/^\/modules\/[^/]+\//, '/src/lib/'),
				load
			])
		);
	const storyPath = $derived(`/src/lib/${page.url.searchParams.get('story') ?? ''}`);
	const loadStory = $derived(logicalStories[storyPath]);
	// `index.story.ts` describes the story; a sibling `index.story.svelte` is its custom render.
	const loadEntry = $derived(async () => {
		const story = (await loadStory!()).default;
		if (!storyPath.endsWith('.story.ts'))
			return { component: story as Component, story: null, render: null };
		const loadRender = logicalStories[storyPath.replace(/\.ts$/, '.svelte')];
		const render = loadRender ? ((await loadRender()).default as Component) : null;
		return { component: null, story: story as ContractStory, render };
	});
	let storyArgs = $state<Record<string, unknown>>();
	let device = $state<TokenStoryViewport>('fullscreen');
	let fullscreen = $state(false);
	ManagerStoryViewportContext.set(
		() => device,
		() => fullscreen,
		() => true
	);
	// The sandbox shows this frame only after the theme is mirrored and the story has settled
	// (rendered, failed or missing), so the unthemed first paint never flashes.
	let themed = $state(false);
	let settled = $state(false);
	const settle = () => {
		settled = true;
	};
	$effect(() => {
		if (themed && settled)
			window.parent.postMessage({ type: 'stylist:story-ready' }, window.location.origin);
	});

	onMount(() => {
		const receive = (event: MessageEvent) => {
			if (event.origin !== window.location.origin || event.source !== window.parent) return;
			if (event.data?.type === 'stylist:story-args') {
				storyArgs = event.data.args;
				return;
			}
			if (event.data?.type !== 'stylist:viewport') return;
			if (['mobile', 'tablet', 'desktop', 'fullscreen'].includes(event.data.device))
				device = event.data.device;
			fullscreen = event.data.fullscreen === true;
			// Mirror the applied theme, including custom scheme CSS variables.
			const parentRoot = window.parent.document.documentElement;
			document.documentElement.style.cssText = parentRoot.style.cssText;
			document.documentElement.className = parentRoot.className;
			themed = true;
		};
		const escape = (event: KeyboardEvent) => {
			if (event.key === 'Escape')
				window.parent.postMessage({ type: 'stylist:exit-fullscreen' }, window.location.origin);
		};
		window.addEventListener('message', receive);
		window.addEventListener('keydown', escape);
		window.parent.postMessage({ type: 'stylist:preview-ready' }, window.location.origin);
		return () => {
			window.removeEventListener('message', receive);
			window.removeEventListener('keydown', escape);
		};
	});
</script>

<svelte:head><title>Story preview</title></svelte:head>

<WorkspaceHints root="body" />

{#if loadStory}
	{#await loadEntry()}
		<p class="preview-state" role="status">Loading story…</p>
	{:then entry}
		{@const Story = entry.component}
		<svelte:boundary>
			<div class="preview-story" {@attach settle}>
				{#if entry.story}
					<StoryCanvas story={entry.story} args={storyArgs} render={entry.render} />
				{:else if Story}
					<Story />
				{/if}
			</div>
			{#snippet failed(error, reset)}
				<div class="preview-state" role="alert" {@attach settle}>
					<p>Story failed: {String(error)}</p>
					<button type="button" onclick={reset}>Retry</button>
				</div>
			{/snippet}
		</svelte:boundary>
	{:catch error}
		<p class="preview-state" role="alert" {@attach settle}>
			Unable to load story: {String(error)}
		</p>
	{/await}
{:else}
	<p class="preview-state" role="alert" {@attach settle}>Story is not available.</p>
{/if}

<style>
	:global(html) {
		height: 100%;
		overflow: auto;
		scrollbar-gutter: stable;
	}

	:global(html > body) {
		height: auto;
		min-height: 100%;
		overflow: visible;
		scrollbar-gutter: auto;
	}

	.preview-story {
		display: contents;
	}

	.preview-state {
		display: grid;
		place-content: center;
		justify-items: center;
		gap: 0.75rem;
		min-height: 100vh;
		margin: 0;
		font-size: 0.8125rem;
		color: var(--color-text-secondary);
	}

	.preview-state p {
		margin: 0;
	}

	.preview-state button {
		padding: 0.35rem 0.9rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 999px;
		background: var(--color-background-secondary);
		font: inherit;
		color: var(--color-text-primary);
		cursor: pointer;
	}

	:global(.c-story--isolated.c-story--fullscreen),
	:global(.c-story--isolated.c-story--fullscreen > .component-preview),
	:global(
		.c-story--isolated.c-story--fullscreen > .component-preview > .component-preview__surface
	) {
		min-height: 100%;
		overflow: visible;
	}
</style>
