import React from 'react';

const MapClone = () => {
  return (
    <div>
      <iframe
        src="https://my.atlist.com/map/09c5626b-9f87-4e39-b40d-1e0b10d36eba/?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="825px"
        loading="lazy"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        id="atlist-embed"
        title="Custom Map"
        style={{
          border: 'none',
          width: '100%',
          height: '825px',
        }}
      ></iframe>

      {/* Mobile CSS */}
      <style>{`
        @media only screen and (max-width: 640px) {
          #atlist-embed {
            width: 100%;
            height: 825px;
          }
        }
      `}</style>
    </div>
  );
};

export default MapClone;
