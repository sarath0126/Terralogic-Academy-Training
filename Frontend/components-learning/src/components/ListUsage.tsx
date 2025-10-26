import React from "react";

const ListUsage = () => {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Pine Apple" },
  ];
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListUsage;
