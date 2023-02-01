import React from "react";
import { Itutoring } from '../types'

interface ReadOnlyRowProps {
    tutoring: Itutoring;
    handleEditClick: any;
    handleDeleteClick: any;
}

const ReadOnlyRow = ({ tutoring, handleEditClick, handleDeleteClick }: ReadOnlyRowProps) => {
  return (
    <tr>
      <td>{tutoring.title}</td>
      <td>{tutoring.description}</td>
      <td>{tutoring.published.toString()}</td>
      <td>{tutoring.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, tutoring)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(tutoring.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;