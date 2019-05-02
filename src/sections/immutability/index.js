import * as React from 'react';
import { Slide, Heading, Text, CodePane, BlockQuote, Cite, List, ListItem } from 'spectacle';
import fixit from 'make-a-spectacle';
import { mutateObject, byReference, copyObject } from './examples';

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Immutability</Heading>
      <Text>Unable to be changed/mutated after creation (Read Only)</Text>
    </Slide>
    <Slide>
      <Heading>const keyword</Heading>
      <List>
        <ListItem>Does not save us from mutation</ListItem>
        <ListItem>Cannot assign new value</ListItem>
        <ListItem>Non-primative like arrays and objects can still be mutated</ListItem>
      </List>
    </Slide>
    <Slide>
      <CodePane lang="js" source={mutateObject} textSize="0.7em" />
    </Slide>
    <Slide>
      <Text>Additionally, non-primative types are stored by reference</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={byReference} textSize="0.7em" />
    </Slide>
    <Slide>
      <CodePane lang="js" source={copyObject} textSize="0.7em" />
    </Slide>
    <Slide>
      <Text>So how can we help ensure immutability?</Text>
    </Slide>
  </React.Fragment>,
);
