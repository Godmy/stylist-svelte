<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StoreTrustInsert from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'years', type: 'text', defaultValue: '8' },
		{
			name: 'text',
			type: 'text',
			defaultValue: 'years of field-tested routes, seasonal timing, trusted drivers and sunrise stops.'
		}
	];
</script>

<Story
	id="travel-commerce-organisms-store-trust-insert"
	title="Travel Commerce / StoreTrustInsert"
	category="Travel Commerce/Organisms"
	component={StoreTrustInsert}
	description="Trust insert for the travel store and tour detail pages."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<StoreTrustInsert years={values.years} text={values.text} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
