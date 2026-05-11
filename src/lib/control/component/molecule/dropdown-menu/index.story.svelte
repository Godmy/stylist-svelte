<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DropdownMenu from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'position',
			type: 'select' as TokenControllerType,
			defaultValue: 'left',
			options: ['left', 'right', 'center'],
			description: 'Position of the dropdown menu'
		},
		{
			name: 'disabled',
			type: 'boolean' as TokenControllerType,
			defaultValue: false,
			description: 'Whether the dropdown is disabled'
		}
	];

	function handleMenuItemClick(action: string, closeDropdown: () => void) {
		console.log(`${action} clicked`);
		closeDropdown();
	}
</script>

<Story
	{controls}
	title="DropdownMenu Component"
	description="A dropdown menu component for displaying action lists"
>
	{#snippet children(controlValues: any)}
		<div class="flex h-40 items-center justify-center">
			<DropdownMenu
				label="Options"
				position={controlValues.position}
				disabled={controlValues.disabled}
			>
				{#snippet children({ closeDropdown }: { closeDropdown: () => void })}
					<button
						class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[--color-background-secondary]"
						onclick={() => handleMenuItemClick('New', closeDropdown)}
					>
						New
					</button>
					<button
						class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[--color-background-secondary]"
						onclick={() => handleMenuItemClick('Open', closeDropdown)}
					>
						Open
					</button>
					<button
						class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[--color-background-secondary]"
						onclick={() => handleMenuItemClick('Save', closeDropdown)}
					>
						Save
					</button>
					<hr class="my-1 border-[--color-border-primary]" />
					<button
						class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[--color-background-secondary]"
						onclick={() => handleMenuItemClick('Settings', closeDropdown)}
					>
						Settings
					</button>
					<button
						class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[--color-background-secondary]"
						onclick={() => handleMenuItemClick('Help', closeDropdown)}
					>
						Help
					</button>
				{/snippet}
			</DropdownMenu>
		</div>
	{/snippet}
</Story>
