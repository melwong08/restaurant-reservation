# Periodic Table Restaurant Reservations

## Link to live app
[https://mel-restaurant-client.herokuapp.com](https://mel-restaurant-client.herokuapp.com/dashboard)

## API Documentation 

#### /dashboard

GET: displays previous and upcoming reservations and tables

#### /search

GET: retrieves previously created reservations

#### /reservations/new

GET: retrieves reservations

PUT: updates reservations

POST: creates reservations

#### /tables/new

- GET: retrieves tables
- PUT: updates tables
- POST: creates new table 
- DELETE: deletes table

## Screenshots
### Dashboard
![Dashboard](https://github.com/melwong08/restaurant-reservation/blob/main/images/dashboard.png)
### Search
![Search](https://github.com/melwong08/restaurant-reservation/blob/main/images/search.png)
### New Reservation
![New Reservation](https://github.com/melwong08/restaurant-reservation/blob/main/images/new-reservation.png)
### New Table
![New Table](https://github.com/melwong08/restaurant-reservation/blob/main/images/new-table.png)

## Summary

Welcome to the Periodic Table restaurant reservation application! This applciation is designed to be used by restaurant personel when customers call to make reservations. Restaurant staff can input the name, phone number, date, and party size for the customer's requested reservation. The reservations will be saved in the application for easy look up by phone number in the search tab. Tables can be added to indicate the number of tables available for reservation. The dashboard will display the tables and reservations for the previous, current, and next days. 

## Technology Used

- React.js
- HTML
- Node.js
- Express
- PostgreSQL

## Installation

1. Fork and clone this repository.
2. Run npm install to install project dependencies.
3. Run npm run start to start your server.
If you have trouble getting the server to run, reach out for assistance.