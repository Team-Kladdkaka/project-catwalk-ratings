
DROP DATABASE IF EXISTS CatwalkRatings;
  CREATE DATABASE CatwalkRatings;
  USE CatwalkRatings;
  DROP TABLE IF EXISTS products;
  CREATE TABLE products (
    product_id INT NOT NULL PRIMARY KEY,
    name varchar(150),
    reviews INT NOT NULL DEFAULT 0,
    recommended INTEGER(4) NOT NULL DEFAULT 0,
    characteristics varchar(150)
  );

  DROP TABLE IF EXISTS allReviews;
  CREATE TABLE allReviews (
    review_id INT NOT NULL PRIMARY KEY,
    product_id INT NOT NULL,
    rating INT NOT NULL,
    `date` date NOT NULL,
    summary VARCHAR(500),
    body varchar(2000),
    recommend INT NOT NULL,
    reported INT NOT NULL,
    reviewer_name varchar(150),
    reviewer_email varchar(150),
    response VARCHAR(500),
    helpfulness INT NOT NULL DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
  DROP TABLE IF EXISTS ratings;
  CREATE TABLE ratings (
    product_id INT NOT NULL PRIMARY KEY,
  `1` INT NOT NULL DEFAULT 0,
  `2` INT NOT NULL DEFAULT 0,
  `3` INT NOT NULL DEFAULT 0,
  `4` INT NOT NULL DEFAULT 0,
  `5` INT NOT NULL DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
  );

  DROP TABLE IF EXISTS characteristics;
  CREATE TABLE characteristics (
    characteristic_id INT NOT NULL,
    product_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (characteristic_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );

  DROP TABLE IF EXISTS characteristicReviews;
  CREATE TABLE characteristicsReviews (
    id INT NOT NULL AUTO_INCREMENT,
    characteristic_id INT NOT NULL,
    review_id INT NOT NULL,
    _value INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (characteristic_id) REFERENCES characteristics(characteristic_id),
    FOREIGN KEY (review_id) REFERENCES allReviews(review_id)
  );
  DROP TABLE IF EXISTS photos;
  CREATE TABLE photos (
    id INT NOT NULL AUTO_INCREMENT,
    review_id INT NOT NULL,
    `url` VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (review_id) REFERENCES allReviews(review_id)
  );
  DROP TABLE IF EXISTS ProductCharacteristicJunction;
  CREATE TABLE ProductCharacteristicJunction (
    id INT NOT NULL AUTO_INCREMENT,
    characteristic_id INT NOT NULL,
    product_id INTEGER NOT NULL,
    total_value INTEGER NULL DEFAULT NULL,
    value_divisor INTEGER NULL DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (characteristic_id) REFERENCES characteristics(characteristic_id)
  );