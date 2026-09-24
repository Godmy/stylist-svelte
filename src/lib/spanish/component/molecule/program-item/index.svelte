<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";

  type Icon = "leaf" | "gamepad" | "music" | "scissors";
  type Tone = "yellow" | "blue" | "peach" | "green";
  type Props = {
    icon: Icon;
    tone: Tone;
    label: string;
  };

  let { icon, tone, label }: Props = $props();
</script>

<li class="program-item">
  <span class="program-icon program-icon--{tone}" aria-hidden="true">
    {#if icon === "leaf"}
      <AutumnLeaf variant="maple" tone="orange" size={54} rotate={-12} />
    {:else if icon === "gamepad"}
      <DoodleIcon kind="gamepad" tone="blue" size={48} />
    {:else if icon === "music"}
      <DoodleIcon kind="music" tone="orange" size={48} />
    {:else}
      <DoodleIcon kind="scissors" tone="green" size={48} />
    {/if}
  </span>
  <span class="program-label">{label}</span>
</li>

<style>
  .program-item {
    display: grid;
    justify-items: center;
    align-content: start;
    gap: 0.7rem;
    min-width: 0;
    list-style: none;
    color: #07518c;
    text-align: center;
  }

  .program-icon {
    display: grid;
    place-items: center;
    width: clamp(4.2rem, 11cqi, 5.9rem);
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--icon-bg);
    box-shadow: inset 0 0 0 0.16rem rgb(255 255 255 / 0.38);
  }

  .program-icon--yellow {
    --icon-bg: #ffe79f;
  }

  .program-icon--blue {
    --icon-bg: #bde9ff;
  }

  .program-icon--peach {
    --icon-bg: #ffc6b9;
  }

  .program-icon--green {
    --icon-bg: #cce9bd;
  }

  .program-label {
    max-width: 8rem;
    overflow-wrap: anywhere;
    font-size: clamp(0.92rem, 2.1cqi, 1.25rem);
    font-weight: 850;
    line-height: 1.08;
  }
</style>
