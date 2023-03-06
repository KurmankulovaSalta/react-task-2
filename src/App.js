import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

let users = [
  { name: "Saltanat", age: 18, lastName: "Kurmankulova", id: 1 },
  { name: "Anton", age: 26, lastName: "He", id: 2 },
  { name: "Dastan", age: 23, lastName: "He", id: 3 },
];

const App = () => {
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
