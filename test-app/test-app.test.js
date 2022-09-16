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
  it('exerciseCalories', () => {
    expect(testPersonMale.getCaloriesBadminton(60)).toEqual(577.5)
    expect(testPersonMale.getCaloriesBasketball(60)).toEqual(682.5)
    expect(testPersonMale.getCaloriesBeachVolleyball(60)).toEqual(840)
    expect(testPersonMale.getCaloriesGolf(60)).toEqual(504)
    expect(testPersonMale.getCaloriesHandball(60)).toEqual(1260)
    expect(testPersonMale.getCaloriesIcehockey(60)).toEqual(840)
    expect(testPersonMale.getCaloriesRollerblading(60)).toEqual(1029.0000000000002)
    expect(testPersonMale.getCaloriesRunning(60)).toEqual(1050)
    expect(testPersonMale.getCaloriesSoccer(60)).toEqual(735)
    expect(testPersonMale.getCaloriesSwimming(60)).toEqual(630)
    expect(testPersonMale.getCaloriesTennis(60)).toEqual(766.5)
    expect(testPersonMale.getCaloriesWalking(60)).toEqual(367.5)
    expect(testPersonMale.getCaloriesWeightTraining(60)).toEqual(630)
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
    expect(() => new CaloriesCounterForExercises(180, 100, 38, -100, 1.2).toThrowError('Invalid Sex'))
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
  it('exerciseCalories', () => {
    expect(() => testPersonMale.getCaloriesBadminton(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBadminton(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBadminton('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBadminton(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBadminton(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBadminton(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesBasketball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBasketball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBasketball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBasketball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBasketball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBasketball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesBeachVolleyball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBeachVolleyball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBeachVolleyball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBeachVolleyball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBeachVolleyball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesBeachVolleyball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesGolf(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesGolf(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesGolf('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesGolf(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesGolf(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesGolf(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesHandball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesHandball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesHandball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesHandball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesHandball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesHandball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesIcehockey(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesIcehockey(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesIcehockey('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesIcehockey(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesIcehockey(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesIcehockey(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesRollerblading(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRollerblading(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRollerblading('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRollerblading(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRollerblading(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRollerblading(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesRunning(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRunning(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRunning('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRunning(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRunning(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesRunning(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesSoccer(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSoccer(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSoccer('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSoccer(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSoccer(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSoccer(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesSwimming(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSwimming(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSwimming('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSwimming(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSwimming(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesSwimming(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesTennis(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesTennis(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesTennis('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesTennis(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesTennis(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesTennis(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.getCaloriesWalking(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesWalking(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesWalking('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesWalking(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesWalking(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.getCaloriesWalking(undefined)).toThrowError('Invalid Time')
  })
})
