<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import IconPicker from './index.svelte';

	import type { TokenControllerType } from '$stylist/domain/type/alias/controller-type';

	const controls = [
		{
			name: 'title',
			type: 'text' as TokenControllerType,
			defaultValue: 'Select an Icon',
			description: 'Title for the icon picker'
		},
		{
			name: 'searchPlaceholder',
			type: 'text' as TokenControllerType,
			defaultValue: 'Search icons...',
			description: 'Placeholder for the search input'
		},
		{
			name: 'columns',
			type: 'number' as TokenControllerType,
			defaultValue: 6,
			description: 'Number of columns in the grid'
		},
		{
			name: 'showSearch',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show the search input'
		},
		{
			name: 'showCategories',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show categories'
		}
	];

	type MockIconItem = {
		name: string;
		icon: string;
		keywords?: string[];
	};

	const icons: MockIconItem[] = [
		{ name: 'Heart', icon: 'heart', keywords: ['love', 'favorite', 'like'] },
		{ name: 'Star', icon: 'bookmark', keywords: ['rating', 'favorite', 'bookmark'] },
		{ name: 'Mail', icon: 'at-sign', keywords: ['email', 'message', 'inbox'] },
		{ name: 'Settings', icon: 'config', keywords: ['gear', 'cog', 'preferences'] },
		{ name: 'User', icon: 'user', keywords: ['person', 'profile', 'account'] },
		{ name: 'Search', icon: 'auto-search', keywords: ['find', 'lookup', 'magnifying'] },
		{ name: 'Bell', icon: 'bell', keywords: ['notification', 'alert', 'alarm'] },
		{ name: 'Camera', icon: 'image', keywords: ['photo', 'picture', 'image'] },
		{ name: 'File', icon: 'file', keywords: ['document', 'paper', 'page'] },
		{ name: 'Folder', icon: 'folder', keywords: ['directory', 'organize', 'storage'] },
		{ name: 'Image', icon: 'image-gallery', keywords: ['photo', 'gallery', 'picture'] },
		{ name: 'Audio', icon: 'audio', keywords: ['sound', 'note', 'music'] },
		{ name: 'Video', icon: 'video-player', keywords: ['movie', 'film', 'recording'] },
		{ name: 'Home', icon: 'dashboards', keywords: ['house', 'main', 'dashboard'] },
		{ name: 'Calendar', icon: 'calendar', keywords: ['date', 'schedule', 'time'] },
		{ name: 'Chat', icon: 'chat', keywords: ['chat', 'comment', 'conversation'] },
		{ name: 'Call', icon: 'call', keywords: ['call', 'contact', 'communication'] },
		{ name: 'Delete', icon: 'delete', keywords: ['delete', 'remove', 'garbage'] },
		{ name: 'Edit', icon: 'edit-3', keywords: ['pencil', 'modify', 'change'] },
		{ name: 'Copy', icon: 'copy', keywords: ['duplicate', 'clone', 'replicate'] }
	];

	let selectedIcon: string = '';

	function handleIconSelect(icon: MockIconItem) {
		selectedIcon = icon.name;
	}
</script>

<Story
	id="molecules-icon-picker"
	{controls}
	title="Molecules / Chat / IconPicker"
	category="Molecules/Chat"
	description="Interactive icon picker with searchable icon library"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<div class="_c2">
				<IconPicker
					{icons}
					title={controlValues.title}
					searchPlaceholder={controlValues.searchPlaceholder}
					{selectedIcon}
					columns={controlValues.columns}
					showSearch={controlValues.showSearch}
					showCategories={controlValues.showCategories}
					onIconSelect={handleIconSelect}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-left: auto;
		margin-right: auto;
		max-width: 36rem;
	}
</style>
