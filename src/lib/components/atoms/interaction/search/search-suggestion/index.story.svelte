<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SearchSuggestion from './index.svelte';

	let picked = $state('');

	const suggestions = [
		{ id: '1', text: 'Analytics dashboard', category: 'Pages', count: 12 },
		{ id: '2', text: 'Annual report', category: 'Documents', count: 3 },
		{ id: '3', text: 'Team settings', category: 'Settings', count: 1 },
		{ id: '4', text: 'API tokens', category: 'Security', count: 2 }
	];

	const controls: ControlConfig[] = [
		{ name: 'query', type: 'text', defaultValue: 'a' },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'maxSuggestions', type: 'number', defaultValue: 4, min: 1, max: 10, step: 1 }
	];
</script>

<Story component={SearchSuggestion} title="SearchSuggestion" description="Suggestion list for typeahead and search UX." {controls}>
	{#snippet children(values: any)}
		<div class="max-w-md space-y-2">
			<SearchSuggestion suggestions={suggestions} query={values.query} loading={values.loading} maxSuggestions={values.maxSuggestions} onValueChange={(item) => (picked = item.text)} />
			<p class="text-sm text-[--color-text-secondary]">Picked: {picked || 'none'}</p>
		</div>
	{/snippet}
</Story>
