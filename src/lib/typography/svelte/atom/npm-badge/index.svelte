<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import type { NpmBadgeRecipe as NpmBadgeProps } from '$stylist/typography/interface/recipe/npm-badge';
	import { createNpmBadgeState } from '$stylist/typography/function/state/npm-badge';

	let props: NpmBadgeProps & InformationHTMLAttributes<HTMLElement> = $props();

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
		<span class="npm-badge-label font-semibold">{state.label}:</span>
		<span class="npm-badge-value ml-1">{value}</span>
	</span>
{/if}

