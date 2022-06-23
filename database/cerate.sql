create schema box;

create table author (
    id serial primary key,
    name text not null,
    picture text not null
);

