import React, { useState } from "react";
import Input from "./Input";

const EditPopUp = (props) => {
  const [updateTitle, setUpdateTitle] = useState(props.PostData.title);
  const [updateDescription, setUpdateDescription] = useState(props.PostData.description);
  const [updateImage, setUpdateImage] = useState(props.PostData.image);
  const [formIsValid, setFormIsValid] = useState(false);

  const updateDataHandler = () => {
    if (updateTitle.trim().length === 0 || updateDescription.trim().length === 0) {
      setFormIsValid(true);
    }

    if (updateTitle && updateDescription && updateImage) {
      setFormIsValid(false);

      const reader = new FileReader();
      reader.onload = () => {
      let updatedData = {
        title: updateTitle,
        description: updateDescription,
        image: reader.result,
      };
      props.onUpdate(updatedData);
    };
    reader.readAsDataURL(updateImage);
    
    }
  };
  const titleChangeHandler = (event) => {
    setUpdateTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setUpdateDescription(event.target.value);
  };
 

  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUpdateImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        // Do something with reader.result
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Post</h2>

        <Input
          type="text"
          name="title"
          id="title"
          label="Title"
          value={updateTitle}
          onChange={titleChangeHandler}
        />
        {formIsValid && updateTitle.trim().length <= 0 ? (
          <p className="text-red-600 mt-[-10px]">Please Enter Valid Title</p>
        ) : (
          ""
        )}
        <div className="mb-2">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="border rounded w-full py-2 px-3"
            name="description"
            id="description"
            value={updateDescription}
            onChange={descriptionChangeHandler}
          />
          {formIsValid && updateDescription.trim().length <= 0 ? (
            <p className="text-red-600">Please Enter Valid Description</p>
          ) : (
            ""
          )}
        </div>

        <Input
          type="file"
          name="image"
          id="image"
          label="Image"
          onChange={imageChangeHandler}
        />
        <div className="flex justify-center mt-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            onClick={updateDataHandler}
          >
            Update
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-md"
            onClick={props.onConfirm}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;
