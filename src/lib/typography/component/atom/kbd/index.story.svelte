<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Kbd from './index.svelte';

	const controls: SlotStory[] = [
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
		<section class="_c1">
			<div class="_c2">
				<p class="_c3 tracking-[0.24em]">Shortcut Preview</p>
				<h3 class="_c4">Command palette hint</h3>
				<div class="_c5">
					<Kbd>{values.key1 as string}</Kbd>
					<span class="_c6">+</span>
					<Kbd>{values.key2 as string}</Kbd>
					{#if values.key3}
						<span class="_c6">+</span>
						<Kbd>{values.key3 as string}</Kbd>
					{/if}
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Common Patterns</h3>
				<div class="_c9">
					<div class="_c10">
						<span class="_c11">Search</span>
						<div class="_c12"><Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd></div>
					</div>
					<div class="_c10">
						<span class="_c11">Command Menu</span>
						<div class="_c12">
							<Kbd>Cmd</Kbd><span>+</span><Kbd>Shift</Kbd><span>+</span><Kbd>P</Kbd>
						</div>
					</div>
				</div>
			</div>

			<div class="_c13">
				<h3 class="_c8">Usage Note</h3>
				<p class="_c14">
					Use `Kbd` only for actual keyboard hints. It works best next to actions, search fields,
					command palettes, and tutorial steps where the shortcut is part of the workflow.
				</p>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1280px) {
		._c1 {
			grid-template-columns: minmax(0, 1fr) minmax(20rem, 1fr);
		}
	}
	._c10 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	._c11 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c12 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	._c13 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	@media (min-width: 1280px) {
		._c13 {
			grid-column: span 2 / span 2;
		}
	}
	._c14 {
		margin-top: 0.75rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.25rem;
	}
	._c6 {
		color: var(--color-text-tertiary);
	}
	._c7 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c8 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c9 {
		margin-top: 1rem;
		display: grid;
		gap: 0.75rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
</style>
