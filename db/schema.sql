DROP DATABASE IF EXISTS department_DB;
CREATE database department_DB;

USE department_DB;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(100) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(100) NULL,
  salary DECIMAL (10,2),
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL,
  firstname  VARCHAR(100) NULL,
  lastname VARCHAR(100) NULL,
  salary DECIMAL (10,2),
  role_id INT NOT NULL,
   manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM department_DB;;
