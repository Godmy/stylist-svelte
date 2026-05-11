<script lang="ts">
	import type { SlotFileSystemItem } from '$stylist/file';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { Story } from '$stylist/playground/component';

	import FileExplorer from './index.svelte';

	const items: SlotFileSystemItem[] = [
		{
			id: 'folder1',
			name: 'Documents',
			type: 'folder',
			size: 2048000,
			modified: new Date(Date.now() - 86400000),
			children: []
		},
		{
			id: 'file1',
			name: 'report.pdf',
			type: 'file',
			size: 1028000,
			modified: new Date(Date.now() - 172800000)
		},
		{
			id: 'file2',
			name: 'image.png',
			type: 'file',
			size: 3072000,
			modified: new Date(Date.now() - 259200000)
		},
		{
			id: 'folder2',
			name: 'Projects',
			type: 'folder',
			size: 5120000,
			modified: new Date(Date.now() - 345600000),
			children: []
		},
		{
			id: 'file3',
			name: 'presentation.pptx',
			type: 'file',
			size: 2048576,
			modified: new Date(Date.now() - 432000000)
		},
		{
			id: 'file4',
			name: 'spreadsheet.xlsx',
			type: 'file',
			size: 1536000,
			modified: new Date(Date.now() - 518400000)
		}
	];

	let currentPath = '/home/user';
	let viewMode: 'list' | 'grid' = 'grid';
	let searchable = true;
	let showPath = true;
	let enableSelection = true;
	let multiselect = false;

	const controls: InterfaceControllerSettings[] = [
		{ name: 'currentPath', type: 'text', defaultValue: '/home/user' },
		{ name: 'viewMode', type: 'select', options: ['list', 'grid'], defaultValue: 'grid' },
		{ name: 'searchable', type: 'boolean', defaultValue: true },
		{ name: 'showPath', type: 'boolean', defaultValue: true },
		{ name: 'enableSelection', type: 'boolean', defaultValue: true },
		{ name: 'multiselect', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="organisms-file-explorer"
	title="Organisms / Interaction / Controls / Files / FileExplorer"
	component={FileExplorer}
	category="Organisms/Interaction/Controls/Files"
	description="File explorer component with grid/list views, search and selection capabilities."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-file-explorer p-4">
			<h1 class="mb-4 text-lg font-semibold">FileExplorer Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive FileExplorer</h2>
				<div class="h-[500px]">
					<FileExplorer
						{items}
						currentPath={values.currentPath}
						viewMode={values.viewMode}
						searchable={values.searchable}
						showPath={values.showPath}
						enableSelection={values.enableSelection}
						multiselect={values.multiselect}
						onItemSelect={(item: SlotFileSystemItem) => {
							console.log('Item selected:', item.name);
						}}
						onItemDoubleClick={(item: SlotFileSystemItem) => {
							console.log('Item double-clicked:', item.name);
						}}
						onItemAction={(item: SlotFileSystemItem, action: string) => {
							console.log('Item action:', { item: item.name, action });
						}}
						onUpload={(files: FileList) => {
							console.log(
								'Files uploaded:',
								Array.from(files).map((f) => f.name)
							);
						}}
						onDownload={(item: SlotFileSystemItem) => {
							console.log('Item downloaded:', item.name);
						}}
					/>
				</div>

				<div class="mt-4 flex flex-wrap gap-2">
					<div>
						<label for="explorer-view-mode" class="mb-1 block text-sm">View Mode:</label>
						<select id="explorer-view-mode" bind:value={viewMode} class="rounded border p-1">
							<option value="grid">Grid</option>
							<option value="list">List</option>
						</select>
					</div>

					<div class="flex items-end">
						<label for="explorer-searchable" class="flex items-center gap-1">
							<input id="explorer-searchable" type="checkbox" bind:checked={searchable} />
							Searchable
						</label>
					</div>

					<div class="flex items-end">
						<label for="explorer-show-path" class="flex items-center gap-1">
							<input id="explorer-show-path" type="checkbox" bind:checked={showPath} />
							Show Path
						</label>
					</div>

					<div class="flex items-end">
						<label for="explorer-enable-selection" class="flex items-center gap-1">
							<input
								id="explorer-enable-selection"
								type="checkbox"
								bind:checked={enableSelection}
							/>
							Enable Selection
						</label>
					</div>

					<div class="flex items-end">
						<label for="explorer-multiselect" class="flex items-center gap-1">
							<input id="explorer-multiselect" type="checkbox" bind:checked={multiselect} />
							Multiselect
						</label>
					</div>
				</div>
			</div>

			<div class="rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">FileExplorer Variations</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<h3 class="mb-2 text-sm font-medium">List View</h3>
						<div class="h-[300px]">
							<FileExplorer {items} viewMode="list" currentPath="/documents" />
						</div>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Grid View (No Search)</h3>
						<div class="h-[300px]">
							<FileExplorer {items} viewMode="grid" currentPath="/projects" searchable={false} />
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
