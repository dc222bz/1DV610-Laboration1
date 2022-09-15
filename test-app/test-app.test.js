/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises/caloriesCounterForExercises.js'

const testPersonMale = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)
const testPersonFemale = new CaloriesCounterForExercises(152, 52, 28, 'female', 1.75)

describe('test right input', () => {
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

describe('test wrong input', () => {
  it('Weight', () => {
    expect(() => new CaloriesCounterForExercises(180, -100, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, 1000, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, '100', 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, null, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, true, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, undefined, 38, 'male', 1.2).toThrowError('Invalid Weight'))
  })
  it('Height', () => {
    expect(() => new CaloriesCounterForExercises(-180, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(1800, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises('180', 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(null, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(true, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(undefined, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
  })
  it('Age', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, -38, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, 380, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, '38', 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, null, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, true, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, undefined, 'male', 1.2).toThrowError('Invalid Age'))
  })
  it('Sex', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 100, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male ', 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, null, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, true, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, undefined, 1.2).toThrowError('Invalid Sex'))
  })
  it('Activitly Level', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', -1.2).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', 1.20).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', '1.2').toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', null).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', true).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', undefined).toThrowError('Invalid Activitly Level'))
  })
})
