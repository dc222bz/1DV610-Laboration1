/**
 * The my-ame web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../../../../module/caloriesCounterForExercises/caloriesCounterForExercises'

// Define template.
const template = document.createElement('template')
template.innerHTML = `
     <form onSubmit="return false">
     <select id="exercise">
        <option>Running</option>
        <option>Swimming</option>
        <option>Walking</option>
        <option>Soccer</option>
        <option>Basketball</option>
        <option>Tennis</option>
        <option>Badminton</option>
     </select> 
     <input type="text" id="time" placeholder="Enter The Time" autofocus> [min] <br>   
     <button id="calculateData">Calculate Calories Burned</button>
     </form>
     <p id="calories"></p>
 `

customElements.define(
  'my-exercises',
  /**
   * Represent a name component.
   */
  class extends HTMLElement {
    /**
     * "button to store name"
     */
    #button

    /**
     * "textfield for name"
     */
    #time

    /**
     * "textfield for name"
     */
    #exercise

    /**
     * "textfield for name"
     */
    #calories

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
      this.#time = this.shadowRoot.querySelector('#time')
      this.#button = this.shadowRoot.querySelector('#calculateData')
      this.#exercise = this.shadowRoot.querySelector('#exercise')
      this.#calories = this.shadowRoot.querySelector('#calories')

      // Adds eventlistener to button with click function
      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        const exercise = this.#exercise.options[this.#exercise.selectedIndex].text
        const calories = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.4)
        this.#calories.textContent = this.#time.value + ' [min] of ' + exercise + ' burns ' + calories.getCaloriesSoccer(parseInt(this.#time.value)) + ' [kcal]'
      })
    }
  }
)
