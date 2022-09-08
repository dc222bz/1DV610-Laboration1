/**
 * Module for the type CaloriesCounterExercises
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the CaloriesCounterExercise
 *
 * @class
**/
export class CaloriesCounterForExercises {
    /**
     * Creates a CaloriesCounterExercises. 
     *
     */
    constructor(height, weight) {
        this.height = height
        this.weight = weight
    }

    getBMI() {
        return this.height + this.weight
    }
}
