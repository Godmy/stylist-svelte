<script lang="ts">
	import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { Story } from '$stylist/playground/component';

	import FileListItem from './index.svelte';

	const item: FileItem = {
		id: 'file1',
		name: 'document.pdf',
		type: 'file',
		size: 1028000,
		modified: new Date(Date.now() - 86400000),
		created: new Date(Date.now() - 172800000),
		path: '/documents/file.pdf',
		owner: 'john.doe',
		selected: false
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showThumbnail', type: 'boolean', defaultValue: false },
		{ name: 'showSize', type: 'boolean', defaultValue: true },
		{ name: 'showModified', type: 'boolean', defaultValue: true },
		{ name: 'showOwner', type: 'boolean', defaultValue: true },
		{ name: 'enableSelection', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'compact'] }
	];
</script>

<Story component={FileListItem} title="FileListItem" description="Interactive file row with selection and actions." {controls}>
	{#snippet children(args: any)}
		<div class="border rounded">
			<FileListItem
				item={item}
				showThumbnail={args.showThumbnail as boolean}
				showSize={args.showSize as boolean}
				showModified={args.showModified as boolean}
				showOwner={args.showOwner as boolean}
				enableSelection={args.enableSelection as boolean}
				disabled={args.disabled as boolean}
				variant={args.variant as 'default' | 'compact'}
				onItemSelect={(selectedItem: FileItem) => {
					console.log('Selected item:', selectedItem.name);
				}}
				onItemDoubleClick={(selectedItem: FileItem) => {
					console.log('Double clicked item:', selectedItem.name);
				}}
				onItemAction={(selectedItem: FileItem, action: string) => {
					console.log('Item action:', { item: selectedItem.name, action });
				}}
			/>
		</div>
	{/snippet}
</Story>
