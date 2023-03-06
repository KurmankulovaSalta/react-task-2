import React from "react";
import "./Section.css";

const Section = (props) => {
  console.log(props);
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="tr">
            <td className="tr">Name</td>
            <td className="tr">LastName</td>
            <td className="tr">Age</td>
            <td className="tr">Id</td>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr className="tr">
              <td className="td">{item.name}</td>
              <td className="td">{item.lastName}</td>
              <td className="td">{item.age}</td>
              <td className="td">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
