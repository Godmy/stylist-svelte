<script lang="ts">
	import type { AiResultCardContract } from '$stylist/science/interface/record/science';
	import { AiResultCardStyleManager } from '$stylist/science/class/style-manager/ai-result-card';

	let props: AiResultCardContract = $props();
	let {
		children,
		title = '',
		description = '',
		icon = '',
		class: className = ''
	} = props;
</script>

<div class={AiResultCardStyleManager.getContainerClass(className)}>
  <div class={AiResultCardStyleManager.getContentWrapperClass()}>
    {#if icon}
      <div class={AiResultCardStyleManager.getIconContainerClass()}>
        <img src={icon} alt="" class={AiResultCardStyleManager.getIconClass()} />
      </div>
    {/if}
    <div class={AiResultCardStyleManager.getTextContentWrapperClass()}>
      {#if title}
        <h3 class={AiResultCardStyleManager.getTitleClass()}>{title}</h3>
      {/if}
      {#if description}
        <p class={AiResultCardStyleManager.getDescriptionClass()}>{description}</p>
      {/if}
      {#if children}
        <div>
          {@render children()}
        </div>
      {/if}
    </div>
  </div>
</div>



