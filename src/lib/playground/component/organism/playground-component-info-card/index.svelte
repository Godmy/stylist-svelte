<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundComponentInfoCardState } from '$stylist/playground/function/state/playground-component-info-card';
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
	<!-- Backdrop -->
	<div
		class="animate-fade-in fixed inset-0 z-[var(--z-index-overlay)] bg-black/50 backdrop-blur-sm"
		onclick={state.handleClose}
		onkeydown={(e) => e.key === 'Escape' && state.handleClose()}
		role="button"
		tabindex="0"
		aria-label="Close component info"
	></div>

	<!-- Modal -->
	<div
		class="pointer-events-none fixed inset-0 z-[var(--z-index-modal)] flex items-center justify-center p-4"
	>
		<div
			class="info-card-modal animate-scale-in pointer-events-auto w-full max-w-2xl overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl dark:border-gray-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
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
			<!-- Header -->
			<div class="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
				<div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
				<div class="relative flex items-start justify-between">
					<div class="flex-1">
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Package} class="h-5 w-5 text-white" />
							<h2 id="component-info-title" class="text-2xl font-bold text-white">
								{state.componentName || 'Component Info'}
							</h2>
						</div>
						{#if state.category || state.subcategory}
							<div class="flex items-center gap-2">
								{#if state.category}
									<span
										class="inline-flex items-center rounded-lg border border-white/30 bg-white/20 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm"
									>
										{state.category}
									</span>
								{/if}
								{#if state.subcategory}
									<span
										class="inline-flex items-center rounded-lg border border-white/30 bg-white/20 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm"
									>
										{state.subcategory}
									</span>
								{/if}
							</div>
						{/if}
					</div>
					<button
						onclick={state.handleClose}
						class="group rounded-lg p-2 transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
						title="Close"
					>
						<BaseIcon name={X} class="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			<!-- Content -->
			<div class="max-h-[60vh] overflow-y-auto p-6">
				<!-- Description -->
				<div class="mb-6">
					<div class="mb-3 flex items-center gap-2">
						<BaseIcon name={Info} class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
						<h3 class="text-sm font-bold text-gray-900 dark:text-white">Description</h3>
					</div>
					<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						{state.description}
					</p>
				</div>

				<!-- Stats Grid -->
				<div class="mb-6 grid grid-cols-2 gap-4">
					<!-- PlaygroundComponentInfoCardProps Count -->
					<div
						class="stat-card rounded-xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-4 dark:border-indigo-800 dark:from-indigo-900/30 dark:to-purple-900/30"
					>
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Layers} class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
							<span class="text-xs font-semibold text-indigo-900 dark:text-indigo-200"
								>PlaygroundComponentInfoCardProps</span
							>
						</div>
						<p class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
							{state.propsCount}
						</p>
					</div>

					<!-- Version -->
					<div
						class="stat-card rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-4 dark:border-green-800 dark:from-green-900/30 dark:to-emerald-900/30"
					>
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Tag} class="h-4 w-4 text-green-600 dark:text-green-400" />
							<span class="text-xs font-semibold text-green-900 dark:text-green-200">Version</span>
						</div>
						<p class="font-mono text-2xl font-bold text-green-600 dark:text-green-400">
							{state.version}
						</p>
					</div>

					<!-- Author -->
					<div
						class="stat-card rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-4 dark:border-purple-800 dark:from-purple-900/30 dark:to-pink-900/30"
					>
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={User} class="h-4 w-4 text-purple-600 dark:text-purple-400" />
							<span class="text-xs font-semibold text-purple-900 dark:text-purple-200">Author</span>
						</div>
						<p class="text-sm font-bold text-purple-600 dark:text-purple-400">
							{state.author}
						</p>
					</div>

					<!-- Last Updated -->
					<div
						class="stat-card to-COLOR_AMBER-50 dark:to-COLOR_AMBER-900/30 rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 p-4 dark:border-orange-800 dark:from-orange-900/30"
					>
						<div class="mb-2 flex items-center gap-2">
							<BaseIcon name={Calendar} class="h-4 w-4 text-orange-600 dark:text-orange-400" />
							<span class="text-xs font-semibold text-orange-900 dark:text-orange-200">Updated</span
							>
						</div>
						<p class="text-sm font-bold text-orange-600 dark:text-orange-400">
							{state.lastUpdated}
						</p>
					</div>
				</div>

				<!-- Installation -->
				{#if state.npmPackage}
					<div class="mb-6">
						<div class="mb-3 flex items-center gap-2">
							<BaseIcon name={Package} class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
							<h3 class="text-sm font-bold text-gray-900 dark:text-white">Installation</h3>
						</div>
						<div class="relative">
							<div class="rounded-lg border-2 border-gray-700 bg-gray-900 p-4 dark:bg-black">
								<code class="font-mono text-sm text-green-400">
									npm install {state.npmPackage}
								</code>
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

				<!-- Examples -->
				{#if state.examples && state.examples.length > 0}
					<div class="mb-6">
						<div class="mb-3 flex items-center gap-2">
							<BaseIcon name={FileCode} class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
							<h3 class="text-sm font-bold text-gray-900 dark:text-white">Usage Examples</h3>
						</div>
						<ul class="space-y-2">
							{#each state.examples as example}
								<li
									class="flex items-start gap-2 rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-3 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
								>
									<span class="mt-0.5 text-indigo-500">•</span>
									<span class="text-sm text-gray-700 dark:text-gray-300">{example}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Links -->
				<div class="flex gap-3">
					<a
						href="https://www.npmjs.com/package/{state.npmPackage}"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm transition-all hover:scale-105 hover:from-red-100 hover:to-orange-100 hover:shadow-md active:scale-95 dark:border-red-800 dark:from-red-900/30 dark:to-orange-900/30 dark:text-red-300 dark:hover:from-red-800/40 dark:hover:to-orange-800/40"
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
						class="group flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:scale-105 hover:from-indigo-100 hover:to-purple-100 hover:shadow-md active:scale-95 dark:border-indigo-800 dark:from-indigo-900/30 dark:to-purple-900/30 dark:text-indigo-300 dark:hover:from-indigo-800/40 dark:hover:to-purple-800/40"
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

	.animate-fade-in {
		animation: fade-in var(--duration-200) var(--animation-ease-out);
	}

	.animate-scale-in {
		animation: scale-in var(--duration-300) var(--easing-ease-standard);
	}

	.stat-card {
		animation: fade-slide-up var(--duration-300) var(--animation-ease-out);
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
</style>
