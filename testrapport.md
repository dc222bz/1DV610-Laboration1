## Testrapport
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