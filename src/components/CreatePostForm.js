import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { Form, redirect, useActionData } from "react-router-dom";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const APIResponse = useActionData();

  const addPostHandler = () => {
    if (title.trim().length === 0 || description.trim().length === 0) {
      setFormIsValid(true);
    }

    if (title && description && image) {
      setFormIsValid(false);

      const reader = new FileReader();
      reader.onload = () => {
        let postData = {
          id: Math.random().toString(),
          title: title,
          description: description,
          image: reader.result,
        };

        const existingData =
          JSON.parse(localStorage.getItem("Post_Data")) || [];
        existingData.push(postData);
        localStorage.setItem("Post_Data", JSON.stringify(existingData));

        setTitle("");
        setDescription("");
        setImage(null);
      };
      reader.readAsDataURL(image);
    }
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  // const imageChangeHandler = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };
  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        // Do something with reader.result
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-full max-w-md">
          <Form
            method="post"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            {APIResponse && APIResponse.errors && (
              <ul>
                sdf
                {Object.values(APIResponse.errors).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>

            <Input
              type="text"
              name="title"
              id="title"
              label="Title"
              value={title}
              onChange={titleChangeHandler}
            />
            {formIsValid && title.trim().length <= 0 ? (
              <p className="text-red-600 mt-[-10px]">
                Please Enter Valid Title
              </p>
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
                value={description}
                onChange={descriptionChangeHandler}
              />
              {formIsValid && description.trim().length <= 0 ? (
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
            <Button type="button" onClick={addPostHandler}>
              Add Local Post
            </Button>
            <Button>Add Remote Post</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;

export async function action({ request }) {
  const data = await request.formData();

  const postData = {
    id: Math.random().toString(),
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 201) {
    console.log(response);
    return response;
  }
  if (!response.ok) {
    return redirect("/");
  }
}
