/**
 * Module for the type CaloriesCounterForExercises
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents class of the CaloriesCounterForExercises.
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
   * @param { number } height height in centimeters [0-250].
   * @param { number } weight weight in kilograms [0-500].
   * @param { number } age age in years [0-120].
   * @param { string } sex male or female.
   * @param { number } activityLevel level of physical activity level [ None = 1.2, Light ( 1-2/week ) = 1.4, moderate ( 2-3/week ) = 1.6, hard ( 3-5/week ) = 1.75, hard ( 6-7/week ) = 2.0 and professional = 2.4 ]
   */
  constructor (height, weight, age, sex, activityLevel) {
    this.#setHeight(height)
    this.#setWeight(weight)
    this.#setAge(age)
    this.#setSex(sex)
    this.#setActivityLevel(activityLevel)
    this.#setBMR()
    this.#setMaintenanceCalories()
  }

  /**
   * Sets the height of the person.
   *
   * @param { number } height the height in centimeters.
   */
  #setHeight (height) {
    if (height > 0 && height < 250 && !isNaN(height)) {
      this.#height = height
    } else {
      throw new Error('Invalid Height')
    }
  }

  /**
   * Returns the height of the person.
   *
   * @returns { number } the height (cm).
   */
  getHeight () {
    return this.#height
  }

  /**
   * Sets the weight of the person.
   *
   * @param { number } weight the weight (kg).
   */
  #setWeight (weight) {
    if (weight > 0 && weight < 500 && !isNaN(weight)) {
      this.#weight = weight
    } else {
      throw new Error('Invalid Weight')
    }
  }

  /**
   * Returns the weight of the person.
   *
   * @returns { number } the weight (kg).
   */
  getWeight () {
    return this.#weight
  }

  /**
   * Sets the age of the person.
   *
   * @param { number } age the age (years).
   */
  #setAge (age) {
    if (age > 0 && age < 120 && !isNaN(age)) {
      this.#age = age
    } else {
      throw new Error('Invalid Age')
    }
  }

  /**
   * Returns the age of the person.
   *
   * @returns { number } the age (years).
   */
  getAge () {
    return this.#age
  }

  /**
   * Sets the sex of the person.
   *
   * @param { string } sex the sex (male or female).
   */
  #setSex (sex) {
    if (sex === 'male' || sex === 'Male' || sex === 'MALE') {
      this.#sex = 'male'
    } else if (sex === 'female' || sex === 'Female' || sex === 'FEMALE') {
      this.#sex = 'female'
    } else {
      throw new Error('Invalid Sex')
    }
  }

  /**
   * Returns the sex of the person.
   *
   * @returns { string } the sex (male or female).
   */
  getSex () {
    return this.#sex
  }

  /**
   * Sets the activity level of the person.
   *
   * @param { number } activityLevel the activity level [1.2, 1.4, 1.6, 1.75, 2.0, 2.4].
   */
  #setActivityLevel (activityLevel) {
    if (activityLevel === 1.2) {
      this.#activityLevel = 1.2
    } else if (activityLevel === 1.4) {
      this.#activityLevel = 1.4
    } else if (activityLevel === 1.6) {
      this.#activityLevel = 1.6
    } else if (activityLevel === 1.75) {
      this.#activityLevel = 1.75
    } else if (activityLevel === 2.0) {
      this.#activityLevel = 2.0
    } else if (activityLevel === 2.4) {
      this.#activityLevel = 2.4
    } else {
      throw new Error('Invalid Activity Level')
    }
  }

  /**
   * Returns the activity level of the person.
   *
   * @returns { number } the activitly level [1.2, 1.4, 1.6, 1.75, 2.0, 2.4].
   */
  getActivityLevel () {
    return this.#activityLevel
  }

  /**
   * Sets the BMR of a person using the Mifflin-St Jeor formula.
   *
   */
  #setBMR () {
    if (this.getSex() === 'male') {
      this.#bmr = 10 * this.getWeight() + 6.25 * this.getHeight() - 5 * this.getAge() + 5
    } else if (this.getSex() === 'female') {
      this.#bmr = 10 * this.getWeight() + 6.25 * this.getHeight() - 5 * this.getAge() - 161
    } else {
      throw new Error('Invalid Sex')
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
  #setMaintenanceCalories () {
    if (this.getActivityLevel() === 1.2) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else if (this.getActivityLevel() === 1.4) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else if (this.getActivityLevel() === 1.6) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else if (this.getActivityLevel() === 1.75) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else if (this.getActivityLevel() === 2.0) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else if (this.getActivityLevel() === 2.4) {
      this.#maintenanceCalories = this.getBMR() * this.getActivityLevel()
    } else {
      throw new Error('Invalid Activity Level')
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
   * Returns the daily maintenance calories.
   *
   * @param { number } mets the constraint value used to calculate exercise calories.
   * @param { number } time the time used to calculate exercise calories.
   * @returns { number } the value of the burned calories [kcal].
   */
  #calculateCalories (mets, time) {
    return time * (mets * 3.5 * this.getWeight()) / 200
  }

  /**
   * Returns the daily maintenance calories.
   *
   * @param { number } time the time used to calculate exercise calories.
   * @returns { number } the value of the burned calories [kcal].
   */
  #checkInput (time) {
    if (time > 0 && time < 1440 && !isNaN(time) && (typeof time !== 'string') && (typeof time !== 'boolean')) {
      return time
    } else {
      throw new Error('Invalid Time')
    }
  }

  /**
   * Returns the calories burned from walking moderate pace (mets = 3.5).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesWalking (time) {
    const mets = 3.5
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from swimming general (mets = 6.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesSwimming (time) {
    const mets = 6.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from running moderate pace (mets = 10.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesRunning (time) {
    const mets = 10.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from weight training (mets = 6.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesWeightTraining (time) {
    const mets = 6.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Badminton (mets = 5.5).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesBadminton (time) {
    const mets = 5.5
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Basketball (mets = 6.5).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesBasketball (time) {
    const mets = 6.5
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Golf (mets = 4.8).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesGolf (time) {
    const mets = 4.8
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Handball (mets = 12.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesHandball (time) {
    const mets = 12.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing icehockey (mets = 8.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesIcehockey (time) {
    const mets = 8.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from rollerblading moderate pace (mets = 9.8).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesRollerblading (time) {
    const mets = 9.8
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing soccer (mets = 7.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesSoccer (time) {
    const mets = 7.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Tennis (mets = 7.3).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesTennis (time) {
    const mets = 7.3
    return this.#calculateCalories(mets, this.#checkInput(time))
  }

  /**
   * Returns the calories burned from playing Beach Volleyball (mets = 8.0).
   *
   * @param { number } time the time in minutes.
   * @returns { number } the value of calories burned (kcal).
   */
  getCaloriesBeachVolleyball (time) {
    const mets = 8.0
    return this.#calculateCalories(mets, this.#checkInput(time))
  }
}
