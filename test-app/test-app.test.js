/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const testPersonMale = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)
const testPersonFemale = new CaloriesCounterForExercises(152, 52, 28, 'female', 1.75)

describe('test testperson', () => {
  it('Weight', () => {
    expect(testPersonMale.getWeight()).toEqual(100)
    expect(testPersonFemale.getWeight()).toEqual(52)
  })
  it('Height', () => {
    expect(testPersonMale.getHeight()).toEqual(180)
    expect(testPersonFemale.getHeight()).toEqual(152)
  })
  it('Age', () => {
    expect(testPersonMale.getAge()).toEqual(38)
    expect(testPersonFemale.getAge()).toEqual(28)
  })
  it('Sex', () => {
    expect(testPersonMale.getSex()).toEqual('male')
    expect(testPersonFemale.getSex()).toEqual('female')
  })
  it('Activitly Level', () => {
    expect(testPersonMale.getActivityLevel()).toEqual(1.2)
    expect(testPersonFemale.getActivityLevel()).toEqual(1.75)
  })
  it('calculate BMR', () => {
    expect(testPersonMale.getBMR()).toEqual(1940)
    expect(testPersonFemale.getBMR()).toEqual(1169)
  })
  it('maintenanceCalories', () => {
    expect(testPersonMale.getMaintenanceCalories()).toEqual(2328)
    expect(testPersonFemale.getMaintenanceCalories()).toEqual(2045.75)
  })
})
