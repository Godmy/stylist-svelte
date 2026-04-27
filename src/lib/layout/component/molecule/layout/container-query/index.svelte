<script lang="ts">
	import { createContainerQueryState } from '$stylist/layout/function/state/container-query';
	import type { ContainerQueryProps } from '$stylist/layout/type/struct/layout-extended';

	let props: ContainerQueryProps = $props();
	const state = createContainerQueryState(props);
</script>

<!--
	@container устанавливает container-type через inline style.
	Дочерние компоненты могут использовать Tailwind container query классы:
	  @sm:  → min-width: 640px
	  @md:  → min-width: 768px
	  @lg:  → min-width: 1024px
	  @xl:  → min-width: 1280px
	  @2xl: → min-width: 1536px
	Для именованных контейнеров: @[name]/sm:, @[name]/md: и т.д.
-->
<div class={state.classes} style={state.containerStyle} {...state.restProps}>
	{#if props.children}{@render props.children()}{/if}
</div>
