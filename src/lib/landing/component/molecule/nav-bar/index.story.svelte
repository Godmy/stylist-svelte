<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NavBar from './index.svelte';

	const controls: SlotStory[] = [];
	const sectionLinks = [
		{ href: '#definition', label: 'Definition' },
		{ href: '#workflow', label: 'Workflow' },
		{ href: '#cases', label: 'Cases' }
	];
</script>

<Story
	{controls}
	component={NavBar}
	title="NavBar"
	category="Molecules/Landing"
	description="Landing page navigation with section links and sign in action."
	tags={['landing', 'navigation', 'header']}
>
	{#snippet children()}
		<div class="preview">
			<NavBar
				ariaLabel="Landing navigation"
				{sectionLinks}
				signInHref="/login"
				signInLabel="Sign in"
			>
				{#snippet brand()}
					<a class="brand" href="/">WeOracle</a>
				{/snippet}
			</NavBar>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--nav-bar-link-color: var(--color-text-primary, #111827);
		--nav-bar-link-hover-color: var(--color-primary-600, #2563eb);
		container-type: inline-size;
		padding: 1rem;
	}

	.brand {
		color: var(--color-text-primary, #111827);
		font-size: 1rem;
		font-weight: 800;
		text-decoration: none;
	}
</style>
