/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const daniel = new CaloriesCounterForExercises(1.8, 100)

console.log('BMI of Daniel: ' + daniel.getBMI())
