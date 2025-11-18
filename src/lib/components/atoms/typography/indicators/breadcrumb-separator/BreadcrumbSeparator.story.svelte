<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import BreadcrumbSeparator from '../BreadcrumbSeparator.svelte';

	type Props = {
		separator: string;
	};

	const controls: ControlConfig[] = [
		{ name: 'separator', type: 'text', defaultValue: '/' }
	];
</script>

<Story
	id="atoms-navigation-breadcrumb-separator"
	title="BreadcrumbSeparator"
	component={BreadcrumbSeparator}
	category="Atoms"
	description="A visual separator used between items in a breadcrumb navigation."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex items-center text-sm">
			<span class="text-blue-600 hover:underline cursor-pointer">Home</span>
			<BreadcrumbSeparator separator={props.separator} />
			<span class="text-blue-600 hover:underline cursor-pointer">Category</span>
			<BreadcrumbSeparator separator={props.separator} />
			<span class="text-gray-700">Current Page</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Separator Characters</h3>
		<div class="flex flex-col gap-4">
			<div class="flex items-center text-sm">
				<span>Item 1</span>
				<BreadcrumbSeparator separator=">" />
				<span>Item 2</span>
			</div>
			<div class="flex items-center text-sm">
				<span>Item A</span>
				<BreadcrumbSeparator separator="-" />
				<span>Item B</span>
			</div>
		</div>
	{/snippet}
</Story>
