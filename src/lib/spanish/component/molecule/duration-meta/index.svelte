<script lang="ts">
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
</script>

<div class="duration-meta" aria-label="Длительность 35–40 минут">
  <DoodleIcon kind="clock" tone="orange" size={48} />
  <strong>35–40 мин</strong>
</div>

<style>
  .duration-meta {
    display: inline-flex;
    align-items: center;
    gap: 0.72rem;
    color: #07518c;
  }

  .duration-meta strong {
    font-size: clamp(1.08rem, 2.6cqi, 1.5rem);
    line-height: 1;
  }
</style>
