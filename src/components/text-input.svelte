<script>
  import { unselectOnFocus } from './actions'

  export let label = 'Naming:'
  export let value = 'logo@#'

</script>

<div class="wrapper" style={$$props.style}>
  <span>{label}</span>
  <input type="text" class="input" bind:value use:unselectOnFocus />
</div>

<style>

  .wrapper {
    display: grid;
    grid-template-areas: "label" "input" ;
    grid-template-rows: min-content min-content;
  }
  .wrapper > *{
    font-size: var(--form-font-size-secondary);
    width: 100%;
  }
  .wrapper > span {
    grid-area: label;
    font-size: var(--form-font-size-primary);
  }
  .wrapper > input {
    grid-area: input;

  }

</style>
