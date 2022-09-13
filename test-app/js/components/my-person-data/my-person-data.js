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
    <input type="text" id="height" placeholder="Enter Ur Height" autofocus> [cm]<br> 
    <input type="text" id="weight" placeholder="Enter Ur Weight" > [kg]<br>
    <input type="text" id="age" placeholder="Enter Ur Age" > [years]<br>
    <select id="sex">
        <option>Male</option>
        <option>Female</option>
     </select> Choose Ur Sex<br>
    <select id="activitylevel">
        <option>1.2</option>
        <option>1.4</option>
        <option>1.6</option>
        <option>1.75</option>
        <option>2.0</option>
        <option>2.4</option>
     </select> Choose Ur Activity Level<br>  
    <button id="calculateData">Calculate BMR</button>
    </form>
    <p id="bmr">BMR = </p>
    <p id="calmain">CaloriesMaintenance = </p>
`

customElements.define(
  'my-person-data',
  /**
   * Represent a name component.
   */
  class extends HTMLElement {
    /**
     * "button to store name"
     */
    #button

    /**
     * "textfield for height"
     */
    #height

    /**
     * "textfield for weight"
     */
    #weight

    /**
     * "textfield for age"
     */
    #age

    /**
     * "textfield for sex"
     */
    #sex

    /**
     * "textfield for activitylevel"
     */
    #activitylevel

    /**
     * "textfield for activitylevel"
     */
    #bmr

    /**
     * "textfield for activitylevel"
     */
    #calmain

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
      this.#button = this.shadowRoot.querySelector('#calculateData')
      this.#height = this.shadowRoot.querySelector('#height')
      this.#weight = this.shadowRoot.querySelector('#weight')
      this.#age = this.shadowRoot.querySelector('#age')
      this.#sex = this.shadowRoot.querySelector('#sex')
      this.#activitylevel = this.shadowRoot.querySelector('#activitylevel')
      this.#bmr = this.shadowRoot.querySelector('#bmr')
      this.#calmain = this.shadowRoot.querySelector('#calmain')

      // Adds eventlistener to button with click function
      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        const personData = new CaloriesCounterForExercises(parseInt(this.#height.value), parseInt(this.#weight.value), parseInt(this.#age.value), this.#sex.options[this.#sex.selectedIndex].text, parseFloat(this.#activitylevel.options[this.#activitylevel.selectedIndex].text))
        this.#bmr.textContent = 'BMR = ' + personData.getBMR() + ' [kcal]'
        this.#calmain.textContent = 'CaloriesMaintenance = ' + personData.getMaintenanceCalories() + ' [kcal]'
        window.sessionStorage.setItem('BMR', JSON.stringify(personData.getBMR()))
        window.sessionStorage.setItem('CalMain', JSON.stringify(personData.getMaintenanceCalories()))
        const activitylevel = personData.getActivityLevel()
        if (activitylevel === 1.2) {
          this.dispatchEvent(new window.CustomEvent('oneExercise'))
        } else if (activitylevel === 1.4) {
          this.dispatchEvent(new window.CustomEvent('twoExercises'))
        } else if (activitylevel === 1.6) {
          this.dispatchEvent(new window.CustomEvent('threeExercises'))
        } else if (activitylevel === 1.8) {
          this.dispatchEvent(new window.CustomEvent('fourExercises'))
        } else if (activitylevel === 2.0) {
          this.dispatchEvent(new window.CustomEvent('fiveExercises'))
        } else if (activitylevel === 2.4) {
          this.dispatchEvent(new window.CustomEvent('sixExercises'))
        }
      })
    }
  }
)
