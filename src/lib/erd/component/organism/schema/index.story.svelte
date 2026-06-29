<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import audienceEngagementSql from '../../../../../../../../docs/chat/20260628 - db/20250428 - SQL - audience_engagement.sql?raw';
	import Schema from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'zoom', type: 'number', defaultValue: 1, min: 0.5, max: 1.6, step: 0.1 },
		{ name: 'showRelations', type: 'boolean', defaultValue: true },
		{ name: 'highlightRelations', type: 'boolean', defaultValue: true },
		{ name: 'draggable', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={Schema}
	title="Schema"
	description="Composed ERD organism with text dialect editor, toolbar controls and draggable schema view."
	{controls}
>
	{#snippet children(values: any)}
		<Schema
			value={audienceEngagementSql}
			zoom={Number(values.zoom ?? 1)}
			showRelations={Boolean(values.showRelations)}
			highlightRelations={Boolean(values.highlightRelations)}
			draggable={Boolean(values.draggable)}
		/>
	{/snippet}
</Story>
