import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff, Translate } from "lucide-react"; // Import Translate icon

import styles from "@/component/Bottom/index.module.css";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom, toggleTranslate } = props; // Add toggleTranslate to props

  return (
    <div className={styles.bottomMenu}>
      {muted ? (
        <MicOff
          className={cx(styles.icon, styles.active)}
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic className={styles.icon} size={55} onClick={toggleAudio} />
      )}
      {playing ? (
        <Video className={styles.icon} size={55} onClick={toggleVideo} />
      ) : (
        <VideoOff
          className={cx(styles.icon, styles.active)}
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff size={55} className={cx(styles.icon)} onClick={leaveRoom} />
      
      {/* Real-time translation button */}
      <Translate
        size={55}
        className={cx(styles.icon)}
        onClick={toggleTranslate} // Call the toggleTranslate function when clicked
      />
    </div>
  );
};

export default Bottom;