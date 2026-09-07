<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AccountSettingsForm from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'name', type: 'text', defaultValue: 'John Doe' },
		{ name: 'email', type: 'text', defaultValue: 'john@example.com' },
		{ name: 'locale', type: 'text', defaultValue: 'en-US' }
	];
</script>

<Story
	{controls}
	component={AccountSettingsForm}
	title="AccountSettingsForm"
	category="Organisms/User"
	description="Editable account settings form for name, email and locale."
>
	{#snippet children(values: any)}
		<AccountSettingsForm name={values.name} email={values.email} locale={values.locale} />
	{/snippet}
</Story>
