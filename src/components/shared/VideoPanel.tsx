const VideoPanel = () => {
  return (
    <div className="spotlight__panel">
      <video className="spotlight__vid" autoPlay loop>
        <source src="vid/memoreum.webm" type="video/webm" />
        <source src="vid/memoreum.mp4" type="video/mp4" />
        Your browser doesn't support HTML video.
      </video>

      <div className="spotlight__overlay">
        <div className="spotlight__overlay-inner">
          <img
            className="spotlight__img"
            src="img/spotlight/memoreum.jpg"
            alt="Memoreum game front cover art"
          />
          <div>
            <h3 className="margin-bottom-sm heading-tertiary">Memoreum</h3>
            <p className="text-body">
              Battle across the galaxy in this multiplayer space shooter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
