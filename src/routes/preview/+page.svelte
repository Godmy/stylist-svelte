<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';
	import { ManagerStoryViewportContext } from '$stylist/theme/class/manager/story-viewport-context';
	import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';
	import WorkspaceHints from '$stylist/domain/component/molecule/workspace-hints/index.svelte';

	const stories = import.meta.glob<{ default: Component }>([
		'/src/lib/**/component/**/index.story.svelte',
		'/modules/*/*/component/**/index.story.svelte',
		'/modules/*/component/**/index.story.svelte'
	]);
	const logicalStories = Object.fromEntries(
		Object.entries(stories).map(([path, load]) => [
			path
				.replace(/^\/modules\/([^/]+)\/component\//, '/src/lib/$1/component/')
				.replace(/^\/modules\/[^/]+\//, '/src/lib/'),
			load
		])
	);
	const storyPath = $derived(`/src/lib/${page.url.searchParams.get('story') ?? ''}`);
	const loadStory = $derived(logicalStories[storyPath]);
	let device = $state<TokenStoryViewport>('fullscreen');
	let fullscreen = $state(false);
	let sizing = $state<'viewport' | 'container'>('viewport');
	ManagerStoryViewportContext.set(
		() => device,
		() => fullscreen,
		() => sizing === 'viewport'
	);

	onMount(() => {
		const receive = (event: MessageEvent) => {
			if (
				event.origin !== window.location.origin ||
				event.source !== window.parent ||
				event.data?.type !== 'stylist:viewport'
			)
				return;
			if (['mobile', 'tablet', 'desktop', 'fullscreen'].includes(event.data.device))
				device = event.data.device;
			fullscreen = event.data.fullscreen === true;
			if (event.data.sizing === 'viewport' || event.data.sizing === 'container')
				sizing = event.data.sizing;
			// Mirror the applied theme, including custom scheme CSS variables.
			const parentRoot = window.parent.document.documentElement;
			document.documentElement.style.cssText = parentRoot.style.cssText;
			document.documentElement.className = parentRoot.className;
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
	{#await loadStory()}
		<p>Loading story…</p>
	{:then module}
		{@const Story = module.default}
		<svelte:boundary>
			<Story />
			{#snippet failed(error, reset)}
				<p role="alert">Story failed: {String(error)}</p>
				<button onclick={reset}>Retry</button>
			{/snippet}
		</svelte:boundary>
	{:catch error}
		<p role="alert">Unable to load story: {String(error)}</p>
	{/await}
{:else}
	<p role="alert">Story is not available.</p>
{/if}

<style>
	:global(body) {
		overflow-x: auto;
		overflow-y: auto;
		scrollbar-gutter: auto;
	}
</style>
