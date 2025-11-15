<script lang="ts">
  import type { LoaderProps } from './type';
  import { LOADER_DEFAULT_CLASS, LOADER_ACCESSIBILITY_LABEL, LOADER_ROLE } from './constant';

  let { class: className = '', ...restProps }: LoaderProps = $props();

  // Combine default classes with custom classes
  const combinedClass = `${LOADER_DEFAULT_CLASS} ${className}`.trim();
</script>

<div
  class={combinedClass}
  role={LOADER_ROLE}
  {...restProps}
>
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >{LOADER_ACCESSIBILITY_LABEL}</span
  >
</div>
