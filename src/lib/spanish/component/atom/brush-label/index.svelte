<script lang="ts">
  type Tone = "cream" | "orange" | "blue";
  type Props = {
    text: string;
    tone?: Tone;
    rotate?: number;
    class?: string;
  };

  let {
    text,
    tone = "cream",
    rotate = 0,
    class: className = "",
  }: Props = $props();
</script>

<span
  class="brush brush--{tone} {className}"
  style={`--brush-rotate: ${rotate}deg;`}
>
  <span>{text}</span>
</span>

<style>
  .brush {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    padding: 0.52em 1.35em 0.48em;
    transform: rotate(var(--brush-rotate));
    color: var(--brush-color);
    font-weight: 800;
    line-height: 1.05;
    text-align: center;
    isolation: isolate;
  }

  .brush::before {
    position: absolute;
    inset: 0.05em -0.2em 0;
    z-index: -1;
    border-radius: 58% 42% 62% 38% / 47% 62% 38% 53%;
    background: var(--brush-bg);
    box-shadow: 0 0.18rem 0.35rem rgb(123 75 11 / 0.08);
    content: "";
    transform: skewX(-5deg);
  }

  .brush--cream {
    --brush-bg: #ffe8a4;
    --brush-color: #132f4f;
  }

  .brush--orange {
    --brush-bg: #f75a1e;
    --brush-color: #fffaf0;
  }

  .brush--blue {
    --brush-bg: #dff4ff;
    --brush-color: #075a98;
  }

  .brush span {
    display: block;
    min-width: 0;
    overflow-wrap: anywhere;
  }
</style>
