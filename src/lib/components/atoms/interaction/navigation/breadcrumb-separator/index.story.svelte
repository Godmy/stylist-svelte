<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	import BreadcrumbSeparator from './index.svelte';

	// Define the type for props passed to the children snippet
	type Props = {
		children?: string;
	};

	let {
		id = '',
		title = '',
		description = '',
		controls = [{ name: 'children', type: 'text', defaultValue: '/' }]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: ControlConfig[];
	}>();
</script>

<Story {id} {title} {description} component={BreadcrumbSeparator} category="Atoms" {controls}>
	{#snippet children(values: any)}
		<div class="flex items-center text-sm">
			<span class="cursor-pointer text-blue-600 hover:underline">Home</span>
			<BreadcrumbSeparator />
			<span class="cursor-pointer text-blue-600 hover:underline">Category</span>
			<BreadcrumbSeparator />
			<span class="text-gray-700">Current Page</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Separator Characters</h3>
		<div class="flex flex-col gap-4">
			<div class="flex items-center text-sm">
				<span>Item 1</span>
				<BreadcrumbSeparator />
				<span>Item 2</span>
			</div>
			<div class="flex items-center text-sm">
				<span>Item A</span>
				<BreadcrumbSeparator />
				<span>Item B</span>
			</div>
		</div>
	{/snippet}
</Story>





