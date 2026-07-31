<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import KPIIndicator from './index.svelte';

	const controls: SlotStory[] = [
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
		<div class="_c1">
			<h1 class="_c2">KPIIndicator Component</h1>

			<div class="_c3">
				<h2 class="_c4">Default KPI Indicator</h2>
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

			<div class="_c3">
				<h2 class="_c4">Different Statuses</h2>
				<div class="_c5">
					<div>
						<h3 class="_c6">On Track</h3>
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
						<h3 class="_c6">At Risk</h3>
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
						<h3 class="_c6">Exceeded</h3>
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

			<div class="_c3">
				<h2 class="_c4">Different Sizes</h2>
				<div class="_c7">
					<div>
						<h3 class="_c6">Small</h3>
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
						<h3 class="_c6">Medium</h3>
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
						<h3 class="_c6">Large</h3>
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

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	._c6 {
		margin-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	._c7 {
		display: flex;
		align-items: flex-end;
		gap: 1.5rem;
	}
</style>
