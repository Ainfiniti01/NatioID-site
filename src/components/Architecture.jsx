import React from 'react';

import { styles } from '../styles';

const Architecture = () => {
  return (
    <div className="mt-24">
      <h2 className={styles.sectionHeadText}>
        Architecture Overview
      </h2>

      <h3 className={`${styles.sectionSubText} mt-3`}>Core Layers</h3>
      <p>Identity & Credentials Engine</p>
      <p>Government Admin Console</p>
      <p>Citizen Mobile App</p>
      <p>Secure API Layer (future)</p>
      <p>Identity Ledger / Audit Log Model</p>
      <p>Service & Voting Modules</p>

      <h3 className={`${styles.sectionSubText} mt-3`}>System Flow (Simple)</h3>
      <p>Citizen App → Identity Registration → Verification →
        Service Access / Voting → Secure Audit Trail → Admin Console Dashboard</p>

      <h3 className={`${styles.sectionSubText} mt-3`}>Trust Architecture Diagram (Text Form)</h3>
      <p>Citizen App ↔ Identity Gateway ↔ Verification Engine
               ↕                   ↕
           Audit Layer ↔ Admin Console ↔ Election Module</p>
    </div>
  );
};

export default Architecture;
