USE gym;
-- Adding Programs
INSERT INTO program VALUES (1,'This is our yearly program. Unlimited General (you can come at any time we are open). The following Number of classes',12,'gold', 9000);
INSERT INTO program VALUES (2,'This is our bi-yearly program. Unlimited General (you can come at any time we are open). The following Number of classes',6,'silver', 4000);
INSERT INTO program VALUES (3,'This is our 3 months program. Unlimited General (you can come at any time we are open). The following Number of classes',3,'platinum', 2000);
INSERT INTO program VALUES (4,'This is our monthly subscription. Unlimited General (you can come at any time we are open). The following Number of classes',1,'monthly', 1000);
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
INSERT INTO session VALUES (1,'2022-03-10T06:00',20,0, '2022-03-10T05:00',2);
INSERT INTO session VALUES (2,'2022-03-10T06:00',20,0, '2022-03-10T05:00',5);
INSERT INTO session VALUES (3,'2022-03-10T08:00',20,0, '2022-03-10T06:00',4);
INSERT INTO session VALUES (4,'2022-03-10T01:00',20,0, '2022-03-10T12:00',3);
INSERT INTO session VALUES (5,'2022-03-10T08:00',20,0, '2022-03-10T07:00',6);
INSERT INTO session VALUES (6,'2022-03-10T10:00',20,0, '2022-03-10T09:00',7);
INSERT INTO session VALUES (7,'2022-03-10T10:00',20,0, '2022-03-10T09:00',8);
INSERT INTO session VALUES (8,'2022-03-10T09:00',20,0, '2022-03-10T08:00',4);
INSERT INTO session VALUES (9,'2022-03-10T03:00',20,0, '2022-03-10T02:00',2);
INSERT INTO session VALUES (10,'2022-03-10T04:00',20,0, '2022-03-10T03:00',5);


-- adding sports
INSERT INTO SPORTS VALUES ("Yoga");
INSERT INTO SPORTS VALUES ("Boxing");
INSERT INTO SPORTS VALUES ("Cross fit");
INSERT INTO SPORTS VALUES ("Air Yoga");


-- adding trainers
INSERT INTO TRAINER VALUES (1, "Hey, I'm captain Tarek and I would love to see you in my class", "Tarek", "Ashor", "01123556612");
INSERT INTO TRAINER VALUES (2, "Hey, I'm captain Mohamed and I would love to see you in my class", "Mohamed", "Yasser", "01244321997");
INSERT INTO TRAINER VALUES (3, "Hey, I'm captain Yasmine and I would love to see you in my class", "Yasmine", "Hassan", "01255113369");
INSERT INTO TRAINER VALUES (4, "Hey, I'm captain Noha and I would love to see you in my class", "Noha", "Ahmed", "01224463212");
INSERT INTO TRAINER VALUES (5, "Hey, I'm captain Mariam and I would love to see you in my class", "Mariam", "Youssri", "01273322997");
INSERT INTO TRAINER VALUES (6, "Hey, I'm captain Menna and I would love to see you in my class", "Menna", "Samir", "01233461126");
INSERT INTO TRAINER VALUES (7, "Hey, I'm captain Farida and I would love to see you in my class", "Farida", "Adel", "01033114477");
INSERT INTO TRAINER VALUES (8, "Hey, I'm captain Rewan and I would love to see you in my class", "Rewan", "Ahmed", "01553011478");
INSERT INTO TRAINER VALUES (9, "Hey, I'm captain Aya and I would love to see you in my class", "Aya", "Ahmed", "01235544982");

-- adding Trainer sports
INSERT INTO TRAINER_SPORTS VALUES (1, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (1, "Cross fit");
INSERT INTO TRAINER_SPORTS VALUES (2, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (2, "Cross fit");
INSERT INTO TRAINER_SPORTS VALUES (3, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (3, "Yoga");
INSERT INTO TRAINER_SPORTS VALUES (4, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (4, "Yoga");
INSERT INTO TRAINER_SPORTS VALUES (5, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (5, "Air Yoga");
INSERT INTO TRAINER_SPORTS VALUES (6, "Yoga");
INSERT INTO TRAINER_SPORTS VALUES (7, "Air Yoga");
INSERT INTO TRAINER_SPORTS VALUES (7, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (8, "Boxing");
INSERT INTO TRAINER_SPORTS VALUES (9, "Boxing");

-- adding trainer achievements 
INSERT INTO TRAINER_ACHIEVEMEnTS VALUES (1, "2020-10-15","Boxing Egyption Champion",1);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (2, "2021-12-13","Boxing Egyption Champion",2);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (3, "2022-05-05","Boxing Egyption Champion",3);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (4, "2020-03-15","Best Yoga Coach 2020",4);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (5, "2022-06-20","Best Yoga Coach 2022",5);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (6, "2021-03-12","Best Yoga Coach 2021",6);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (7, "2020-06-24","Best Boxing Coach 2020",7);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (8, "2021-03-06","Best Boxing Coach 2021",8);
INSERT INTO TRAINER_ACHIEVEMENTS VALUES (9, "2022-04-15","Best Boxing Coach 2022",9);

-- adding tips
-- health tips
INSERT INTO TIP VALUES (1, "Health", "- Consume less salt and sugar.
- Reduce intake of harmful fats. 
- Eat 2000 calories for women 2500 calories for men per day", "Tips to make sure you have a healthy diet that will help you get in shape", "Eat a healthy diet");
INSERT INTO TIP VALUES (2, "Health", "Some people avoid nuts because they are high in fat.
 However, nuts and seeds are incredibly nutritious. They are packed with protein, fiber, and a variety of vitamins and minerals", "Nuts may help you lose weight and reduce the risk of developing type 2 diabetes and heart disease", "Eat nuts and seeds");
INSERT INTO TIP VALUES (3, "Health", "Examples include:
   snack cakes
   fast food
   frozen meals
   canned foods
   chips", "Ultra-processed foods are foods containing ingredients that are significantly modified from their original form
   They often contain additives like added sugar, highly refined oil, salt, preservatives, artificial sweeteners, colors, and flavors as well", "Avoid ultra-processed foods");
INSERT INTO TIP VALUES (4, "Health", "Studies show that people who eat fish regularly have a lower risk for several conditions, including heart disease, dementia, and inflammatory bowel disease", "Fish is a great source of high-quality protein and healthy fat. This is particularly true of fatty fish, such as salmon, which is loaded with anti-inflammatory omega-3 fatty acids and various other nutrients", "Eat fatty fish");
INSERT INTO TIP VALUES (5, "Health", "What’s more, poor sleep is one of the strongest individual risk factors for weight gain and obesity. People who do not get enough sleep tend to make food choices that are higher in fat, sugar, and calories, potentially leading to unwanted weight gain", "The importance of getting enough quality sleep cannot be overstated.\r\nPoor sleep can drive insulin resistance, can disrupt your appetite hormones, and reduce your physical and mental performance", "Get enough sleep");
INSERT INTO TIP VALUES (6, "Health", "Hydration is an important and often overlooked marker of health. Staying hydrated helps ensure that your body is functioning optimally and that your blood volume is sufficient", "Drinking water is the best way to stay hydrated, as it’s free of calories, sugar, and additives", "Stay hydrated");
INSERT INTO TIP VALUES (7, "Health", "When you cook meat, try not to char or burn it. Additionally limit your consumption of red and processed meats like lunch meats and bacon as these are linked to overall cancer risk and colon cancer risk.", "problems occur when meat is charred or burnt. This charring can lead to the formation of harmful compounds that may increase your risk for certain cancers.", "Don’t eat heavily charred meats");
INSERT INTO TIP VALUES (8, "Health", "Maintaining adequate vitamin D levels can help to optimize your health by improving bone strength, reducing symptoms of depression, strengthening your immune system, and lowering your risk for cancer.", "If you do not spend a lot of time in the sunlight, your vitamin D levels may be low.", "Take vitamin D if you’re deficient");
INSERT INTO TIP VALUES (9, "Health", "Studies show that people who eat more vegetables and fruits tend to live longer and have a lower risk for heart disease, obesity, and other illnesses.", "Vegetables and fruits are loaded with prebiotic fiber, vitamins, minerals, and antioxidants, many of which have potent health effects.", "Eat plenty of fruits and vegetables");

-- workout tips
INSERT INTO TIP VALUES (10, "Workout", "Before any session ensure that you warm up thoroughly and mobilise the areas that you will be using during the workout. Furthermore, failure to warm up properly may increase the risk of injury.", "Not warming up is a mistake many beginners make.", "WARM UP");
INSERT INTO TIP VALUES (11, "Workout", "particularly if you are exercising in warm conditions or for long periods. Dehydration will result in a drop in performance and severe dehydration can be dangerous too.", "Ensure you drink plenty of water, before, during and after exercise.", "WATER");
INSERT INTO TIP VALUES (12, "Workout", "After a warm-up, alternate 1-2 minutes of activity at a rate of perceived exertion, or RPE, of 7 or 8 with 2-4 minutes of lower-intensity periods (RPE of 3-4). Repeat 4-6 times.", " Increase intensity by doing intervals", "Don't cruise through cardio");
INSERT INTO TIP VALUES (13, "Workout", "Always give muscle groups 48 hours of rest between resistance workouts to allow them time to adapt to the stress you put on them. If you must lift every day, don't target the same muscles in back-to-back sessions", "Always give muscle groups 48 hours of rest between resistance workouts", "Take a day off between weight-lifting sessions");
INSERT INTO TIP VALUES (14, "Workout", "Yoga may relieve some types of lower-back pain as good as physical therapy, according to a study in the Annals of Internal Medicine", "Yoga is very good for your health and body.", "Do yoga for your health");
INSERT INTO TIP VALUES (15, "Workout", "This indecisiveness not only adds time to your workout, it also makes it less efficient, since you’re letting your heart rate drop", "Having a plan of action before you step foot in the gym can help you avoid wandering aimlessly around while you decide what to do next", "Walk into the gym with a plan");
INSERT INTO TIP VALUES (16, "Workout", "A dynamic warm-up also helps improve your range of motion, so you can get deeper into each exercise and reap the full strengthening benefits of each move.", "Dynamic stretches are a core component of pretty much any warm-up. With dynamic stretching, you’ll be moving through different stretches, rather than holding the stretch in place", "Start your workout with some dynamic stretches");
INSERT INTO TIP VALUES (17, "Workout", "You want a weight where you can finish all of the reps in your final set of exercises, but feel like you're really struggling on the last two or three reps.", "If a weight is too light, you'll still get some of the health benefits from moving your body, but you won't see your strength or fitness improve.", "Pick the right weight");
INSERT INTO TIP VALUES (18, "Workout", "Doing a similar workout over time makes your body adapt to that challenge by getting fitter and stronger. If you switch up your workout too often, though, you're not forcing your body to adapt in a specific way.", "If you have a specific fitness goal, consider following a specific program created for that goal.\nIf you don't have one we can help wth that.", "Try following a specific fitness program tailored to your goals.");

-- adding products
-- clothes
INSERT INTO PRODUCT VALUES (1,"Clothes","Women Colorfull leggings size small","https://media.istockphoto.com/photos/athletes-foot-closeup-picture-id686175600?b=1&k=20&m=686175600&s=170667a&w=0&h=j6_1RNlbq8d7E2Us5mpfiA45tKm9iaUYnCwGug1EMNk=","Leggings small",100,300);
INSERT INTO PRODUCT VALUES (2,"Clothes","Women Colorfull leggings size medium","https://media.istockphoto.com/photos/athletes-foot-closeup-picture-id686175600?b=1&k=20&m=686175600&s=170667a&w=0&h=j6_1RNlbq8d7E2Us5mpfiA45tKm9iaUYnCwGug1EMNk=","Leggings medium",100,300);
INSERT INTO PRODUCT VALUES (3,"Clothes","Women Pink Hoddie size large","https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","Pink Hoddie large",200,400);
INSERT INTO PRODUCT VALUES (4,"Clothes","Women Pink Hoddie size xlarge","https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","Pink Hoddie xlarge",200,400);
INSERT INTO PRODUCT VALUES (5,"Clothes","Men Light Blue Hoddie size large","https://images.unsplash.com/photo-1620780415921-43fa34b92cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Blue Hoddie large",200,400);
INSERT INTO PRODUCT VALUES (6,"Clothes","Men Black Hoddie size medium","https://images.unsplash.com/photo-1616257892423-861f4e77bd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Black Hoddie medium",200,400);
INSERT INTO PRODUCT VALUES (7,"Clothes","Women running shoes","https://media.istockphoto.com/photos/object-patternsneakers-picture-id1304862992?b=1&k=20&m=1304862992&s=170667a&w=0&h=Emf1s0oY7xw7HjOCloT7XHLXlkdznJ9Tve-l9FZWBBA=","Women Running Shoes",200,500);
INSERT INTO PRODUCT VALUES (8,"Clothes","Men running shoes","https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","Men Running Shoes",200,500);
INSERT INTO PRODUCT VALUES (9,"Clothes","Men Light Blue Hoddie size xlarge","https://images.unsplash.com/photo-1620780415921-43fa34b92cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Light Blue Hoddies xlarge",200,400);

-- equipments
INSERT INTO PRODUCT VALUES (10,"Equipments","5kg weights","https://media.istockphoto.com/photos/two-weigths-on-white-background-picture-id166119471?b=1&k=20&m=166119471&s=170667a&w=0&h=WgcWWOpPpRfKNMlNUzZe2ZDvUQQ75o5ENtj3OsVtf2w=","5kg Weights",200,200);
INSERT INTO PRODUCT VALUES (11,"Equipments","Pink yoga mat","https://media.istockphoto.com/photos/isolated-pink-yoga-mat-slightly-unrolled-picture-id149027826?b=1&k=20&m=149027826&s=170667a&w=0&h=Zt3MRb1E2BK8B9RCm_xAhvSHo9gQvWbU_a-oMQUKx8E=","Pink Yoga mat",200,200);
INSERT INTO PRODUCT VALUES (12,"Equipments","Purple yoga mat","https://media.istockphoto.com/photos/purple-half-rolled-yoga-mat-picture-id1312177528?k=20&m=1312177528&s=612x612&w=0&h=d7I2Wbd1mrvVDeFpegxhMXN-mXolshZ-c4ax23U8qQU=","Purple Yoga mat",200,150);
INSERT INTO PRODUCT VALUES (13,"Equipments","7kg weights","https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","7kg Weights",50,250);
INSERT INTO PRODUCT VALUES (14,"Equipments","Black stainless steel water bottle","https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","Black Water Bottle",100,150);
INSERT INTO PRODUCT VALUES (15,"Equipments","Yellow skipping rope","https://media.istockphoto.com/photos/jumping-rope-on-vintage-wooden-table-gym-background-concept-picture-id1312598386?b=1&k=20&m=1312598386&s=170667a&w=0&h=U7ZmEc4h-NkiAzVQPNf7rXE-ktLQB44LNPCzdCmklHk=","Yellow Skipping Rope",120,100);
INSERT INTO PRODUCT VALUES (16,"Equipments","Grey GYM Bag","https://media.istockphoto.com/photos/sport-bag-isolated-on-the-white-background-picture-id1305937844?b=1&k=20&m=1305937844&s=170667a&w=0&h=42nGKuUB3gt2sD0PsZldXTAcTHMeM7saWm-RrfCeaK8=","Bag",100,200);
INSERT INTO PRODUCT VALUES (17,"Equipments","Rose stainless steel water bottle","https://images.unsplash.com/photo-1599030302844-568e71a28ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHx3YXRlciUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","Rose Water Bottle",30,200);
INSERT INTO PRODUCT VALUES (18,"Equipments","Red yoga ball","https://media.istockphoto.com/photos/pilates-ball-fitness-healthy-lifestyle-concept-picture-id1078321686?k=20&m=1078321686&s=612x612&w=0&h=1DVPGCh72L2WmLQ6nbYXPxzjh2SyIagv0LsPcSJY_CY=","Yoga Ball",100,200);

-- supplies
INSERT INTO PRODUCT VALUES (19,"Supplies","Protein Powder","https://images.unsplash.com/photo-1619302286299-5acffbac3f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Protein-Powder",100,200);
INSERT INTO PRODUCT VALUES (20,"Supplies","CTRL Protein Powder","https://images.unsplash.com/photo-1595622206924-a47ace58ad70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvdGVpbiUyMHBvd2RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","CTRL Protein Powder",100,200);
INSERT INTO PRODUCT VALUES (21,"Supplies","Huel Protein Powder","https://images.unsplash.com/photo-1584116831289-e53912463c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Huel Protein Powder",50,200);
INSERT INTO PRODUCT VALUES (22,"Supplies","why Protein Powder","https://media.istockphoto.com/photos/whey-protein-container-and-fitness-dumbbells-picture-id609625242?k=20&m=609625242&s=612x612&w=0&h=KlWnVOVDh6MAWz2un-BLBkG47ir7kua-jvVDoou8rYg=","why Protein Powder",50,300);
INSERT INTO PRODUCT VALUES (23,"Supplies","Protienes Protein Powder","https://images.unsplash.com/photo-1622818426027-8909055faae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Protienes Protein Powder",100,250);
INSERT INTO PRODUCT VALUES (24,"Supplies","Protein Powder","https://images.unsplash.com/photo-1594134888586-2d27f0e4bcaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Protein Powder",50,200);
INSERT INTO PRODUCT VALUES (25,"Supplies","True Stones Protein Powder","https://images.unsplash.com/photo-1585230997231-5450f4283787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","True Stones Protein Powder",30,300);
INSERT INTO PRODUCT VALUES (26,"Supplies","Why Proteins","https://images.unsplash.com/photo-1595257842044-8f021a58c8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Why Proteins Protein Powder",100,200);
INSERT INTO PRODUCT VALUES (27,"Supplies","Daily Essential Shake Protein Powder","https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","Daily Essential Shake Protein Powder",200,100);


-- adding trainee
INSERT INTO USER VALUE (1,"RED", "2000-07-18","Mariam","Youssri","12345","01273322997","What is your favourite color?", "Trainee", "Mariam");
INSERT INTO TRAINEE VALUES(1);




