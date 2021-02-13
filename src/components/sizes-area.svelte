<script>
  import { createEventDispatcher } from 'svelte'
  import { unselectOnFocus } from './actions'

  const dispatch = createEventDispatcher()

  export let button = 'Convert'
  export let label = 'Sizes:'
  export let value = ''

  function convertTextToSizes(text = '') {
    return text
      .split('\n')
      .map(value => Number.parseInt(value))
      .filter(value => !!value);
  }

  function handleConvert() {
    const sizes = convertTextToSizes(value)
    dispatch('convert', {sizes})
  }
</script>

<div class="wrapper" style={$$props.style}>
  <span>{label}</span>
  <textarea class="input" bind:value use:unselectOnFocus ></textarea>
  <button class="btn" on:click={handleConvert}>{button}</button>
</div>

<style>

  .wrapper {
    display: grid;
    grid-template-areas: "label" "input" "button";
    grid-template-rows: min-content auto min-content;
  }
  .wrapper > *{
    font-size: var(--form-font-size-secondary);
    width: 100%;
  }
  .wrapper > span {
    grid-area: label;
    font-size: var(--form-font-size-primary);
  }
  .wrapper > button {
    grid-area: button;
  }
  .wrapper > textarea {
    grid-area: input;
    white-space: nowrap;
  }

</style>
