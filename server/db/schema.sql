CREATE DATABASE contactlist

\c contactlist

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    mobilenumber INTEGER,
    email TEXT
);

INSERT INTO contacts (name, mobilenumber, email) VALUES ('Hyeri', 246810, 'testing@gmail.com');