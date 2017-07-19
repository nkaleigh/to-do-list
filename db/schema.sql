create table test (
    id serial primary key,
    name varchar(255),
    age int
);

create table users (
    id serial primary key,
    username varchar(255),
    password varchar(255),
    firstname varchar(255)
);

create table todo (
    id serial primary key,
    userid int references users(id),
    task varchar(255)
);

insert into test (name, age)
values ('Kaleigh', 28), ('Oshion', 25), ('Landon', 23), ('Sarae', 21);

insert into users (username, password, firstname)
values ('tim', 'password', 'Timothy'), ('anna', 'password', 'Anna'), ('brianna', 'password', 'Brianna'), ('cody', 'password', 'Cody');


insert into todo (userid, task) 
values (1, 'clean'), (1, 'check oil'), (1, 'call Mary'),  (2, 'clean'), (2, 'schedule dentist appt'), (2, 'write English essay'),  (3, 'clean'), (3, 'pay rent'), (3, 'call Sean'),  (4, 'clean'), (4, 'buy ice-cream maker'), (4, 'email Brad');