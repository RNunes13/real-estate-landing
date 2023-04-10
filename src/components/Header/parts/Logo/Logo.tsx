import Image from "next/image";
import styles from "./Logo.module.scss";
import logo from "@/public/img/logo.png";

export const Logo: React.FC = () => {
  return (
    <figure className={styles.headerLogo}>
      <Image
        src={logo}
        alt="home-finder-logo"
        className={styles.headerLogoImage}
      />
      <figcaption className={styles.headerLogoCaption}>Home Finder</figcaption>
    </figure>
  );
};
