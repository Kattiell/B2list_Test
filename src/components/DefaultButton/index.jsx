import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function DefaultButton({
  title,
  backgroundColorButton,
  colorText,
  paddingButton,
  widthButton,
  fontButton,
  href,
  borderButton,
  heightBuiton
}) {
  return (
    <Link to={href}>
      <div
        className={styles.container}
        style={{
          backgroundColor: backgroundColorButton,
          padding: paddingButton,
          width: widthButton,
          fontWeight: fontButton,
          borderRadius: borderButton,
          height: heightBuiton,
        }}
      >
        <p style={{ color: colorText }}>{title}</p>
      </div>
    </Link>
  );
}
