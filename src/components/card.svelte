<script>
import { onMount, afterUpdate } from 'svelte'

/**@type number*/
export let size = 64
/**@type string*/
export let basename = 'logo-#x#'
/**@type Image*/
export let image = null

/**@type HTMLCanvasElement*/
let canvas = null

$: fullname = replaceAll(basename, '#', size) + '.png'

$: link = (canvas)? canvas.toDataURL('image/png'): '/'

$: if (canvas && size && image) refreshCanvas()

// onMount(()=>{
//   refreshCanvas()
// })
afterUpdate(()=>refreshCanvas())

function replaceAll(text, search, replace) {
  let tmpText, newText = text
  do {
    tmpText = newText
    newText = tmpText.replace(search, replace)
  } while(newText !== tmpText)
  return newText
}

function refreshCanvas() {
  canvas.width = size
  canvas.height = size
  if (image instanceof Image) {
    canvas.getContext('2d').drawImage(image, 0, 0, size, size);
  }
}
</script>

<div class="card">
  <a class="btn" href={link} download={fullname}>{size}</a>
  <div class="scrollbar">
    <canvas bind:this={canvas}
      width={size}
      height={size}
    ></canvas>
  </div>
</div>

<style>
  .card {
    display: grid;
    grid-template-areas: "preview" "btn";
    grid-template-rows: auto min-content;

    position: relative;

    margin: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem black;
  }
  .card > div {
    grid-area: preview;

    display: grid;
    align-items: center;
    justify-items: center;
    max-height: 15rem;
    max-width: 15rem;

    overflow: auto;

    background-image:
      linear-gradient(0deg,#0003 1em, #fff3 1em),
      linear-gradient( 90deg, #0003 1em, #fff3 1em);
    background-size: 1.15em 1.15em;
    background-position: center;
  }
  .card > a {
    grid-area: btn;

    font-size: var(--form-font-size-primary);
    border: none;
    padding: 0rem 1rem 0.25rem 1rem;
  }
  @media (prefers-reduced-motion) {
    .card > a {
      transition: none;
    }
  }
  .card > a::before {
    /* content: "🔽"; */
    content: "";
    background: url(../download.svg) no-repeat center;
    background-size: 1em 1em;
    width: 1.25em;
    height: 1.25em;
    display: inline-block;
    position: relative;
    bottom: -0.25em;
    right: 0.1em;
  }
</style>
