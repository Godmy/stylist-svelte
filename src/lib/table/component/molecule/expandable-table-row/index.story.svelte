<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ExpandableTableRow from './index.svelte';

	const controls = [
		{
			name: 'isExpanded',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the row is expanded'
		},
		{
			name: 'rowIndex',
			type: 'number',
			defaultValue: 1,
			min: 1,
			max: 10,
			description: 'Row index/ID'
		}
	];
</script>

<Story
	{controls}
	title="ExpandableTableRow Component"
	description="A table row that can be expanded to show additional details"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<table class="_c2">
				<thead class="_c3">
					<tr>
						<th class="_c4">ID</th>
						<th class="_c4">Name</th>
						<th class="_c4">Status</th>
					</tr>
				</thead>
				<tbody class="_c5">
					<ExpandableTableRow isExpanded={controlValues.isExpanded}>
						{#snippet rowContent()}
							<td class="_c6">#{controlValues.rowIndex}</td>
							<td class="_c6">Item {controlValues.rowIndex}</td>
							<td class="_c6">
								<span class="_c7"> Active </span>
							</td>
						{/snippet}
						{#snippet expandableContent()}
							<div class="_c8">
								<h4 class="_c9">Additional Details</h4>
								<p>
									This is the expanded content for row #{controlValues.rowIndex}. You can include
									additional information, forms, or other components here.
								</p>
								<div class="_c10">
									<button class="_c11">Edit</button>
									<button class="_c12">Delete</button>
								</div>
							</div>
						{/snippet}
					</ExpandableTableRow>
				</tbody>
			</table>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c10 {
		margin-top: 0.75rem;
		display: flex;
	}
	._c10 > * + * {
		margin-left: 0.75rem;
	}
	._c11 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-inverse);
	}
	._c12 {
		border-radius: 0.25rem;
		background-color: var(--color-neutral-500);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-inverse);
	}
	._c2 {
		min-width: 100%;
	}
	._c2 > * + * {
		border-top-width: 1px;
		border-style: solid;
	}
	._c3 {
		background-color: var(--color-background-secondary);
	}
	._c4 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c5 {
		background-color: var(--color-background-primary);
	}
	._c5 > * + * {
		border-top-width: 1px;
		border-style: solid;
	}
	._c6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		white-space: nowrap;
	}
	._c7 {
		display: inline-flex;
		border-radius: 9999px;
		background-color: var(--color-success-100);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		font-size: 0.75rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-success-800);
	}
	._c8 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c9 {
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	._c2 > * + * {
		border-top: 1px solid var(--color-border-primary);
	}
	._c5 > * + * {
		border-top: 1px solid var(--color-border-primary);
	}
</style>
