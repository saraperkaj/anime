DROP DATABASE IF EXISTS animes_dev; 
CREATE DATABASE animes_dev;
\c animes_dev;
CREATE TABLE fav_animes (id SERIAL PRIMARY KEY, name TEXT NOT NULL, release INT);
