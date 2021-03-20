import cn from "classnames";
import styles from "./Container.module.css";

export function Container({ as: Tag = "div", className, width = "regular", children }) {
  className = cn(styles.container, styles[width], className);
  return <Tag className={className}>{children}</Tag>;
}
