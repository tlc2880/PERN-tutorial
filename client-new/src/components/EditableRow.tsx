import React from "react";

interface EditableRowProps {
    editFormData: any;
    handleEditFormChange: any;
    handleCancelClick: any;
}

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: EditableRowProps) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a description..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter published (true/false)"
          name="published"
          value={editFormData.published}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;