<script lang="ts">
  import { TableSkeletonStyleManager } from './styles';
  import Skeleton from './../skeleton/Skeleton.svelte';
  import type { ITableSkeletonProps } from './types';

  /**
   * TableSkeleton component - displays a table loading placeholder
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying a table skeleton loading placeholder.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: TableSkeleton can be substituted with other table loading placeholders without breaking functionality.
   * Interface Segregation Principle: ITableSkeletonProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{
    rows?: number;
    columns?: number;
  } & ITableSkeletonProps>();

  // Set default values
  const rows = props.rows ?? 5;
  const columns = props.columns ?? 4;

  // Generate the CSS classes using the style manager
  const containerClass = $derived(TableSkeletonStyleManager.generateClass(props.class));
  const tableClass = $derived(TableSkeletonStyleManager.generateTableClass());
  const headerClass = $derived(TableSkeletonStyleManager.generateHeaderClass());
  const headerCellClass = $derived(TableSkeletonStyleManager.generateHeaderCellClass());
  const bodyClass = $derived(TableSkeletonStyleManager.generateBodyClass());
  const dataCellClass = $derived(TableSkeletonStyleManager.generateDataCellClass());

  // Create arrays for iteration
  const rowArray = $derived(Array.from({ length: rows }, (_, i) => i));
  const columnArray = $derived(Array.from({ length: columns }, (_, i) => i));
</script>

<div class={containerClass}>
  <table class={tableClass}>
    <thead class={headerClass}>
      <tr>
        {#each columnArray as _}
          <th class={headerCellClass}>
            <Skeleton width="80px" height="1rem" />
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class={bodyClass}>
      {#each rowArray as _}
        <tr>
          {#each columnArray as _}
            <td class={dataCellClass}>
              <Skeleton width="120px" height="1rem" />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>