<script>

  /**@type FileList*/
  export let files = null
  /**@type Image*/
  export let image = null
  /**@type string*/
  export let label = 'Picture:'

  $: if (files && files.length) {
    (async () => image.src = await readFile(files[0]))();
  }

  function readFile(/**@type File*/ file) {
    return (file.type == 'image/svg+xml')? readSVGFile(file) : readPNGFile(file)
  }
  function readPNGFile(/**@type File*/ file) {
    return new Promise((resolve, reject)=>{
      try {
        let fr = new FileReader()
        fr.onload = () => resolve(fr.result)
        fr.readAsDataURL(file)
      } catch(e) { reject(e) }
    })
  }
  function readSVGFile(/**@type File*/ file) {
    return new Promise((resolve, reject)=>{
      try {
        let size = 256
        let fr = new FileReader()
        fr.onload = () => {
          let tmp1 = document.createElement('div')
          tmp1.innerHTML = fr.result
          let tmp2 = tmp1.firstElementChild
          tmp2.setAttribute('height', size)
          tmp2.setAttribute('width', size)
          image.src = svg2uri(tmp2)
        }
        fr.readAsText(file)
      } catch (e) { reject(e) }
    })
  }
  function svg2uri(/**@type SVGElement*/svg) {
    let text = new XMLSerializer().serializeToString(svg)
    let encodedData = window.btoa(text)
    return 'data:image/svg+xml;base64,' + encodedData
  }

</script>

<div class="wrapper" style={$$props.style}>
  <span>{label}</span>
  <div class="input">
    <img bind:this={image} src="" alt="source_image" />
  </div>
  <input id="file-input" type="file" accept=".svg,.png" bind:files />
  <label for="file-input" class="btn">
    SelectFile
  </label>
</div>

<style>

  .wrapper {
    display: grid;
    grid-template-areas: "label" "input" "button" ".";
    grid-template-rows: min-content auto min-content 0;

    position: relative;
  }
  .wrapper > * {
    font-size: var(--form-font-size-secondary);
    width: 100%;
  }
  .wrapper > span {
    grid-area: label;
    font-size: var(--form-font-size-primary);
  }
  .wrapper > div {
    grid-area: input;

    display: flex;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .wrapper > div > img {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
  }
  .wrapper > label {
    grid-area: button;
  }

</style>
