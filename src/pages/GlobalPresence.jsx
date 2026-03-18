import React, { useEffect } from 'react';
import GlobalPresenceSection from '../components/GlobalPresenceSection';

export default function GlobalPresence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="global-presence-page" style={{ background: '#000' }}>
      <GlobalPresenceSection />
    </div>
  );
}
