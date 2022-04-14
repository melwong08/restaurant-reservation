# Periodic Table Restaurant Reservations

## Website URL
[https://mel-restaurant-client.herokuapp.com](https://mel-restaurant-client.herokuapp.com/dashboard)

## API Documentation 

### Reservations
GET `/reservations`
- Retrieves all current reservations

----

GET `/reservations/:reservation_id`
- Retrieves the reservation with the corresponding reservation id 

GET `/reservations/:reservation_id/status`
- Retrieves the desired reservation's status. May return *seated*, *finished*, or *canceled*.

PUT `/reservations/:reservation_id`
- Updates an existing reservation

#### Parameters:
| Parameter | Type |
| --------- | ---- |
| `reservation_id`| `int` |

----

POST `/reservations`
- Creates a new reservation

#### Parameters:
| Parameter | Type |
| --------- | ---- |
| `first_name`| `str` |
| `last_name`| `str` |
| `mobile_number`| `tel` |
| `reservation_date`| `date` |
| `reservation_time`| `time` |
| `people`| `int` |

----

### Tables
GET `/tables`
- Retrieves all tables

----

PUT `/tables/:table_id/seat`
- Updates table status to connected to a reservation 

DELETE `/tables/:table_id/seat`
- Updates the status of the reservation to *finished* at the table and clears the reservation_id
- Does not delete the table, returns the status of the table to *free*

#### Parameters:
| Parameter | Type |
| --------- | ---- |
| `reservation_id`| `int` |

----

POST `/tables`
- Creates a new table

#### Parameters:
| Parameter | Type |
| --------- | ---- |
| `table_name`| `str` |
| `capacity`| `int` |

----

## Features
### Dashboard

The dashboard is the home page of the website. From here, users will be able to view previous, current, and next day reservations as well as tables.
![Dashboard](https://github.com/melwong08/restaurant-reservation/blob/main/images/dashboard.png)

### Search

On the search page, users can find reservations by searching customer's mobile phone numbers. 
![Search](https://github.com/melwong08/restaurant-reservation/blob/main/images/search.png)

### New Reservation

On the new reservation page, users will be able to input reservations for upcoming dates. The customer's name, mobile number, reservation date and time, and party size are required to place the reservation. 
![New Reservation](https://github.com/melwong08/restaurant-reservation/blob/main/images/new-reservation.png)

### New Table

On the new table page, users can create a table where customers can be seated.
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