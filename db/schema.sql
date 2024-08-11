
DROP DATABASE IF EXISTS departments;
CREATE DATABASE departments;

\c departments;





CREATE TABLE departments




INSERT INTO departments (departments_name)
VALUES ('Marketing'),
       ('Accounting'),
       ('Project Management'),
       ('Human Resources'),
       ('Logistics');

INSERT INTO roles (title, salary, department_id)
VALUES ('Marketing Director', 70000, 1),
       ('Accounting', 60000, 2),
       ('Project Manager', 65000, 3),
       ('Human Resources Manager', 70000, 4),
       ('Logistics Engineer', 80000, 5);


INSERT INTO employess (id, fisrt_name, last_name, role_id, manager_id)
VALUES ('Marketing'),
       ('Accounting'),
       ('Project Management'),
       ('Human Resources'),
       ('Logistics');






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



