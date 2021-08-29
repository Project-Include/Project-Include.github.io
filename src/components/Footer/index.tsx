import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
  FaTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaInstagram as InstragramIcon,
  FaLinkedin as LinkedInIcon,
  FaFacebook as FacebookIcon,
} from 'react-icons/fa';

import styles from './Footer.module.css';
import NavList from './components/NavList';
import SocialMediaLink from './components/SocialMediaLink';

const Footer = (): ReactElement => (
  <footer>
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="pb-4" md={6}>
          <h4 className="">About</h4>
          <div className="mt-1">
            <p>
              Our mission is to help bring accessible coding lessons to all
              students.
            </p>
            <div className={styles.socialMediaLinksWrapper}>
              <SocialMediaLink href="/" SocialMediaIcon={InstragramIcon} />
              <SocialMediaLink href="/" SocialMediaIcon={YoutubeIcon} />
              <SocialMediaLink href="/" SocialMediaIcon={TwitterIcon} />
              <SocialMediaLink href="/" SocialMediaIcon={LinkedInIcon} />
              <SocialMediaLink href="/" SocialMediaIcon={FacebookIcon} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <NavList
            listTitle="Links"
            listItems={[
              { to: `/contact-us`, text: `Contact Us` },
              { to: `/`, text: `Subscribe for Updates` },
              { to: `/`, text: `Volunteer with Us` },
            ]}
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
