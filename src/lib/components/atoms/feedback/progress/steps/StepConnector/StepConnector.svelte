<script lang="ts">
  import type { IStepConnectorProps } from './types';
  import { StepConnectorStyleManager } from './styles';

  /**
   * StepConnector component - renders the horizontal line between two steps.
   */
  const {
    status = 'pending',
    class: className = '',
    ...restProps
  }: IStepConnectorProps = $props();

  const connectorClass = $derived(
    StepConnectorStyleManager.generateClass(status, className)
  );
</script>

<div
  class={connectorClass}
  role="presentation"
  aria-hidden="true"
  {...restProps}
></div>
