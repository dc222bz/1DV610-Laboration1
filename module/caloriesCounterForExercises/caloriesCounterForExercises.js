/**
 * Module for the type CaloriesCounterForExercises
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents class of the CaloriesCounterForExercise.
 *
 * @class
 **/
export class CaloriesCounterForExercises {
  #height // The height of the person.
  #weight // The weight of the person.
  #age // The age of the person.
  #sex // The sex of the person.
  #activityLevel // The activityLevel of the person.
  #bmr // The BMR of the person.
  #maintenanceCalories // The calories maintencance level of the person.

  /**
   * Creates a CaloriesCounterForExercises.
   *
   * @param { number } height height in centimeters.
   * @param { number } weight weight in kilograms.
   * @param { number } age age in years.
   * @param { number } sex male or female.
   * @param { number } activityLevel level of physical activity level [ None = 1.2, Light ( 1-2/week ) = 1.4, moderate ( 2-3/week ) = 1.6, hard ( 3-5/week ) = 1.75, hard ( 6-7/week ) = 2.0 and professional = 2.4 ]
   */
  constructor (height, weight, age, sex, activityLevel) {
    this.#height = height
    this.#weight = weight
    this.#age = age
    this.#sex = sex
    this.#activityLevel = activityLevel
    this.setBMR()
    this.setMaintenanceCalories()
  }

  /**
   * Sets the BMR of a person using the Mifflin-St Jeor formula.
   *
   */
  setBMR () {
    if (this.#sex === 'male') {
      this.#bmr = 10 * this.#weight + 6.25 * this.#height - 5 * this.#age + 5
    } else if (this.#sex === 'female') {
      this.#bmr = 10 * this.#weight + 6.25 * this.#height - 5 * this.#age - 161
    } else {
      throw Error('Invalid Sex')
    }
  }

  /**
   * Returns the BMR of a person using the Mifflin-St Jeor formula.
   *
   * @returns { number } the value of the BMR of a person (kcal/day).
   */
  getBMR () {
    return this.#bmr
  }

  /**
   * Sets the daily maintenance calories.
   *
   */
  setMaintenanceCalories () {
    if (this.#activityLevel === 1.2) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else if (this.#activityLevel === 1.4) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else if (this.#activityLevel === 1.6) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else if (this.#activityLevel === 1.75) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else if (this.#activityLevel === 2.0) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else if (this.#activityLevel === 2.4) {
      this.#maintenanceCalories = this.#bmr * this.#activityLevel
    } else {
      throw Error('Invalid Activity Level')
    }
  }

  /**
   * Returns the daily maintenance calories.
   *
   * @returns { number } the value of the daily maintenance calories (kcal/day).
   */
  getMaintenanceCalories () {
    return this.#maintenanceCalories
  }

  /**
   * Returns the calories burned from walking moderate pace (mets = 3.5).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesWalking (time) {
    let met
    if (time > 0 && !isNaN(time)) {
      met = 3.5
    } else {
      throw Error('Invalid Time')
    }
    return time * (met * 3.5 * this.#weight) / 200
  }

  /**
   * Returns the calories burned from swimming general (mets = 6.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesSwimming (time) {
    let met
    if (time > 0 && !isNaN(time)) {
      met = 6.0
    } else {
      throw Error('Invalid Time')
    }
    return time * (met * 3.5 * this.#weight) / 200
  }
}
