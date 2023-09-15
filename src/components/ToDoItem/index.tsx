import { CheckCircle, CircleOutlined } from "@mui/icons-material";
import styles from "./ToDoItem.module.scss";
import { Checkbox } from "@mui/material";
import { useState } from "react";

type objType = {
  title: string;
  status: "done" | "progress";
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ToDoItem({ props }: { props: objType }) {
  const [status, setStatus] = useState(props.status);

  function changeStatus(bool: boolean) {
    if (bool) {
      setStatus("done");
      props.status = "done";
    } else {
      setStatus("progress");
      props.status = "progress";
    }
  }

  return (
    <div className={styles.box}>
      <Checkbox
        {...label}
        checked={status === "done" ? true : false}
        color="success"
        icon={<CircleOutlined className={styles.icon} />}
        checkedIcon={<CheckCircle className={styles.icon} />}
        onChange={(e) => {
          changeStatus(e.target.checked);
        }}
      />
      <div
        style={{
          textDecoration: status === "done" ? "line-through" : "",
          color: status === "done" ? "gray" : "black",
        }}
      >
        {props.title}
      </div>
    </div>
  );
}

export default ToDoItem;
