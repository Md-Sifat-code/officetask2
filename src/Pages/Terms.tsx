import React from 'react';

import TermHero from '../TermComponents/TermHero';
import TermBody from '../TermComponents/TermBody';
import PrivacyContact from '../PrivacyComponents/PrivacyContact';

const Terms: React.FC = () => {
  return (
    <div>
      <div>
        <TermHero/>
      </div>
      <div>
        <TermBody/>
      </div>
      <div>
        <PrivacyContact/>
      </div>
    </div>
  );
};

export default Terms;
