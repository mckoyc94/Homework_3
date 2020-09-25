RANDOM PASSWORD GENERATOR

For this project, I created a webpage with the sole function of generating a random password for the user. To start, I was given a completed HTML and CSS file and a partially completed javascript file.

In the Javascript file, I focused mainly on coding the generatePassword function. I added 4 arrays, each one containing a certain type of characters to be called upon when asked for. Next I created a function to randomly choose a value within an array. 

Within the generatePassword function I created a prompt that let the user set the length of the password. If the password wasn't at least 8 characters long, longer than 128 characters, or was a string, the code wouldn't run and instead ask for a valid value to run the function. 

Once a length was decided, the user is asked a series of questions to determine what kind of character types should be included. For each of the 4 character types, there is prompt to either include them in the password or omit them. I created an array of the 4 arrays, and if one is chosen to be omitted from the password then it is spliced out of the array. 

Then a for loop runs, generating a random array and then a random character in that array which is returned to a string to create the password. This happens the number of times equal the desired length of the password. The string is then returned to the original function used when clicking the button and the password appears on the screen. 

To see screen shots of the password generator at work, they can be found in the assests folder. 