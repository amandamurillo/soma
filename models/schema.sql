DROP DATABASE IF EXISTS concert_db;
CREATE DATABASE concert_db;
USE concert_db;

CREATE TABLE users
(
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL,
    profile_picture_url VARCHAR(300),
    PRIMARY KEY('user_id'),
    UNIQUE KEY 'email'('email')
);

CREATE TABLE artists
( 
    artist_id INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR (100) NOT NULL,
    email VARCHAR(50) NOT NULL;
    password VARCHAR(30) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    profile_picture_url VARCHAR(300),
    PRIMARY KEY('artist_id'),
    UNIQUE KEY 'email'('email')
);

CREATE TABLE reviews
( 
    post_id INT NOT NULL AUTO_INCREMENT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_name VARCHAR(50),
    comment VARCHAR(1000) NOT NULL,
    venue INT(2) NOT NULL,
    performance INT(2) NOT NULL,
    sound INT(2) NOT NULL,
    energy INT(2) NOT NULL,
    aesthetics INT(2) NOT NULL,
    PRIMARY KEY('post_id'),
);