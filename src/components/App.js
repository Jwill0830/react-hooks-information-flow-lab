import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <ShoppingList items={itemData} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </div>
  );
}

export default App;
