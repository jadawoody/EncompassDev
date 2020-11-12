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
    //   body: {type: String},
    // },
    {
      title: "Meet Encompass HealthCare's Wound Dogs",
      image: {type: String},
      datePublished: "July, 2020",
      summary: "At Encompass HealthCare, we believe in the calming influence a well-trained pup can bring to our patients! Meet Inky and Pocket, the Wound Dogs!",
      author: "Jada Woody",
      body: {type: String},
    },
     {
      title: "Hyperbaric Oxygen Therapy - Healing for Burns",
      image: "images/hbotBlogJune2020.jpg",
      datePublished: "June, 2020",
      summary: "Dr. Ruben and our terrific medical staff are offering Hyperbaric Oxygen Therapy (HBOT) at Encompass HealthCare! Read on to learn more about HBOT and the ailments and indications for using this tremendous treatment!",
      author: "Jada Woody",
      body: "Did you know? Dr. Ruben offers Hyperbaric Oxygen Therapy (HBOT) at Encompass HealthCare! Yep, that’s right. We’ve been treating patients with HBOT for years and it has done wonders for so many of them! Hyperbaric Oxygen Therapy uses a special chamber, pressurized with 100% pure oxygen to get high levels of oxygen into the body. When utilized as a medical therapy, oxygen in high doses can help heal bone infections, chronic wounds, brain abscesses, and radiation damaged soft tissue. Typically, a patient would have to visit a hospital or a major medical facility in order to receive this treatment. This can be problematic. A patient who is already at risk, due to infections, tissue damage, or open wounds, should be staying out of hospitals, due to the significantly increased risk of a Healthcare Acquired Infection (HAI). Now, thanks to Dr. Ruben’s expertise and implementation of three individual hyperbaric chambers in our office, we are able to offer the treatment in a much safer environment that fits into our patients’ daily schedules. The three hyperbaric chambers we utilize in our office are called monoplace chambers, which allow for a patient to receive treatment in their own space, without having to share the chamber with others. All chambers are in view of their own tv so that the patient has some entertainment during their treatment. Our monoplace chambers ensure that each patient gets individualized attention from our hyperbaric technician who is in the room and available via both sight and intercom during the entire “dive”. Dr. Ruben uses the list of medical conditions that are indicated and approved by the US FDA for treatment with Hyperbaric Oxygen Therapy. This ensures that all use of HBOT in our office is both safe and ethical! Here are some of the more common conditions from that list: -	Severe Burn Injury -	Non-healing Wounds -	Arterial Insufficiencies -	Radiation Tissue Damage -	Intracranial Abscess -	Bone Infection . Our office is open 7 days a week to help patients avoid the need for hospital visits. To learn more about Hyperbaric Oxygen Therapy at Encompass HealthCare, visit our website or give us a call!",
     },
    {
        title: "Encompass HealthCare - A Safe Place",
        image: "images/aSafePlace.jpg",
        datePublished: "April, 2020",
        summary: "We are continuing to provide impeccable care here at Encompass HealthCare. We're taking the health of our staff and patients very seriously during this pandemic. You can still receive the care you need here at Encompass, read on to learn more about how we're adjusting to create a safe place for all who enter our office!",
        author: "Jada Woody",
        body: "If you or a loved one have tested positive for COVID-19 or believe you have been exposed, Dr. Bruce Ruben will gladly consult with you over the phone or by video conferencing! As a board-certified Infectious Disease Specialist, Dr. Ruben has prepared his entire career to deal. with infectious disease and pandemics like the one we find ourselves in now. COVID-19 is not unfamiliar to Dr. Ruben. He has taken the time to study the virus and its affects. Dr. Ruben has done research not only on how to treat and cure the virus, but he’s also studied the successes that other countries have had against COVID-19 and has prepared to do the same! Using this knowledge he gained from research, Dr. Ruben has decided to offer free telemedicine consults. This means if you need to be seen by Dr. Ruben, you don’t need to come into our office. We’ll conduct a virtual appointment for the health and safety of you, other patients, and of our staff. For our patients who are still being seen for maladies other than COVID-19, our office has been sanitized to create a safe and worry-free environment for all. We are professionals when it comes to protecting from and preventing contagion, so you can feel rest assured that our office is a safe place to be treated, even in this time of uncertainty! Remember, if you have tested positive for COVID-19 and are not hospital-bound, you should first call our office! Dr. Ruben, as an Infectious Disease Specialist, can provide specified treatments for you while helping you avoid the need for a hospital stay! According to the CDC, hospitals have a very high rate of Healthcare-Acquired Infections. Which means just by being admitted, you are increasing your risk of additional infections by 5-10% (depending on the hospital). Don’t take the risk! Call Dr. Ruben today! If you have the following symptoms; fever, cough and shortness of breath, you should call your primary care physician or call Dr. Ruben directly. Your physician will direct you on whether or not you should be tested for COVID-19. If you develop emergency warning signs for COVID-19, you should seek emergency medical attention immediately. The emergency warning signs are as follows, according to the CDC: Trouble breathing, Persistent pain or pressure in the chest, New confusion or inability to arouse, Bluish lips or face. Again, Dr. Ruben is ready and willing to help. He and our staff are prepared to help. Please consult your doctor if you believe you should be tested and if you test positive for COVID-19 at any time, call Encompass Healthcare & Dr. Bruce Ruben! Phone: (248)624-9800 For more information and recent updates on the COVID-19 virus, check the CDC’s website www.cdc.gov",
    },
    {
      title: "What You Need to Know About Coronavirus",
      // image: String,
      image: "images/whatToKnowBlogTemp.jpg",
      datePublished: "February, 2020",
      summary: "The novel Coronavirus has continued to dominate the news as the epidemic spreads throughout China and other countries. Here, we'll discuss confirmed facts and information from the Centers for Disease Control and Prevention (CDC).",
      author: "Jason",
      body: "Coronavirus continues to dominate the news as the epidemic spreads throughout China and the Centers for Disease Control and Prevention (CDC) has confirmed cases in the United States. The first diagnosis of this novel (new) coronavirus named 2019-nCoV was in Wuhan, Hubei Province, China, and many nations have put restrictions in place for travel to and from China. The confirmed cases int he United States currently are limited to Washington, California, Arizona and Illinois; however, the CDC is investigating potential cases in several other states, so more confirmations may be forthcoming. ETC. ",
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
