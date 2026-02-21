<script lang="ts">
	import type { AnnouncementBannerProps } from '$stylist/design-system';
	import { createAnnouncementBannerState } from '$stylist/design-system/models/information/announcement-banner.svelte';

	let props: AnnouncementBannerProps = $props();
	const state = createAnnouncementBannerState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				title: _title,
				description: _description,
				icon: _icon,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses} {...restProps}>
	<div class={state.flexClasses}>
		{#if props.icon}
			<img src={props.icon} alt="" class={state.iconClasses} />
		{/if}
		<div class={state.contentClasses}>
			<h3 class={state.titleClasses}>{props.title ?? ''}</h3>
			{#if props.description}
				<p class={state.descriptionClasses}>{props.description}</p>
			{/if}
			{#if props.children}
				<div class={state.childrenClasses}>
					{@render props.children?.()}
				</div>
			{/if}
		</div>
	</div>
</div>
