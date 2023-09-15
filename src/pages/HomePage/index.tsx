import { useState } from "react";
import styles from "./HomePage.module.scss";

type dataType = {
  title: string;
  status: "done" | "progress";
};

function HomePage() {
  const [data, setData] = useState<Array<dataType>>([]);

  return (
    <div className={styles.main}>
      <div></div>
    </div>
  );
}

export default HomePage;
