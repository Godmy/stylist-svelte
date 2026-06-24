<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Icon from './index.svelte';
	import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';

	const allIconNames = Object.keys(TOKEN_ICON_REGISTRY) as (keyof typeof TOKEN_ICON_REGISTRY)[];

	let search = $state('');

	const filtered = $derived(
		search.trim()
			? allIconNames.filter((n) => n.includes(search.trim().toLowerCase()))
			: allIconNames
	);

	const sizes = [12, 16, 20, 24, 32, 48] as const;
	const demoIcons = ['search', 'user', 'settings', 'bell', 'chart', 'layout', 'file', 'atom'] as const;
</script>

<Story title="Icon" description="Компонент иконки с поддержкой всех иконок из TOKEN_ICON_REGISTRY">
	<div class="page">

		<section class="section">
			<h2 class="section-title">Размеры</h2>
			<div class="row">
				{#each sizes as size}
					<div class="size-cell">
						<Icon name="search" size={size} />
						<span class="label">{size}px</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Варианты container</h2>
			<div class="row">
				<div class="container-cell">
					<Icon name="user" size={20} container="none" />
					<span class="label">none</span>
				</div>
				<div class="container-cell">
					<Icon name="user" size={20} container="wrapper" />
					<span class="label">wrapper</span>
				</div>
				<div class="container-cell">
					<Icon name="user" size={20} container="circle" />
					<span class="label">circle</span>
				</div>
				<div class="container-cell">
					<Icon name="user" size={20} container="circle" filled />
					<span class="label">circle filled</span>
				</div>
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Набор иконок — {filtered.length} / {allIconNames.length}</h2>
			<input
				class="search"
				type="search"
				placeholder="Поиск по имени..."
				bind:value={search}
			/>
			<div class="grid">
				{#each filtered as name (name)}
					<div class="icon-cell" title={name}>
						<Icon {name} size={20} />
						<span class="icon-label">{name}</span>
					</div>
				{/each}
			</div>
		</section>

	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.section-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 1.5rem;
	}

	.size-cell,
	.container-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.label {
		font-size: 0.7rem;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
	}

	.search {
		width: 100%;
		max-width: 320px;
		padding: 0.4rem 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 6px;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font-size: 0.875rem;
		outline: none;
	}

	.search:focus {
		border-color: var(--color-primary-500);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
		gap: 0.5rem;
	}

	.icon-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 0.6rem 0.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
		cursor: default;
		transition: background 120ms;
	}

	.icon-cell:hover {
		background: var(--color-background-secondary);
	}

	.icon-label {
		font-size: 0.6rem;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		text-align: center;
		word-break: break-all;
		line-height: 1.3;
	}
</style>
