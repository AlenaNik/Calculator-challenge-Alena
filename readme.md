# Result

![alt text](https://i.ibb.co/SnSPhvq/Screenshot-2019-10-20-at-12-08-31.png)
# Before

![alt text](https://i.ibb.co/BVR9ZJ2/Screenshot-2019-10-20-at-12-21-13.png)

# Payvision calculator

My tasks in this exercise were: 
1) maintainance and new features development
2) code review
3) fix bugs in the app
4) think about testing my app
5) improve UX/UI

### 1. Code review and new features
I've decided to implement 3 new features (multiply and divide operations, changes on clear button). 
I've stuctured comments in a code, explaning what each block of code is doing and what changes I've made. 
Also, to I've separated html file to have js and style files in it's own files.

### 2. Testing and bug fixing
After fixing a few obvious bgs (such as + - signs, 0 and 3 numbers were switched).

I believe, that writing tests is essential and do save time when they are correctly implemented. I've putted some basic tests with Jest into my project. 

### 3. New features implementation
New features were implemented as asked. 

As for package.json version ("version": "1.2.2") the number is unique ID for every release of the package. We must change the version with every new release of your package
1. To change the version number in package.json, on the command line, in the package root directory, run the following command:  run npm update --save
 However, upgrate the version to 2.0.0 (Major verion) may lead to changes that break backward compatibility. (More on semantic verioning: https://semver.org/)
 We can use npm semver calculator https://semver.npmjs.com/ to check our dependencies compatibility with package json version before updating. 
 

### 4. Test automation



### 5. UI/UX design

A few essencial UI feautures: 
- I've changed color to blue corporate color to make it easier on the eyes of a user
- Changed buttons position to follow a classic calculator pattern as well as adjusted some margins and deleted outline from our buttons.
- Visual feedback on buttons when clicked
UX: 
- friendly message that shows user that his action is forbidden but in a friendly tone.
- All of our buttons give us feedback when clicked
- Next step would be think about accessibility and implement typing numbers from keyboard.

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
