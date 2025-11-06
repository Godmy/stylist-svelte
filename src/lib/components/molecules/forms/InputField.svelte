<script lang="ts">
  import Input from '../../atoms/forms/Input.svelte';
  import type { InputProps } from '../../atoms/forms/Input.svelte';

  type Props = InputProps & {
    helperText?: string;
  };

  let {
    helperText,
    errors = [],
    ...rest
  }: Props = $props();
</script>

<div class="space-y-1">
  <Input
    {...rest}
    errors={errors}
  />

  {#if helperText && errors.length === 0}
    <p class="text-xs text-gray-500">{helperText}</p>
  {/if}
</div>
