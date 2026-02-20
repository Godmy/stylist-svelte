<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Avatar from './index.svelte';
	import type { AvatarUserStatus } from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'src',
			type: 'text',
			defaultValue: 'https://via.placeholder.com/150'
		},
		{
			name: 'alt',
			type: 'text',
			defaultValue: 'User avatar'
		},
		{
			name: 'name',
			type: 'text',
			defaultValue: 'John Doe'
		},
		{
			name: 'status',
			type: 'select',
			options: ['online', 'away', 'offline', 'typing', 'idle', ''],
			defaultValue: ''
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
			defaultValue: 'md'
		},
		{
			name: 'showStatus',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Avatar}
	title="Avatar Component"
	description="A component to display user avatars with customizable size and status indicators"
	tags={['information', 'media', 'avatar']}
>
	{#snippet children(values: any)}
		<Avatar
			src={values.src as string}
			alt={values.alt as string}
			name={values.name as string}
			status={values.status as AvatarUserStatus || undefined}
			size={values.size as 'sm' | 'md' | 'lg' | 'xl'}
			showStatus={values.showStatus as boolean}
		/>
	{/snippet}
</Story>
