<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import Container from './Container.svelte';

	const maxWidthOptions = ['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;

	type Props = {
		maxWidth: (typeof maxWidthOptions)[number];
	};

	const controls: ControlConfig[] = [
		{
			name: 'maxWidth',
			type: 'select',
			defaultValue: 'md',
			options: [...maxWidthOptions]
		}
	];
</script>

<Story
	id="atoms-container"
	title="Container"
	component={Container}
	category="Atoms"
	description="A layout component that centers content and constrains its width."
	controls={controls}
>
	{#snippet children(props: Props)}
		<p class="mb-2 text-sm text-gray-500">
			The container centers your content and applies horizontal padding. Its max-width is controlled
			by the `maxWidth` prop.
		</p>
		<Container maxWidth={props.maxWidth} class="rounded-md bg-primary-500 py-8 text-primary-50">
			{#snippet children()}
				<div class="text-center">
					Content inside a container with `maxWidth="{props.maxWidth}"`.
				</div>
			{/snippet}
		</Container>
	{/snippet}
</Story>
