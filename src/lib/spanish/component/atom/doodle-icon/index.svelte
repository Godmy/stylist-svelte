<script lang="ts">
  type Kind =
    | "heart"
    | "rays"
    | "check"
    | "children"
    | "gamepad"
    | "music"
    | "scissors"
    | "clock"
    | "calendar";
  type Tone = "blue" | "orange" | "green";

  type Props = {
    kind?: Kind;
    tone?: Tone;
    size?: number;
    rotate?: number;
    label?: string;
    class?: string;
  };

  let {
    kind = "heart",
    tone = "blue",
    size = 40,
    rotate = 0,
    label,
    class: className = "",
  }: Props = $props();
</script>

<svg
  class="doodle doodle--{tone} {className}"
  style={`--doodle-size: ${size}px; --doodle-rotate: ${rotate}deg;`}
  viewBox="0 0 64 64"
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
>
  {#if kind === "heart"}
    <path
      class="stroke"
      d="M32 52C18 40 10 31 13 21c2-7 11-9 18-2 7-8 17-5 19 3 3 11-7 20-18 30z"
    />
  {:else if kind === "rays"}
    <path
      class="stroke"
      d="M32 8v12M10 22l11 6M54 22l-11 6M14 45l10-8M50 45l-10-8"
    />
  {:else if kind === "check"}
    <path class="stroke" d="M17 33l10 10 21-24" />
  {:else if kind === "children"}
    <circle class="stroke" cx="22" cy="18" r="7" />
    <circle class="stroke" cx="43" cy="18" r="7" />
    <path
      class="stroke"
      d="M13 53V39c0-8 18-8 18 0v14M34 53V39c0-8 18-8 18 0v14M18 31l-8 9M27 31l8 9M39 31l-8 9M48 31l8 9"
    />
  {:else if kind === "gamepad"}
    <path
      class="stroke"
      d="M15 28c3-7 31-7 34 0l5 15c2 8-6 12-12 5l-4-5H26l-4 5c-6 7-14 3-12-5l5-15z"
    />
    <path class="stroke" d="M22 34h10M27 29v10M40 33h1M47 38h1" />
  {:else if kind === "music"}
    <path
      class="stroke"
      d="M38 13v33c0 6-5 10-11 10s-10-3-10-8 5-8 11-8c2 0 4 0 5 1V18l18-4v27c0 6-5 10-11 10-6 0-10-3-10-8s5-8 11-8c2 0 4 0 5 1"
    />
  {:else if kind === "scissors"}
    <circle class="stroke" cx="18" cy="46" r="8" />
    <circle class="stroke" cx="18" cy="18" r="8" />
    <path class="stroke" d="M25 23l28 27M25 41l28-27M38 32h12" />
  {:else if kind === "clock"}
    <circle class="stroke" cx="32" cy="32" r="24" />
    <path class="stroke" d="M32 17v17l12 7" />
  {:else}
    <rect class="stroke" x="15" y="16" width="34" height="36" rx="5" />
    <path
      class="stroke"
      d="M22 11v10M42 11v10M15 26h34M24 35h5M35 35h5M24 43h5"
    />
  {/if}
</svg>

<style>
  .doodle {
    width: var(--doodle-size);
    height: var(--doodle-size);
    transform: rotate(var(--doodle-rotate));
    overflow: visible;
  }

  .stroke {
    fill: none;
    stroke: var(--doodle-color);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .doodle--blue {
    --doodle-color: #075a98;
  }

  .doodle--orange {
    --doodle-color: #f26f1d;
  }

  .doodle--green {
    --doodle-color: #668d24;
  }
</style>
