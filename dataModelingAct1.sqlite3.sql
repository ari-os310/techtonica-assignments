BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "photos" (
	"key"	INTEGER,
	"url"	TEXT,
	"user_id"	INTEGER,
	"date_upload"	NUMERIC
);
CREATE TABLE IF NOT EXISTS "like_for_each_photo" (
	"primary_key"	INTEGER,
	"photo_id"	INTEGER,
	"user_id"	INTEGER,
	"date"	INTEGER
);
CREATE TABLE IF NOT EXISTS "user" (
	"key"	INTEGER,
	"name"	TEXT,
	"username"	TEXT,
	"email"	TEXT,
	"date"	DATE
);
INSERT INTO "photos" ("key","url","user_id","date_upload") VALUES (710,'car.png',1,'01/12/17'),
 (711,'boat.png',2,'09/12/17'),
 (712,'beach.png',3,'09/18/19'),
 (713,'zoo.png',3,'03/04/15'),
 (713,'zoo.png',3,'03/04/15'),
 (713,'zoo.png',3,'03/04/15'),
 (713,'zoo.png',3,'03/04/15');
INSERT INTO "like_for_each_photo" ("primary_key","photo_id","user_id","date") VALUES (789,710,1,'01/02/19'),
 (788,711,2,'01/02/17'),
 (787,712,3,'01/02/14'),
 (790,710,2,'01/18/16');
INSERT INTO "user" ("key","name","username","email","date") VALUES (1,'Liz','@lizandry','liz@techtonica.org','01/23/12'),
 (2,'Gabby','@gabbym.png','gabby@techtonica.org','12/22/12'),
 (3,'Ariel','@earth-cake','ariel@techtonica.org','12/22/13'),
 (4,'Cadence','@cadence','cadence@techtonica.org','12/22/14'),
 (5,'Quincy','@q','q@techtonica.org','01/02/16'),
 (5,'Quincy','@q','q@techtonica.org','01/02/16'),
 (5,'Quincy','@q','q@techtonica.org','01/02/16'),
 (5,'Quincy','@q','q@techtonica.org','01/02/16');
COMMIT;
