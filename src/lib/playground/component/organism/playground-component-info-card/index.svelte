<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createPlaygroundComponentInfoCardState from '$stylist/playground/function/state/playground-component-info-card/index.svelte';
	import type { PlaygroundComponentInfoCardProps } from '$stylist/playground/type/struct/playground-component-info-card-props';

	const X = 'x';
	const Package = 'package';
	const Tag = 'tag';
	const FileCode = 'file-code';
	const ExternalLink = 'external-link';
	const Copy = 'copy';
	const CheckCircle = 'check-circle';
	const Info = 'info';
	const Layers = 'layers';
	const Calendar = 'calendar';
	const User = 'user';

	let props: PlaygroundComponentInfoCardProps = $props();
	const state = createPlaygroundComponentInfoCardState(props);
</script>

{#if state.isOpen}
	<div
		class="animate-fade-in fixed inset-0 z-[var(--z-index-overlay)] bg-black/50 backdrop-blur-sm"
		onclick={state.handleClose}
		onkeydown={(e) => e.key === 'Escape' && state.handleClose()}
		role="button"
		tabindex="0"
		aria-label="Close component info"
	></div>

	<div
		class="pointer-events-none fixed inset-0 z-[var(--z-index-modal)] flex items-center justify-center p-4"
	>
		<div
			class="info-card-modal animate-scale-in pointer-events-auto w-full max-w-3xl overflow-hidden"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => {
				if (e.key === 'Escape') {
					e.stopPropagation();
					state.handleClose();
				}
			}}
			role="dialog"
			aria-modal="true"
			aria-labelledby="component-info-title"
			tabindex="-1"
		>
			<div class="info-card-modal__hero relative p-7">
				<div class="info-card-modal__heroGlow absolute inset-0"></div>
				<div class="relative flex items-start justify-between gap-4">
					<div class="flex-1">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Package} class="h-5 w-5 text-white" />
							<h2 id="component-info-title" class="text-3xl font-black tracking-tight text-white">
								{state.componentName || 'Component Info'}
							</h2>
						</div>

						{#if state.category || state.subcategory}
							<div class="flex flex-wrap items-center gap-2">
								{#if state.category}
									<span class="info-card-modal__badge">{state.category}</span>
								{/if}
								{#if state.subcategory}
									<span class="info-card-modal__badge">{state.subcategory}</span>
								{/if}
							</div>
						{/if}
					</div>

					<button
						onclick={state.handleClose}
						class="group rounded-xl p-2 transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
						title="Close"
					>
						<BaseIcon name={X} class="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			<div class="max-h-[65vh] overflow-y-auto p-7">
				<div class="mb-7">
					<div class="mb-3 flex items-center gap-2">
						<BaseIcon
							name={Info}
							class="h-4 w-4 text-[var(--playground-accent,var(--color-primary-600))]"
						/>
						<h3 class="text-sm font-bold text-[var(--color-text-primary)]">Description</h3>
					</div>
					<p class="max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
						{state.description}
					</p>
				</div>

				<div class="mb-7 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="stat-card stat-card--indigo">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Layers} class="h-4 w-4 text-indigo-600" />
							<span class="text-xs font-semibold text-indigo-900">Props</span>
						</div>
						<p class="text-2xl font-black text-indigo-600">{state.propsCount}</p>
					</div>

					<div class="stat-card stat-card--green">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Tag} class="h-4 w-4 text-green-600" />
							<span class="text-xs font-semibold text-green-900">Version</span>
						</div>
						<p class="font-mono text-2xl font-black text-green-600">{state.version}</p>
					</div>

					<div class="stat-card stat-card--purple">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={User} class="h-4 w-4 text-purple-600" />
							<span class="text-xs font-semibold text-purple-900">Author</span>
						</div>
						<p class="text-sm font-bold text-purple-600">{state.author}</p>
					</div>

					<div class="stat-card stat-card--orange">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Calendar} class="h-4 w-4 text-orange-600" />
							<span class="text-xs font-semibold text-orange-900">Updated</span>
						</div>
						<p class="text-sm font-bold text-orange-600">{state.lastUpdated}</p>
					</div>
				</div>

				{#if state.npmPackage}
					<div class="mb-7">
						<div class="mb-3 flex items-center gap-2">
							<BaseIcon
								name={Package}
								class="h-4 w-4 text-[var(--playground-accent,var(--color-primary-600))]"
							/>
							<h3 class="text-sm font-bold text-[var(--color-text-primary)]">Installation</h3>
						</div>
						<div class="relative">
							<div class="rounded-2xl border border-gray-800 bg-gray-950 p-4">
								<code class="font-mono text-sm text-green-400">npm install {state.npmPackage}</code>
							</div>
							<button
								onclick={state.copyNpmCommand}
								class="absolute top-2 right-2 rounded-lg bg-gray-800 p-2 transition-all hover:scale-110 hover:bg-gray-700 active:scale-95"
								title="Copy command"
							>
								{#if state.copySuccess}
									<BaseIcon name={CheckCircle} class="h-4 w-4 text-green-400" />
								{:else}
									<BaseIcon name={Copy} class="h-4 w-4 text-gray-400 hover:text-white" />
								{/if}
							</button>
						</div>
					</div>
				{/if}

				{#if state.examples && state.examples.length > 0}
					<div class="mb-7">
						<div class="mb-3 flex items-center gap-2">
							<BaseIcon
								name={FileCode}
								class="h-4 w-4 text-[var(--playground-accent,var(--color-primary-600))]"
							/>
							<h3 class="text-sm font-bold text-[var(--color-text-primary)]">Usage Examples</h3>
						</div>
						<ul class="space-y-2">
							{#each state.examples as example}
								<li class="info-card-modal__example">
									<span class="info-card-modal__bullet"></span>
									<span class="text-sm text-[var(--color-text-secondary)]">{example}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div class="flex flex-col gap-3 sm:flex-row">
					<a
						href="https://www.npmjs.com/package/{state.npmPackage}"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
					>
						<BaseIcon name={Package} class="h-4 w-4" />
						NPM Package
						<BaseIcon
							name={ExternalLink}
							class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						/>
					</a>
					<a
						href="/docs/components/{state.componentName}"
						class="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
					>
						<BaseIcon name={FileCode} class="h-4 w-4" />
						Documentation
						<BaseIcon
							name={ExternalLink}
							class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: var(--opacity-0);
		}
		to {
			opacity: var(--opacity-100);
		}
	}

	@keyframes scale-in {
		from {
			opacity: var(--opacity-0);
			transform: scale(0.95);
		}
		to {
			opacity: var(--opacity-100);
			transform: scale(1);
		}
	}

	@keyframes fade-slide-up {
		from {
			opacity: var(--opacity-0);
			transform: translateY(8px);
		}
		to {
			opacity: var(--opacity-100);
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in var(--duration-200) var(--animation-ease-out);
	}

	.animate-scale-in {
		animation: scale-in var(--duration-300) var(--easing-ease-standard);
	}

	.info-card-modal {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 2rem;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 97%, white 3%),
			var(--color-background-primary)
		);
		box-shadow: 0 24px 60px rgb(15 23 42 / 0.24);
	}

	.info-card-modal__hero {
		background: linear-gradient(
			135deg,
			var(--color-primary-600),
			var(--color-info-600),
			var(--color-secondary-600, var(--color-primary-700))
		);
	}

	.info-card-modal__heroGlow {
		background:
			radial-gradient(circle at top right, rgb(255 255 255 / 0.24), transparent 32%),
			linear-gradient(180deg, rgb(0 0 0 / 0.12), transparent 60%);
	}

	.info-card-modal__badge {
		display: inline-flex;
		align-items: center;
		padding: 0.35rem 0.7rem;
		border: 1px solid rgb(255 255 255 / 0.28);
		border-radius: 999px;
		background: rgb(255 255 255 / 0.15);
		backdrop-filter: blur(8px);
		font-size: 0.74rem;
		font-weight: 700;
		color: white;
	}

	.info-card-modal__example {
		display: flex;
		align-items: flex-start;
		gap: 0.7rem;
		padding: 0.9rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 76%, transparent);
		border-radius: 1rem;
		background: color-mix(in srgb, var(--color-background-secondary) 72%, transparent);
	}

	.info-card-modal__bullet {
		width: 0.55rem;
		height: 0.55rem;
		margin-top: 0.45rem;
		border-radius: 999px;
		background: var(--playground-accent, var(--color-primary-500));
		flex-shrink: 0;
	}

	.stat-card {
		padding: 1rem;
		border-width: 1px;
		border-style: solid;
		border-radius: 1.25rem;
		animation: fade-slide-up var(--duration-300) var(--animation-ease-out);
	}

	.stat-card--indigo {
		border-color: rgb(199 210 254);
		background: linear-gradient(135deg, rgb(238 242 255), rgb(245 243 255));
	}

	.stat-card--green {
		border-color: rgb(187 247 208);
		background: linear-gradient(135deg, rgb(240 253 244), rgb(236 253 245));
	}

	.stat-card--purple {
		border-color: rgb(233 213 255);
		background: linear-gradient(135deg, rgb(250 245 255), rgb(253 242 248));
	}

	.stat-card--orange {
		border-color: rgb(254 215 170);
		background: linear-gradient(135deg, rgb(255 247 237), rgb(255 251 235));
	}
</style>
