CREATE DATABASE yamthe;

USE yamthe;

CREATE TABLE `yamthe`.`user`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR
(45) NOT NULL,
  `lastname` VARCHAR
(45) NOT NULL,
  `email` VARCHAR
(100) NOT NULL,
  `password` VARCHAR
(255) NOT NULL,
  PRIMARY KEY
(`id`));

CREATE TABLE `yamthe`.`archive`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR
(100) NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `id_user_idx`
(`id_user` ASC),
  CONSTRAINT `id_user`
    FOREIGN KEY
(`id_user`)
    REFERENCES `yamthe`.`user`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION);
