/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import './components/my-person-data/index.js'
import './components/my-exercises/index.js'

document.querySelector('.containerCalories').appendChild(document.createElement('my-person-data'))
document.querySelector('my-person-data').addEventListener('oneExercise', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
document.querySelector('my-person-data').addEventListener('twoExercises', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
document.querySelector('my-person-data').addEventListener('threeExercises', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
document.querySelector('my-person-data').addEventListener('fourExercises', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
document.querySelector('my-person-data').addEventListener('fiveExercises', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
document.querySelector('my-person-data').addEventListener('sixExercises', (event) => {
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
  document.querySelector('.containerExercises').appendChild(document.createElement('my-exercises'))
})
