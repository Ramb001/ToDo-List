import { CheckCircle, CircleOutlined } from "@mui/icons-material";
import styles from "./ToDoItem.module.scss";
import { Checkbox } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type objType = {
  id: string;
  title: string;
  status: "done" | "progress";
};

type propsType = {
  object: objType;
  data: Array<objType>;
  setData: Dispatch<SetStateAction<Array<objType>>>;
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ToDoItem({ props }: { props: propsType }) {
  const [status, setStatus] = useState(props.object.status);

  function changeStatus(bool: boolean) {
    let temp = [...props.data];
    if (bool) {
      setStatus("done");
      temp.map((obj) => {
        if (obj.id === props.object.id) {
          obj.status = "done";
        }
      });
    } else {
      setStatus("progress");
      temp.map((obj) => {
        if (obj === props.object) {
          obj.status = "progress";
        }
      });
    }
    props.setData(temp);
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
        {props.object.title}
      </div>
    </div>
  );
}

export default ToDoItem;
