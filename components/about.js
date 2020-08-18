import styles from './about.module.sass'
import React from 'react';
import { Parallax, Background } from 'react-parallax';

const name = 'Drew Parroccini'

const About = () => (
   <section className={styles.AboutWrapper}>
         <Parallax
            bgImage={'/images/drew.jpg'}
            strength={-100}
            className={styles.headerHomeImage}
            >
            <div className={styles.ParallaxHeight} style={{ height: '600px' }} />
        </Parallax>
      <div className="inner">
         <h2>Just happy to be here.</h2>
         <p>I am an award winning software engineer and UI designer with over a decade of experience, living in Portland, OR. My passion is building approachable, delightful systems for the modern web. I believe in adaptable, evolving solutions, and stunning Interfaces that will suit you and your companies needs now and far into the future. </p> 
         <div className="row between">
            <p>Lets chat sometime!</p>
            <ul className={styles.ContactList}>
               <li>
                  <a className="hover-1" href="mailto:aparroccini@gmail.com"><img
                     src="/images/email.svg"
                     alt="email link"
                  /></a>
               </li>
               <li>
                  <a href="https://www.strava.com/athletes/29210293"><img
                     src="/images/strava.svg"
                     alt="strava account"
                     target="_blank"
                  /></a>
               </li>
               <li>
                  <a href="https://dribbble.com/dparroccini"><img
                     src="/images/dribbble.svg"
                     alt="dribbble account"
                     target="_blank"
                  /></a>
               </li>
            </ul>
         </div>
      </div>
   </section>
);

export default About;