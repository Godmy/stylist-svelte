<script lang="ts">
  type Variant = "maple" | "oval" | "small";
  type Tone = "yellow" | "amber" | "orange" | "russet";

  type Props = {
    variant?: Variant;
    tone?: Tone;
    size?: number;
    rotate?: number;
    class?: string;
  };

  let {
    variant = "maple",
    tone = "orange",
    size = 52,
    rotate = 0,
    class: className = "",
  }: Props = $props();
</script>

<svg
  class="leaf leaf--{tone} {className}"
  style={`--leaf-size: ${size}px; --leaf-rotate: ${rotate}deg;`}
  viewBox="0 0 80 80"
  aria-hidden="true"
>
  {#if variant === "maple"}
    <path
      class="leaf-fill"
      d="M39 6l8 18 15-12-3 20 17-1-14 12 12 10-19 2 4 19-16-12-9 15-4-19-19 8 9-17-17-5 17-7-8-16 18 5 8-20z"
    />
    <path
      class="leaf-vein"
      d="M40 17c-1 16-1 32-5 50M40 40L22 30M40 42l21-12M37 52l-16 9M42 52l14 12"
    />
  {:else if variant === "oval"}
    <path
      class="leaf-fill"
      d="M13 43c11-29 36-36 55-28-1 29-24 48-54 43 10-5 20-10 28-22-9 10-18 16-29 7z"
    />
    <path
      class="leaf-vein"
      d="M18 48c18-7 31-18 45-31M34 40l-7-13M43 33l1-14M26 44l-13-5"
    />
  {:else}
    <path
      class="leaf-fill"
      d="M18 44c5-20 23-33 44-30 1 22-13 39-36 43 7-7 13-14 18-25-6 7-14 12-26 12z"
    />
    <path
      class="leaf-vein"
      d="M23 49c13-8 25-18 35-31M36 39l-6-11M45 31l1-10"
    />
  {/if}
</svg>

<style>
  .leaf {
    width: var(--leaf-size);
    height: var(--leaf-size);
    transform: rotate(var(--leaf-rotate));
    filter: drop-shadow(0 0.16rem 0.12rem rgb(114 54 8 / 0.16));
    overflow: visible;
  }

  .leaf-fill {
    fill: var(--leaf-fill);
    stroke: color-mix(in srgb, var(--leaf-fill) 70%, #8b3a0b);
    stroke-width: 2.2;
    stroke-linejoin: round;
  }

  .leaf-vein {
    fill: none;
    stroke: color-mix(in srgb, var(--leaf-fill) 52%, #9c3d08);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .leaf--yellow {
    --leaf-fill: #ffd454;
  }

  .leaf--amber {
    --leaf-fill: #f8a822;
  }

  .leaf--orange {
    --leaf-fill: #f26f1d;
  }

  .leaf--russet {
    --leaf-fill: #b85025;
  }
</style>
