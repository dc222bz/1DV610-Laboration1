/**
 * The my-test web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
    <h1>Test-App</h1>   
    <button id="button">Press Button To Test</button>
`

customElements.define(
  'my-test',
  /**
   * Represent a name component.
   */
  class extends HTMLElement {
    /**
     * "button to test app"
     */
    #button

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      // Get the input, datalist and article elements in the shadow root.
      this.#button = this.shadowRoot.querySelector('#button')

      // Adds eventlistener to button with click function
      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        alert('U are connected')
      })
    }
  }
)
