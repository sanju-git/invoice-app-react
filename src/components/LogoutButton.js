import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  return (
    <i title="Log out">
      <FontAwesomeIcon
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
        style={{
          color: "#ff4343",
          height: 18,
          width: 18,
          cursor: "pointer",
          paddingTop: 5,
        }}
        icon={faRightFromBracket}
      />
    </i>
  );
};

export default LogOutButton;
