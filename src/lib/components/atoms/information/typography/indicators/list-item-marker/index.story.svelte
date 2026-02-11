<script lang="ts">
	import ListItemMarker from './index.svelte';

	// More on args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
	const args: {
		type: 'dot' | 'number' | 'letter' | 'check' | 'x' | 'arrow' | 'star';
		value: string;
		color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
		size: 'sm' | 'md' | 'lg';
		class: string;
	} = {
		type: 'dot',
		value: '',
		color: 'gray',
		size: 'md',
		class: ''
	};

	const controls = {
		type: {
			control: { type: 'select' },
			options: ['dot', 'number', 'letter', 'check', 'x', 'arrow', 'star']
		},
		value: { control: { type: 'text' } },
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		class: { control: { type: 'text' } }
	};
</script>

<!-- Default story -->
<div class="flex items-center p-4">
	<ListItemMarker
		type={args.type}
		value={args.value}
		color={args.color}
		size={args.size}
		class={args.class}
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
