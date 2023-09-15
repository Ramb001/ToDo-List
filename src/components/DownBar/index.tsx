import { SetStateAction, Dispatch } from "react";
import styles from "./DownBar.module.scss";

type objType = {
  title: string;
  status: "done" | "progress";
};

type propsType = {
  data: Array<objType>;
  setData: Dispatch<SetStateAction<Array<objType>>>;
  status: "all" | "active" | "completed";
  setStatus: Dispatch<SetStateAction<"all" | "active" | "completed">>;
};

function DownBar({ props }: { props: propsType }) {
  let count = 0;
  props.data.map((obj) => {
    if (obj.status === "done") {
      count++;
    }
  });

  function deleteCompletedItems() {
    let temp = [...props.data];
    temp = temp.filter((obj) => obj.status === "progress");
    props.setData(temp);
  }

  return (
    <div className={styles.box}>
      <div>{props.data.length - count} items left</div>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            props.setStatus("all");
          }}
          style={{
            border: props.status === "all" ? "0.5px solid gray" : "none",
          }}
        >
          All
        </button>
        <button
          className={styles.button}
          onClick={() => {
            props.setStatus("active");
          }}
          style={{
            border: props.status === "active" ? "0.5px solid gray" : "none",
          }}
        >
          Active
        </button>
        <button
          className={styles.button}
          onClick={() => {
            props.setStatus("completed");
          }}
          style={{
            border: props.status === "completed" ? "0.5px solid gray" : "none",
          }}
        >
          Completed
        </button>
      </div>
      <button
        className={styles.button}
        style={{
          border: "0.5px solid gray",
        }}
        onClick={deleteCompletedItems}
      >
        Clear completed
      </button>
    </div>
  );
}

export default DownBar;
