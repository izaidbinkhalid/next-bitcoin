import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Discord from '@/assests/icons/Discord';
import Facebook from '@/assests/icons/Facebook';
import Twitter from '@/assests/icons/Twitter';

export default function Footer() {
  return (
    <footer className='footer grid grid-cols-12 gap-5 md:gap-0'>
      <div className="flex justify-center md:justify-start col-span-12 md:col-span-2">
        <span className="logoText flex text-5xl mb-2">
          CoinFlip
        </span>
      </div>
      <div className="flex justify-center md:justify-start col-span-12 md:col-span-4">
        <span className='footerText flex items-center'>
          © 2022 coinflip.com | All Rights Reserved.
        </span>
      </div>
      <div className="flex justify-center md:justify-start col-span-12 md:col-span-4">
        <span className='footerText flex items-center'>
          1 SOL = $38.89
        </span>
      </div>
      <div className="flex justify-center md:justify-start col-span-12 md:col-span-2">
        <div className="social-icon-cn flex justify-evenly">
          <UnstyledLink href='https://www.twitter.com' openNewTab={true}>
            <span><Twitter className='pb-1 mx-2' /></span>
          </UnstyledLink>
          <UnstyledLink href='https://www.discord.com' openNewTab={true}>
            <span><Discord className='pb-1 mx-2' /></span>
          </UnstyledLink>
          <UnstyledLink href='https://www.facebook.com' openNewTab={true}>
            <span><Facebook className='pb-1 mx-2' /></span>
          </UnstyledLink>
        </div>
      </div>
    </footer>
  );
}
