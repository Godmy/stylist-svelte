<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AdminKpiRow from './index.svelte';
</script>

<Story
	component={AdminKpiRow}
	title="AdminKpiRow"
	category="TravelAdmin/Organisms/Dashboard"
	description="Row of dashboard metrics, built on stylist-svelte's commerce/MetricCard."
	controls={[]}
>
	{#snippet children()}
		<AdminKpiRow
			metrics={[
				{ label: 'Заявки за неделю', value: '24' },
				{ label: 'Средний чек', value: '18 400 ₽' },
				{ label: 'Конверсия витрины', value: '3.1%', description: 'Из просмотра тура в заявку' }
			]}
		/>
	{/snippet}
</Story>
