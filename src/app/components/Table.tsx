import { useEffect } from "react";
import { Advocate } from "../types";

type TableProps = {
  advocates: Advocate[];
};

function Table({ advocates }: TableProps) {
  // useEffect(() => {
  //   console.log("fetching advocates...");
  //   fetch("/api/advocates").then((response) => {
  //     response.json().then((jsonResponse) => {
  //       setAdvocates(jsonResponse.data);
  //       setFilteredAdvocates(jsonResponse.data);
  //     });
  //   });
  // }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => {
          return (
            <tr key={advocate.id}>
              <td>{advocate.firstName}</td>
              <td>{advocate.lastName}</td>
              <td>{advocate.city}</td>
              <td>{advocate.degree}</td>
              <td>
                {advocate.specialties.map((s) => (
                  <div>{s}</div>
                ))}
              </td>
              <td>{advocate.yearsOfExperience}</td>
              <td>{advocate.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
