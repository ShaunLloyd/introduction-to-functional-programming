// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { Intro, Outro } from "./sections";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {Intro}
        {Outro}
      </Deck>
    );
  }
}