
<script>
  import FilePicker from './file-picker.svelte';
  import SizesArea from './sizes-area.svelte';
  import TextInput from './text-input.svelte';

  /**@type string*/
  export let basename = 'logo@#'
  /**@type Image*/
  export let image = null
  /**@type number[]*/
  export let sizes = []

  const defaultSizesValue = `16\n32\n48\n72\n96\n128\n144\n168\n192 #Recommend Manifest \n256\n384\n512 #Recommend Manifest \n`

  /**
   * @param event {CustomEvent<{sizes:number[]}>}
   */
  function handleConvert(event) {
    const { sizes: list} = event.detail
    sizes = [...list]
  }

</script>

<form class="controls" onsubmit="return false">
  <TextInput bind:value={basename} style="grid-area: name;" />
  <FilePicker bind:image style="grid-area: file;" />
  <SizesArea on:convert={handleConvert}
    value={defaultSizesValue}
    style="grid-area: sizes;"
  />
</form>

<style>

  .controls {
    display: grid;
    grid-template-areas: "name sizes" "file sizes";
    grid-template-rows: min-content auto;
    grid-template-columns: 1.25fr 1fr;
    grid-gap: 1rem;

    border: var(--input-border);
    border-radius: 0.3rem;
    padding: 1rem;
    margin: 1rem auto;

    background-color: #fff8;

    /* min-height: 30rem; */
    max-width: 35rem;
    overflow: hidden;
  }

</style>
