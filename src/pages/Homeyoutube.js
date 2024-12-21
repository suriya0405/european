import React, { useState } from 'react';
import '../css/youtube.css'


const videoList = [
    { id: 'sroPL4Bvj8k', title: 'Video 1' },
    { id: 'SvqCdpgDx2Q', title: 'Video 2' },
    { id: 'NjVqTAYhG64', title: 'Video 3' },
    { id: '0oB_Dj4eXmk', title: 'Video 4' },
    { id: 'FmjWibtP1X0', title: 'Video 5' },
    { id: '1NpjnzX28WM', title: 'Video 6' },
  ];

export const Homeyoutube = () => {
    const [selectedVideo, setSelectedVideo] = useState(videoList[0].id);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  };

      
  return (
    
            
      <div className="youtube-container">
      <div className="video-player">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-list">
       
        {videoList.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleVideoSelect(video.id)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={video.title}
              className="thumbnail"
            />
            
          </div>
        ))}
      </div>
    </div>
  )
}
