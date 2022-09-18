# 1DV610-Laboration1 _(caloriesCounterForExercises)_

A module that can calculate the BMI and maintenance calories needed depending on a persons lenght, height, age, sex and activity level. It also have methods for calculate calories burned during different exercises, the result is depending of how long the time it takes to complete the exercise and the weight of the person doing the exercise.

# Install
```bash
git clone https://github.com/dc222bz/1DV610-Laboration1.git
```
```bash
cd 1DV610-Laboration1
```
```bash
npm install
```

# Run Commands
```js
npm run test // tests module using jest.
```
```js
npm run lint // checks format standards in module.
```
```js
npm run lint:fix // fixes formats errors in module.
```

# Usage

```js
import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises.js'

const person = new CaloriesCounterForExercises(185, 79, 31, 'male', 1.4)

const bmi = person.getBMI()

const maintenaceCalories = person.getMaintenanceCalories()

const caloriesBurned = person.caloriesRunning(45)
```

# Contributing

-[Daniel Carlsson](https://github.com/dc222bz)

# License
MIT
