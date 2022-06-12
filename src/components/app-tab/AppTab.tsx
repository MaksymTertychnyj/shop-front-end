import { AppTabProps } from "./AppTabProps";
import AppTabStyles from "./AppTabStyles";

const AppTab = (props: AppTabProps) => {
  return (
    <div
      className={AppTabStyles.container}
      onClick={() => {
        props.toggleFunc(props.index);
      }}
    >
      <div style={{ marginLeft: 7 }}>
        <img src={props.image} className={AppTabStyles.image} />
      </div>
      <div style={{ marginTop: 10 }}>
        <text className={AppTabStyles.textName}>{props.name}</text>
      </div>
    </div>
  );
};

export default AppTab;
