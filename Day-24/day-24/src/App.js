import React from "react";
import ThemeProvider from "./ThemeProvider";
import ToggleTheme from "./ToggleTheme";
import ThemeComponents from "./ThemeComponents";
function App() {
  return (
    <ThemeProvider>
      <ToggleTheme/>
      <ThemeComponents/>
    </ThemeProvider>
  );
}

export default App;