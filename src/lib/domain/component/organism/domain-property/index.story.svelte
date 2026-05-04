<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DomainProperty from './index.svelte';
	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
</script>

<Story
	component={DomainProperty}
	title="DomainProperty"
	description="Property rail with theme toggles, settings panel, and diagnostics access."
>
	{#snippet children()}
		<ThemeProvider initialMode="light" initialScheme="minimal" class="block rounded-2xl border border-slate-200 bg-white">
			{#snippet children()}
				<div class="flex min-h-[28rem] justify-end">
					<DomainProperty />
				</div>
			{/snippet}
		</ThemeProvider>
	{/snippet}
</Story>
