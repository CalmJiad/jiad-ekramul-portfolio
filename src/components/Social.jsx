import {
  faGithub,
  faHashnode,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/social.module.css";

const Social = () => {
  return (
    <div className={styles.socials}>
      <ul data-aos="fade-up" className={styles.list}>
        <li>
          <a
            href="https://github.com/calmjiad"
            aria-label="Github"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faGithub}
              color="#fff"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/calmjiad/"
            aria-label="LinkedIn"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faLinkedin}
              color="#fff"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/EkramulHaque_Jiad"
            aria-label="Xing"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faXing}
              color="#fff"
            />
          </a>
        </li>
        <li className="pb-8">
          <a
            href="https://hellojiad.hashnode.dev/"
            aria-label="Hashnode"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faHashnode}
              color="#fff"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
