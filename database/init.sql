

CREATE DATABASE IF NOT EXISTS todo_db;

USE todo_db;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

INSERT INTO todos (title, completed)
VALUES
('Learn React', false),
('Learn Node.js', false),
('Learn Docker', false);

