import * as React from 'react';
import { Slide, Heading, Text, CodePane, BlockQuote, Cite, List, ListItem } from 'spectacle';
import fixit from 'make-a-spectacle';
import { pureOrImpure, purePipe } from './examples';

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Pure Functions</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Small and Explicit (Does one thing)</ListItem>
        <ListItem>Same inputs returns same output</ListItem>
        <ListItem>Does not access or modify anything outside of it's own scope</ListItem>
      </List>
    </Slide>
    <Slide>
      <CodePane lang="js" source={pureOrImpure} textSize="0.7em" />
    </Slide>
    <Slide>
      <List>
        <Heading>The Benefits</Heading>
        <ListItem>Predictable</ListItem>
        <ListItem>Easily testable</ListItem>
        <ListItem>piping these together is still pure</ListItem>
      </List>
    </Slide>
    <Slide>
      <CodePane lang="js" source={purePipe} textSize="0.7em" />
    </Slide>
    <Slide>
      <List>
        <Heading>Other Examples</Heading>
        <ListItem>Array.map</ListItem>
        <ListItem>Array.filter</ListItem>
        <ListItem>Array.reduce</ListItem>
      </List>
    </Slide>
  </React.Fragment>,
);
