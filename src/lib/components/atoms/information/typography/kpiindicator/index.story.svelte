<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import KPIIndicator from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{
			name: 'title',
			type: CONTROL_TYPES.TEXT,
			defaultValue: 'Sales'
		},
		{
			name: 'currentValue',
			type: CONTROL_TYPES.SELECT,
			options: ['100', '250', '500', '750', '1000'],
			defaultValue: '750'
		},
		{
			name: 'targetValue',
			type: CONTROL_TYPES.SELECT,
			options: ['500', '750', '1000', '1500', '2000'],
			defaultValue: '1000'
		},
		{
			name: 'unit',
			type: CONTROL_TYPES.TEXT,
			defaultValue: '$'
		},
		{
			name: 'status',
			type: CONTROL_TYPES.SELECT,
			options: ['on-track', 'at-risk', 'exceeded'],
			defaultValue: 'on-track'
		},
		{
			name: 'trend',
			type: CONTROL_TYPES.SELECT,
			options: ['up', 'down'],
			defaultValue: 'up'
		},
		{
			name: 'trendValue',
			type: CONTROL_TYPES.SELECT,
			options: ['5', '10', '12', '20', '25'],
			defaultValue: '12'
		},
		{
			name: 'size',
			type: CONTROL_TYPES.SELECT,
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		}
	];
</script>

<Story
	{controls}
	component={KPIIndicator}
	title="KPIIndicator"
	category="Atoms/Information/Typography/KPIIndicator"
	description="A component for displaying Key Performance Indicators with status and trends."
	tags={['kpi', 'indicator', 'metrics', 'performance']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<h1 class="text-lg font-semibold mb-4">KPIIndicator Component</h1>

			{/* Default KPI Indicator */}
			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Default KPI Indicator</h2>
				<KPIIndicator
					title={props.title}
					currentValue={parseInt(props.currentValue as string) || 750}
					targetValue={parseInt(props.targetValue as string) || 1000}
					unit={props.unit}
					status={props.status}
					trend={props.trend}
					trendValue={parseInt(props.trendValue as string) || 12}
					size={props.size}
				/>
			</div>

			{/* Different Statuses */}
			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Different Statuses</h2>
				<div class="flex flex-wrap gap-4">
					<div>
						<h3 class="text-sm font-medium mb-1">On Track</h3>
						<KPIIndicator
							title="Revenue"
							currentValue={850}
							targetValue={1000}
							unit="$"
							status="on-track"
							trend="up"
							trendValue={5}
							size="md"
						/>
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">At Risk</h3>
						<KPIIndicator
							title="Users"
							currentValue={250}
							targetValue={1000}
							unit=""
							status="at-risk"
							trend="down"
							trendValue={10}
							size="md"
						/>
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">Exceeded</h3>
						<KPIIndicator
							title="Goals"
							currentValue={1200}
							targetValue={1000}
							unit=""
							status="exceeded"
							trend="up"
							trendValue={20}
							size="md"
						/>
					</div>
				</div>
			</div>

			{/* Different Sizes */}
			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Different Sizes</h2>
				<div class="flex items-end gap-6">
					<div>
						<h3 class="text-sm font-medium mb-1">Small</h3>
						<KPIIndicator
							title="Small"
							currentValue={50}
							targetValue={100}
							unit="%"
							status="on-track"
							trend="up"
							trendValue={3}
							size="sm"
						/>
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">Medium</h3>
						<KPIIndicator
							title="Medium"
							currentValue={50}
							targetValue={100}
							unit="%"
							status="on-track"
							trend="up"
							trendValue={3}
							size="md"
						/>
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">Large</h3>
						<KPIIndicator
							title="Large"
							currentValue={50}
							targetValue={100}
							unit="%"
							status="on-track"
							trend="up"
							trendValue={3}
							size="lg"
						/>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
