/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const daniel = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.4)

console.log(daniel.getBMR())
console.log(daniel.getMaintenanceCalories())
console.log(daniel.getCaloriesWalking(60))
