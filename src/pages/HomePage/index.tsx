import { useState } from "react";
import styles from "./HomePage.module.scss";
import ToDoItem from "../../components/ToDoItem";

type objType = {
  title: string;
  status: "done" | "progress";
};

function HomePage() {
  const [data, setData] = useState<Array<objType>>([]);
  const [title, setTitle] = useState("");

  function addItem() {
    if (title.length !== 0) {
      let temp = [...data];
      temp.push({ title: title, status: "progress" });
      setData(temp);
      setTitle("");
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        <h1 className={styles.title}>todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          className={styles.input}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={addItem}
        />
        {data.map((obj: objType, i) => {
          return <ToDoItem props={obj} key={i} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
