import "./App.css"
import { Styledbutton } from "./StyledComp/Button.styled"
import { FansyButton } from "./StyledComp/Button.styled"

function App() {
  return (
    <div className="app">
      <h1>Hello There !</h1>
      <Styledbutton>button</Styledbutton>
      <Styledbutton varient="pink">button</Styledbutton>
      <FansyButton>button</FansyButton>
    </div>
  )
}

export default App
