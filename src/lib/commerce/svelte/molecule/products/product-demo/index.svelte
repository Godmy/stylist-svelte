<script lang="ts">
	import { createProductDemoState } from '$stylist/commerce/function/state/product-demo';
	import type { ProductDemoProps } from '$stylist/commerce/function/state/product-demo';

	let props: ProductDemoProps = $props();
	const state = createProductDemoState(props);
</script>

<div class={state.containerClass}>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<h2 class="text-2xl font-bold mb-3">{props.title}</h2>
			<p class="text-[var(--color-text-primary)] mb-4">{props.description}</p>

			<ul class="mb-6 space-y-2">
				{#each props.features ?? [] as feature}
					<li class="flex items-start">
						<svg class="w-5 h-5 text-[var(--color-success-500)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>

			<button
				onclick={props.onDemo}
				class="px-6 py-3 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] font-medium rounded-lg hover:bg-[var(--color-primary-600)] transition-colors"
			>
				Try Demo
			</button>
		</div>

		<div class="bg-[var(--color-background-primary)] p-4 rounded-lg border border-[var(--color-border-primary)] shadow-sm">
			<h3 class="font-semibold mb-3">Live Demo</h3>
			<div class="border rounded p-4 bg-[var(--color-background-secondary)] min-h-[200px]">
				{@render props.demoContent()}
			</div>
		</div>
	</div>
</div>
