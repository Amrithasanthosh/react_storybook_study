import { ClickableIconPropsType } from "../../Models/Components/ClickableIconsModel";

const ClickableIcon: React.FC<ClickableIconPropsType> = ({
  onClick,
  icon: Icon,
}) => (
  <div
    onClick={onClick}
    style={{ cursor: "pointer" }}
    data-testid="icon-button"
  >
    {Icon}
  </div>
);

export default ClickableIcon;
