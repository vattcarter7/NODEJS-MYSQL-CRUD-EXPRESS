
DROP DATABASE IF EXISTS companymysqldb;
-- to create a new database
CREATE DATABASE companymysqldb;

-- to use database
use companymysqldb;

-- creating a new table
CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(150) NOT NULL,
  phone VARCHAR(15)
);

INSERT INTO employees (name, address, phone) VALUES 
('sopheak', 'siem reap cambodia', '0123456789' ),
('carter', 'phnom penh cambodia', '9876543210' );

-- show all employees
SELECT * FROM employees;

-- to show all tables
show tables;

-- to describe table
describe employees;


