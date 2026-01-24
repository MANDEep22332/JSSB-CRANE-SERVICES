import React, { useState } from "react";
import "./VideoSection.css";

function VideoSection() {
  // Mock data for your videos
  const [activeVideo, setActiveVideo] = useState({
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your repair video
    title: "Full Hydraulic System Overhaul",
  });

  const playlist = [
    { id: 1, title: "Hydra Crane Engine Repair", url: "URL_1", duration: "05:20" },
    { id: 2, title: "Precision Gear Fitting", url: "URL_2", duration: "03:45" },
    { id: 3, title: "Pipe Welding & Pressure Test", url: "URL_3", duration: "04:10" },
  ];

  return (
    <section className="video-section py-5 bg-dark text-white">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold">WORK IN <span className="text-warning">ACTION</span></h2>
          <p className="text-secondary">Watch our expert technicians at work across Haryana.</p>
        </div>

        <div className="row g-4">
          {/* Main Video Player */}
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden border border-secondary">
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                allowFullScreen
              ></iframe>
            </div>
            <h4 className="mt-3 fw-bold">{activeVideo.title}</h4>
          </div>

          {/* Video Playlist Sidebar */}
          <div className="col-lg-4">
            <div className="playlist-container p-3 rounded bg-secondary bg-opacity-10 border border-secondary">
              <h6 className="text-uppercase fw-bold mb-3 text-warning">Repair Gallery</h6>
              <div className="d-flex flex-column gap-3">
                {playlist.map((video) => (
                  <div 
                    key={video.id} 
                    className="playlist-item p-2 rounded d-flex align-items-center gap-3"
                    onClick={() => setActiveVideo({ url: video.url, title: video.title })}
                  >
                    <div className="play-icon">▶</div>
                    <div>
                      <p className="mb-0 small fw-bold text-white">{video.title}</p>
                      <span className="text-muted extra-small">{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;