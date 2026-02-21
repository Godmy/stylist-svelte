<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PermissionGate from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'hasPermission',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'useCustomFallback',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	id="atoms-permission-gate"
	title="PermissionGate"
	component={PermissionGate}
	category="Atoms"
	description="Conditionally renders content based on permission state"
	controls={controls}
>
	{#snippet children(values: any)}
		<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
			{#if values.useCustomFallback}
				<PermissionGate hasPermission={values.hasPermission as boolean}>
					{#snippet children()}
						<div class="rounded border border-emerald-300 bg-emerald-50 p-4 text-emerald-900">
							Visible content for allowed users.
						</div>
					{/snippet}
					{#snippet fallback()}
						<div class="rounded border border-amber-300 bg-amber-50 p-4 text-amber-900">
							Custom fallback: access is restricted.
						</div>
					{/snippet}
				</PermissionGate>
			{:else}
				<PermissionGate hasPermission={values.hasPermission as boolean}>
					{#snippet children()}
						<div class="rounded border border-emerald-300 bg-emerald-50 p-4 text-emerald-900">
							Visible content for allowed users.
						</div>
					{/snippet}
				</PermissionGate>
			{/if}
		</div>
	{/snippet}
</Story>
