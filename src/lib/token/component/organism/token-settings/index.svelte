<script lang="ts">
	import TokenControlComposer from '$stylist/token/component/molecule/token/index.svelte';
	import { TOKEN_SETTING } from '$stylist/token/const/object/token-setting';
	import { createTokenSettingsState } from '$stylist/token/function/state/token-settings/index.svelte';

	let {
		settings = TOKEN_SETTING,
		title = 'Token Settings'
	}: {
		settings?: typeof TOKEN_SETTING;
		title?: string;
	} = $props();

	const state = createTokenSettingsState({ settings });

	function taxonomyFor(domain: string) {
		if (domain === 'interaction') return 'interaction';
		if (domain === 'architecture' || domain === 'canvas' || domain === 'graph' || domain === 'layout') {
			return 'architecture';
		}
		return 'information';
	}
</script>

<section class="token-settings">
	<header class="token-settings__header">
		<div>
			<h2>{title}</h2>
			<p>{state.filteredSettings.length} registered token groups</p>
		</div>
		<div class="token-settings__tools">
			<input
				type="search"
				placeholder="Search tokens"
				bind:value={state.search}
				aria-label="Search token settings"
			/>
			<select bind:value={state.domain} aria-label="Filter by domain">
				{#each state.domains as domain}
					<option value={domain}>{domain}</option>
				{/each}
			</select>
		</div>
	</header>

	<div class="token-settings__grid">
		{#each state.filteredSettings as setting}
			{@const currentValue = state.getValue(setting.key, setting.values[0] ?? '')}
			<article class="token-settings__item">
				<header>
					<div>
						<strong>{setting.label}</strong>
						<span>{setting.domain}</span>
					</div>
					<code>{currentValue}</code>
				</header>
				<TokenControlComposer
					value={currentValue}
					definition={{
						id: setting.key,
						functionalTaxonomy: taxonomyFor(setting.domain),
						tokenFile: setting.domain,
						tokenName: setting.key,
						controlKind: 'select',
						defaultValue: setting.values[0] ?? '',
						options: setting.values.map((value) => ({ label: value, value }))
					}}
					onChange={(value) => state.setValue(setting.key, value)}
				/>
			</article>
		{/each}
	</div>
</section>

<style>
	.token-settings {
		display: grid;
		gap: var(--spacing-3, 1rem);
		color: var(--text, #0f172a);
	}

	.token-settings__header {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: space-between;
		gap: var(--spacing-3, 1rem);
	}

	.token-settings__header h2 {
		margin: 0;
		font-size: 1.125rem;
		line-height: 1.35;
	}

	.token-settings__header p {
		margin: 0.2rem 0 0;
		color: var(--muted, #64748b);
		font-size: 0.875rem;
	}

	.token-settings__tools {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2, 0.5rem);
	}

	.token-settings__tools input,
	.token-settings__tools select {
		min-height: 2.25rem;
		border: 1px solid var(--line, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--surface, #fff);
		color: inherit;
		padding: 0.4rem 0.6rem;
		font: inherit;
	}

	.token-settings__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: var(--spacing-2, 0.75rem);
	}

	.token-settings__item {
		display: grid;
		gap: var(--spacing-2, 0.75rem);
		border: 1px solid var(--line, #cbd5e1);
		border-radius: 0.5rem;
		background: var(--surface, #fff);
		padding: var(--spacing-3, 1rem);
	}

	.token-settings__item header {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing-2, 0.75rem);
	}

	.token-settings__item strong,
	.token-settings__item span {
		display: block;
	}

	.token-settings__item strong {
		font-size: 0.92rem;
	}

	.token-settings__item span {
		margin-top: 0.15rem;
		color: var(--muted, #64748b);
		font-size: 0.78rem;
	}

	.token-settings__item code {
		align-self: start;
		max-width: 9rem;
		overflow: hidden;
		text-overflow: ellipsis;
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--surface, #fff) 82%, #0f172a 18%);
		color: var(--text, #0f172a);
		padding: 0.15rem 0.35rem;
		font-size: 0.75rem;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.token-settings__tools,
		.token-settings__tools input,
		.token-settings__tools select {
			width: 100%;
		}
	}
</style>
