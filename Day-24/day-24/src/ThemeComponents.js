import React,{useContext} from "react"
import ThemeContext from "./ThemeContext"

function ThemeComponents() {
    const{theme} = useContext(ThemeContext)
  return (
    <div style={{
        background : theme === "light" ? "white" : "black",
        color : theme === "light" ? "black" : "white",
        height : "100vh"
    }}>
        <h1>Themed Component</h1>

    </div>
  )
}

export default ThemeComponents