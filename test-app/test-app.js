/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const testPersonMale = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)
const testPersonFemale = new CaloriesCounterForExercises(152, 52, 28, 'female', 1.75)

const bmrMale = testPersonMale.getBMR()
const maintenanceCaloriesMale = testPersonMale.getMaintenanceCalories()

const bmrFemale = testPersonFemale.getBMR()
const maintenanceCaloriesFemale = testPersonFemale.getMaintenanceCalories()

console.log('Male - BMR: ' + bmrMale, 'MaintenanceCalories: ' + maintenanceCaloriesMale)
console.log('Female - BMR: ' + bmrFemale, 'MaintenanceCalories: ' + maintenanceCaloriesFemale)
