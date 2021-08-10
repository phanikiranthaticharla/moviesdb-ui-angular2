# moviesdb-ui-angular2

This repository is the UI for the backend MoviesDB application located [here](https://github.com/phanikiranthaticharla/MoviesDB-SpringBoot-MongoDB). 

The backend application is written using SpringBoot and MongoDB. 

### Prerequisites
* [nodejs](https://nodejs.org/en/download/)
* Visual Studio Code (Recommended) 

### Features 

* The UI is written using Angular2. 
* This is a microservice application that talks to another backend microservice application to obtain the data. 
* User can search for a movie by any search string and any matching movie with the details such as description, director name etc are displayed. 
* The application can be hosted locally on default angular port 4200 `http://localhost:4200` 
* This application talks to the backend microservice running on port 8080. 
* The endpoint is `http://localhost:8080/movie/search?query=queryparam`

### Steps 

* After cloning the repo, from the project root directory, run: 
* `npm install` 
* If the installation is successful, additional directory called node_modules will be created. 
* Now run the UI application using: 
* `ng serve`
* From a web browser, go to the homepage of the application at `http://localhost:4200/`
* Now in order for the search feature to work correctly, make sure the backend microservice is running on port 8080. For more details about the backend microservice, check the repo [here](https://github.com/phanikiranthaticharla/MoviesDB-SpringBoot-MongoDB).
