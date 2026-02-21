<script lang="ts">
	import ListItemMarker from './index.svelte';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

	const controls: ControlConfig[] = [
		{
			name: 'type',
			type: 'select',
			options: ['dot', 'number', 'letter', 'check', 'x', 'arrow', 'star'],
			defaultValue: 'dot'
		},
		{
			name: 'value',
			type: 'text',
			defaultValue: ''
		},
		{
			name: 'color',
			type: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'],
			defaultValue: 'gray'
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		}
	];
</script>

<Story
	{controls}
	component={ListItemMarker}
	title="ListItemMarker"
	category="Atoms/Information/Typography/Indicators"
	description="A marker for list items with various types, colors, and sizes."
	tags={['list', 'marker', 'indicator', 'typography']}
>
	{#snippet children(values: any)}
		<div class="space-y-4">
			<!-- Default story -->
			<div class="flex items-center p-4">
				<ListItemMarker
					type={values.type}
					value={values.value}
					color={values.color}
					size={values.size}
				/>
			</div>

			<!-- Different marker types -->
			<div class="space-y-4 p-4">
				<h3 class="text-lg font-medium">Dot Marker</h3>
				<div class="flex items-center space-x-2">
					<ListItemMarker type="dot" color="gray" size="sm" />
					<ListItemMarker type="dot" color="gray" size="md" />
					<ListItemMarker type="dot" color="gray" size="lg" />
				</div>
			</div>

			<div class="space-y-4 p-4">
				<h3 class="text-lg font-medium">Number Marker</h3>
				<div class="flex items-center space-x-2">
					<ListItemMarker type="number" value="1" color="primary" size="sm" />
					<ListItemMarker type="number" value="2" color="primary" size="md" />
					<ListItemMarker type="number" value="3" color="primary" size="lg" />
				</div>
			</div>

			<div class="space-y-4 p-4">
				<h3 class="text-lg font-medium">Check/X Markers</h3>
				<div class="flex items-center space-x-2">
					<ListItemMarker type="check" value="check" color="success" size="sm" />
					<ListItemMarker type="check" value="check" color="success" size="md" />
					<ListItemMarker type="check" value="check" color="success" size="lg" />
					<ListItemMarker type="x" value="x" color="danger" size="sm" />
					<ListItemMarker type="x" value="x" color="danger" size="md" />
					<ListItemMarker type="x" value="x" color="danger" size="lg" />
				</div>
			</div>

			<div class="space-y-4 p-4">
				<h3 class="text-lg font-medium">Color Variations</h3>
				<div class="flex items-center space-x-2">
					<ListItemMarker type="dot" color="primary" size="md" />
					<ListItemMarker type="dot" color="secondary" size="md" />
					<ListItemMarker type="dot" color="success" size="md" />
					<ListItemMarker type="dot" color="warning" size="md" />
					<ListItemMarker type="dot" color="danger" size="md" />
					<ListItemMarker type="dot" color="info" size="md" />
					<ListItemMarker type="dot" color="gray" size="md" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>





