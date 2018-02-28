// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  BlockQuote,
  Magic,
  Quote,
  Cite,
  CodeBlock,
  Code,
  List,
  ListItem
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import reactNativeMobileSrc from './assets/old/mobile.jpg';
import reactLoveSrc from './assets/old/reactLove.png';
import formidableWhite from './assets/old/formidableWhite.png';
import formidableBlack from './assets/old/formidableBlack.png';
import formidableRed from './assets/old/formidableRed.png';
import iosEcosystem from './assets/old/iosEcosystem.png';
import androidEcosystem from './assets/old/androidEcosystem.png';
import welcomeToReact from './assets/old/welcomeToReact.png';
import welcomeToReactCode from './assets/old/welcomeToReactCode.png';
import welcomeToReactNative from './assets/old/welcomeToReactNative.jpeg';
import welcomeToReactNativeCode from './assets/old/welcomeToReactNativeCode.png';
import platformSpecificFile from './assets/old/platformSpecificFile.png';
import platformSpecificVar from './assets/old/platformSpecificVar.png';
import sewerClown from './assets/old/sewerClown.jpg';
import imageSizes from './assets/old/imageSizes.png';
import expoQRCode from './assets/old/expoQRCode.png';
import expo from './assets/old/expo.png';
import magic from './assets/old/magic.gif';

import ReactBlue from './assets/logos/ReactLogo.svg';
import FirebaseLogo from './assets/logos/firebase.svg';
import CollectiveBlack from './assets/logos/CollectiveLogo.svg';
import CollectiveWhite from './assets/logos/CollectiveLogoWhite.svg';
import WeWorkWhite from './assets/logos/WeWork.png';
import WeLiveWhite from './assets/logos/welive-logo--white.svg';
import CommonWhite from './assets/logos/common-logo-white.svg';
import ZokuWhite from './assets/logos/zoku.svg';
import orangeBg from './assets/pictures/orangeBg.png';
import iPhones from './assets/pictures/iPhones.png';
import PrimaryTechnologies from './assets/pictures/mainTechnologies.png';
import SecondaryTechnologies from './assets/pictures/SecondaryTechnologies.png';
import CommunityTools from './assets/pictures/Silver.png';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    black: '#1F2022',
    christmasRed: '#c43a33',
    christmasYellow: '#C5A436',
    christmasGreen: '#176100',
    white: '#FFFFFF',

    blueyGrey: '#9dabba',
    battleshipGrey: '#6e7b8c',
    darkBlue: '#17212f',
    greenAction: '#29dc8d',
    greenApple: '#42c627',
    green: '#66DB8C',
    greenBg: '#13C6A8',
    orange: '#FF8A61',
    orangeBg: '#FE654E',
    blue: '#60b6eb',
    blueBg: '#0EA2ED',
    yellowBg: '#F3DC72',
    yellow: '#FFBC4A',
    pink: '#e173a9',
    dark: '#252729'
  },
  {
    primary: 'Varela',
    secondary: 'Helvetica',
    tertiary: 'Montserrat',
    quaternary: 'Helvetica'
  }
);

const NormalHeading = ({ children }) => (
  <Heading size={4} textColor="white">
    {children}
  </Heading>
);

const Logo = () => <Image src={formidableRed} />;
const CollectiveLogo = () => (
  <Image src={CollectiveBlack} width="90px" height="90px" />
);
const ReactLogo = () => <Image src={ReactBlue} width="90px" height="90px" />;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Magic>
          <Slide bgColor="white">
            <CollectiveLogo />
            <Heading size={6} caps lineHeight={2} textColor="black">
              The Collective
            </Heading>
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
              <Text textColor="black">Tom Miller</Text>
            </div>
          </Slide>
          <Slide bgColor="white">
            <ReactLogo />
            <Heading size={6} caps lineHeight={2} textColor="black">
              ft. React Native
            </Heading>
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
              <Text textColor="black">Tom Miller</Text>
            </div>
          </Slide>
        </Magic>
        <Slide bgColor="orangeBg">
          <Image src={iPhones} width="500px" style={{ marginTop: '-20px' }} />
        </Slide>
        <Slide bgColor="dark">
          <Heading fit caps textColor="white">
            Co-working? <span role="img">🤔</span>
          </Heading>
        </Slide>
        <Slide bgColor="dark">
          <Image src={WeWorkWhite} />
        </Slide>
        <Slide bgColor="dark">
          <div style={{ height: '500px' }}>
            <BlockQuote size={6}>
              <Quote>
                "WeWork is a global network where companies and people grow
                together."
              </Quote>
              <Cite>wework.com [2018]</Cite>
            </BlockQuote>
          </div>
        </Slide>
        <Slide bgColor="darkBlue">
          <Heading fit caps textColor="white">
            Co-living? <span role="img">🤔</span>
          </Heading>
        </Slide>
        <Slide bgColor="dark">
          <Image src={WeLiveWhite} width="467px" height="105px" />
        </Slide>
        <Slide bgColor="dark">
          <Image src={WeLiveWhite} width="467px" height="105px" />
          <Image src={CommonWhite} height="105px" />
        </Slide>
        <Slide bgColor="dark">
          <Image src={WeLiveWhite} width="467px" height="105px" />
          <Image src={CommonWhite} height="105px" />
          <Image src={ZokuWhite} height="105px" />
        </Slide>
        <Slide bgColor="dark">
          <Image src={CollectiveWhite} height="205px" />
        </Slide>
        <Slide bgColor="black">
          <BlockQuote size={6}>
            <Quote>"A new way to live in london"</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgColor="blueBg">
          <Heading fit>
            The Technology <span role="img">🤓</span>
          </Heading>
        </Slide>
        <Slide bgColor="blueBg">
          <Image src={PrimaryTechnologies} />
        </Slide>
        <Slide bgColor="blueBg">
          <Image
            src={SecondaryTechnologies}
            height="500px"
            style={{ marginTop: '-20px' }}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          bgColor="blueBg"
          lang="js"
          code="class AnnouncementModal extends Component<AnnouncementModalProps, *> {
            static defaultProps = {
              seen: {}
            };"
          ranges={[
            { loc: [0, 270], title: 'Walking through some code' },
            { loc: [0, 1], title: 'The Beginning' },
            { loc: [1, 2] },
            { loc: [1, 2], note: 'Heres a note!' },
            { loc: [2, 3] },
            { loc: [4, 7], image: CollectiveWhite },
            { loc: [8, 10] }
            // ...
          ]}
        />
        <Slide bgColor="blueBg">
          <Image src={CommunityTools} />
        </Slide>
        <Slide bgColor="blueBg">
          <Heading fit>
            Live Demo... <span role="img">💃🕺</span>
          </Heading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Thank you!
            </Heading>
          </div>
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Happy Holidays! 🎄
            </Heading>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" fit>
              Google: "React Native getting started"
            </Text>
          </div>
          <Text textColor="white" fit>
            https://facebook.github.io/react-native/docs/getting-started.html
          </Text>
        </Slide>

        <Slide bgColor="darkBlue">
          <Heading fit textColor="white">
            Who are The Collective? 🤔
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <div style={{ height: '500px' }}>
            <BlockQuote size={6}>
              <Quote>
                "people who are really serious about software should make their
                own hardware"
              </Quote>
              <Cite>Steve Jobs [2007] quoting Alan Kay [1972]</Cite>
            </BlockQuote>
          </div>
        </Slide>
        <Slide bgColor="black">
          <Image src={iosEcosystem} />
        </Slide>
        <Slide bgColor="black">
          <Image src={androidEcosystem} />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <NormalHeading>Build once, run anywhere</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={magic} width="600px" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Heading textColor="white">How?</Heading>
          <Text textColor="white" bold>
            By mapping each element to their native counterparts in both
            frameworks
          </Text>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>How easy is it really to get started?</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <Code textColor="white">yarn global add create-react-app</Code>
          <Text />
          <Code textColor="white">create-react-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReact} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactCode} />
        </Slide>
        <Slide bgColor="white">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="black">
              Expo - React Native toolchain
            </Heading>
          </div>
          <Image src={expo} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Code textColor="white">yarn global add create-react-native-app</Code>
          <Text />
          <Code textColor="white">create-react-native-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide>
        <Slide bgColor="black">
          <Image src={expoQRCode} width="50%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNative} width="40%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNativeCode} width="70%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Heading fit textColor="white">
            Differences in styling
          </Heading>
          <List textColor="white">
            <ListItem>Inline styles (use styled components! 💅)</ListItem>
            <ListItem>FlexBox for positioning</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            Differences in syntax
          </Heading>
          <List textColor="white">
            <ListItem>View instead of div</ListItem>
            <ListItem>No buttons: touchables instead</ListItem>
            <ListItem>No onClick: onPress instead</ListItem>
            <ListItem>Text elements must be in {`<Text>`}</ListItem>
          </List>
        </Slide>
        <Slide bgColor="christmasYellow">
          <Heading fit textColor="white">
            Differences in environment
          </Heading>
          <List textColor="white">
            <ListItem>CAN use any JS modules</ListItem>
            <ListItem>localStorage vs AsyncStorage</ListItem>
            <ListItem>MUST worry about the keyboard</ListItem>
            <ListItem>MUST worry about "working offline"</ListItem>
          </List>
        </Slide>
        {/* TODO: slide about border radius/shadow  */}
        <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificVar} />
        </Slide>
        {/* TODO: slide about flasy toggle button  */}
        <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificFile} />
        </Slide>
        <Slide bgColor="christmasYellow">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={imageSizes} />
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>Why React Native?</NormalHeading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <NormalHeading>Build once, run anywhere</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>The JavaScript takeover</NormalHeading>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <NormalHeading>
            Publish new versions of native apps as quickly as webapps
          </NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>
            Can I be a React Native developer, without ever having to touch
            Native code?
          </NormalHeading>
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading size={4} textColor="white">
            Hey kid, you can write JS on Mobile here
          </Heading>
          <Image src={sewerClown} />
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <Heading size={4} textColor="white">
            Am I saying you should drop everything and go build some React
            Native apps?
          </Heading>
        </Slide>

        <Slide bgColor="christmasRed" textColor="white">
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Thank you!
            </Heading>
          </div>
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Happy Holidays! 🎄
            </Heading>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" fit>
              Google: "React Native getting started"
            </Text>
          </div>
          <Text textColor="white" fit>
            https://facebook.github.io/react-native/docs/getting-started.html
          </Text>
        </Slide>
      </Deck>
    );
  }
}
