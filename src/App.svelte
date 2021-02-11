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
  <h1>Iconer</h1>
  <p>
    Tool for convert SVG to multiple PNG with different sizes.
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
    font-size: 15px;

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

  }
  /* Body */
  :global(body) {
    font-size: 20px;
    background-color: cornflowerblue;
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

  /* ========================= */

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
