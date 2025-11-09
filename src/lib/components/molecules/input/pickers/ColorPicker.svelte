<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    value?: string;
    disabled?: boolean;
    showInput?: boolean;
    showPalette?: boolean;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = '#000000',
    disabled = false,
    showInput = true,
    showPalette = true,
    ...restProps
  }: Props = $props();

  let isOpen = $state(false);
  let internalValue = $state(value);
  let hue = $state(0); // 0-360
  let saturation = $state(100); // 0-100
  let lightness = $state(50); // 0-100

  // Update internal value when prop value changes
  $effect(() => {
    internalValue = value || '#000000';
  });

  // Calculate HSL values from hex
  $effect(() => {
    if (internalValue) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(internalValue);
      if (result) {
        let r = parseInt(result[1], 16) / 255;
        let g = parseInt(result[2], 16) / 255;
        let b = parseInt(result[3], 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;

        if (max !== min) {
          let d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h! /= 6;
        }

        hue = Math.round(h! * 360);
        saturation = Math.round(s * 100);
        lightness = Math.round(l * 100);
      }
    }
  });

  // Calculate hex from HSL
  function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  // Handle value change
  function handleValueChange(newValue: string) {
    internalValue = newValue;
    // Dispatch event to notify parent of change
    const event = new CustomEvent('colorChange', { detail: { color: newValue } });
    dispatchEvent(event);
  }

  // Handle hue change
  function handleHueChange(e: Event) {
    const target = e.target as HTMLInputElement;
    hue = parseInt(target.value);
    const newHex = hslToHex(hue, saturation, lightness);
    handleValueChange(newHex);
  }

  // Handle saturation/lightness change
  function handleSatLightChange(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    saturation = Math.round((x / rect.width) * 100);
    lightness = Math.round(100 - (y / rect.height) * 100);

    const newHex = hslToHex(hue, saturation, lightness);
    handleValueChange(newHex);
  }
</script>

<div class="relative inline-block" {...restProps}>
  <button 
    type="button"
    class="flex items-center border border-gray-300 rounded-md px-3 py-2 min-w-[140px] cursor-pointer"
    onclick={() => !disabled && (isOpen = !isOpen)}
    onkeydown={(e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !disabled) {
        e.preventDefault();
        isOpen = !isOpen;
      }
    }}
    disabled={disabled}
    aria-label={disabled ? 'Color picker disabled' : 'Open color picker'}
  >
    <div 
      class="w-6 h-6 rounded border border-gray-300 mr-2" 
      style="background-color: {internalValue}"
    ></div>
    {#if showInput}
      <input 
        type="text" 
        bind:value={internalValue} 
        class="outline-none bg-transparent"
        disabled={disabled}
        onchange={() => handleValueChange(internalValue)}
      />
    {/if}
  </button>

  {#if isOpen && !disabled}
    <div class="absolute top-full left-0 mt-2 p-3 bg-white border border-gray-200 rounded-md shadow-lg z-20">
      <!-- Saturation/Lightness picker -->
      <div 
        class="w-48 h-32 rounded mb-2 relative border border-gray-200"
        style="background: linear-gradient(to right, #fff, hsl({hue}, 100%, 50%));"
        onmousedown={handleSatLightChange}
        role="slider"
        tabindex="0"
        aria-valuenow={saturation}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Saturation and lightness picker"
      >
        <div 
          class="absolute w-3 h-3 rounded-full border border-white cursor-pointer"
          style="
            background-color: {internalValue};
            top: {100 - lightness}%;
            left: {saturation}%;
            transform: translate(-50%, -50%);
          "
          role="slider"
          tabindex="0"
          onmousedown={(e) => {
            e.preventDefault();
            handleSatLightChange(e);
          }}
          onkeydown={(e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
              // Implement keyboard navigation for the color picker
            }
          }}
          aria-valuenow={saturation}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Saturation and lightness handle"
        ></div>
      </div>

      <!-- Hue slider -->
      <input 
        type="range" 
        min="0" 
        max="360" 
        bind:value={hue} 
        class="w-full h-3 accent-transparent cursor-pointer"
        style="
          background: linear-gradient(to right, 
          rgb(255, 0, 0) 0%, 
          rgb(255, 255, 0) 17%, 
          rgb(0, 255, 0) 33%, 
          rgb(0, 255, 255) 50%, 
          rgb(0, 0, 255) 67%, 
          rgb(255, 0, 255) 83%, 
          rgb(255, 0, 0) 100%);
        "
        oninput={handleHueChange}
      />

      {#if showPalette}
        <div class="grid grid-cols-5 gap-1 mt-2">
          {#each [
            '#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27',
            '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4',
            '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e',
            '#efe4b0', '#b5e61d', '#709ce6', '#709ce6', '#c8bfe7'
          ] as color}
            <button
              class="w-6 h-6 rounded border border-gray-200"
              style="background-color: {color}"
              onclick={() => handleValueChange(color)}
              aria-label={`Select ${color} color`}
            ></button>
          {/each}
        </div>
      {/if}

      <div class="flex items-center mt-2">
        <input
          type="text"
          bind:value={internalValue}
          class="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          onchange={() => handleValueChange(internalValue)}
        />
        <button
          class="ml-2 px-3 py-1 bg-gray-100 rounded text-sm"
          onclick={() => isOpen = false}
        >
          OK
        </button>
      </div>
    </div>
  {/if}
</div>