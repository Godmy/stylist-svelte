<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();
</script>

<style>
  /* ================================
     Ambient Animated Background
     Pure CSS/SVG, no JS
     ================================ */

  :root {
    --orange-1: var(--color-danger-500);
    --orange-2: var(--color-warning-500);
    --red-1: var(--color-error-500);

    /* opacity tuning for light mode */
    --wash-opacity: var(--opacity-10);
    --shape-opacity: var(--opacity-10);
    --orb-opacity: var(--opacity-10);
    --particle-opacity: var(--opacity-25);

    --blur-strong: 80px;
    --blur-soft: 40px;
  }

  :global(.dark) {
    /* lower intensity on dark backgrounds */
    --wash-opacity: var(--opacity-10);
    --shape-opacity: var(--opacity-10);
    --orb-opacity: var(--opacity-10);
    --particle-opacity: var(--opacity-20);
  }

  .ambient-bg {
    position: absolute;
    inset: 0;
    z-index: var(--z-index-base);
    pointer-events: none;
    overflow: hidden;
    background: transparent;
    isolation: isolate;
  }

  /* Soft gradient wash */
  .ambient-bg__wash {
    position: absolute;
    inset: -10%;
    background: var(--gradient-custom152);
    opacity: var(--wash-opacity);
    filter: blur(var(--blur-strong)) saturate(1.1);
    transform: translateZ(0);
    animation: wash-drift var(--duration-s26) var(--animation-ease-in-out) infinite alternate;
  }

  /* Large semi-transparent blurred shapes */
  .ambient-bg__shape {
    position: absolute;
    width: 48vmax;
    height: 48vmax;
    border-radius: var(--border-radius-full);
    opacity: var(--shape-opacity);
    filter: blur(var(--blur-strong));
    mix-blend-mode: screen;
    transform: translateZ(0);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    animation:
      shape-drift var(--duration-s22) var(--animation-linear) infinite,
      shape-breathe var(--duration-s8_5) var(--animation-ease-in-out) infinite;
  }

  .ambient-bg__shape.s1 {
    top: -10vmax;
    left: -8vmax;
    background: var(--gradient-custom202);
    animation-duration: var(--duration-s28), var(--duration-s9);
  }

  .ambient-bg__shape.s2 {
    top: 10vmax;
    right: -12vmax;
    width: 55vmax;
    height: 55vmax;
    background: var(--gradient-custom212);
    animation-duration: var(--duration-s24), var(--duration-s7_5);
    animation-direction: reverse, alternate;
  }

  .ambient-bg__shape.s3 {
    bottom: -18vmax;
    left: 20vmax;
    width: 60vmax;
    height: 40vmax;
    border-radius: 28vmax;
    background: var(--gradient-custom302);
    animation-duration: var(--duration-s30), var(--duration-s10);
  }

  /* Glowing orbs */
  .ambient-bg__orb {
    position: absolute;
    border-radius: var(--border-radius-full);
    opacity: var(--orb-opacity);
    filter: blur(var(--blur-soft));
    transform: translateZ(0);
    mix-blend-mode: screen;
    animation:
      orb-float var(--duration-s18) var(--animation-linear) infinite,
      orb-breathe var(--duration-s6) var(--animation-ease-in-out) infinite;
  }

  /* Individual orb sizes/starts for parallax */
  .ambient-bg__orb.o1 {
    width: 18vmax; height: 18vmax;
    top: 12%; left: 8%;
    background: var(--gradient-custom262);
    animation-duration: var(--duration-s26), var(--duration-s7);
  }
  .ambient-bg__orb.o2 {
    width: 12vmax; height: 12vmax;
    top: 55%; left: 18%;
    background: var(--gradient-custom282);
    animation-duration: var(--duration-s20), var(--duration-s6);
  }
  .ambient-bg__orb.o3 {
    width: 22vmax; height: 22vmax;
    top: 25%; right: 10%;
    background: var(--gradient-custom252);
    animation-duration: var(--duration-s30), var(--duration-s8_5);
  }
  .ambient-bg__orb.o4 {
    width: 10vmax; height: 10vmax;
    bottom: 18%; right: 22%;
    background: var(--gradient-custom242);
    animation-duration: var(--duration-s17), var(--duration-s5_5);
  }
  .ambient-bg__orb.o5 {
    width: 14vmax; height: 14vmax;
    bottom: 8%; left: 52%;
    background: var(--gradient-custom272);
    animation-duration: var(--duration-s23), var(--duration-s7_5);
  }

  /* Small particles */
  .ambient-bg__particles {
    position: absolute;
    inset: 0;
  }

  .ambient-bg__particle {
    position: absolute;
    width: var(--spacing-2);
    height: var(--spacing-2);
    border-radius: var(--border-radius-full);
    opacity: var(--particle-opacity);
    background: var(--gradient-custom292);
    filter: blur(2px);
    transform: translateZ(0);
    animation:
      particle-drift var(--duration-s16) var(--animation-linear) infinite,
      particle-fade var(--duration-s5_5) var(--animation-ease-in-out) infinite;
  }

  /* Particle placement + random-ish timings */
  .ambient-bg__particle.p0  { top: 10%; left: 20%; animation-duration: var(--duration-s18), var(--duration-s6); }
  .ambient-bg__particle.p1  { top: 25%; left: 70%; animation-duration: var(--duration-s22), var(--duration-s5); }
  .ambient-bg__particle.p2  { top: 45%; left: 35%; animation-duration: var(--duration-s16), var(--duration-s7); }
  .ambient-bg__particle.p3  { top: 60%; left: 80%; animation-duration: var(--duration-s20), var(--duration-s6_5); }
  .ambient-bg__particle.p4  { top: 75%; left: 15%; animation-duration: var(--duration-s24), var(--duration-s5_5); }
  .ambient-bg__particle.p5  { top: 82%; left: 55%; animation-duration: var(--duration-s19), var(--duration-s6_2); }
  .ambient-bg__particle.p6  { top: 14%; left: 52%; animation-duration: var(--duration-s25), var(--duration-s7_2); }
  .ambient-bg__particle.p7  { top: 33%; left: 8%;  animation-duration: var(--duration-s17), var(--duration-s5_8); }
  .ambient-bg__particle.p8  { top: 52%; left: 62%; animation-duration: var(--duration-s21), var(--duration-s6_7); }
  .ambient-bg__particle.p9  { top: 68%; left: 42%; animation-duration: var(--duration-s15), var(--duration-s5_2); }
  .ambient-bg__particle.p10 { top: 7%;  left: 88%; animation-duration: var(--duration-s23), var(--duration-s6_9); }
  .ambient-bg__particle.p11 { top: 90%; left: 90%; animation-duration: var(--duration-s26), var(--duration-s7_5); }

  /* Subtle geometric SVG overlay */
  .ambient-bg__geo {
    position: absolute;
    inset: -5%;
    opacity: var(--opacity-60);
    filter: blur(1px);
    transform: translateZ(0);
    animation: geo-drift var(--duration-s28) var(--animation-ease-in-out) infinite alternate;
  }

  /* Ensure main content is above background */
  .playground-welcome {
    position: relative;
    z-index: var(--z-index-layer1);
  }

  /* ================================
     Keyframes
     ================================ */

  @keyframes wash-drift {
    0%   { transform: translate3d(-2%, -1%, 0) scale(1); }
    100% { transform: translate3d( 2%,  1%, 0) scale(1.03); }
  }

  @keyframes shape-drift {
    0%   { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(3vmax, -2vmax, 0); }
    100% { transform: translate3d(-2vmax, 2vmax, 0); }
  }

  @keyframes shape-breathe {
    0%, 100% { opacity: calc(var(--shape-opacity) * var(--opacity-90)); }
    50%      { opacity: calc(var(--shape-opacity) * 1.15); }
  }

  @keyframes orb-float {
    0%   { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(6vmax, -4vmax, 0); }
    100% { transform: translate3d(-4vmax, 5vmax, 0); }
  }

  @keyframes orb-breathe {
    0%, 100% { opacity: calc(var(--orb-opacity) * var(--opacity-80)); }
    50%      { opacity: calc(var(--orb-opacity) * 1.2); }
  }

  @keyframes particle-drift {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(10vmax, -8vmax, 0) scale(1.05); }
  }

  @keyframes particle-fade {
    0%, 100% { opacity: calc(var(--particle-opacity) * var(--opacity-60)); }
    50%      { opacity: calc(var(--particle-opacity) * var(--opacity-100)); }
  }

  @keyframes geo-drift {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(-1.5%, 1%, 0) scale(1.02); }
  }

  /* Optional reduced-motion support */
  @media (prefers-reduced-motion: reduce) {
    .ambient-bg__wash,
    .ambient-bg__shape,
    .ambient-bg__orb,
    .ambient-bg__particle,
    .ambient-bg__geo {
      animation: none !important;
    }
  }
</style>

<!-- AnimatedBackground.svelte -->
<div class="ambient-bg" aria-hidden="true">
  <!-- soft gradient wash -->
  <div class="ambient-bg__wash"></div>

  <!-- big blurred shapes -->
  <div class="ambient-bg__shape s1"></div>
  <div class="ambient-bg__shape s2"></div>
  <div class="ambient-bg__shape s3"></div>

  <!-- glowing orbs -->
  <div class="ambient-bg__orb o1"></div>
  <div class="ambient-bg__orb o2"></div>
  <div class="ambient-bg__orb o3"></div>
  <div class="ambient-bg__orb o4"></div>
  <div class="ambient-bg__orb o5"></div>

  <!-- tiny drifting particles -->
  <div class="ambient-bg__particles">
    {#each Array(12) as _, i}
      <span class="ambient-bg__particle p{i}"></span>
    {/each}
  </div>

  <!-- OPTIONAL: subtle geometric overlay via SVG -->
  <svg class="ambient-bg__geo" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <radialGradient id="g1" cx="30%" cy="20%" r="60%">
        <stop offset="0%" stop-color="var(--color-warning-500)" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="var(--color-danger-500)" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g2" cx="70%" cy="70%" r="65%">
        <stop offset="0%" stop-color="var(--color-error-500)" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="var(--color-error-500)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="20" cy="15" r="18" fill="url(#g1)"/>
    <circle cx="78" cy="72" r="22" fill="url(#g2)"/>
  </svg>
</div>

<!-- Your content should sit above this -->
<div class="playground-welcome">
  {#if children}
    {@render children()}
  {/if}
</div>





