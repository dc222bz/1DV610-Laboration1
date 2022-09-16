import { CaloriesCounterForExercises } from '../1DV610-Laboration1/module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const testPersonMale = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)

console.log(testPersonMale.getCaloriesBadminton(60))
console.log(testPersonMale.getCaloriesBasketball(60))
