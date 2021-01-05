const mongoose = require("mongoose");
const Blog = require("../models/Blog.model");
// const B1 = require("../../frontendEH/public/images/whatToKnowCovid.jpg")
const blogs = [
    // {
    //   title: {type: String},
    //   image: {type: String},
    //   datePublished: {type: String},
    //   summary: {type:String},
    //   author: {type: String},
    //   body1: {type: String},
    //   body2: {type: String},
    //   body3: {type: String},
    //   body4: {type: String},
    //   body5: {type: String},
    //   body6: {type: String},
    //   body7: {type: String},
    // },
     {
      title: "Vanderbilt Football Program a Leader in COVID-19 Adjustments",
      image: "images/vandyBlog.jpg",
      datePublished: "December, 2020",
      summary: "COVID-19 sure has changed our lives, but who would have thought it would bring this kind of change?! Vanderbilt's football team was faced with a difficult situation when over a dozen of their players tested positive for COVID-19. Vanderbilt's coaching staff asked Sarah Fuller, a member of the school's women's soccer team, to join them as their kicker for an upcoming game. And the rest is history!",
      author: "Jada Woody",
      body1: "The COVID-19 pandemic has raised complications across many aspects of our lives, causing us to make constant and sometimes unprecedented adjustments to our daily routines. As a nation and as a human race, we’ve all been dealt a similar hand this year – and the card we’ve all had in common is the risk of COVID-19. The way we separate ourselves is how we deal with this situation we are all in! Some of us have chosen to keep pushing though, to persevere, to stay positive, and this is such an incredible thing to see.",
      body2: "One example of this which has inspired us in particular is that of Vanderbilt University’s Football Program. What a show of leadership, perseverance, and determination! In case you hadn’t heard, Vanderbilt’s football team was recently faced with several players being infected with COVID-19 all at once, leaving them with a shortened roster and no kicker. They decided to ask a member of the Vanderbilt Women’s Soccer team, Sarah Fuller, to play as their kicker in games this season. And she said yes!",
      body3: "It’s important to note that Sarah Fuller is now the first female to ever play for a Power 5 college football team. Sarah is also just the third female to compete in the FBS, the highest level of college football. The other two athletes in this group were also kickers. Sarah Fuller has been named a Special Teams Player of the Week for her great performance in her first game with the Commodores. Congratulations Sarah Fuller! Way to persevere!",
      body4: "And to the Vanderbilt Football program, coaching staff, and entire team, way to persevere! We commend you on your refusal to quit, and your determination to find a way to get the job done! In such difficult times, it is important that we still do all we can and show ourselves and others that even in hardship or the face of adversity, we can still be great and have some fun along the way.",
    },
    {
      title: "How Telemedicine Might Be Enchancing the American Healthcare System",
      image: "images/telemedBlogDec2020.jpg",
      datePublished: "December, 2020",
      summary: "Curious as to how medical practices and facilities are changing due to the COVID-19 pandemic? Well, one sure change is the embrace of technology in medicine! Almost all healthcare providers are having to add more technology to the way they practice medicine. Let's talk about some of these new changes!",
      author: "Jada Woody",
      body1: "Since the start of technology being so mobile and active in our everyday lives, the American healthcare system has utilized it to enhance the patient experience. Mandy medical offices use tablets instead of clipboards and paper to check patients in, medical records are now kept in online databases instead of paper charts, patients check doctor’s websites for the hours and available services rather than making a phone call or stopping by. The use of technology in medicine started small, yes. But now we’re looking at an almost industry-wide embrace of technology for the safety of patients and staff! And this shift even has its own catchy name, telemedicine!",
      body2: "Chances are, you’ve heard the term telemedicine. Especially since the start of the COVID-19 pandemic. It has become a very common term, describing the use of technology, phone calls, instant messaging, image sharing, or video calls to deliver medical consultation and care. It isn’t a tough concept to understand, but it’s changing the way we handle patient care.",
      body3: "Telemedicine is increasing the accessibility of physicians, specialists, and other healthcare professionals. Patients with disabilities, susceptible immune systems, or remote locations probably benefit the most from these technological advances, but in total, it seems to be improving the availability of care for all patients! Patients can now receive test results and imagery quicker than ever. The lab results or scans can be saved and sent via digital file and then interpreted by a medical physician over a phone call to the patient. Patient portals make medical records, bills, and past treatments accessible to patients 24/7.",
      body4: "One more recently popular addition to telemedicine is video conferencing between providers and patients. Patients who can’t make it into the office or hospital can video chat with their doctors, allowing them to feel more like they’re speaking face-to-face and allowing for more engagement than a phone call. During the COVID-19 pandemic, this feature has been very helpful for many physicians, healthcare providers, and especially for patients trying to limit exposure and risk. Patients who had tested positive for the virus were often asked to stay home and conduct their follow up appointments through telemedicine if they did not have to be hospitalized. Other patients who might have still been healthy, felt safer staying home than traveling to a doctors office where there might have been an opportunity for infection or exposure. Either way, providers offering telemedicine are helping mitigate risk.",
      body5: "Overall, we’ve found telemedicine to have a lot of positive changes. But like all change, there are always pros and cons. If you or someone you know has participated in telemedicine, either as the patient or the provider, let us know. We’re interested in how things are turning out and how all parties are adjusting to this new phase in healthcare. If you have questions about what services are available at Encompass HealthCare & Wound Medicine, you should contact our front desk or visit our website.",
    },
     {
      title: "Venous Insufficiency Can Be Cured at Encompass HealthCare!",
      image: "images/VeinBlogSept2020.jpg",
      datePublished: "September, 2020",
      summary: "Dr. Bruce E. Ruben, MD, our Medical Director walks through the basics of venous insufficiency and how we CURE these vein problems at Encompass HealthCare. By reading along with Dr. Ruben, you'll learn about Venous Ablation, a pain-free and minimally-invasive procedure we use to heal our patients!",
      author: "Bruce E. Ruben MD",
      body1: "Biological ablation is defined as the removal of a biological structure or functionality. Venous ablation, in particular, is a procedure used by physicians to shut down poorly performing veins that leak blood and fluids into the soft tissues of legs. Such leaking is the primary cause of chronic swelling, redness, heaviness, and sores that won’t heal.",
      body2: "Thus, ablation of just a few identified, culprit veins will reverse all of these symptoms and heal the long-standing sore. The methods that are available today for providing ablation of these veins are all minimally invasive and are performed in the physician’s office; however, patients should be aware that the level of pain associated with the procedure varies.",
      body3: "For example, the most painful ablation techniques use laser and radiofrequency, which “burns” the vein on the interior of the leg. In order to complete this specific technique, the introduction of multiple, separate injections of lidocaine filled fluid around the vein is required. As a result, the vein is ablated and the surrounding soft tissues are prevented from burning. OUCH! What’s worse, radiofrequency and laser procedures carry the risk of causing irreversible damage, and even accidental burning, to important sensory nerves; yet, with Clarivein, this is not a risk. In fact, we have seen that the benefits of the radiofrequency and laser procedures are present with Clarivein, but the risky outcomes are not.",
      body4: "Therefore, a lack of medical awareness is the only reason one would choose radiofrequency or laser procedures over the much less painful and risky Clarivein. At Encompass Healthcare we use Clarivein, a mechanical venous ablation procedure. This procedure typically requires no more than a single needle inserted into the targeted leg vein under ultrasound guidance, much like a typical lab draw at your doctors’ office. Guided by ultrasound, a catheter is threaded along the length of the interior vein and withdrawn while simultaneously creating a painless, inner vein injury in order to cause vein contraction, and thus ablation.",
      body5: "In general, venous ablation is a procedure which is considered only after other conservative measures have failed. Bruce Ruben, M.D., our Medical Director will often try compression bandaging like unna boots, pneumatic compression pumps, or multi-layer compression wrapping first. These methods are more akin to wrapping a leaking pipe with duct tape; however, it may just be enough to heal a non-healing wound without resorting to the vein ablation procedure. At Encompass Healthcare, each patient is always given the full range of appropriate options.",
    },
    {
      title: "Healthy Eating is the Key",
      image: "images/healthyEatBlogAug2020.jpg",
      datePublished: "August, 2020",
      summary: "One of the most important factors in a good healing regimen (after quality of care and patient compliance) is nutrition! Here, we'll talk about how important nutrition is to the healing process.",
      author: "Jada Woody",
      body1: "One of the most important factors in a good healing regimen after quality of care and patient compliance, is nutrition! We see lots of patients each day who are trying to heal a wound or burn, get rid of a nasty infection, or simply trying to get healthier overall, and one of the unfortunate things many of them have in common is poor nutrition. Most people don’t think about nutrition when they have an injury or wound.",
      body2: "Patients often think first about what they can do for their symptoms, their pain or discomfort, and what can be done about the injury itself. Should they wrap it? Cleanse it? Keep it try or moisturized? To they need medications or an x-ray? These are all valid thoughts and questions of course, but if a patient follows all of these steps and guidelines, and doesn’t have the right diet or daily nutrition, they may still have trouble healing! So here’s what we’ve found at Encompass HealthCare! A patient who is attempting to heal from a wound, injury, or infection, must have a well-balanced diet yes, but they may also need an increase in protein during the healing process!",
      body3: "Now, let’s address both sides of this statement. First, a well-balanced diet! What does this really mean? Well a dictionary definition would be that a well-balanced diet is one which gives the body the nutrients it needs to function correctly. Great! But we also have to recognize that the nutrients needed are actually different for each and every person. A seven year old girl does not need the same amount of proteins or fats or calories each day as a 28 year old NFL player does, right? So how do we know how much to eat of what? Well, there are lots of great resources on the internet that can tell you exactly how much of what kinds of foods you should be eating based on a number of factors like your sex, weight, height, age, activity level, allergies, etc. And some of these diet calculators can be extremely helpful.",
      body4: "But to put it simply, most individuals can follow these very basic guidelines; Nutrient Rich Food Groups:	Fresh Fruits, Fresh Vegetables, Lean Proteins, Whole Grains, Legumes & Nuts. These food groups offer a great variety of nutrients, including proteins and healthy fats and sugars. Do what you can to substitute these food groups in for less healthy alternatives like bacon, fried chicken, white bread, candied fruits, cookies, ice cream, pizza, cakes, energy drinks, sausages, etc. The more you can eat from the nutrient rich list instead of the unhealthy food items, the better off you will be.",
      body5: "Another important note in a well-balanced diet is the quantity of food you’re eating. Don’t overeat. Try going one week only eating when you actually feel hungry. Studies show that those who only eat when hungry actually enjoy food more, spend less at grocery stores and restaurants, feel healthier, and tend to lose excess body weight they may have had before. These are all great reasons to try it out! Now, the other side of nutrition that we talk to our patients about is “Nutrition While Healing”! This changes things a bit! While we still encourage our patients to keep a well-balanced diet, we also recommend that patients increase the intake of proteins when coming back from an injury or infection or when healing a wound.",
      body6: "This increase in protein helps the body gear up for the healing process and typically increases the speed at which patients heal. Proteins have a very important job in the body and in the healing process! There’s a good reason athletes use proteins for post-workout drinks and shakes! Proteins are responsible for the structure, function, and regulation of our tissues and organs. Including muscles, bones, skin, and much more. Your body needs protein to help repair any damage done to the body.",
      body7: "And if there is a significant amount of damage, say a third degree burn over the forearm, the body will need more protein than normal to complete the task of repairing the tissues! Hence, our guideline for increased protein intake during the healing process! We hope this message was helpful to you! Be sure to pass it along, we all can use a healthful tip once in a while! Remember, a balanced diet will not only help you heal, but also can keep you from getting injured or becoming sick! Stay healthy friends!",
    },
    {
      title: "Meet Encompass HealthCare's Wound Dogs",
      image: "images/dogsBlogJuly2020.jpg",
      datePublished: "July, 2020",
      summary: "At Encompass HealthCare, we believe in the calming influence a well-trained pup can bring to our patients! Meet Inky and Pocket, the Wound Dogs!",
      author: "Jada Woody",
      body1: "At Encompass HealthCare, we believe that a calming, welcoming, and happy environment plays a big role in the healing of our patients! That is why Dr. Ruben, our medical director, has introduced two therapy dogs into our office! Inky and Pocket bring a sense of joy to our office each and every day! Many of our patients have attested to the calming affect the dogs have had on them and tell us they look forward to visiting the dogs at each appointment in our office.",
      body2: "Inky and Pocket have been nicknamed the Wound Dogs because of how quickly some of our patients have healed when they’ve spent extended time with the dogs. Many patients tell us how the Wound Dogs have lifted their spirits and given them the positive mindset they needed in order to heal! Pet therapy is so powerful! We believe in the affect a healthy, happy pet can have on a person’s mental health and their healing experience in general! It follows along closely with Dr. Ruben’s philosophy of treating the WHOLE PATIENT, not just the hole in the patient!",
      body3: "Judging by how much they wag their tails…we think our dogs love being therapy pets! They get to go on a long scenic walk each day and get lots of love and attention from our staff and patients! Not to mention, TREATS! If you happen to be in our office, make sure you say hi to Inky and Pocket, they’ll be happy to see you!",
    },
     {
      title: "Hyperbaric Oxygen Therapy - Healing for Burns",
      image: "images/hbotBlogJune2020.jpg",
      datePublished: "June, 2020",
      summary: "Dr. Ruben and our terrific medical staff are offering Hyperbaric Oxygen Therapy (HBOT) at Encompass HealthCare! Read on to learn more about HBOT and the ailments and indications for using this tremendous treatment!",
      author: "Jada Woody",
      body1: "Did you know? Dr. Ruben offers Hyperbaric Oxygen Therapy (HBOT) at Encompass HealthCare! Yep, that’s right. We’ve been treating patients with HBOT for years and it has done wonders for so many of them! Hyperbaric Oxygen Therapy uses a special chamber, pressurized with 100% pure oxygen to get high levels of oxygen into the body.",
      body2: "When utilized as a medical therapy, oxygen in high doses can help heal bone infections, chronic wounds, brain abscesses, and radiation damaged soft tissue. Typically, a patient would have to visit a hospital or a major medical facility in order to receive this treatment. This can be problematic. A patient who is already at risk, due to infections, tissue damage, or open wounds, should be staying out of hospitals, due to the significantly increased risk of a Healthcare Acquired Infection (HAI).",
      body3: "Now, thanks to Dr. Ruben’s expertise and implementation of three individual hyperbaric chambers in our office, we are able to offer the treatment in a much safer environment that fits into our patients’ daily schedules. The three hyperbaric chambers we utilize in our office are called monoplace chambers, which allow for a patient to receive treatment in their own space, without having to share the chamber with others. All chambers are in view of their own tv so that the patient has some entertainment during their treatment. Our monoplace chambers ensure that each patient gets individualized attention from our hyperbaric technician who is in the room and available via both sight and intercom during the entire “dive”.",
      body4: "Dr. Ruben uses the list of medical conditions that are indicated and approved by the US FDA for treatment with Hyperbaric Oxygen Therapy. This ensures that all use of HBOT in our office is both safe and ethical! Here are some of the more common conditions from that list: -	Severe Burn Injury -	Non-healing Wounds -	Arterial Insufficiencies -	Radiation Tissue Damage -	Intracranial Abscess -	Bone Infection . Our office is open 7 days a week to help patients avoid the need for hospital visits. To learn more about Hyperbaric Oxygen Therapy at Encompass HealthCare, visit our website or give us a call!",
     },
    {
        title: "Encompass HealthCare - A Safe Place",
        image: "images/aSafePlace.jpg",
        datePublished: "April, 2020",
        summary: "We are continuing to provide impeccable care here at Encompass HealthCare. We're taking the health of our staff and patients very seriously during this pandemic. You can still receive the care you need here at Encompass, read on to learn more about how we're adjusting to create a safe place for all who enter our office!",
        author: "Jada Woody",
        body1: "If you or a loved one have tested positive for COVID-19 or believe you have been exposed, Dr. Bruce Ruben will gladly consult with you over the phone or by video conferencing! As a board-certified Infectious Disease Specialist, Dr. Ruben has prepared his entire career to deal. with infectious disease and pandemics like the one we find ourselves in now.",
        body2: "COVID-19 is not unfamiliar to Dr. Ruben. He has taken the time to study the virus and its affects. Dr. Ruben has done research not only on how to treat and cure the virus, but he’s also studied the successes that other countries have had against COVID-19 and has prepared to do the same! Using this knowledge he gained from research, Dr. Ruben has decided to offer free telemedicine consults. This means if you need to be seen by Dr. Ruben, you don’t need to come into our office. We’ll conduct a virtual appointment for the health and safety of you, other patients, and of our staff.",
        body3: "For our patients who are still being seen for maladies other than COVID-19, our office has been sanitized to create a safe and worry-free environment for all. We are professionals when it comes to protecting from and preventing contagion, so you can feel rest assured that our office is a safe place to be treated, even in this time of uncertainty! Remember, if you have tested positive for COVID-19 and are not hospital-bound, you should first call our office! Dr. Ruben, as an Infectious Disease Specialist, can provide specified treatments for you while helping you avoid the need for a hospital stay!",
        body4: "According to the CDC, hospitals have a very high rate of Healthcare-Acquired Infections. Which means just by being admitted, you are increasing your risk of additional infections by 5-10% (depending on the hospital). Don’t take the risk! Call Dr. Ruben today! If you have the following symptoms; fever, cough and shortness of breath, you should call your primary care physician or call Dr. Ruben directly. Your physician will direct you on whether or not you should be tested for COVID-19. If you develop emergency warning signs for COVID-19, you should seek emergency medical attention immediately.",
        body5: "The emergency warning signs are as follows, according to the CDC: Trouble breathing, Persistent pain or pressure in the chest, New confusion or inability to arouse, Bluish lips or face. Again, Dr. Ruben is ready and willing to help. He and our staff are prepared to help. Please consult your doctor if you believe you should be tested and if you test positive for COVID-19 at any time, call Encompass Healthcare & Dr. Bruce Ruben! Phone: (248)624-9800 For more information and recent updates on the COVID-19 virus, check the CDC’s website www.cdc.gov",
    },
    {
      title: "What You Need to Know About Coronavirus",
      image: "images/whatToKnowBlogTemp.jpg",
      datePublished: "February, 2020",
      summary: "The novel Coronavirus has continued to dominate the news as the epidemic spreads throughout China and other countries. Here, we'll discuss confirmed facts and information from the Centers for Disease Control and Prevention (CDC).",
      author: "Jason",
      body1: "Coronavirus continues to dominate the news as the epidemic spreads throughout China and the Centers for Disease Control and Prevention (CDC) has confirmed cases in the United States. The first diagnosis of this novel (new) coronavirus named 2019-nCoV was in Wuhan, Hubei Province, China, and many nations have put restrictions in place for travel to and from China. The confirmed cases int he United States currently are limited to Washington, California, Arizona and Illinois; however, the CDC is investigating potential cases in several other states, so more confirmations may be forthcoming. ETC. ",
  },
];

mongoose
  .connect("mongodb+srv://jadaw:jadaw@cluster0.asn48.mongodb.net/EHblogDB?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! EHBlogDB: "${x.connections[0].name}"`
    );
  })
  .then(async () => {
    let res = await Blog.insertMany(blogs);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
