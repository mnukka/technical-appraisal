# TechnicalAppraisal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Assignment

# Basic Stepper Setup (Fundamentals)
1. Goal: Create a basic stepper component with static steps.
   * Tasks:
     * Initialize a new Angular component for the stepper.
     * Implement static steps (e.g., Step 1, Step 2, Step 3) using Angular templates.
2. Goal: Enhance the stepper to dynamically create steps based on input data
   * Tasks:
     * Modify the stepper to accept an array of step names as input
     * Use angular template functionality to render steps dynamically
     * Implement basic navigation (next, previous) between steps.
3. Goal: Integrate forms into the stepper and implement validation.
   * Tasks:
     * For each step, include a simple form with validation (e.g, required fields)
     * Prevent navigation to the next step if the current step's form is invalid
4. Goal: Allow customization of step content using Angular's content projection
  * Tasks:
    * Modify the stepper to accept custom content for each step


### UI stuff
* Buttons Previous/Next
```
<button type="button"
class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
> Previous
</button>
```

```
<button type="button"
class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
> Next
</button>
```
