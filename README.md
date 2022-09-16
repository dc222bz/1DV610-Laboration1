# 1DV610-Laboration1 _(caloriesCounterForExercises)_

A module that can calculate the BMI and maintenance calories needed depending on a persons lenght, height, age, sex and activity level. It also have methods for calculate calories burned during different exercises, the result is depending on the time the exercise is done and the weight of the person doing the exercise.

# Install

```sh
npm install caloriesCounterForExercises
```

# Usage

```js
import 'caloriesCounterForExercises' from 'caloriesCounterForExercises'

const person = new caloriesCounterForExercises(185, 79, 31, 'male', 1.4)

const bmi = person.getBMI()

const maintenaceCalories = person.getMaintenanceCalories()

const caloriesBurned = person.caloriesRunning(45)
```

# Contributing

-[Daniel Carlsson](https://github.com/dc222bz)

# License
MIT
