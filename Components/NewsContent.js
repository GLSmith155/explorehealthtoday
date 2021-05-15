import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react';
import { Accordion, Icon } from 'semantic-ui-react';
import classes from '../index.css';
import { render } from '@testing-library/react';

export default class NewsContent extends Component {
  state = { activeIndex: 89 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

render() {
  const { activeIndex } = this.state

  return (
  <div className="newsdiv">
  <div className="One">
  <Item.Group className="row">
    <Item>
      <Accordion fluid styled>
        <Accordion.Title 
          as='a'
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Cool new research on mushrooms!</Item.Header>
          </Accordion.Title>
        <Item.Meta>Higher Mushroom Consumption Is Associated With a Lower Risk of Cancer</Item.Meta>
        <Accordion.Content active={activeIndex === 0}>
        <p>Mushrooms are rich in vitamins, nutrients and antioxidants. The team's findings show that these super foods may also help guard against cancer. Even though shiitake, oyster, maitake and king oyster mushrooms have higher amounts of the amino acid ergothioneine than white button, cremini and portabello mushrooms, the researchers found that people who incorporated any variety of mushrooms into their daily diets had a lower risk of cancer. According to the findings, individuals who ate 18 grams of mushrooms daily had a 45% lower risk of cancer compared to those who did not eat mushrooms. 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
</div>



<div className="Two">
    <Item.Group>
    <Item>
      <Accordion fluid styled className="rightcolumn">
        <Accordion.Title 
          as='a'
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Gene therapy in Alzheimer's disease mouse model preserves learning and memory</Item.Header>
          </Accordion.Title>
        <Item.Meta>Date:
May 4, 2021
<br></br>
Source:
University of California - San Diego</Item.Meta>
        <Accordion.Content active={activeIndex === 1}>
        <p><i>Researchers have used gene therapy to prevent learning and memory loss in a mouse model of Alzheimer's disease, a key step toward eventually testing the approach in humans with the neurodegenerative disease.</i> 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
  </div>

  <div className="Three">
  <Item.Group className="row">
    <Item>
      <Accordion fluid styled>
        <Accordion.Title 
          as='a'
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Fasting lowers blood pressure by reshaping the gut microbiota</Item.Header>
          </Accordion.Title>
        <Item.Meta>
        Date: April 29, 2021
<br></br>Source:
Baylor College of Medicine</Item.Meta>
        <Accordion.Content active={activeIndex === 2}>
        <p>
<i>For the first time researchers demonstrate that intermittent fasting can reduce hypertension by reshaping the gut microbiota in an animal model.</i> 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
</div>

  <div className="four">
  <Item.Group className="row">
    <Item>
      <Accordion fluid styled>
        <Accordion.Title 
          as='a'
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Cool new research on mushrooms!</Item.Header>
          </Accordion.Title>
        <Item.Meta>Higher Mushroom Consumption Is Associated With a Lower Risk of Cancer</Item.Meta>
        <Accordion.Content active={activeIndex === 3}>
        <p>Mushrooms are rich in vitamins, nutrients and antioxidants. The team's findings show that these super foods may also help guard against cancer. Even though shiitake, oyster, maitake and king oyster mushrooms have higher amounts of the amino acid ergothioneine than white button, cremini and portabello mushrooms, the researchers found that people who incorporated any variety of mushrooms into their daily diets had a lower risk of cancer. According to the findings, individuals who ate 18 grams of mushrooms daily had a 45% lower risk of cancer compared to those who did not eat mushrooms. 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
</div>

<div className="five">
  <Item.Group className="row">
    <Item>
      <Accordion fluid styled>
        <Accordion.Title 
          as='a'
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Cool new research on mushrooms!</Item.Header>
          </Accordion.Title>
        <Item.Meta>Higher Mushroom Consumption Is Associated With a Lower Risk of Cancer</Item.Meta>
        <Accordion.Content active={activeIndex === 4}>
        <p>Mushrooms are rich in vitamins, nutrients and antioxidants. The team's findings show that these super foods may also help guard against cancer. Even though shiitake, oyster, maitake and king oyster mushrooms have higher amounts of the amino acid ergothioneine than white button, cremini and portabello mushrooms, the researchers found that people who incorporated any variety of mushrooms into their daily diets had a lower risk of cancer. According to the findings, individuals who ate 18 grams of mushrooms daily had a 45% lower risk of cancer compared to those who did not eat mushrooms. 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
</div>

<div className="six">
  <Item.Group className="row">
    <Item>
      <Accordion fluid styled>
        <Accordion.Title 
          as='a'
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
          >
          <Icon name='dropdown' />
          <Item.Header as='a'>Cool new research on mushrooms!</Item.Header>
          </Accordion.Title>
        <Item.Meta>Higher Mushroom Consumption Is Associated With a Lower Risk of Cancer</Item.Meta>
        <Accordion.Content active={activeIndex === 3}>
        <p>Mushrooms are rich in vitamins, nutrients and antioxidants. The team's findings show that these super foods may also help guard against cancer. Even though shiitake, oyster, maitake and king oyster mushrooms have higher amounts of the amino acid ergothioneine than white button, cremini and portabello mushrooms, the researchers found that people who incorporated any variety of mushrooms into their daily diets had a lower risk of cancer. According to the findings, individuals who ate 18 grams of mushrooms daily had a 45% lower risk of cancer compared to those who did not eat mushrooms. 
        </p></Accordion.Content>
     </Accordion>
    </Item>
    </Item.Group>
</div>

  </div>

  
)
  }
}