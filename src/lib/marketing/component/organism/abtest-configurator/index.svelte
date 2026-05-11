<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	const TestTube = 'test-tube';
	const GitBranch = 'git-branch';
	const Users = 'users';
	const Target = 'target';
	const Play = 'play';
	const Pause = 'pause';
	const Settings = 'settings';
	const BarChart3 = 'bar-chart-3';
	const Plus = 'plus';

	import type { SlotABTestConfigurator as IABTestConfiguratorProps } from '$stylist/marketing/interface/slot/ab-test-configurator';
	import { ABTestConfiguratorStyleManager } from '$stylist/marketing/class/style-manager/abtest-configurator';
	import { createABTestConfiguratorState } from '$stylist/marketing/function/state/abtest-configurator';

	let props: IABTestConfiguratorProps & {
		class?: string;
		headerClass?: string;
		formClass?: string;
		variantClass?: string;
		footerClass?: string;
	} = $props();
	const state = createABTestConfiguratorState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="flex items-center">
			<BaseIcon name={TestTube} class="mr-2 h-6 w-6 text-[var(--color-text-secondary)]" />
			<h3 class="text-lg font-medium text-[var(--color-text-primary)]">A/B Test Configurator</h3>
		</div>
		<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
			Configure and manage your A/B tests
		</p>
	</div>

	<div class={state.formClasses}>
		<div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label for="test-name" class="block text-sm font-medium text-[var(--color-text-primary)]"
					>Test Name</label
				>
				<div class="mt-1">
					<input
						type="text"
						id="test-name"
						class={`block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm ${
							state.errors.name ? 'border-[var(--color-danger-300)]' : ''
						}`}
						bind:value={state.test.name}
						placeholder="e.g., Button Color Impact"
					/>
					{#if state.errors.name}
						<p class="mt-2 text-sm text-[var(--color-danger-600)]">{state.errors.name}</p>
					{/if}
				</div>
			</div>

			<div class="sm:col-span-6">
				<label
					for="test-description"
					class="block text-sm font-medium text-[var(--color-text-primary)]">Description</label
				>
				<div class="mt-1">
					<textarea
						id="test-description"
						rows={3}
						class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
						bind:value={state.test.description}
						placeholder="Describe the purpose and expectations of this test..."
					></textarea>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="start-date" class="block text-sm font-medium text-[var(--color-text-primary)]"
					>Start Date</label
				>
				<div class="mt-1">
					<input
						type="date"
						id="start-date"
						class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
						bind:value={state.startDateString}
						onchange={(e) => {
							state.startDateString = (e.target as HTMLInputElement).value;
						}}
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="end-date" class="block text-sm font-medium text-[var(--color-text-primary)]"
					>End Date (optional)</label
				>
				<div class="mt-1">
					<input
						type="date"
						id="end-date"
						class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
						bind:value={state.endDateString}
						onchange={(e) => {
							state.endDateString = (e.target as HTMLInputElement).value;
						}}
					/>
				</div>
			</div>

			<div class="sm:col-span-6">
				<div class="flex items-center justify-between">
					<h4 class="text-sm font-medium text-[var(--color-text-primary)]">Variants</h4>
					<span class="text-xs text-[var(--color-text-secondary)]"
						>Total weight: {state.totalWeight}%</span
					>
				</div>

				{#if state.errors.weights}
					<p class="mt-2 text-sm text-[var(--color-danger-600)]">{state.errors.weights}</p>
				{/if}

				<div class="mt-2 space-y-4">
					{#each state.test.variants as variant}
						<div class={`rounded-lg border p-4 ${state.variantClassName}`}>
							<div class="flex items-start justify-between">
								<div class="flex items-center">
									<BaseIcon
										name={GitBranch}
										class="mr-2 h-5 w-5 text-[var(--color-text-tertiary)]"
									/>
									<div>
										<h5 class="font-medium text-[var(--color-text-primary)]">{variant.name}</h5>
										<p class="text-sm text-[var(--color-text-secondary)]">{variant.description}</p>
									</div>
								</div>

								<div class="flex items-center space-x-3">
									<div class="text-right">
										<label
											for="weight-{variant.id}"
											class="mb-1 block text-xs text-[var(--color-text-secondary)]">Traffic %</label
										>
										<input
											type="number"
											id="weight-{variant.id}"
											min="0"
											max="100"
											class="w-20 rounded border border-[var(--color-border-primary)] px-2 py-1 text-xs"
											bind:value={variant.weight}
											oninput={(e) =>
												state.handleUpdateWeight(
													variant.id,
													parseInt((e.target as HTMLInputElement).value) || 0
												)}
										/>
									</div>

									<button
										type="button"
										class={`inline-flex items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium shadow-sm focus:outline-none ${
											variant.isActive
												? 'bg-[var(--color-success-100)] text-[var(--color-success-800)] hover:bg-[var(--color-success-200)]'
												: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)] hover:bg-[var(--color-danger-200)]'
										}`}
										onclick={() => state.handleToggleStatus(variant.id)}
									>
										{variant.isActive ? 'Active' : 'Inactive'}
									</button>

									<button
										type="button"
										class="text-[var(--color-danger-600)] hover:text-[var(--color-danger-900)]"
										onclick={() => state.handleRemoveVariant(variant.id)}
										title="Remove variant"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="mt-4 rounded-lg bg-[var(--color-background-secondary)] p-4">
					<h5 class="mb-3 text-sm font-medium text-[var(--color-text-primary)]">Add New Variant</h5>
					<div class="grid grid-cols-1 gap-3 md:grid-cols-12">
						<div class="md:col-span-5">
							<input
								type="text"
								class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
								bind:value={state.newVariantName}
								placeholder="Variant name"
							/>
						</div>
						<div class="md:col-span-4">
							<input
								type="number"
								min="0"
								max="100"
								class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
								bind:value={state.newVariantWeight}
								placeholder="% traffic"
							/>
						</div>
						<div class="md:col-span-3">
							<button
								type="button"
								class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--color-primary-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-[var(--color-primary-700)] focus:outline-none"
								onclick={state.addVariant}
							>
								<BaseIcon name={Plus} class="mr-1 h-4 w-4" />
								Add
							</button>
						</div>
						<div class="mt-2 md:col-span-12">
							<input
								type="text"
								class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
								bind:value={state.newVariantDescription}
								placeholder="Variant description"
							/>
						</div>
					</div>
					{#if state.errors.newVariant}
						<p class="mt-2 text-sm text-[var(--color-danger-600)]">{state.errors.newVariant}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class={state.footerClasses}>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<span
					class="inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-3 py-0.5 text-sm font-medium text-[var(--color-primary-800)]"
				>
					{state.test.status.charAt(0).toUpperCase() + state.test.status.slice(1)}
				</span>
				<span class="ml-3 text-sm text-[var(--color-text-secondary)]">
					<BaseIcon name={Users} class="mr-1 inline h-4 w-4" />
					Targeting: {state.test.targetAudience || 'All Users'}
				</span>
			</div>

			<div class="flex space-x-3">
				<button
					type="button"
					class="inline-flex items-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] shadow-sm hover:bg-[var(--color-background-secondary)] focus:outline-none"
					onclick={state.saveTest}
				>
					<BaseIcon name={Settings} class="mr-1 h-4 w-4" />
					Save Draft
				</button>

				{#if state.test.status === 'draft' || state.test.status === 'paused'}
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-[var(--color-success-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-[var(--color-success-700)] focus:outline-none"
						onclick={state.startTest}
					>
						<BaseIcon name={Play} class="mr-1 h-4 w-4" />
						Start Test
					</button>
				{/if}

				{#if state.test.status === 'running'}
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-yellow-700 focus:outline-none"
						onclick={state.pauseTest}
					>
						<BaseIcon name={Pause} class="mr-1 h-4 w-4" />
						Pause Test
					</button>
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-[var(--color-primary-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-[var(--color-primary-700)] focus:outline-none"
						onclick={state.completeTest}
					>
						<BaseIcon name={BarChart3} class="mr-1 h-4 w-4" />
						Complete Test
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
