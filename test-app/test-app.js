/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const testPerson = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)

const bmr = testPerson.getBMR()
const maintenanceCalories = testPerson.getMaintenanceCalories()

console.log('BMR: ' + bmr, 'MaintenanceCalories: ' + maintenanceCalories)
