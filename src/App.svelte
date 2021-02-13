<script>
  import Card from './components/card.svelte';
  import ControlPalel from './components/control-panel.svelte';

  /**@type string */
  let basename = 'logo@#'
  /**@type Image*/
  let image = null
  /**@type number[]*/
  let sizes = []

</script>

<header>
  <h1>PWAKit</h1>
  <p>
    Basic tool for&nbsp;converting SVG/PNG image to&nbsp;several PNG images of&nbsp;different sizes.
  </p>
</header>

<main>
  <ControlPalel bind:image bind:basename bind:sizes />
  <div class:box={true}>
    {#each sizes as size}
      <Card {image} {size} {basename} />
    {/each}
  </div>
</main>

<footer>
  -/\/\-\/\/-
</footer>

<style>
  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }
  :root {

    /* Button: Background */
    --btn-bg: #dfdfdfcc;
    --btn-bg-hover: #c0c0c0cc;
    --btn-bg-active: #fff9c3cc;
    --btn-bg-focus: #555a;
    /* Button: Foreground */
    --btn-fg: #000;
    --btn-fg-hover: #000;
    --btn-fg-active: #000;
    /* Button: Other */
    --btn-border: 1px solid #000;

    /* Input: Background */
    --input-bg: #fffc;
    --input-bg-focus: #eeec;
    /* Input: Foreground */
    --input-fg: #000;
    --input-fg-focus: #000;
    /* Input: Other */
    --input-border: 1px solid #000;

    --form-font-size-primary: 1.5em;
    --form-font-size-secondary: 1.25em;

    /* Custom scrollbar */
    --scrolbar-border-size: 0.2em;

  }
  /* Body */
  :global(body) {
    font-family: cursive;
    font-size: 20px;
    background-color: cornflowerblue;
    display: grid;
    justify-items: center;
    margin: 0;
  }

  header {
    border: 1px solid;
    text-align: center;
    max-width: 52rem;
    background-color: #fff9;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  header > h1 {
    margin: 0.5em 0 0 0;
  }
  header > p {
    margin: 0.5em 1em 1em 1em;
  }

  /* Button  */
  :global(.btn) {
    width: 100%;

    text-decoration: none;
    text-align: center;
    font-family: monospace;
    color: var(--btn-fg);
    user-select: none;

    cursor: pointer;
    background-image: linear-gradient(0deg, #aaaa, transparent);
    background-color: var(--btn-bg);
    border: var(--btn-border);
    border-radius: 0.25rem;

    transition: 0.25s background-color, 0.25s color;
  }
  @media (prefers-reduced-motion) {
    :global(.btn) {
      transition: none;
    }
  }
  :global(.btn:hover) {
    background-color: var(--btn-bg-hover);
    color: var(--btn-fg-hover)
  }
  :global(.btn:active) {
    background-color: var(--btn-bg-active);
    color: var(--btn-fg-active)
  }
  :global(.btn:focus, :focus + label.btn) {
    outline: none;
    background-image: linear-gradient(0deg, #555a, transparent);
    --btn-border: 2px solid #000;
  }

  /* Input */
  :global(.input) {
    resize: none;
    outline: none;
    border: var(--input-border);
    border-radius: 0.25rem;

    color: var(--input-fg);
    background-color: var(--input-bg);
  }
  :global(.input:focus) {
    color: var(--input-fg-focus);
    background-color: var(--input-bg-focus);
    --input-border: 2px solid #000;
  }

  /* Custom scrollbar */
  :global(.scrollbar) {
    /* Firefox only */
    scrollbar-color: #0008 #fff5;
  }
  :global(.scrollbar::-webkit-scrollbar) {
    width: 1em;height: 1em;
    border: var(--scrolbar-border-size) solid #fffa;
    background: #fff5;
    border-radius: 0.5em;
  }
  :global(.scrollbar::-webkit-scrollbar-track) {
    border-radius: 0.5em;
  }
  :global(.scrollbar::-webkit-scrollbar-thumb) {
    border: var(--scrolbar-border-size) solid #000a;
    border-radius: 0.5em;
    background: #0005;
    transition: 1.5s background, 1.5s border;
  }
  :global(.scrollbar::-webkit-scrollbar-thumb:hover) {
    background: #0008;
    border: var(--scrolbar-border-size) solid #000f;
  }
  :global(.scrollbar::-webkit-scrollbar-corner) {
    background: transparent;
  }

  /* ========================= */

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
