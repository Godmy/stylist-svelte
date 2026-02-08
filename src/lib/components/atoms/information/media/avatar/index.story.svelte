<script lang="ts">
	import Avatar from './index.svelte';

	let props = $props();

	let src: string = $derived(props.src ?? 'https://via.placeholder.com/150');
	let alt: string = $derived(props.alt ?? 'User avatar');
	let name: string = $derived(props.name ?? 'John Doe');
	let status: 'online' | 'away' | 'offline' | 'typing' | 'idle' | undefined = $derived(
		props.status ?? undefined
	);
	let size: 'sm' | 'md' | 'lg' | 'xl' = $derived(props.size ?? 'md');
	let showStatus: boolean = $derived(props.showStatus ?? false);

	export const controls = [
		{
			name: 'src',
			type: 'text',
			defaultValue: 'https://via.placeholder.com/150',
			group: 'Content'
		},
		{ name: 'alt', type: 'text', defaultValue: 'User avatar', group: 'Content' },
		{ name: 'name', type: 'text', defaultValue: 'John Doe', group: 'Content' },
		{
			name: 'status',
			type: 'select',
			options: ['online', 'away', 'offline', 'typing', 'idle', ''],
			defaultValue: '',
			group: 'Style'
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
			group: 'Layout'
		},
		{ name: 'showStatus', type: 'boolean', defaultValue: false, group: 'Behavior' }
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Avatar Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Avatar</h2>
		<div class="flex flex-col gap-4">
			<div class="inline-block">
				<Avatar {src} {alt} {name} status={status || undefined} {size} {showStatus} />
			</div>
			{#if showStatus && status}
				<p class="text-sm text-gray-500">
					Status indicator is visible: {status}
				</p>
			{/if}
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="avatar-src" class="mb-1 block text-sm">Src:</label>
				<input id="avatar-src" type="text" bind:value={src} class="w-48 rounded border p-1" />
			</div>

			<div>
				<label for="avatar-name" class="mb-1 block text-sm">Name:</label>
				<input id="avatar-name" type="text" bind:value={name} class="w-32 rounded border p-1" />
			</div>

			<div>
				<label for="avatar-alt" class="mb-1 block text-sm">Alt:</label>
				<input id="avatar-alt" type="text" bind:value={alt} class="w-32 rounded border p-1" />
			</div>

			<div>
				<label for="avatar-status" class="mb-1 block text-sm">Status:</label>
				<select id="avatar-status" bind:value={status} class="rounded border p-1">
					<option value="">No Status</option>
					<option value="online">Online</option>
					<option value="away">Away</option>
					<option value="offline">Offline</option>
					<option value="typing">Typing</option>
					<option value="idle">Idle</option>
				</select>
			</div>

			<div>
				<label for="avatar-size" class="mb-1 block text-sm">Size:</label>
				<select id="avatar-size" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
					<option value="xl">Extra Large</option>
				</select>
			</div>

			<div class="flex items-end">
				<label for="avatar-showStatus" class="flex items-center gap-1">
					<input id="avatar-showStatus" type="checkbox" bind:checked={showStatus} />
					Show Status
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<Avatar size="sm" name="SM" />
				<span class="mt-1 text-xs">Small</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar size="md" name="MD" />
				<span class="mt-1 text-xs">Medium</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar size="lg" name="LG" />
				<span class="mt-1 text-xs">Large</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar size="xl" name="XL" />
				<span class="mt-1 text-xs">Extra Large</span>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Statuses</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
			<div class="flex flex-col items-center">
				<Avatar name="ON" status="online" showStatus />
				<span class="mt-1 text-xs">Online</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar name="AW" status="away" showStatus />
				<span class="mt-1 text-xs">Away</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar name="OF" status="offline" showStatus />
				<span class="mt-1 text-xs">Offline</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar name="TY" status="typing" showStatus />
				<span class="mt-1 text-xs">Typing</span>
			</div>
			<div class="flex flex-col items-center">
				<Avatar name="ID" status="idle" showStatus />
				<span class="mt-1 text-xs">Idle</span>
			</div>
		</div>
	</div>
</div>
