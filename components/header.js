import styles from './header.module.sass'
import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Link from 'next/link'

const siteTitle = 'BUILTBYDREW'

const Header = () => (
    <>
   
    <div className={styles.HeaderWrapper}>
        {/* -----basic config-----*/}
        <div className={styles.HeaderTitle}>
        <h1>{siteTitle}</h1>
        
        </div>
        <img
         src="/images/bird1.svg"
         className={`${styles.headerBird1}`}
         alt="Just a bird"
      />
         <img
         src="/images/bird2.svg"
         className={`${styles.headerBird2}`}
         alt="Just a bird"
      />
       
        <Parallax strength={1} className={styles.Layer1}>
            <div>&nbsp;</div>
            <Background className="custom-bg">
                <img src="/images/layer-1.svg" alt="fill murray" />
            </Background>
        </Parallax>
        <Parallax
            bgImage={'/images/layer-2.svg'}
            strength={-175}
            className={styles.Layer2}>
            <p>&nbsp;</p>
        </Parallax>
        
        <Parallax
            bgImage={'/images/layer-5.svg'}
            strength={-200}
            className={styles.Layer5}>
            <p>&nbsp;</p>
        </Parallax>
        

        
    </div>
    <Link href="/"><img
         src="/images/logo-full.svg"
         className={`${styles.headerLogo}`}
         alt={siteTitle}
      /></Link>
       
    </>
);

export default Header;