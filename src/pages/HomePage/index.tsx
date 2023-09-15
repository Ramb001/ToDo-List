import { useState } from "react";
import styles from "./HomePage.module.scss";
import ToDoItem from "../../components/ToDoItem";
import DownBar from "../../components/DownBar";
import DownArrow from "../../assets/icons/DownArrow";

type objType = {
  id: string;
  title: string;
  status: "done" | "progress";
};

function HomePage() {
  const [data, setData] = useState<Array<objType>>([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"all" | "active" | "completed">("all");
  const [view, setView] = useState<boolean>(true);

  function addItem() {
    if (title.length !== 0) {
      let temp = [...data];
      temp.push({
        id: Math.random().toString(16).slice(2),
        title: title,
        status: "progress",
      });
      setData(temp);
      setTitle("");
    }
  }

  function addItemOnEnter(key: string) {
    if (title.length !== 0 && key === "Enter") {
      let temp = [...data];
      temp.push({
        id: Math.random().toString(16).slice(2),
        title: title,
        status: "progress",
      });
      setData(temp);
      setTitle("");
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.inputBox}>
          <div onClick={() => setView(!view)} className={styles.arrowBox}>
            <DownArrow />
          </div>
          <input
            type="text"
            placeholder="What needs to be done?"
            className={styles.input}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onBlur={addItem}
            onKeyDown={(e) => {
              addItemOnEnter(e.key);
            }}
          />
        </div>
        {data.map((obj: objType, i) => {
          if (
            view &&
            ((status === "active" && obj.status == "progress") ||
              (status === "completed" && obj.status == "done") ||
              status === "all")
          ) {
            return (
              <ToDoItem
                props={{ object: obj, data: data, setData: setData }}
                key={i}
              />
            );
          }
        })}
        <DownBar
          props={{
            data: data,
            setData: setData,
            status: status,
            setStatus: setStatus,
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
