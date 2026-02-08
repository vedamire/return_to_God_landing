import './Background.css'

function Background() {
  return (
    <div className="background">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/main_background_video.mp4" type="video/mp4" />
      </video>
      <div className="background-overlay"></div>
      <div className="background-vignette"></div>
    </div>
  )
}

export default Background
