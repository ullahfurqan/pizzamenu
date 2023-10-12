import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return(
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){
  return(    
    <header className="header">
      <h1>Fast React Pizza Co.</h1>    
    </header>
  );
}

function Menu() { 
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return(
    <main className="menu">
      <h2>Our Menu</h2>      
      
    { numPizzas > 0 ? (
      
      <>
          <p>Authentic Italian Cusine with delicious flavours and great taste. We have multiple dishes to serve you.</p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>      
      </>
      ) : (
        <p>We're working on the menu so please come back in a while!</p>
      )
    }
    </main>
  );
}

function Pizza({pizzaObj}){
  //const pizza = props.pizzaObj;
  if(pizzaObj.soldOut) return null; //using early return
  //early return is a form of contditional rendering

  return (
    <li className='pizza'>           
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>        
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;  
  const isOpen = (hour >= openHour && hour <= closeHour);
      
  return(
    <footer>
      {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : ( <p>We are Open between {openHour}:00 and {closeHour}:00.</p>)} 
    </footer>
  )
}

function Order ({closeHour, openHour}) {
  return (
      <div className='order'>
          <p>
            We are Open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
          </p>
          <button className='btn'>Order</button>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />    
  //</React.StrictMode>
);
