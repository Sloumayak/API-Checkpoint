import React from "react";

function UserList({ elt }) {
  console.log(elt);
  return (
    <div className="div-ul">
      <ul>
        <li >{elt.name}</li>
        <li>{elt.username}</li>
        <li>{elt.email}</li>
      </ul>
    </div>
  );
}

export default UserList;
