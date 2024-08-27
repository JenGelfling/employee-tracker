\c postgres;

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL REFERENCES department(id)
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL REFERENCES role(id),
  manager_id INTEGER REFERENCES employee(id)
);




/*
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);

INSERT INTO movies (movie_name)
VALUES ('Lion King'),
       ('The Godfather'),
       ('West Side Story'),
       ('Parasite'),
       ('The Wizard of Oz');

INSERT INTO reviews (movie_id, review)
VALUES (1, 'Zazu is underrated. Give that hornbill a sequel!'),
       (2, 'I''m gonna make him an offer you can''t refuse, watch this movie'),
       (1, 'Scar is the lion everyone loves to hate'),
       (3, 'Ten years of ballet and three years of tap to join a gang in this neighborhood'),
       (5, 'The tin man gave a metallic, hollow performance'),
       (1, 'Hakuna matata'),
       (5, 'Those flying monkeys are nightmare fuel!');
       


SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;



*/



