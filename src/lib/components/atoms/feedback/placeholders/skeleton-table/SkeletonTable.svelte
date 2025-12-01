<script lang="ts">
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
   * Dependency Inversion Principle: Component depends on abstractions (types) rather than concretions.
   */
  const props = $props<{
    rows?: number;
    columns?: number;
    class?: string;
  } & ITableSkeletonProps>();

  // Set default values
  const rows = props.rows ?? 5;
  const columns = props.columns ?? 4;

  // Generate CSS classes using utility classes
  const containerClass = `p-4 ${props.class || ''}`;
  const tableClass = 'w-full border-collapse';
  const headerClass = 'border-b border-[--color-border-secondary]';
  const headerCellClass = 'py-3 px-4 text-left';
  const bodyClass = '';
  const dataCellClass = 'py-3 px-4 border-b border-[--color-border-muted]';

  // Create arrays for iteration
  const rowArray = Array.from({ length: rows }, (_, i) => i);
  const columnArray = Array.from({ length: columns }, (_, i) => i);
</script>

<div class={containerClass}>
  <table class={tableClass}>
    <thead class={headerClass}>
      <tr>
        {#each columnArray as _}
          <th class={headerCellClass}>
            <div class="h-4 bg-[--color-skeleton] rounded animate-pulse" style="width: 80px"></div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class={bodyClass}>
      {#each rowArray as _}
        <tr>
          {#each columnArray as _}
            <td class={dataCellClass}>
              <div class="h-4 bg-[--color-skeleton] rounded animate-pulse" style="width: 120px"></div>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>