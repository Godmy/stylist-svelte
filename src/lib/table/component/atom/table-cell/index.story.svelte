<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import TableCell from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'variant', type: 'select', options: ['header', 'data'], defaultValue: 'data' },
		{ name: 'align', type: 'select', options: ['left', 'center', 'right'], defaultValue: 'left' }
	];
</script>

<Story
	id="atoms-table-cell"
	title="Table Cell"
	component={TableCell}
	category="Atoms"
	description="A cell component for tables."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Table Cell Example</p>
				<p class="_c4">A cell component for tables.</p>

				<div class="_c5">
					<table class="_c6 divide-[--color-border-primary]">
						<thead>
							<tr>
								<TableCell {...values}>Sample Cell</TableCell>
								<TableCell {...values}>Aligned Cell</TableCell>
							</tr>
						</thead>
						<tbody>
							<tr>
								<TableCell>Regular Cell</TableCell>
								<TableCell>Regular Cell</TableCell>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Cell Variations</h3>
				<p class="_c9">Different cell configurations.</p>

				<div class="_c10">
					<article class="_c11">
						<p class="_c12">Header Cell</p>
						<table class="_c6 divide-[--color-border-primary]">
							<thead>
								<tr>
									<TableCell variant="header">Header Cell</TableCell>
									<TableCell variant="header">Header Cell</TableCell>
								</tr>
							</thead>
						</table>
					</article>

					<article class="_c11">
						<p class="_c12">Data Cell</p>
						<table class="_c6 divide-[--color-border-primary]">
							<tbody>
								<tr>
									<TableCell variant="data">Data Cell</TableCell>
									<TableCell variant="data">Data Cell</TableCell>
								</tr>
							</tbody>
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
