import React from 'react';

const SoundCloudPlayer = () => {
  return (
    <div>
      <iframe 
        width="100%" 
        height="166" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1646444277&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="SoundCloud Player"
      ></iframe>
      <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100' }}>
        <a href="https://soundcloud.com/asluna" title="As Stoic" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>As Stoic</a> · 
        <a href="https://soundcloud.com/asluna/stoics-endurance" title="Stoic's Endurance" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Stoic's Endurance</a>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
