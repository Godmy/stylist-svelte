<script lang="ts">
	import createNpmBadgeState from '$stylist/information/function/state/npm-badge/index.svelte';
	import type { NpmBadgeRecipe } from '$stylist/information/interface/recipe/npm-badge';
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

	let props: NpmBadgeRecipe & InformationHTMLAttributes<HTMLElement> = $props();

	const state = createNpmBadgeState(props);
	const value = $derived(props.value);
	const link = $derived(props.link);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				type: _type,
				label: _label,
				value: _value,
				link: _link,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

{#if link}
	<a href={link} class={state.linkClasses} target="_blank" rel="noopener noreferrer" {...restProps}>
		<span class={state.classes}>
			<span class="npm-badge-label font-semibold">{state.label}:</span>
			<span class="npm-badge-value ml-1">{value}</span>
		</span>
	</a>
{:else}
	<span class={state.classes} {...restProps}>
		<span class="npm-badge-label">{state.label}:</span>
		<span class="npm-badge-value">{value}</span>
	</span>
{/if}

<style>
	.npm-badge-label {
		font-weight: 600;
	}
	.npm-badge-value {
		margin-left: 0.25rem;
	}
</style>
