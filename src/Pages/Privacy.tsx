import React from 'react';
import PrivacyHero from '../PrivacyComponents/PrivacyHero';
import PrivacyContact from '../PrivacyComponents/PrivacyContact';
import PrivacyBody from '../PrivacyComponents/PrivacyBody';


const Privacy: React.FC = () => {
  return (
    <div>
      <div>
        <PrivacyHero/>
      </div>
      <div>
        <PrivacyBody/>
      </div>
      <div className='mt-24'>
        <PrivacyContact/>

      </div>
      
    </div>
  );
};

export default Privacy;
