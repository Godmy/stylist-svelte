<script lang="ts">
	import createProductDemoState from '$stylist/commerce/function/state/product-demo/createproductdemostate/index.svelte';
	import type { ProductDemoProps } from '$stylist/commerce/interface/recipe/product-demo-props';

	let props: ProductDemoProps = $props();
	const state = createProductDemoState(props);
</script>

<div class={state.containerClass}>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div>
			<h2 class="mb-3 text-2xl font-bold">{props.title}</h2>
			<p class="mb-4 text-[var(--color-text-primary)]">{props.description}</p>

			<ul class="mb-6 space-y-2">
				{#each props.features ?? [] as feature}
					<li class="flex items-start">
						<svg
							class="mt-0.5 mr-2 h-5 w-5 text-[var(--color-success-500)]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>

			<button
				onclick={props.onDemo}
				class="rounded-lg bg-[var(--color-primary-500)] px-6 py-3 font-medium text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-primary-600)]"
			>
				Try Demo
			</button>
		</div>

		<div
			class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm"
		>
			<h3 class="mb-3 font-semibold">Live Demo</h3>
			<div class="min-h-[200px] rounded border bg-[var(--color-background-secondary)] p-4">
				{@render props.demoContent()}
			</div>
		</div>
	</div>
</div>
