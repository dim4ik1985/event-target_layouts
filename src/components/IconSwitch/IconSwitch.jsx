import "./iconSwitch.css";

export const IconSwitch = (props) => {
  return (
    <span className={"material-icons"} onClick={props.onSwitch}>
      {props.icon}
    </span>
  );
};
