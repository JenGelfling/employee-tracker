
INSERT INTO department (department_name)
VALUES ('Marketing'),
       ('Accounting'),
       ('Project Management'),
       ('Human Resources'),
       ('Logistics');

INSERT INTO role (title, salary, department_id)
VALUES ('Marketing Director', 70000, 1),
       ('Accounting', 60000, 2),
       ('Project Manager', 65000, 3),
       ('Human Resources Manager', 70000, 4),
       ('Logistics Engineer', 80000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Lob', 1, NULL),
       ('Star', 'Bright', 2, NULL),
       ('Heather', 'Dolores', 3, NULL),
       ('Carter', 'Page', 4, NULL),
       ('Huron', 'Cedar', 5, NULL);


