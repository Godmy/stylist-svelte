<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
</script>

<div class="decor-layer" aria-hidden="true">
  <AutumnLeaf
    variant="oval"
    tone="orange"
    size={44}
    rotate={-24}
    class="float float--one"
  />
  <AutumnLeaf
    variant="small"
    tone="amber"
    size={34}
    rotate={31}
    class="float float--two"
  />
  <AutumnLeaf
    variant="maple"
    tone="yellow"
    size={52}
    rotate={16}
    class="float float--three"
  />
  <AutumnLeaf
    variant="small"
    tone="orange"
    size={32}
    rotate={-38}
    class="float float--four"
  />
  <AutumnLeaf
    variant="oval"
    tone="yellow"
    size={38}
    rotate={58}
    class="float float--five"
  />
  <AutumnLeaf
    variant="maple"
    tone="amber"
    size={46}
    rotate={-18}
    class="float float--six"
  />
  <DoodleIcon
    kind="heart"
    tone="blue"
    size={24}
    rotate={-8}
    class="heart heart--one"
  />
  <DoodleIcon
    kind="heart"
    tone="orange"
    size={25}
    rotate={10}
    class="heart heart--two"
  />
  <div class="bottom-branch">
    <span class="stem"></span>
    <span class="berries berries--one"></span>
    <span class="berries berries--two"></span>
    <AutumnLeaf variant="maple" tone="russet" size={72} rotate={-34} />
    <AutumnLeaf variant="oval" tone="yellow" size={58} rotate={27} />
    <AutumnLeaf variant="maple" tone="orange" size={68} rotate={12} />
  </div>
  <div class="book-stack">
    <div class="book book--blue"><span>Español</span></div>
    <div class="book book--orange"><span>¡Hola!</span></div>
    <span class="pumpkin"></span>
    <AutumnLeaf
      variant="small"
      tone="amber"
      size={36}
      rotate={-16}
      class="book-leaf book-leaf--one"
    />
    <AutumnLeaf
      variant="maple"
      tone="orange"
      size={44}
      rotate={34}
      class="book-leaf book-leaf--two"
    />
  </div>
</div>

<style>
  .decor-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .float,
  .heart,
  .bottom-branch,
  .book-stack,
  .book-leaf {
    position: absolute;
  }

  .float--one {
    left: 3%;
    top: 56%;
  }

  .float--two {
    right: 7%;
    top: 43%;
  }

  .float--three {
    right: 4%;
    top: 63%;
  }

  .float--four {
    left: 48%;
    top: 70%;
  }

  .float--five {
    left: 83%;
    top: 76%;
  }

  .float--six {
    left: 12%;
    top: 88%;
  }

  .heart--one {
    left: 68%;
    top: 91%;
  }

  .heart--two {
    right: 7%;
    top: 57%;
  }

  .bottom-branch {
    left: -2rem;
    bottom: -1.45rem;
    width: 18.5rem;
    height: 12rem;
  }

  .bottom-branch .stem {
    position: absolute;
    left: 0;
    bottom: 3rem;
    width: 14.2rem;
    height: 0.42rem;
    border-radius: 999px;
    background: #7c3c1d;
    transform: rotate(-18deg);
  }

  .bottom-branch :global(.leaf:nth-of-type(1)) {
    left: 1.8rem;
    bottom: 4.5rem;
  }

  .bottom-branch :global(.leaf:nth-of-type(2)) {
    left: 5.7rem;
    bottom: 2.4rem;
  }

  .bottom-branch :global(.leaf:nth-of-type(3)) {
    left: 8.4rem;
    bottom: 4.2rem;
  }

  .berries {
    position: absolute;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #d95a24;
    box-shadow:
      0.75rem 0.2rem 0 #e47a25,
      0.2rem 0.82rem 0 #c8471e;
  }

  .berries--one {
    left: 3.8rem;
    bottom: 4.4rem;
  }

  .berries--two {
    left: 7.2rem;
    bottom: 5.9rem;
  }

  .book-stack {
    right: clamp(0.8rem, 4cqi, 2.3rem);
    bottom: 0.6rem;
    width: clamp(12rem, 29cqi, 18rem);
    height: clamp(7.5rem, 17cqi, 10.2rem);
  }

  .book-stack::before {
    position: absolute;
    left: -0.5rem;
    right: -0.2rem;
    bottom: -0.35rem;
    height: 2.4rem;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgb(75 44 20 / 0.18), transparent 72%);
    content: "";
    transform: rotate(-5deg);
  }

  .book {
    position: absolute;
    left: 0;
    width: 78%;
    height: 34%;
    border-radius: 0.45rem 1.1rem 1.1rem 0.45rem;
    box-shadow:
      0 0.35rem 0.75rem rgb(88 44 13 / 0.18),
      inset 0 0.12rem 0 rgb(255 255 255 / 0.16);
  }

  .book::after {
    position: absolute;
    right: -0.6rem;
    top: 0.28rem;
    bottom: 0.28rem;
    width: 1.2rem;
    border-radius: 0 0.8rem 0.8rem 0;
    background: #fff0cf;
    content: "";
  }

  .book span {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    color: white;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1rem, 2.6cqi, 1.55rem);
    font-weight: 850;
    line-height: 1;
    transform: translateY(-50%) rotate(2deg);
  }

  .book--blue {
    top: 0.8rem;
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.16), transparent 44%), #1483bd;
    transform: rotate(-5deg);
  }

  .book--orange {
    left: 1.2rem;
    top: 3.65rem;
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.14), transparent 42%), #e85f25;
    transform: rotate(-6deg);
  }

  .pumpkin {
    position: absolute;
    right: 0;
    bottom: 0.1rem;
    width: 4.1rem;
    height: 3.6rem;
    border-radius: 50%;
    background:
      radial-gradient(
        ellipse at 35% 50%,
        transparent 0 34%,
        rgb(171 72 15 / 0.22) 35% 37%,
        transparent 38%
      ),
      radial-gradient(
        ellipse at 65% 50%,
        transparent 0 34%,
        rgb(171 72 15 / 0.22) 35% 37%,
        transparent 38%
      ),
      #f18724;
    box-shadow: inset 0 -0.35rem 0 rgb(158 76 18 / 0.18);
  }

  .pumpkin::before {
    position: absolute;
    left: 50%;
    top: -0.65rem;
    width: 0.5rem;
    height: 1rem;
    border-radius: 999px;
    background: #5f7f28;
    content: "";
    transform: translateX(-50%) rotate(10deg);
  }

  .book-leaf--one {
    right: 3.8rem;
    top: -0.6rem;
  }

  .book-leaf--two {
    right: 6.1rem;
    top: 0.4rem;
  }

  @container (max-width: 620px) {
    .bottom-branch {
      opacity: 0.65;
    }

    .book-stack {
      position: relative;
      right: auto;
      bottom: auto;
      margin: 2rem auto 0;
    }
  }
</style>
