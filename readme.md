This is repo of SnapMemos -> a note taking application.

`src` -> Inside the src folder all the actual source code regarding the project resides, (tests not included)

Lets take a look inside the `src` folder:

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module is done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares, as post them we call your business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ODM queries will go here.

 - `services` -> contains the business logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this repo from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT = < port number of your choice >
    ```
    ex: 
    ```
        PORT = 3000
    ```
    ```
        MONGO_URL = mongodb://localhost:27017/SnapMemos
    ```

 - To run the server execute
 ```
 npm run dev
 ```

 - To run the tests execute
 ```
 npm run test
 ```