<script lang="ts">
	import { ThemeConsumer } from '$stylist/theme/component/atom/theme-consumer';
	import { StyleManagerThemeSurface } from '$stylist/layout/class/style-manager/theme-surface';
	import type { ThemeSurfaceRecipe } from '$stylist/layout/interface/recipe/theme-surface';
	import { createThemeSurfaceState } from '$stylist/layout/function/state/theme-surface';

	let props: ThemeSurfaceRecipe = $props();
	const state = createThemeSurfaceState(props);
</script>

<svelte:head>
	<style>{StyleManagerThemeSurface.getStyleSheet()}</style>
</svelte:head>

<ThemeConsumer>
	{#snippet children(themeContext)}
		<section
			class={state.rootClass}
			data-theme-mode={themeContext?.themeMode}
			data-theme-name={themeContext?.themeScheme}
			{...state.restProps}
		>
			{#if props.header}
				<header class={state.headerClass}>
					{@render props.header(themeContext)}
				</header>
			{/if}

			<div class={state.contentClass}>
				{@render props.content(themeContext)}
			</div>

			{#if props.footer}
				<footer class={state.footerClass}>
					{@render props.footer(themeContext)}
				</footer>
			{/if}
		</section>
	{/snippet}
</ThemeConsumer>
