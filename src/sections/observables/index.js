import * as React from 'react';
import { Slide, Heading, Text, CodePane, BlockQuote, Cite, List, ListItem } from 'spectacle';
import fixit from 'make-a-spectacle';
import { unicast, beforePipe, afterPipe, refactoredPipe } from './examples';

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Observables</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Invokable streams of future values</ListItem>
        <ListItem>Is Unicast</ListItem>
        <ListItem>Pure operators to map and filter values</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Unicast</Heading>
      <Text>Each subscription gets it's own copy of the stream's values</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={unicast} textSize="0.7em" />
    </Slide>
    <Slide>
      <Heading>Subscribe</Heading>
      <Text>Subcribing allows us to access each value of the stream they come in. Should avoid too much logic here</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={beforePipe} textSize="0.7em" />
    </Slide>
    <Slide>
      <Heading>Pipeable Operators</Heading>
      <Text>Allow us to transform and filter out values so we only get the values we want from the stream</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={afterPipe} textSize="0.7em" />
    </Slide>
    <Slide>
      <Text>These operators are a pure and declaritive way of describing the changes to the stream values. These could be broken into their own functions.</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={refactoredPipe} textSize="0.7em" />
    </Slide>
    <Slide>
      <Heading>Things to watch for</Heading>
      <List>
        <ListItem>"Subscription Hell"</ListItem>
        <ListItem>Cleaning up subscriptions you're done with</ListItem>
      </List>
    </Slide>
  </React.Fragment>,
);
