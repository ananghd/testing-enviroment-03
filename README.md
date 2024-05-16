# Tasks

## Task #1 - Responsive layout -> done
Set up a mobile responsive layout for the dashboard
* Summary card components should appear as displayed in the linked image [here](src/assets/ui-layout-mobile.png)  -> Done
* Computer card components should only show relevant fields  -> Done


## Task #2 - Info display -> done
Using the following [image](src/assets/ui-layout-desktop.png) as reference. Make sure the card components are displaying it's values correctly.
* Offline count should reflect values stated in `computer` state.  -> Done
* "Overall Health" card should display "Good"/"Bad" based on the following conditions:
  * If total amount of devices (PC/Cameras/Displays) offline amount is less than 20% of total display "Good"
  * Else, display "Bad"
  * If "Good" is displayed, make sure text is Green -> done
  * If "Bad" is displayed, make sure text is Red -> done
* Make sure computer card components are displaying the correct values -> Done


## Task #3 - Decrease offline devices -> inprogress
Over time have the amount of offline devices decrease
  * At a interval of 1 second, have the amount of offline device decrease by 1


## Relevant files
Areas to be modified to complete the tasks will be in the following files
- `App.tsx`
- `App.css`
- `./components/**`
