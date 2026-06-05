<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Kbd from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'key1',
			label: 'First Key',
			description: 'Primary modifier key.',
			type: 'text',
			defaultValue: 'Ctrl'
		},
		{
			name: 'key2',
			label: 'Second Key',
			description: 'Main action key.',
			type: 'text',
			defaultValue: 'K'
		},
		{
			name: 'key3',
			label: 'Third Key',
			description: 'Optional final key in the shortcut.',
			type: 'text',
			defaultValue: ''
		}
	];
</script>

<Story
	{controls}
	component={Kbd}
	title="Kbd"
	category="Atoms/Typography"
	description="Keyboard shortcut token for command palettes, docs, and interaction hints."
	tags={['shortcut', 'keyboard', 'hint']}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,1fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<p class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase">
					Shortcut Preview
				</p>
				<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">Command palette hint</h3>
				<div
					class="mt-6 flex flex-wrap items-center gap-2 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<Kbd>{values.key1 as string}</Kbd>
					<span class="text-[--color-text-tertiary]">+</span>
					<Kbd>{values.key2 as string}</Kbd>
					{#if values.key3}
						<span class="text-[--color-text-tertiary]">+</span>
						<Kbd>{values.key3 as string}</Kbd>
					{/if}
				</div>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
			>
				<h3 class="text-base font-semibold text-[--color-text-primary]">Common Patterns</h3>
				<div class="mt-4 grid gap-3 rounded-[1.5rem] bg-[--color-background-primary] p-5">
					<div
						class="flex items-center justify-between rounded-xl bg-[--color-background-secondary] px-4 py-3"
					>
						<span class="text-sm text-[--color-text-secondary]">Search</span>
						<div class="flex items-center gap-2"><Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd></div>
					</div>
					<div
						class="flex items-center justify-between rounded-xl bg-[--color-background-secondary] px-4 py-3"
					>
						<span class="text-sm text-[--color-text-secondary]">Command Menu</span>
						<div class="flex items-center gap-2">
							<Kbd>Cmd</Kbd><span>+</span><Kbd>Shift</Kbd><span>+</span><Kbd>P</Kbd>
						</div>
					</div>
				</div>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm xl:col-span-2"
			>
				<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
				<p class="mt-3 text-[--color-text-secondary]">
					Use `Kbd` only for actual keyboard hints. It works best next to actions, search fields,
					command palettes, and tutorial steps where the shortcut is part of the workflow.
				</p>
			</div>
		</section>
	{/snippet}
</Story>
