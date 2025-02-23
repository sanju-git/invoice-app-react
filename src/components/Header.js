import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import LogOutButton from "./LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ activeSection, handlePopulateData }) => {
  return (
    <div className="bg-white p-4 flex justify-between  sticky top-0 items-center header">
      <div>
        <h2 className="text-xl font-semibold">Create new Invoice</h2>
      </div>
      <div className="flex space-x-6 items-center">
        <div
          className={`px-4 py-2 font-semibold cursor-pointer${
            activeSection === "vendor"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          Vendor Details
        </div>
        <div
          className={`px-4 py-2 font-semibold ${
            activeSection === "invoice"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          Invoice Details
        </div>
        <div
          className={`px-4 py-2 font-semibold ${
            activeSection === "comments"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          Comments
        </div>

        <button
          onClick={handlePopulateData}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded"
        >
          <FontAwesomeIcon
            style={{
              color: "#fff",
              height: 18,
              width: 18,
              cursor: "pointer",
            }}
            icon={faHatWizard}
          />
          &nbsp; Auto Populate Data
        </button>

        <LogOutButton />
      </div>
    </div>
  );
};

export default Header;
