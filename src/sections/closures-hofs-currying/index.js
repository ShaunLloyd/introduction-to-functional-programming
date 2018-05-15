import * as React from "react";
import { Slide, Heading, Text, List, ListItem, CodePane, Appear } from "spectacle";
import fixit from "make-a-spectacle";

import {
  closuresExample,
  hofExample,
  curryingExample
} from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Closures</Heading>
        <Appear order={1}><Text>Inner function with access to outer function's variable scope</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={closuresExample}
      />
    </Slide>

    <Slide>
      <Heading>Higher Order Functions</Heading>
      <Appear order={1} align="center"><Text>A function that does one or both of the following</Text></Appear>
      <List>
      <Appear order={2}><ListItem>Takes a function(s) as arguments</ListItem></Appear>
      <Appear order={3}><ListItem>Returns a function</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={hofExample}
      />
    </Slide>

    <Slide>
      <Heading>Currying</Heading>
        <Appear order={1}><Text>The process of reducing a function with multiple arguments down to one</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={curryingExample}
      />
    </Slide>
  </React.Fragment>
);
