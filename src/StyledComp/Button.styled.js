import { styled } from "styled-components"

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
`
