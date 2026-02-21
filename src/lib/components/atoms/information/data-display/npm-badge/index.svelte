<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { NpmBadgeProps } from '$stylist/design-system';
	import { createNpmBadgeState } from '$stylist/design-system/models/information/npm-badge.svelte';

	type Props = NpmBadgeProps & HTMLAttributes<HTMLElement>;

	let props: Props = $props();

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
