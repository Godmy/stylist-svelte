<script lang="ts">
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
</script>

<div class="age-pill" aria-label="Для детей 5–8 лет с базой языка">
  <DoodleIcon kind="children" tone="blue" size={38} />
  <div class="age-copy">
    <strong>Для детей 5–8 лет</strong>
    <span>с базой языка</span>
  </div>
</div>

<style>
  .age-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    max-width: 100%;
    padding: 0.62rem 1.2rem 0.62rem 0.85rem;
    border-radius: 999px 36rem 999px 38rem / 34rem 999px 38rem 999px;
    background: #ffe8a4;
    color: #07518c;
    box-shadow: 0 0.25rem 0.6rem rgb(142 84 11 / 0.08);
  }

  .age-copy {
    display: grid;
    gap: 0.12rem;
    min-width: 0;
  }

  .age-copy strong {
    overflow-wrap: anywhere;
    font-size: clamp(1rem, 2.25cqi, 1.42rem);
    line-height: 1;
  }

  .age-copy span {
    font-size: clamp(0.72rem, 1.55cqi, 0.95rem);
    font-weight: 700;
    line-height: 1.05;
  }
</style>
