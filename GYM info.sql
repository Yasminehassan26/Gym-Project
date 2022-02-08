USE gym;
-- Adding Programs
INSERT INTO program VALUES (1,'This is our yearly program /n Unlimited General (you can come at any time we are open) /n The following Number of classes',12,'gold', 9000);
INSERT INTO program VALUES (2,'This is our bi-yearly program /n Unlimited General (you can come at any time we are open) /n The following Number of classes',6,'silver', 4000);
INSERT INTO program VALUES (3,'This is our 3 months program /n Unlimited General (you can come at any time we are open) /n The following Number of classes',3,'platinum', 2000);
INSERT INTO program VALUES (4,'This is our monthly subscription /n Unlimited General (you can come at any time we are open) /n The following Number of classes',1,'monthly', 1000);
INSERT INTO program VALUES (5,'This is our monthly Yoga Class membership',1,'Yoga', 1000);
INSERT INTO program VALUES (6,'This is our monthly Boxing Class membership',1,'Boxing', 1500);
INSERT INTO program VALUES (7,'This is our monthly Air Yoga Class membership',1,'Air Yoga', 1200);
INSERT INTO program VALUES (8,'This is our monthly Aerobics Class membership',1,'Aerobics', 1000);
INSERT INTO program VALUES (9,'This is our monthly Lean Class membership',1,'Lean', 900);


-- adding Classes
INSERT INTO class VALUES (1,'General','In this class you can enjoy your day at the gym the way you want under supervision of our professional trainers');
INSERT INTO class VALUES (2,'Yoga','In this class you will enjoy doing yoga with a professional trainer and a group of people');
INSERT INTO class VALUES (3,'Aerobics','In this class you will enjoy doing aerobics with a professional trainer and a group of people');
INSERT INTO class VALUES (4,'Boxing','In this class you will learn to box under supervision of a professional trainer and a group of people');
INSERT INTO class VALUES (5,'Air Yoga','In this class you will enjoy doing air yoga with a professional trainer and a group of people');
INSERT INTO class VALUES (6,'Lean','In this class you will focus on building your muscles under supervision of a professional trainer');
INSERT INTO class VALUES (7,'Cross Training','In this class you will focus on losing weight under supervision of a professional trainer (Beginners)');
INSERT INTO class VALUES (8,'CrossFit','In this class you will focus on losing weight under supervision of a professional trainer (Intermediate)');

-- adding program details
-- gold
INSERT INTO pclass_details VALUES (2,1,36);
INSERT INTO pclass_details VALUES (3,1,36);
INSERT INTO pclass_details VALUES (4,1,36);
INSERT INTO pclass_details VALUES (5,1,36);
INSERT INTO pclass_details VALUES (6,1,36);
INSERT INTO pclass_details VALUES (8,1,36);
-- silver
INSERT INTO pclass_details VALUES (2,2,18);
INSERT INTO pclass_details VALUES (3,2,18);
INSERT INTO pclass_details VALUES (5,2,18);
INSERT INTO pclass_details VALUES (6,2,18);
INSERT INTO pclass_details VALUES (8,2,18);
-- platnium
INSERT INTO pclass_details VALUES (2,3,9);
INSERT INTO pclass_details VALUES (3,3,9);
INSERT INTO pclass_details VALUES (6,3,9);
INSERT INTO pclass_details VALUES (8,3,9);
-- monthly
INSERT INTO pclass_details VALUES (2,4,3);
INSERT INTO pclass_details VALUES (6,4,3);
INSERT INTO pclass_details VALUES (8,4,3);

-- Yoga
INSERT INTO pclass_details VALUES (2,5,12);
-- Boxing
INSERT INTO pclass_details VALUES (4,6,12);
-- Air Yoga
INSERT INTO pclass_details VALUES (5,7,12);
-- Aerobics
INSERT INTO pclass_details VALUES (3,8,12);
-- Lean
INSERT INTO pclass_details VALUES (6,9,12);

-- adding sessions
INSERT INTO session VALUES (1,'2022-01-10T06:00',20,0, '2022-01-10T05:00',2);
INSERT INTO session VALUES (2,'2022-01-10T06:00',20,0, '2022-01-10T05:00',5);
INSERT INTO session VALUES (3,'2022-01-10T08:00',20,0, '2022-01-10T06:00',4);
INSERT INTO session VALUES (4,'2022-01-10T01:00',20,0, '2022-01-10T12:00',3);
INSERT INTO session VALUES (5,'2022-01-10T08:00',20,0, '2022-01-10T07:00',6);
INSERT INTO session VALUES (6,'2022-01-10T10:00',20,0, '2022-01-10T09:00',7);
INSERT INTO session VALUES (7,'2022-01-10T10:00',20,0, '2022-01-10T09:00',8);
INSERT INTO session VALUES (8,'2022-01-10T09:00',20,0, '2022-01-10T08:00',4);
INSERT INTO session VALUES (9,'2022-01-10T03:00',20,0, '2022-01-10T02:00',2);
INSERT INTO session VALUES (10,'2022-01-10T04:00',20,0, '2022-01-10T03:00',5);





-- altering session to be full
UPDATE session SET no_of_attendees = 20 WHERE session_id = 3;

-- altering  trainee sessions remaining to be zero
UPDATE pclass_follow_up SET sessions_remaining = 0 WHERE trainee_id= 1 AND program_id = 1 AND class_id = 5;




