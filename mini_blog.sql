CREATE DATABASE mini_blog;
USE mini_blog;

CREATE TABLE post(
	id INT auto_increment,
    author varchar(255),
    title varchar(255),
    content varchar(255),
    created_at DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);
