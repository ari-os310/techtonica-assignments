# Eventonica Part 6

------

Event manager site in the making: Current Add, Delete, Display functionality for Users, Events.

user_events table created to hold foreign_ids : holds user attending events data, but not used.

## Run It !

------



1. Go on and clone/download this repo.
2. CD into directory to install following dependencies:

```
npm install
```

3. To create and access the database run the following commands in terminal:

   - ```
     createdb eventonica_db
     ```

   - ```
     psql eventonica_db < db.sql
     ```

4. Run the Express server with either of the following commands (**note- [nodemon](https://nodemon.io/) must be installed prior to use command) :

   - ```
     nodemon 
     ```

   - ```
     node index.js
     ```

   - ```
     npm start
     ```

5. Site can be previewed at local port [3000](https://localhost:3000/)

   ##### Note: Project does not currently have tests integrated, and could be made stronger with some.  Use Postman to test API calls not integrated in HTML.