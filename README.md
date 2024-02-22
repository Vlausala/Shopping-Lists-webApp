# Shopping lists application
Author: Valtteri Lausala
Date: 20.3.2023 

Name: vlausalas-shoppinglist

## Table of contents

- [Description](#Description)
- [Access](#Access)
- [Running locally](#Offline)


## Description

The application works as a online shoppinglist. Features include database statistics, adding and listing shoppinglists, and accessing the shopping lists.

The application follows the client-server- database architeture and implements four layer abstraction. Three views are implemented and the following diagram shows the flow of the application: 


![image](https://user-images.githubusercontent.com/65358249/226315253-294f57e6-b327-40ea-a1aa-afbdecd3b981.png)


## Running locally

To run the project locally download this repository, and then add file called project.env to the files. You have to write usernames and passwords to the env file.

Template for project.env:
```
# Database configuration for PostgreSQL (running in container called "database-p1-5d92aa2f-6247-459b-bbf3-de879ecb4bd2")
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=database

# Database configuration for Flyway (used for database migrations)
FLYWAY_USER=
FLYWAY_PASSWORD=
FLYWAY_URL=jdbc:postgresql://database-p1-5d92aa2f-6247-459b-bbf3-de879ecb4bd2:5432/database

# Database configuration for Deno's PostgreSQL driver
PGUSER=
PGPASSWORD=
PGHOST=database-p1-5d92aa2f-6247-459b-bbf3-de879ecb4bd2
PGPORT=5432
PGDATABASE=database
```
