<script lang="ts">
  import type { Snippet } from "svelte";

  type Tone = "cream" | "blue";
  type Props = {
    tone?: Tone;
    class?: string;
    children?: Snippet;
  };

  let { tone = "blue", class: className = "", children }: Props = $props();
</script>

<div class="panel panel--{tone} {className}">
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .panel {
    position: relative;
    box-sizing: border-box;
    border-radius: 2.2rem 1.5rem 2.5rem 1.8rem / 1.7rem 2.5rem 1.7rem 2.3rem;
    background:
      radial-gradient(
        circle at 12% 12%,
        rgb(255 255 255 / 0.58),
        transparent 25%
      ),
      radial-gradient(
        circle at 86% 18%,
        rgb(255 255 255 / 0.45),
        transparent 22%
      ),
      var(--panel-bg);
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.55);
  }

  .panel::before,
  .panel::after {
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: var(--panel-bg);
    content: "";
    opacity: 0.38;
    transform: rotate(-1.5deg) scale(1.01);
  }

  .panel::after {
    opacity: 0.24;
    transform: rotate(1.8deg) scale(0.99, 1.03);
  }

  .panel--cream {
    --panel-bg: #fff4dc;
  }

  .panel--blue {
    --panel-bg: #dff4ff;
  }
</style>
