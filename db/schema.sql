
DROP DATABASE IF EXISTS burger_db;
create database burger_db;
use burger_db;

create table burgers(
    id int primary key not null auto_increment,
    burger_name varchar(30),
    devoured boolean DEFAULT 0
);
