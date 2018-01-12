import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Anchor, Box, Button, Chart, CheckBox, Clock, DropButton, Heading, Image,
  Menu, Meter, Paragraph, RadioButton, RangeInput,
  RoutedButton, Select, Text, TextArea, TextInput, Video,
} from 'grommet';
import { Actions } from 'grommet-icons';
import Nav from '../components/Nav';

const CHART_VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 80], label: 'eighty' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 70], label: 'seventy' },
  { value: [3, 60], label: 'sixty' },
  { value: [2, 40], label: 'forty' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 10], label: 'ten' },
];

const Section = ({ children, index, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      {name}
    </Heading>
    <Box direction='row' wrap={true}>
      {children}
    </Box>
  </Box>
);

const Item = ({ name, path, children, center }) => (
  <Box basis='medium' margin={{ right: 'medium', bottom: 'medium' }}>
    <RoutedButton path={path}>
      <Box>
        <Heading level={3} size='small' margin={{ top: 'none', bottom: 'xsmall' }}>
          <strong>{name}</strong>
        </Heading>
      </Box>
      <Box>
        <Box
          basis='small'
          background='rgba(255, 255, 255, 0.3)'
          justify={center ? 'center' : undefined}
          align={center ? 'center' : undefined}
          pad={center ? 'medium' : undefined}
        >
          {children}
        </Box>
      </Box>
    </RoutedButton>
  </Box>
);

export default class Components extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FFF5CC', '#FFEDED']);
  }

  render() {
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ top: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>Read our documentation</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
                These are the building blocks of the grommet libray, master
                them, and become a l33t.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box pad={{ horizontal: 'large' }}>
          <Section align='stretch' name='Layout' index={0}>
            <Item name='Box' path='/box'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }} />
            </Item>

            <Item name='Grid' path='/grid'>
              <Box flex={true} direction='row'>
                <Box basis='1/4' background='brand' margin={{ right: 'xsmall' }} />
                <Box flex={true} background='brand' margin={{ right: 'xsmall' }} />
                <Box basis='1/4' background='brand' />
              </Box>
            </Item>

            <Item name='Layer' path='/layer'>
              <Box flex={true} direction='row'>
                <Box basis='1/3' background='light-5' />
                <Box flex={true} background='brand' />
              </Box>
            </Item>

            <Item name='Stack' path='/stack'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }}>
                <Box flex={true} background='brand' margin='large' />
              </Box>
            </Item>

            <Item name='Tabs' path='/tabs'>
              <Box flex={true} direction='row'>
                <Box flex={true} background='brand' margin={{ top: 'large' }} />
                <Box flex={true} background='brand' margin={{ top: 'medium' }} />
                <Box flex={true} background='brand' margin={{ top: 'large' }} />
              </Box>
            </Item>
          </Section>

          <Section name='Type' index={1}>
            <Item name='Heading' path='/heading' center={true}>
              <Heading level={2} margin='none'>Player 1 has entered the game</Heading>
            </Item>
            <Item name='Markdown' path='/markdown' center={true}>
              <code>
  #Grommet :heart:’s markdown.
  Favorite thing,
  [link](https://www.instagram.com/p/I6h5u/)
              </code>
            </Item>
            <Item name='Paragraph' path='/paragraph' center={true}>
              <Paragraph>OASIS was much more than a game or an entertainment
                platform. {"It's"} a new way of life. People stay connected to it
                for the majority of a day...</Paragraph>
            </Item>
            <Item name='Text' path='/text' center={true}>
              <Text>Hello there!</Text>
            </Item>
          </Section>

          <Section basis='full' align='stretch' name='Color' index={2}>
            <Box flex={true}>
              <Box flex={true} basis='small' direction='row' wrap={true}>
                <Box basis='small' background='brand' />
                {['accent-1', 'accent-2',
                  'neutral-1', 'neutral-2', 'neutral-3',
                  'status-ok', 'status-warning', 'status-critical',
                  'status-disabled',
                ].map(color => (
                  <Box key={color} flex={true} background={color} />
                ))}
              </Box>
            </Box>
          </Section>

          <Section name='Controls' index={3}>
            <Item name='Anchor' path='/anchor' center={true}>
              <Anchor label={"Don't press me"} primary={true} />
            </Item>
            <Item name='Button' path='/button' center={true}>
              <Button label='Panic' primary={true} onClick={() => {}} />
            </Item>
            <Item name='DropButton' path='/dropbutton' center={true}>
              <Box>
                <DropButton
                  control={(
                    <Box direction='row'>
                      <Box margin={{ right: 'small' }}>Actions</Box>
                      <Actions color='brand' />
                    </Box>
                  )}
                />
                <Box pad='xsmall' border={true}>
                  <Text>My custom content</Text>
                </Box>
              </Box>
            </Item>
            <Item name='Menu' path='/menu' center={true}>
              <Menu tabIndex='-1' label='Actions' items={[]} />
            </Item>
          </Section>

          <Section name='Input' index={4}>
            <Item name='CheckBox' path='/checkbox' center={true}>
              <CheckBox checked={true} label='Option one' disabled={true} />
            </Item>
            <Item name='RadioButton' path='/radiobutton' center={true}>
              <RadioButton checked={true} label='Option one' disabled={true} />
            </Item>
            <Item name='RangeInput' path='/rangeinput' center={true}>
              <RangeInput />
            </Item>
            <Item name='Select' path='/select' center={true}>
              <Select options={[]} placeholder='Choices' tabIndex='-1' />
            </Item>
            <Item name='TextArea' path='/textarea' center={true}>
              <TextArea placeholder='Placeholder' disabled={true} />
            </Item>
            <Item name='TextInput' path='/textinput' center={true}>
              <TextInput placeholder='Placeholder' disabled={true} />
            </Item>
          </Section>

          <Section name='Visualizations' index={3}>
            <Item name='Chart' path='/chart'>
              <Chart
                aria-label='Chart example'
                bounds={[[0, 7], [0, 100]]}
                size={{ width: 'medium', height: 'small' }}
                round={true}
                values={CHART_VALUES}
              />
            </Item>
            <Item name='Clock' path='/clock' center={true}>
              <Clock />
            </Item>
            <Item name='Meter' path='/meter' center={true}>
              <Meter
                aria-label='Meter example'
                type='circle'
                size='full'
                thickness='large'
                round={true}
                values={[{ value: 60, label: 'sixty' }]}
              />
            </Item>
          </Section>

          <Section name='Media' index={4}>
            <Item name='Image' path='/image'>
              <Image
                fit='cover'
                src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
              />
            </Item>

            <Item name='Video' path='/video'>
              <Video fit='cover'>
                <source src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />
              </Video>
            </Item>
          </Section>

          <Section name='Accessibility' index={5}>
            <Item name='SkipLinks' path='/skiplinks' center={true}>
              <Anchor path='' label='SkipLinks' />
            </Item>
          </Section>

          <Section name='Inspiration' index={6}>
            <Item name='Form' path='/form' center={true}>
              <Box flex={true} basis='full' alignSelf='stretch' justify='between' align='start'>
                <TextInput />
                <Button primary={true} label='Submit' onClick={() => {}} />
              </Box>
            </Item>
            <Item name='Selection' path='/selection'>
              <Box flex={true} direction='row' wrap={true}>
                <Box basis='xsmall' border={{ color: 'light-1', size: 'large' }} background='brand' />
                <Box basis='xsmall' border='light-1' background='brand' />
                <Box basis='xsmall' border='light-1' background='brand' />
                <Box basis='xsmall' border='light-1' background='brand' />
                <Box basis='xsmall' border='light-1' background='brand' />
                <Box basis='xsmall' border='light-1' background='brand' />
              </Box>
            </Item>
          </Section>

        </Box>
      </Box>
    );
  }
}

Components.contextTypes = {
  onColorChange: PropTypes.func,
};
