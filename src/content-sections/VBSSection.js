import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import MessageCard from '../shared/MessageCard';
import VBSImage from '../../static/VBS_Theme_Logo.png';
import Media from '../styles/Media';

export default function ClassesSection({ data }) {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem'
    }}>

      <SectionHeading>2024 VBS Day Camp</SectionHeading>

      <div css={[{
        width: '30%',
        margin: 'auto',
        [Media.phone]: {
          width: '100%',
          padding: '0 0 1rem',
          order: '-1'
        }
      }]}>

        <img src={VBSImage} />

      </div>

      <div>

      <div css={{textAlign: 'center', margin: 'auto'}}>
          Ages 3 years - 5th grade<br />
          June 3-7, 2024<br />
          9am - 4pm<br />
          Cost is FREE!<br />
        </div>

        <br />

        <div css={{textAlign: 'center', margin: 'auto'}}>

          <div css={{fontWeight: 'bold'}}>
          Special events and activities throughout the week include:
          </div>

          Bible lessons, crafts, games, songs, science experiments, woodworking, a rocket launch demonstration, a magic show by Family Time Entertainment, an animal show by Hedgehog Hannah, and more!

        </div>

        <br />

        <div css={{textAlign: 'center', margin: 'auto'}}>

          <div css={{fontWeight: 'bold'}}>
          Carnival for the whole family on Friday, June 7th from 3-6pm
          </div>

          Join us for games with prizes, a bounce house, mini golf, face painting, a balloon artist, shaved ice from The Ice Barn, popcorn, hotdogs and more - all FREE!

        </div>

        <br />

        <form
          action="https://sites.google.com/view/eagle-valley-vbs"
          css={{
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >
        <button type="submit" className={`${BaseClasses.primaryButton}`}>
            Click Here to Register
          </button>
      </form>
      </div>

    </div>
  )
}