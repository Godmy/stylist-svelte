<script lang="ts">
	import CardSkeleton from './index.svelte';

	let count: number = 3;
	let showAvatar: boolean = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">CardSkeleton Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive CardSkeleton</h2>
		<CardSkeleton {count} {showAvatar} />

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="card-count" class="mb-1 block text-sm">Count:</label>
				<input
					id="card-count"
					type="number"
					min="1"
					max="10"
					bind:value={count}
					class="w-20 rounded border p-1"
				/>
			</div>

			<div class="flex items-end">
				<label for="show-avatar" class="flex items-center gap-1">
					<input id="show-avatar" type="checkbox" bind:checked={showAvatar} />
					Show Avatar
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Different Counts</h2>
		<div class="space-y-4">
			<div>
				<h3 class="mb-2 text-sm font-medium">Single Card</h3>
				<CardSkeleton count={1} showAvatar={false} />
			</div>
			<div>
				<h3 class="mb-2 text-sm font-medium">Multiple Cards with Avatar</h3>
				<CardSkeleton count={2} showAvatar={true} />
			</div>
		</div>
	</div>
</div>



