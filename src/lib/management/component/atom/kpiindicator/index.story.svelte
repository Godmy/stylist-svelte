<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
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
			<h1 class="mb-4 text-lg font-semibold">KPIIndicator Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Default KPI Indicator</h2>
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

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Different Statuses</h2>
				<div class="flex flex-wrap gap-4">
					<div>
						<h3 class="mb-1 text-sm font-medium">On Track</h3>
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
						<h3 class="mb-1 text-sm font-medium">At Risk</h3>
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
						<h3 class="mb-1 text-sm font-medium">Exceeded</h3>
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

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Different Sizes</h2>
				<div class="flex items-end gap-6">
					<div>
						<h3 class="mb-1 text-sm font-medium">Small</h3>
						<KPIIndicator
							label="Small"
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
						<h3 class="mb-1 text-sm font-medium">Medium</h3>
						<KPIIndicator
							label="Medium"
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
						<h3 class="mb-1 text-sm font-medium">Large</h3>
						<KPIIndicator
							label="Large"
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
