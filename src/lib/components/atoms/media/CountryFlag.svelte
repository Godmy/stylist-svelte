<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Компонент для отображения флага страны по коду
   *
   * @param countryCode - Двухбуквенный код страны (ISO 3166-1 alpha-2)
   * @param size - Размер флага (в пикселях)
   * @param className - Дополнительные CSS классы
   * @returns Флаг страны в виде эмодзи
   */
  type Props = {
    countryCode?: string;
    size?: number;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLSpanElement>;

  const {
    countryCode = '',
    size = 24,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  const flagEmoji = $derived((() => {
    if (!countryCode || countryCode.length !== 2) return '';
    
    // Преобразуем код страны в эмодзи флага
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char: string) => 127397 + char.charCodeAt(0));
    
    return String.fromCodePoint(...codePoints);
  })());

  const isValidCountryCode = $derived(flagEmoji !== '');
</script>

{#if isValidCountryCode}
  <span
    class={`inline-block text-center align-middle ${className}`}
    style={`font-size: ${size}px; width: ${size}px; height: ${size}px; line-height: ${size}px;`}
    {...restProps}
  >
    {flagEmoji}
  </span>
{:else}
  <div
    class={`inline-flex items-center justify-center align-middle text-[--color-text-tertiary] bg-[--color-bg-tertiary] rounded-sm ${className}`}
    style={`width: ${size}px; height: ${size}px; line-height: ${size}px; font-size: ${size * 0.6}px;`}
  >
    {#if content}
      {@render content()}
    {:else}
      🌍
    {/if}
  </div>
{/if}