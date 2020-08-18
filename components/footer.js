import styles from './footer.module.sass'
import React from 'react';
import Link from 'next/link'


const Footer = () => (
   <>
      <footer className={styles.Footer}>
         <ul>
            <li>&copy; 2020</li>
            <li>Drew Parroccini</li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdTFnkesnCQZpx4iTrxU2-foTuVlMERR_gYL13JU3sCKX06mw/viewform" target="_blank">Client Support</a> | <Link href="/legal" as={`/legal`}>Legal</Link></li>
         </ul>
      </footer>
   </>
);

export default Footer;