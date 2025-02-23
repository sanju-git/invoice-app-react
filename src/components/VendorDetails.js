import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const VendorDetails = ({ formData, errors, handleChange }) => {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <FontAwesomeIcon
          style={{
            color: "#4683c1",
            height: 18,
            width: 18,
            cursor: "hover",
            paddingTop: 5,
          }}
          icon={faBuilding}
        />
        &nbsp;&nbsp;&nbsp;
        <h2 className="text-xl font-semibold mb-2">Vendor Details</h2>
      </div>

      <label className="block mb-2">
        Vendor Name<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="vendorName"
        value={formData.vendorName}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        placeholder="Enter Vendor Name"
      />
      {errors?.vendorName && (
        <div className="text-red-500 text-sm">{errors.vendorName}</div>
      )}
    </div>
  );
};

export default VendorDetails;
