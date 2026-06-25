<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import TableBody from './index.svelte';
	import TableRow from '../table-row/index.svelte';
	import TableCell from '../table-cell/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'striped', type: 'boolean', defaultValue: true },
		{ name: 'activeFirstRow', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="atoms-table-body"
	title="Table Body"
	component={TableBody}
	category="Atoms"
	description="A body component for tables."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Table Body Example</p>
				<p class="_c4">SlotToggle row states and verify visual behavior.</p>

				<div class="_c5">
					<table class="_c6 divide-[--color-border-primary]">
						<TableBody>
							{#snippet content()}
								<TableRow
									striped={values.striped as boolean}
									active={values.activeFirstRow as boolean}
								>
									{#snippet content()}
										<TableCell>Row A</TableCell>
										<TableCell>10</TableCell>
									{/snippet}
								</TableRow>
								<TableRow striped={values.striped as boolean}>
									{#snippet content()}
										<TableCell>Row B</TableCell>
										<TableCell>20</TableCell>
									{/snippet}
								</TableRow>
							{/snippet}
						</TableBody>
					</table>
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Body Variations</h3>
				<p class="_c9">Different body configurations.</p>

				<div class="_c10">
					<article class="_c11">
						<p class="_c12">Striped Rows</p>
						<table class="_c6 divide-[--color-border-primary]">
							<TableBody>
								{#snippet content()}
									<TableRow striped>
										<TableCell>Item 1</TableCell>
										<TableCell>Value 1</TableCell>
									</TableRow>
									<TableRow striped>
										<TableCell>Item 2</TableCell>
										<TableCell>Value 2</TableCell>
									</TableRow>
								{/snippet}
							</TableBody>
						</table>
					</article>
				</div>
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
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		margin-top: 1.25rem;
	}
	._c10 > * + * {
		margin-top: 1rem;
	}
	._c11 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c12 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		overflow-x: auto;
	}
	._c6 {
		min-width: 100%;
	}
	._c6 > * + * {
		border-top-width: 1px;
		border-style: solid;
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
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
