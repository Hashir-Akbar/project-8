import React, { useState } from "react";

// Components
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
// images
import heroimg from "./assets/coffeehouse.jpg";
import aboutImg from "./assets/coffeeshop.jpg";
import menuImg from "./assets/coffeehouse2.jpg";
import mapImg from "./assets/map.jpg";

// css
import css from "./app.module.css";

const App = () => {
  const [isMenuHeadActive1, setMenuHeadActive1] = useState(true);
  const [isMenuHeadActive2, setMenuHeadActive2] = useState(false);

  function makingActive1() {
    if (isMenuHeadActive2) {
      setMenuHeadActive2(!isMenuHeadActive2);
      setMenuHeadActive1(!isMenuHeadActive1);
    }
  }
  function makingActive2() {
    if (isMenuHeadActive1) {
      setMenuHeadActive1(!isMenuHeadActive1);
      setMenuHeadActive2(!isMenuHeadActive2);
    }
  }

  const eatObj = [
    {
      head: "Bread Basket",
      para: "Assortment of fresh baked fruit breads and muffins 5.50",
    },
    {
      head: "Honey Almond Granola with Fruits",
      para: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
    },
    {
      head: "Belgian Waffle",
      para: "Vanilla flavored batter with malted flour 7.50",
    },
    {
      head: "Scrambled eggs",
      para: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
    },
    {
      head: "Blueberry Pancakes",
      para: "With syrup, butter and lots of berries 8.50",
    },
  ];

  const drinkObj = [
    {
      head: "Coffee",
      para: "Regular coffee 2.50",
    },
    {
      head: "Chocolato",
      para: "Chocolate espresso with milk 4.50",
    },
    {
      head: "Corretto",
      para: "Whiskey and coffee 5.00",
    },
    {
      head: "Iced tea",
      para: "Hot tea, except not hot 3.00",
    },
    {
      head: "Soda",
      para: "Coke, Sprite, Fanta, etc. 2.50",
    },
  ];

  // function menu_data(){
  //   if(){

  //   }
  // }

  return (
    <>
      <Navbar />
      <Hero
        heading="the Cafe"
        date="Open from 6am to 5pm"
        address="15 Adr street, 5015"
        headerImg={heroimg}
      />

      <div className={`${css.about} ${css.container}`}>
        <h2>
          <span>ABOUT THE CAFE</span>
        </h2>
        <div className={css.about_body}>
          <p>
            The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            In addition to our full espresso and brew bar menu, we serve fresh
            made-to-order breakfast and lunch sandwiches, as well as a selection
            of sides and salads and other good stuff.
          </p>
          <div className={css.quote}>
            <p>
              "Use products from nature for what it's worth - but never too
              early, nor too late." Fresh is the new sweet
            </p>
            <p>Chef, Coffeeist and Owner: Liam Brown</p>
          </div>
          <img src={aboutImg} alt="Coffee shop" />
          <div className={css.about_footer}>
            <div className={css.time}>
              <p>
                <span className={css.bold}>Opening hours:</span> everyday from
                6am to 5pm.
              </p>
            </div>
            <div className={css.address}>
              <p>
                <span className={css.bold}>Address:</span> 15 Adr street, 5015,
                NY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${css.menu} ${css.container}`}>
        <h2>
          <span>THE MENU</span>
        </h2>
        <div className={css.menu_book}>
          <div id="menu_head">
            <h3
              onClick={makingActive1}
              className={isMenuHeadActive1 ? css.active : ""}
            >
              Eat
            </h3>
            <h3
              onClick={makingActive2}
              className={isMenuHeadActive2 ? css.active : ""}
            >
              Drink
            </h3>
          </div>
          <div className={css.menu_book_details}>
            {isMenuHeadActive1
              ? eatObj.map((o, i) => (
                  <div key={i}>
                    {" "}
                    <h5>{o.head}</h5>
                    <p>{o.para}</p>
                  </div>
                ))
              : drinkObj.map((o, i) => (
                  <div key={i}>
                    {" "}
                    <h5>{o.head}</h5>
                    <p>{o.para}</p>
                  </div>
                ))}
          </div>
        </div>
        <img src={menuImg} alt="" />
      </div>

      <div className={`${css.location} ${css.container}`}>
        <h2>
          <span>WHERE TO FIND US</span>
        </h2>
        <div className={css.location_body}>
          <p>Find us at some address at some place.</p>
          <img src={mapImg} alt="" />
          <p>
            <span>FYI!</span> We offer full-service catering for any event,
            large or small. We understand your needs and we will cater the food
            to satisfy the biggerst criteria of them all, both look and taste.
          </p>
          <p>
            <span className={css.bold}>Reserve</span> a table, ask for today's
            special or just send us a message:
          </p>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="How many people" />
            <input type="datetime-local" defaultValue='11/2/2024, 14:27 PM'/>
            <input type="text" placeholder="Message \ Special requirements" />
            <input type="button" value="SEND MESSAGE" />
          </form>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default App;
