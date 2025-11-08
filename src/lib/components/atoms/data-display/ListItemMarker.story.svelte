<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import ListItemMarker from './ListItemMarker.svelte';

	const typeOptions = ['bullet', 'number', 'icon'] as const;
	const colorOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type Props = {
		type: (typeof typeOptions)[number];
		value: string | number;
		color: (typeof colorOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'type', type: 'select', defaultValue: 'bullet', options: [...typeOptions] },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-data-display-list-item-marker"
	title="ListItemMarker"
	component={ListItemMarker}
	category="Atoms"
	description="A custom marker for list items (bullet, number, or icon)."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex flex-col gap-4">
			<h3 class="mb-4 text-lg font-bold">Custom List Item Markers</h3>
			<ul class="list-none space-y-2 p-0">
				<li class="flex items-center gap-2">
					<ListItemMarker type="bullet" color={props.color} size={props.size} />
					<span>Item with a bullet marker</span>
				</li>
				<li class="flex items-center gap-2">
					<ListItemMarker type="number" value={1} color={props.color} size={props.size} />
					<span>Item with a number marker</span>
				</li>
				<li class="flex items-center gap-2">
					<ListItemMarker type="icon" value="check" color={props.color} size={props.size} />
					<span>Item with an icon marker (e.g., 'check')</span>
				</li>
				<li class="flex items-center gap-2">
					<ListItemMarker type="icon" value="star" color="warning" size={props.size} />
					<span>Another icon marker (e.g., 'star')</span>
				</li>
			</ul>
		</div>
	{/snippet}
</Story>
