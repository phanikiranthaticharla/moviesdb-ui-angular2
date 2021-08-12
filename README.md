# moviesdb-ui-angular

This repository is the UI for the backend MoviesDB application located [here](https://github.com/phanikiranthaticharla/MoviesDB-SpringBoot-MongoDB). 

The backend application is written using SpringBoot and MongoDB. 
Current UI looks like below with basic features such as listing movies and searching a movie based on movie name, actor, description or language

![movies_db_new](https://user-images.githubusercontent.com/8190677/128954429-c6f66ca4-8ddf-48a1-8a30-9f29ad5195b0.png)


### Prerequisites
* [nodejs](https://nodejs.org/en/download/)
* Visual Studio Code (Recommended) 

### Features 

* The UI is written using Angular. 
* This is a microservice application that talks to another backend microservice application to obtain the data. 
* User can search for a movie by any search string and any matching movie with the details such as description, director name etc are displayed. 
* The application can be hosted locally on default angular port 4200 `http://localhost:4200` 
* This application talks to the backend microservice running on port 8080. 
* The endpoint is `http://localhost:8080/movie/search?query=queryparam`

### Steps 

* Check if npm and nodejs are installed by running: 
* `node -v`
* `npm -v`
* After cloning the repo, from the project root directory, run: 
* `npm install` 
* If the installation is successful, additional directory called node_modules will be created. 
* Now run the UI application using: 
* `ng serve`
* From a web browser, go to the homepage of the application at `http://localhost:4200/`
* Now in order for the search feature to work correctly, make sure the backend microservice is running on port 8080. For more details about the backend microservice, check the repo [here](https://github.com/phanikiranthaticharla/MoviesDB-SpringBoot-MongoDB).


