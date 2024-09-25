import React from 'react';

const Sidebar = (props) => {
  const toggleSidebar = () => {
    props.setOpen(!props.open);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform z-20 ${
          props.open ? 'translate-x-0' : '-translate-x-full'
        } w-64 ${props.open ? 'w-full' : 'md:w-64 lg:w-64'}`}
      >
        {/* Sidebar content container with scroll */}
        <div className="p-4 max-h-screen overflow-y-auto">
          <h2 className="text-lg font-bold">Sidebar</h2>
          <ul className="mt-4">
            <li className="p-2 hover:bg-gray-600">Inbox</li>
            <li className="p-2 hover:bg-gray-600">Starred</li>
            <li className="p-2 hover:bg-gray-600">Send Email</li>
            <li className="p-2 hover:bg-gray-600">Drafts</li>
            {/* Add more items here */}
            <li className="p-2 hover:bg-gray-600">More Item 1</li>
            <li className="p-2 hover:bg-gray-600">More Item 2</li>
            <li className="p-2 hover:bg-gray-600">More Item 3</li>
            <li className="p-2 hover:bg-gray-600">More Item 4</li>
            <li className="p-2 hover:bg-gray-600">More Item 5</li>
            <li className="p-2 hover:bg-gray-600">More Item 6</li>
            <li className="p-2 hover:bg-gray-600">More Item 7</li>
            <li className="p-2 hover:bg-gray-600">More Item 8</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
            <li className="p-2 hover:bg-gray-600">More Item 9</li>
          </ul>
        </div>
      </div>

      {/* Overlay (for all screen sizes to cover the rest of the page) */}
      {props.open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
