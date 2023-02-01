import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import { Itutoring } from './types'

const App = () => {
  const [tutorings, setTutorings] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    description: "",
    published: false,
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    published: false,
    email: "",
  });

  const [editTutoringId, setEditTutoringId] = useState<number | null>(null);

  const handleAddFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
    console.log('EditFormChange:', tutorings);
  };

  const handleAddFormSubmit = (event: any) => {
    event.preventDefault();

    const newTutoring: any = {
      id: nanoid(),
      title: addFormData.title,
      description: addFormData.description,
      published: addFormData.published,
      email: addFormData.email,
    };

    const newTutorings = [...tutorings, newTutoring];
    setTutorings(newTutorings);
  };

  const handleEditFormSubmit = (event: any) => {
    event.preventDefault();

    const editedTutoring = {
      id: editTutoringId,
      title: editFormData.title,
      description: editFormData.description,
      published: editFormData.published,
      email: editFormData.email,
    };

    const newTutorings: any = [...tutorings];

    const index = tutorings.findIndex((tutoring) => tutoring.id === editTutoringId);

    newTutorings[index] = editedTutoring;

    setTutorings(newTutorings);
    setEditTutoringId(null);
    console.log('EditFormSubmit:', tutorings);
  };

  const handleEditClick = (event: any, tutoring: Itutoring) => {
    event.preventDefault();
    setEditTutoringId(tutoring.id);

    const formValues = {
      title: tutoring.title,
      description: tutoring.description,
      published: tutoring.published,
      email: tutoring.email,
    };

    setEditFormData(formValues);
    console.log('EditClick: ',tutorings);
  };

  const handleCancelClick = () => {
    setEditTutoringId(null);
  };

  const handleDeleteClick = (tutoringId: number) => {
    const newTutorings = [...tutorings];

    const index = tutorings.findIndex((tutoring) => tutoring.id === tutoringId);

    newTutorings.splice(index, 1);

    setTutorings(newTutorings);
    console.log('DeleteClick:', tutorings);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Published</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorings.map((tutoring) => (
              <Fragment key={tutoring.id}>
                {editTutoringId === tutoring.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    tutoring={tutoring}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Tutoring</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name= "title"
          required
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required
          placeholder="Enter an description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="published"
          required
          placeholder="Enter published (true/false)"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
