
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

  /**
   * @param event {CustomEvent<{sizes:number[]}>}
   */
  function handleConvert(event) {
    const { sizes: list} = event.detail
    sizes = [...list]
  }

</script>

<form class="controls" onsubmit="return false">
  <FilePicker bind:image />
  <TextInput bind:value={basename} />
  <SizesArea on:convert={handleConvert}
    value={'16\n32\n64\n128\n256'}
  />
</form>

<style>

  .controls {
    display: grid;
    grid-template-areas: "file name" "file sizes";
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 4fr;
    grid-gap: 1rem;

    border: var(--input-border);
    padding: 1rem;
    margin: 1rem auto;

    background-color: #fff8;

    height: 30rem;
    width: 40rem;
    overflow: hidden;
  }
  .controls > :global(:nth-child(1)) {
    grid-area: file;
  }
  .controls > :global(:nth-child(2)) {
    grid-area: name;
  }
  .controls > :global(:nth-child(3)) {
    grid-area: sizes;
  }

</style>
