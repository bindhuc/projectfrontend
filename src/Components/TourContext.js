import React ,{ createContext, useState } from "react";

export const TourContext=createContext();

 const TourDetails = (props) =>{
    let [Tourist,setTourist] =useState([
       
        {
         id:"1",
         name:"Chennai",
         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Kapaleeswarar1.jpg/250px-Kapaleeswarar1.jpg",
         
         info:"The city of Chennai is located on the east coast of India, which is also known as the Coromandel Coast.",
          date:"Tourism /March 2022" ,
         description:"Stone age implements have been found near Pallavaram in Chennai. According to the Archaeological Survey of India (ASI), Pallavaram was a megalithic cultural establishment, and pre-historic communities resided in the settlement. The region around Chennai has served as an important administrative, military, and economic centre for many centuries. During the 1st century CE, a poet and weaver named Thiruvalluvar lived in the town of Mylapore (a neighbourhood of present Chennai)."    },
        {
         id:"2",
         image:"https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Maharashtra-Tourism_600-1280x720.jpg",
          name:"Maharashtra",
         info:"Maharashtra is a state in the western and central peninsular region of India occupying a substantial portion of the Deccan Plateau.",
          date:"Tourism /March 2022 ",
         description:"Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Apart from its strawberries, Mahabaleshwar is also well known for its numerous rivers, magnificent cascades and majestic peaks" },
 
        {
         id:"3",   
         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hyderabad_Montage_2020.jpg/300px-Hyderabad_Montage_2020.jpg",
         name:"Hyderabad",
         info:"The city is noted for its monuments which includes the masterpiece of Charminar and the fort of Golconda. There are a multitude of masjids, temples, churches in the city.",
          date:"Tourism / March 2022",
         description:"Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital." },
        {
         id:"4",   
         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Khanqah-e-Moula_01.jpg/302px-Khanqah-e-Moula_01.jpg",
          name:"Srinagar",
         info:"Srinagar is the largest city and the summer capital of Jammu and Kashmir, India.",
          date:"Tourism / March 2022",
        description:"Srinagar, the summer capital of Jammu and Kashmir is located in the heart of the Kashmir valley at an altitude of 1,730 m above sea level. Spread on both sides of the river Jhelum the city is famous for its natural beauty, gardens, waterfronts and houseboats. Srinagar is called the city of lakes and the Venice of the East, fascinating tourists from centuries with its beautiful picturesque Himalayan backdrop, glittering lakes that are surrounded by houseboats and Shikaras and the majesty of Mughal architecture" } ,
     ]);
 
     
     let [Technology,setTechnology] = useState([
         {
             id:"9",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kismet_robot_at_MIT_Museum.jpg/220px-Kismet_robot_at_MIT_Museum.jpg" ,
             name:"Artificial intelligence",
             info:"Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans.",
             date:"Technology/March 2022",
         description:"AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Tesla), automated decision-making and competing at the highest level in strategic game systems (such as chess and Go)",
         },
         {
             id:"10",
             image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Industrial_robots-transparent.gif",
             name:"Robotic Process Automation (RPA)",
             info:" (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions.",
             date:"Technology/March 2022",
             description:"In traditional workflow automation tools, a software developer produces a list of actions to automate a task and interface to the back-end system using internal application programming interfaces (APIs) or dedicated scripting language.  ",
         },
         {
             id:"11",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Edge_computing_infrastructure.png/220px-Edge_computing_infrastructure.png",
             name:"Edge Computing.",
             info:"Edge Compute Platform helps to build and run applications and services elastically. Build and deploy applications with unparalleled scale, reliability, and security.",
             date:"Technology/March 2022",
             description:"This is expected to improve response times and save bandwidth. A common misconception is that edge and IoT are synonymous. Edge computing is a topology- and location-sensitive form of distributed computing.",
         },
 
         {
             id:"12",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/IBM_Q_system_%28Fraunhofer_2%29.jpg/220px-IBM_Q_system_%28Fraunhofer_2%29.jpg",
             name:"Quantum Computing",
             info:"Quantum computing is a type of computation that harnesses the collective properties of quantum states.",
              date:"Technology/March 2022",
          description:"Though current quantum computers are too small to outperform usual (classical) computers for practical applications, they are believed to be capable of solving certain computational problems, such as integer factorization (which underlies RSA encryption), substantially faster than classical computers.",
         },
 
     ]);
 
     let [Bollywood,setBollywood] = useState([
         {
             id:"13",
             image:"https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Gangubai_Kathiawadi_film_poster.jpg/220px-Gangubai_Kathiawadi_film_poster.jpg",
             name:"Gangubai Kathiawadi",
             info:"Gangubai Kathiawadi is a 2022 Indian Hindi-language biographical crime drama film directed by Sanjay Leela Bhansali . ",
             description:"Born into an affluent family in Kathiawad, Ganga Harjivandas aspired to become a Bollywood actress. At the tender age of 16, she fell in love with Ramnik Lal . They elope and go to Mumbai as Ramnik promised Ganga a film career under the tutelage of his aunt Sheela.",
             date:'Bollywood /March 2022',
             
         },
         {
             id:"14",
             image:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Radhe_Shyam.jpg/220px-Radhe_Shyam.jpg",
             name:"Radhe Shyam",
             info:"Radhe Shyam is a 2022 Indian period romantic drama film written and directed by Radha Krishna Kumar. The film is produced by UV Creations and T-Series.",
             date:'Bollywood /March 2022',
             description:"In 1978 in Italy, Vikramaditya is a world-renowned palmist. Dubbed as the Einstein of palmistry, he is a disciple of the saint Paramahamsa. Vikramaditya, who does not believe in relationships, instantly falls for doctor Prerana."
         },
         {
             id:"15",
             image:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/The_Kashmir_Files_poster.jpg/220px-The_Kashmir_Files_poster.jpg",
             name:"The Kashmir Files",
             info:"The Kashmir Files is a 2022 Indian Hindi-language drama film, written and directed by Vivek Agnihotri. Produced by Zee Studios",
             date:'Bollywood/ March 2022',
             description:"In 1989–90 Kashmir, Islamic militants storm and banish Kashmiri Hindu Pandits from the valley using the slogan.Raliv Galiv ya Chaliv (convert (to Islam), leave or die). Pushkar Nath Pandit, a teacher, fears for the safety of his son Karan, who has been accused by the militants to be an Indian spy.",
         },
         {
             id:"16",
             image:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Badhaai_Do_film_poster.jpg/220px-Badhaai_Do_film_poster.jpg",
             name:"Badhaai Do",
             info:"Badhaai Do (transl.Felicitations Due) is a 2022 Indian Hindi-language comedy drama film written by Suman Adhikary and Akshat Ghildial, and directed by Harshavardhan Kulkarni.",
             date:'Bollywood /March 2022',
             description:"Shardul Thakur is a police officer whose widowed mother worries about his marriage. On the other hand, Suman Singh aka Sumi is a physical education teacher ",
         },
     ]);
 
     let [Food,setFood]=useState([
         {
             id:"17",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/250px-Fruktsallad_%28Fruit_salad%29.jpg" ,
            name:"Fruit salad",
            info:"Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their own juices or a syrup.",
            date:"Food/March 2022",
            description:"There are many types of fruit salad, ranging from the basic (no nuts, marshmallows, or dressing) to the moderately sweet (Waldorf salad) to the sweet (ambrosia salad). Another salad containing fruit is a jello salad, with its many variations.",
         },
         {
             id:"18",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fattoush_mixed-salad.jpg/250px-Fattoush_mixed-salad.jpg" ,
             name:"Fattoush",
             info:"Fattoush is a Levantine salad made from toasted  (Arabic flat bread) combined with mixed greens and other vegetables, such as radishes and tomatoes.",
             date:"Food/March 2022",
             description:"Fattush belongs to the family of dishes known as fattat (plural of fatteh), which use stale flatbread as a base. Fattoush includes vegetables and herbs varying by season and taste. The vegetables are cut into relatively large pieces compared to tabbouleh which requires ingredients to be finely chopped",
          },
          {
              id:"19",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pudim_Abade_de_Priscos.png/220px-Pudim_Abade_de_Priscos.png" ,
             name:"Pudding",
             info:"Pudding is a type of food that can be either a dessert or a savoury (salty or spicy) dish that is part of the main meal.",
             description:"In North America, pudding characteristically denotes a sweet, milk-based dessert similar in consistency to egg-based custards, instant custards or a mousse, often commercially set using cornstarch, gelatin or similar coagulating agent such as Jell-O.",
          },
          {
              id:"20",
             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/220px-Glazed-Donut.jpg" ,
             name:"Doughnut",
             info:"A doughnut or donut is a type of food made from leavened fried dough.",
             date:"Food/March 2022",
             description:"Doughnuts are usually deep fried from a flour dough, but other types of batters can also be used. Various toppings and flavorings are used for different types, such as sugar, chocolate or maple glazing. Doughnuts may also include water, leavening, eggs, milk, sugar, oil, shortening, and natural or artificial flavors. ",
          },
     ])
     let [Hollywood,setHollywood]=useState([
        {
            id:"21",
           image:"https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg",
           name:"Avatar",
           info:"Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana",
             date:"Hollywood/ 2009",
           description:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous"
        },
        {
            id:"22",
            image:"https://i.ytimg.com/vi/l-LD16Yzi2c/maxresdefault.jpg",
            name:"Uncharted",
            info:"Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkin",
              date:"Hollywood/ 2022",
            description:"Victor Sullivan recruits Nathan Drake to help him find the lost fortune of Ferdinand Magellan",
         },
         {
             id:"23",
            image:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5157/875157-v",
            name:"Avengers: Endgame",
            info:"After Thanos, an intergalactic warlord, disintegrates half of the universe",
             date:"Hollywood/April 2019",
            description:"The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks",
         },
         {
             id:"24",
            image:"https://c.ndtvimg.com/k3bo7b8o_dark-knight-instagram_625x300_19_July_18.jpg",
            name:"The Dark Knight",
            info:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime",
            date:"Hollywood/2008",
            description:"the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees",
        },
    ])
console.log("hiiiiii")
return (
    <TourContext.Provider  value={{value1:[Tourist,setTourist],
                                   value2:[Hollywood,setHollywood],
                                   value3:[Technology,setTechnology],
                                   value4:[Bollywood,setBollywood],
                                   value5:[Food,setFood]}} >
    {props.children}
    </TourContext.Provider>
)
}
export default TourDetails