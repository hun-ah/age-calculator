# Age Calculator

This multi-input form is made with React and is a Frontend Mentor UI project.

**You can check it out here:** [Age Calculator](https://age-calculator-hwm.netlify.app/)

https://github.com/hun-ah/age-calculator/assets/103898493/3bf3e310-abdf-4c30-8a2c-d7a090698e57

## How It's Made/Works:
**Built with: React and Vite**

This multi-input form takes in a date in the format of month, day and year (between the year 1000 to the current year) and returns an age
calculated based on the input date. Upon form submission, the numbers will animate and confetti will fall from the top of the screen!

I chose this project to focus on creating reusable inputs that needed to be handled differently; from their labels and placeholders to their
values and where those values were used in other components. The trickiest part was handling the input errors and ensuring the correct error
was displayed on the right input when handling multiple errors at once.

For the number and confetti animations, I implemented the React Spring and React Confetti libraries.

## Optimizations
I created a few extra add-ons to this project, including extra form validation, the animation of the numbers on form submission and the 
confetti animation. Because of the relative simplicity of this project, I felt that it would be fun to add some extra features. I feel that
these add-ons improve the user experience, especially the extra form validation that gives the user more concise feedback about what they
have incorrectly entered into the inputs.

The extra form validation I added is as follows: not allowing a user to enter more than the character limit of an input, only allowing the
user to enter numbers on their keyboard, an error message if the year is less than 4 digits, an error message if the day is greater than 
the number of days of a specific month (ie: if month 02 is entered and day 30 is entered, the user will receive an error saying
"Day must be between 1 and 28 days") and will change based on the month entered and an error if the year is greater than the current year.

I made some tweaks to React Spring to get it to function exactly how I wanted. I needed the initial state of the numbers to be the string
'- -'. I created an initialRender variable that was set to true on the initial page load and then set to false on form submit. Every
subsequent render will show the age calculation unless the page is refreshed.

I added a setTimeout function for the confetti so that it would stop after 6 seconds (the default is to run infinitely). If I had more time
I would look into a way to have the confetti dissipate instead of abruptly stopping.

## Lessons Learned/Takeaways:
- implementation of React Spring and React confetti
- handling multiple input errors and displaying them to the user at once
- more practice working with dates
