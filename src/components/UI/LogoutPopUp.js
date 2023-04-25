import React from "react";

const LogoutPopUp = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg p-5">
        <p className="text-2xl font-bold mb-6 text-center">Are You Sure You Want To Logout?</p>
        <div className="flex justify-center mt-5">

          <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={props.onConfirm}>
            Logout
          </button>
          <button className="px-4 py-2 bg-gray-400 text-white rounded-md" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopUp;
