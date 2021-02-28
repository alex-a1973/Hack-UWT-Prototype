CREATE TABLE hackuwt.teams (
	teamID			INT AUTO_INCREMENT NOT NULL,
    teamName		VARCHAR(50) NOT NULL,
    isPublic		INT NOT NULL,
    PRIMARY KEY (teamID)
);

-- Dummy teams values
INSERT INTO hackuwt.teams VALUES (1, 'Happy Bits', 1);
INSERT INTO hackuwt.teams VALUES (2, 'Datatizers', 0);
INSERT INTO hackuwt.teams VALUES (3, 'Strikers', 1);
INSERT INTO hackuwt.teams VALUES (4, 'Keyboard Warriors', 1);
INSERT INTO hackuwt.teams VALUES (5, 'Dataminers', 0);
INSERT INTO hackuwt.teams VALUES (6, 'Cyber Huskies', 0);
INSERT INTO hackuwt.teams VALUES (7, 'Digital Wolves', 1);
INSERT INTO hackuwt.teams VALUES (8, 'Sticky Keys', 0);
INSERT INTO hackuwt.teams VALUES (9, 'Wild Runners', 1);
INSERT INTO hackuwt.teams VALUES (10, 'Cascaders', 1);

CREATE TABLE hackuwt.registrants (
	email			VARCHAR(100),
    firstName		VARCHAR(100),
    lastName		VARCHAR(100),
    phone			CHAR(10),
    street			VARCHAR(40),
    zipcode			CHAR(5),
    state			CHAR(2) DEFAULT 'WA',
    gender			INT DEFAULT NULL,
    date			DATE,
    inPerson		INT DEFAULT 0,
    shirtSize		VARCHAR(3),
    teamID			INT DEFAULT NULL,
    PRIMARY KEY (email),
    FOREIGN KEY (teamID) REFERENCES teams(teamID) ON DELETE SET NULL ON UPDATE CASCADE,
    CHECK (gender = 0 OR gender = 1 OR gender = 2),
    CHECK (email IS NOT NULL),
    CHECK (firstName IS NOT NULL),
    CHECK (lastName IS NOT NULL)
);

-- Dummy registrants Values
INSERT INTO hackuwt.registrants VALUES ('fakeemail@gmail.com', 'Del', 'Zent', '253728198', '362th St W', '92739', 'WA', 0, '2021-02-01', 1, 'M', 1);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@live.com', 'Kerry', 'Zat', '2538281928', '2th St W', '92729', 'WA', 0, '2021-02-01', 1,  'M', 1);                     
INSERT INTO hackuwt.registrants VALUES ('fakeemail@hotmail.com', 'Terry', 'Adam', '2538281928', '27391 89th St Alabama Drive', '92729', 'WA', 1, '2021-02-02', 1, 'XL', 2);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@yahoo.com', 'Amy', 'Burdough', '2537771928',  '47th 78th St Apt 7', '92729', 'WA', NULL, '2021-02-01', 1, 'XXS', 3);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@aol.com', 'Kenneth', 'McHarris', '2897771923', '738 289th Boulevard', '92724', 'WA', NULL, '2021-02-12', 0, 'L', NULL);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@protonmail.com', 'Larry', 'Austin', '2337771921', '738 289th Boulevard', '82724', 'WA', 1, '2021-02-12', 1, 'S', 3);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@zoho.com', 'Xio Ming', 'Lao', '7667271921', '3621 Sprague St S', '82724', 'CA', 0, '2021-02-05', 0, 'M', 2);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@uw.edu', 'Mohammad', 'Sharif', '5607270021',  'The Grand, 84th St E Condo C', '29102', 'NY', 1, '2021-02-05', 1, 'XS', 9);
INSERT INTO hackuwt.registrants VALUES ('mad@gmail.com', 'Jeff', 'Azburger', '2537771923', '84th Proctor St E', '98402', 'WA', NULL, '2021-02-4', 1, 'XL', NULL);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@yandex.com', 'Tyrone', 'Wilkenson', '2537771923', '37th Port Orchard Way', '98283', 'WA', 1, '2021-02-23', 0, 'L', NULL);
INSERT INTO hackuwt.registrants VALUES ('fakeemail@gmx.de', 'Perry', 'Platypus', '7537771924',  '28th Sunny Side Blvd.', '28192', 'RI', 1, '2021-02-28', 1, 'XXS', 8);

CREATE TABLE hackuwt.logins (
	email			VARCHAR(100) NOT NULL,
    password		VARCHAR(100) NOT NULL,
    dateCreated		DATE,
    PRIMARY KEY (email),
    FOREIGN KEY (email) REFERENCES registrants(email) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Dummy logins values
INSERT INTO hackuwt.logins VALUES ('fakeemail@gmail.com', 'pass1234', '2021-01-21');
INSERT INTO hackuwt.logins VALUES ('fakeemail@live.com', 'pass1324', '2021-01-22');
INSERT INTO hackuwt.logins VALUES ('fakeemail@hotmail.com', 'pass1243', '2021-01-23');
INSERT INTO hackuwt.logins VALUES ('fakeemail@yahoo.com', 'pass2134', '2021-01-24');
INSERT INTO hackuwt.logins VALUES ('fakeemail@aol.com', 'pass2314', '2021-01-25');
INSERT INTO hackuwt.logins VALUES ('fakeemail@protonmail.com', 'pass2143', '2021-01-26');
INSERT INTO hackuwt.logins VALUES ('fakeemail@zoho.com', 'pass2341', '2021-01-27');
INSERT INTO hackuwt.logins VALUES ('fakeemail@uw.edu', 'pass2431', '2021-01-28');
INSERT INTO hackuwt.logins VALUES ('fakeemail@yandex.com', 'pass2413', '2021-01-29');
INSERT INTO hackuwt.logins VALUES ('fakeemail@gmx.de', 'pass4213', '2021-01-30');