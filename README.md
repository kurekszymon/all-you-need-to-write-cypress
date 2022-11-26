# All you need to know to write cypress (well.. probably)

## Preface 

Working for 2 years in the industry shows me that there are no good <strong>(free)</strong> resources that goes deeper on topics than just copying the documentation part on how to get started. 

As I only paid for some udemy courses and most of the knowledge I have was, acquired by reading blog posts, watching youtube videos and experimenting - which are free - I wanted to give something back to the community.

Given that, please keep in mind that <strong>I am not a genius in this field</strong>, however I have some practical knowledge and ability to work with the tool pretty effectively. 

<strong>If you want to get started with E2E Testing with Cypress or get some refreshment</strong> on topics linked with the framework, grab some beverage and read some lines, <em>man</em>.

This resource will also contain some <strong>interactive example as well as some [webapp for testing](./webapp/package.json)</strong> that I will be coding along as I am writing this thing.

## Prerequisites 

- Cypress is a JavaScript framework. In order to make it work you have to have some basic understand of the language (you can watch some youtube tutorials on it, just to get started is enough for now.)
- If you want to use a webapp to see how things works, (or to even run cypress locally) you'd have to have [NodeJS](https://nodejs.org/en/) installed on your machine.
- For your own convenience (at work or at home) I highly suggest using [nvm](https://github.com/nvm-sh/nvm) or [nvm for windows](https://github.com/coreybutler/nvm-windows) in order to work with some different projects. Webapp is written in node v18.12.1, so if nothing changes it should work. I can't promise if it would behave correctly on older versions.
- Other convenient tool to use while writing Cypress tests is some IDE (integrated development environment), something like [VSCode](https://code.visualstudio.com/) or [IntelliJ JetBrains](https://www.jetbrains.com/help/idea/javascript-specific-guidelines.html)
- You can also install [git](https://git-scm.com/downloads) which is version control tool that allow you tracking your changes and store code repositories in many places. (you'll probably learn more about git as you progress with automation testing)
- In order to run webapp on your machine - open your terminal of choice, and if you haven't already - clone this repo with `git clone https://github.com/kurekszymon/all-you-need-to-write-cypress` and do `cd  all-you-need-to-write-cypress/webapp/` directory and type `npm ci && npm start`. This will start local environment to work with.

## Introduction

If you are done with all the prerequisites, let's start with real knowledge. 
[introduction](./1-Introduction/README.md)
