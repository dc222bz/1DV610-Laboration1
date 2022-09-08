/**
 * Module for the type CaloriesCounterExercises
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents class of the CaloriesCounterExercise.
 *
 * @class
**/
export class CaloriesCounterForExercises {

    #height // The height of the person.

    #weight // The weight of the person.
    
    /**
     * Creates a CaloriesCounterExercises. 
     *
     */
    constructor(height, weight) {
        this.#height = height
        this.#weight = weight
    }

    /**
     * Returns the BMI of the person. 
     *
     * @returns { number } the value of the BMI.
     */
    getBMI() {
        return this.#weight / (this.#height * this.#height)
    }
}
