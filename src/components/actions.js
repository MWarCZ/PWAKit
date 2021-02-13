
/**
 * @param node {HTMLInputElement}
 */
export function unselectOnFocus(node) {
  if (node && typeof node.setSelectionRange === 'function') {
    const len = node.value.length
    const unSelect = () => node.setSelectionRange(len, len)
    node.addEventListener('focus', unSelect)
    return {
      destroy: () => node.removeEventListener('focus', unSelect)
    }
  }
}
