import cn from "classnames";
import styles from "./Card.module.css";

export function Card({ as: Tag = "div", className, image: { imageUrl, imageAlt = "" }, text }) {
  className = cn(styles.card, className);

  return (
    <Tag className={className}>
      {imageUrl && <img className={styles.image} src={imageUrl} alt={imageAlt} />}
      {text && <span>{text}</span>}
    </Tag>
  );
}
