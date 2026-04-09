<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import KPIIndicator from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Sales'
		},
		{
			name: 'currentValue',
			type: 'select',
			options: ['100', '250', '500', '750', '1000'],
			defaultValue: '750'
		},
		{
			name: 'targetValue',
			type: 'select',
			options: ['500', '750', '1000', '1500', '2000'],
			defaultValue: '1000'
		},
		{
			name: 'unit',
			type: 'text',
			defaultValue: '$'
		},
		{
			name: 'status',
			type: 'select',
			options: ['on-track', 'at-risk', 'exceeded'],
			defaultValue: 'on-track'
		},
		{
			name: 'trend',
			type: 'select',
			options: ['up', 'down'],
			defaultValue: 'up'
		},
		{
			name: 'trendValue',
			type: 'select',
			options: ['5', '10', '12', '20', '25'],
			defaultValue: '12'
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
	component={KPIIndicator}
	title="KPIIndicator"
	category="Atoms/Information/Typography/KPIIndicator"
	description="A component for displaying Key Performance Indicators with status and trends."
	tags={['kpi', 'indicator', 'metrics', 'performance']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<h1 class="text-lg font-semibold mb-4">KPIIndicator Component</h1>

			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Default KPI Indicator</h2>
				<KPIIndicator
					label={values.label}
					currentValue={parseInt(values.currentValue as string) || 750}
					targetValue={parseInt(values.targetValue as string) || 1000}
					unit={values.unit}
					status={values.status}
					trend={values.trend}
					trendValue={parseInt(values.trendValue as string) || 12}
					size={values.size}
				/>
			</div>

			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Different Statuses</h2>
				<div class="flex flex-wrap gap-4">
					<div>
						<h3 class="text-sm font-medium mb-1">On Track</h3>
						<KPIIndicator
							label="Revenue"
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
							label="Users"
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
							label="Goals"
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

			<div class="mb-6 p-4 border rounded">
				<h2 class="text-md font-semibold mb-2">Different Sizes</h2>
				<div class="flex items-end gap-6">
					<div>
						<h3 class="text-sm font-medium mb-1">Small</h3>
						<KPIIndicator label="Small" currentValue={50} targetValue={100} unit="%" status="on-track" trend="up" trendValue={3} size="sm" />
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">Medium</h3>
						<KPIIndicator label="Medium" currentValue={50} targetValue={100} unit="%" status="on-track" trend="up" trendValue={3} size="md" />
					</div>
					<div>
						<h3 class="text-sm font-medium mb-1">Large</h3>
						<KPIIndicator label="Large" currentValue={50} targetValue={100} unit="%" status="on-track" trend="up" trendValue={3} size="lg" />
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
