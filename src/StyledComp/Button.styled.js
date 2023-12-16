import { styled, keyframes } from "styled-components"

export const Styledbutton = styled.button`
  background-color: ${function (props) {
    if (props.varient === "pink") {
      return "pink"
    } else {
      return "orange"
    }
  }};

  border: 5px solid black;
  border-radius: 7%;
  margin-left: 20px;
  font-size: 50px;
  text-align: center;
  cursor: pointer;
  
  }
`

export const FansyButton = styled(Styledbutton)`
  cursor: progress;
  border: none;
`
export const HoveredButton = styled(Styledbutton)`
&:hover {
    color:blue;
    border: 2px solid orange;
    border-radius: 100%;
    margin-left: 10px;
    font-size: 40px;
    text-align: center;
`
export const SubmitButton = styled(Styledbutton).attrs({
  type: "submit",
  as: "a",
})`
  color: black;
  border: 2px solid orange;
  margin-left: 10px;
  font-size: 40px;
`
export const SubButton = styled.button.attrs({ type: "submit" })`
  color: black;
  border: 2px solid orange;
  margin-left: 10px;
  font-size: 40px;
`
const circleCode = keyframes`
    from {
        transform:rotate(0deg)
    }
    to{
        transform:rotate(15deg)
    }
`
export const Animation360 = styled.img`
  height: 250px;
  pointer-events: none;
  animation: ${circleCode} infinite 25s linear;
`
