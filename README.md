# yogas
##Step 1: ER Diagram and Database Design
###Entities:
User (Stores user details)
Enrollment (Tracks user enrollment and payments)
Batch (Contains available time slots)
###ER Diagram
User (id, name, age, email, phone)
Batch (id, batch_time)
Enrollment (id, user_id, batch_id, month, payment_status, payment_date)

##SQL Script:
CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age BETWEEN 18 AND 65),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL
);

CREATE TABLE Batch (
    id SERIAL PRIMARY KEY,
    batch_time VARCHAR(10) NOT NULL
);

CREATE TABLE Enrollment (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES User(id),
    batch_id INT REFERENCES Batch(id),
    month DATE NOT NULL,
    payment_status BOOLEAN DEFAULT FALSE,
    payment_date TIMESTAMP
);
