## Pre-requisites
 - NodeJS version 16 and later
 - Copy the .env.example file and rename it to .env


## Setup
1. Open your terminal and clone this application <br>
    `$ git clone https://github.com/natesparas/nest-crud-api-01.git`
2. Go to the application <br>
    `$ cd nest-crud-api-01`
3. Installing all the dependencies <br>
    `$ npm install`
4. Sync schema with the datase <br>
    `$ npx prisma db push`
5. Running the application <br>
    `$ npm run start:dev`
6. Import the API Collection into your prefered API Platform
   > For this example, I am using Postman

<br>

## API Documentation
This API is about Todo that has CRUD functionality
> Make sure you have imported successully the API Collection 


1. Create TODO
> POST : http://localhost:3000/todo
- Request Parameters
    - title: String and Required
    - description: String
    - completed: Boolean

***********************

2. List all TODO with pagination
> GET : http://localhost:3000/todo
- Request Parameters
    - pageSize: Number and Required
    - pageNumber: Number and Required

***********************

3. Get TODO by ID
> GET : http://localhost:3000/todo/<id>

***********************

4. Update TODO by ID
> GET : http://localhost:3000/todo/<id>
- Request Parameters
    - title: String
    - description: String
    - completed: Boolean

***********************

5. Delete TODO by ID
> GET : http://localhost:3000/todo/<id>
