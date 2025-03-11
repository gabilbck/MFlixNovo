/* Passo a Passo BDD */
/* 1º */ 
mysql -u root

/* 2º */ 
create database mflix;
/* 3º */                                                                                                        
use mflix;
/* 4º */ 
create table usuario (
    usercodigo int not null auto_incxrement primary key,
    useremail char(50) not null,
    usersenha char(15) not null
);