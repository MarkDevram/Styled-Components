import "./App.css"
import logo from "./logo.svg"
import myImg from "./myImg.svg"
import {
  Animation360,
  Styledbutton,
  SubmitButton,
} from "./StyledComp/Button.styled"
import { FansyButton } from "./StyledComp/Button.styled"
import { HoveredButton } from "./StyledComp/Button.styled"
import { SubButton } from "./StyledComp/Button.styled"

function App() {
  return (
    <div className="app">
      <h1>Hello There !</h1>
      <Animation360 src={myImg} style={{ borderRadius: "100%" }} />
      <Styledbutton>button</Styledbutton>
      <Styledbutton varient="pink">button</Styledbutton>
      <FansyButton>button</FansyButton>
      <HoveredButton>Hover Me</HoveredButton>
      <SubmitButton>Submit Button</SubmitButton>
      <SubButton>Submit Button</SubButton>
    </div>
  )
}

export default App
