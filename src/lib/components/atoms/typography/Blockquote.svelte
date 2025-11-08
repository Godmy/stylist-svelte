<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    cite?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    className?: string;
  };

  const props = $props();
  const cite = props.cite;
  const withBorder = props.withBorder ?? false;
  const withBackground = props.withBackground ?? false;
  const className = props.className ?? '';
  const children = props.children;

  const blockquoteClasses = $derived((() => {
    let classes = 'text-lg italic';

    if (withBorder) {
      classes += ' border-l-4 border-indigo-500 pl-4';
    }

    if (withBackground) {
      classes += ' bg-gray-50 p-4 rounded';
    } else {
      classes += ' p-2';
    }

    return classes + ` ${className}`;
  })());
</script>

<blockquote class={blockquoteClasses} cite={cite} {...props}>
  {@render children()}
  {#if cite}
    <footer class="mt-2 text-sm text-gray-500">
      &mdash; {cite}
    </footer>
  {/if}
</blockquote>