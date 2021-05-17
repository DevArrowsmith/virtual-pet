# Virtual Pet ✨🐱✨

## Introduction

This project was an exercise in Object Oriented Programming (OOP) and Test Driven Development (TDD).  
The goal was the creation of a constructor function that returns a rudimentary virtual pet 👾✨  

---

## Aims

- Creation of a constructor function that returns a `Pet` object.  
- The `Pet` object has properties and methods typical of a virtual pet.
- Features of the virtual pet are summarised below. For a detailed account of the constructor's intended functionality please see the project's [test file](https://github.com/DevArrowsmith/virtual-pet/blob/main/__tests__/pet.test.js). There's only one as the virtual pet consists of a single constructor function.

---

## Approach

- The `Pet` constructor function was built incrementally from a series of requirements.
- A <span style="color:red">Red</span>, <span style="color:green">Green</span>, <span style="color:yellow">Refactor</span> development cycle was followed to introduce these features one at a time.

---

## Features

### Pet Creation 🐾
- Calling the `Pet` constructor function with a string representing the pet's name creates a new instance of the `Pet` object.  

    ```
    const fido = new Pet("Fido");
    ```
### Pet Health 💖
- The pet has a `growUp` method. This causes the pet to 'age'; it modifies the pet's `age`, `hunger` and `fitness` parameters.
- The pet has an `isAlive` getter method. If any of the above parameters meet a specified threshold the `isAlive` method returns `false`, and the pet is deceased 😢 Otheriwse the `isAlive` method returns true and the pet is alive. 
- The `feed` method maintains the pet's `hunger` property.
- The `exercise` method maintains the pet's `fitness` property.
- The `age` property can not be maintained.
### Visting the Vet 👩‍⚕️
- The pet has a `checkUp` method which returns a string indicative of the pet's health. It only gives a vague indication of the pet's health unless the pet is deceased, which is explicitly stated.
### Starting a Family 🐈🐈🐈
- The pet has a `children` property. This is initially an empty array `[]`.
- The pet has a `haveChild` method which takes a string as an argument.
- The `haveChild` method invokes the `Pet` constructor function, passing in the string, and returns the resulting `Pet` object instance to the parent pet's `children` array.

---

## Tools
- Written in JavaScript.
- Tested using the Jest testing library.

---

## Installation

This repo can be installed locally.

1. Clone [this repo](https://github.com/DevArrowsmith/virtual-pet) (Here's [a guide on cloning repos](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository)).
2. In the terminal navigate to the root directory of the cloned repo.
3. Run `npm i` to install node packages including Jest.

---
## Use

Run `npm t` from root to run the test suite.

The [official Jest docs](https://jestjs.io/) explain how to write your own tests should you want to expand this project.

---

## Acknowledgements

- Project: [Jest](https://github.com/facebook/jest)  
  Copyright (c) Facebook, Inc. and its affiliates.  
  License: [MIT](https://github.com/facebook/jest/blob/master/LICENSE)