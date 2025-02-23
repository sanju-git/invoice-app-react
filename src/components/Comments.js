import { faComment, faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comments = ({ formData, onSubmit, handleChange }) => {
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
          icon={faMessage}
        />
        &nbsp;&nbsp;&nbsp;
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
      </div>

      <label className="block mb-2">Additional Notes</label>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        placeholder="Add a comment and use @name to tag someone"
      />

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 rounded text-white bg-green-500"
        >
          Submit & New
        </button>
      </div>
    </div>
  );
};

export default Comments;
