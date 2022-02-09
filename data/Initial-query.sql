-- SQLite
CREATE TABLE Account (
	id INTEGER  PRIMARY KEY,
   	userId TEXT NOT NULL
);

INSERT INTO Account (userId)
VALUES ("41"), ("42");

CREATE TABLE Activity (
    id INTEGER  PRIMARY KEY,
    timestamp INTEGER,
    ownerAccountId TEXT,
    sourceAccountId TEXT,
    targetAccountId TEXT,
    amount INTEGER
);

INSERT INTO Activity (timestamp, ownerAccountId, sourceAccountId, targetAccountId, amount)
VALUES (strftime('%s','now'), "41", "100", "41", 1000);