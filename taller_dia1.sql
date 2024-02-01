show databases;
create database sample;
drop database sample;
create database sample;
use sample;
show tables;
create table users (
	id int auto_increment primary key,
    user_alias varchar(30) not null unique,
	email varchar(50) not null unique,
    first_name varchar(50) not null,
    surname varchar(50) not null,
    phone varchar(15) not null unique,
    created_at timestamp default(now()),
    modified_at timestamp default(now())
);
show tables;
desc users;

drop table notes;
create table notes (
	id int auto_increment primary key,
    title varchar(30) not null,
	is_important enum('true', 'false') not null default('false'),
	content text,
    author_id int,
	created_at timestamp default(now()),
	foreign key (author_id) references users(id)
);

desc notes;

create table users_users (
	first_user_id int,
    second_user_id int,
    relation enum('friend', 'enemy'),
    foreign key (first_user_id) references users(id),
	foreign key (second_user_id) references users(id),
    primary key (first_user_id, second_user_id)
);

desc users_users;

ALTER TABLE users_users
	add constraint check_other_id
	CHECK (first_user_id != second_user_id);

create table books (
	id int auto_increment primary key,
    title varchar(50),
    editorial varchar(50),
    year int,
    created_at timestamp default(now())
);

create table users_books (
	user_id int,
    book_id int,
    foreign key (user_id) references users(id),
	foreign key (book_id) references books(id),
    primary key (user_id, book_id)
);




