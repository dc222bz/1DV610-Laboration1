## Testrapport
Automatiska enhetstesterna genomfördes med testverktyget JEST.
Och två olika instanser av modulen skapades en manlig och en kvinnlig eftersom ekvationen för BMR ser olika ut för dessa. Sedan testades enligt tabellerna nedanför tvår olka sortes tester en med korrekta inmatningar och en med felaktiga inmatningar. Koden för testningen hittar ni här, [testkod](https://github.com/dc222bz/1DV610-Laboration1/blob/main/test-app/test-app.test.js) och testrapporten från testkoden ser ni längts ner i dokumentet.
<table>
<caption><b>Tester med korrekta inmatningar</b></caption>
<thead><tr><th>Vad som testats</th><th>Hur det testats</th><th>Testresultat</th></tr></thead>
<tbody>
<tr><td>Metoden getWeight testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden geHeight testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getAge testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getSex testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getActivityLevel testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getBMR testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getMaintenanceCalories testas med korrekt input</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Olika träningsmiljöer testas hur många calorier dem förbränner under 60 minuter (exerciseCalories).<br>
Metoden caloriesBadminton<br>
Metoden caloriesBeachVolleyball<br>
Metoden caloriesGolf<br>
Metoden caloriesHandball<br>
Metoden caloriesIcehockey<br>
Metoden caloriesRollerblading<br>
Metoden caloriesRunning<br>
Metoden caloriesSoccer<br>    
Metoden caloriesSwimming<br>
Metoden caloriesTennis<br>
Metoden caloriesWalking<br>
Metoden caloriesWeightTraning<br>
</td><td>Automatiskt enhetstest</td><td>OK</td></tr>
</tbody>
</table>
<br>

<table>
<caption><b>Tester med felaktiga inmatningar: <br>felaktigt intervall, string, null, boolean och undefined</b></caption>
<thead><tr><th>Vad som testats</th><th>Hur det testats</th><th>Testresultat</th></tr></thead>
<tbody>
<tr><td>Metoden getWeight testas.</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden geHeight testas.</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getAge testas.</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getSex testas.</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Metoden getActivityLevel testas.</td><td>Automatiskt enhetstest</td><td>OK</td></tr>

<tr><td>Olika träningsmiljöer testas (exerciseCalories).<br>
Metoden caloriesBadminton<br>
Metoden caloriesBeachVolleyball<br>
Metoden caloriesGolf<br>
Metoden caloriesHandball<br>
Metoden caloriesIcehockey<br>
Metoden caloriesRollerblading<br>
Metoden caloriesRunning<br>
Metoden caloriesSoccer<br>    
Metoden caloriesSwimming<br>
Metoden caloriesTennis<br>
Metoden caloriesWalking<br>
Metoden caloriesWeightTraning<br>
</td><td>Automatiskt enhetstest</td><td>OK</td></tr>
</tbody>
</table>
<br>

```
> laboration1@1.0.0 test
> npx --node-options=--experimental-vm-modules jest || exit 0

(node:11400) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  test-app/test-app.test.js
  test right input
    √ Weight (5 ms)
    √ Height (1 ms)
    √ Age (1 ms)
    √ Sex
    √ Activitly Level (2 ms)
    √ calculate BMR (1 ms)
    √ maintenanceCalories (1 ms)
    √ exerciseCalories (4 ms)
  test wrong input
    √ Weight (7 ms)
    √ Height (1 ms)
    √ Age (1 ms)
    √ Sex (3 ms)
    √ Activitly Level (1 ms)
    √ exerciseCalories (111 ms)

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.747 s, estimated 3 s
Ran all test suites.
```