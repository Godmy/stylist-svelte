<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    src?: string;
    alt?: string;
    caption?: string;
    width?: string;
    height?: string;
    class?: string;
    imageClass?: string;
    captionClass?: string;
    rounded?: boolean;
    bordered?: boolean;
    shadow?: boolean;
    loading?: 'lazy' | 'eager';
  };

  let {
    src,
    alt = 'Image',
    caption,
    width = '100%',
    height = 'auto',
    class: hostClass = '',
    imageClass = '',
    captionClass = '',
    rounded = false,
    bordered = true,
    shadow = true,
    loading = 'lazy',
    ...restProps
  }: Props = $props();

  let roundedClass = $derived(rounded ? 'rounded-lg' : '');
  let borderedClass = $derived(bordered ? 'border border-gray-200' : '');
  let shadowClass = $derived(shadow ? 'shadow-md' : '');
</script>

<div class={`image-with-caption flex flex-col ${hostClass}`} {...restProps}>
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading={loading}
    class={`w-full object-cover ${roundedClass} ${borderedClass} ${shadowClass} ${imageClass}`}
  />
  {#if caption}
    <div class={`mt-2 text-center text-sm text-gray-600 ${captionClass}`}>
      {caption}
    </div>
  {/if}
</div>
