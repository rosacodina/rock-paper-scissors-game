## Project name:
	Rock, paper, scissors.

## Description's project:
	A mobile and web app based in the game "Rock, paper or Scissors". In this project the user should introduce a user name to log in. Following, the user can play by choosing/clicking one of the three icons the user will see on the game screen; such as rock, paper or scissors and the bot will show its selection. Depending of it, the user wins or loses. This project is done with Lit Element (Web Components). 
	
	//Spanish description: Una aplicación móvil y web basada en el juego "Piedra, papel o tijera". El usuario debe introducir un nombre de usuario para iniciar sesión. A continuación, el usuario puede jugar eligiendo/haciendo clic en uno de los tres iconos que verá en el juego y el bot mostrará su selección. Este proyecto está hecho con Lit (Web Components).

## NEW FUNCTIONALITY:
	When a user clicks the input to type the player name but the user does not type anything and directly clicks the join button, a message is showed to alert he/she has to put a correct player name. 

## GET STARTER:
	1- Go to the following link in any browser: https://github.com/rosacodina/rock-paper-scissors-game
	2- Once you are in the gitHub repository, you have to click the "Code" button to copy the link's 				repository.
	3- Install Visual Studio Code
	4- Create an empty folder on your laptop 
	5- Open Visual Studio Code and open the empty folder you created before.
	6- Open the VSC terminal and type the following command followed by the repository link you copied earlier: git clone
	7- Do the installations guide you may find next

## INSTALLATIONS:
  You must make the following installations before running the project. After copying the repository, you have to type the following commands in the VSC terminal:
    npm init @open-wc
    npm i lit
    npm install --save @vaadin/router 
    npm

	Once you have done this, please position yourself in the folder has been created whn you cloned the repository by typing: cd + name of folder

	After this, you are ready to launch the project just typing in your VSC terminal:
		npm start

	TESTING, I used Web Test Runner so the installations you need are:
		npm i --save-dev @web/test-runner
		npm install @open-wc/testing
		npm install @web/test-runner-junit-reporter
		npm install sinon

		To run the test you have to open your IDE console and type the following command:
		npm run test:unit

	NOTE: take into account this project was done as a mobile app, so if you do not see anything in the
	localhost was launched, please, reduce the size of the window as the project is based in 717px width.


## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)



## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

