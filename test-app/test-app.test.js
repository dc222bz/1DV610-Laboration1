/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

describe('test testperson', () => {
  const testPerson = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)
  it('calculate BMR', () => {
    expect(testPerson.getBMR()).toEqual(1940)
  })
  it('maintenanceCalories', () => {
    expect(testPerson.getMaintenanceCalories()).toEqual(2328)
  })
})
