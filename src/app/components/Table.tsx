import { useEffect } from "react";
import { Advocate } from "../types";

type TableProps = {
  advocates: Advocate[];
};

function Table({ advocates }: TableProps) {
  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">First Name</th>
          <th className="border border-gray-300 p-2">Last Name</th>
          <th className="border border-gray-300 p-2">City</th>
          <th className="border border-gray-300 p-2">Degree</th>
          <th className="border border-gray-300 p-2">Specialties</th>
          <th className="border border-gray-300 p-2">Years of Experience</th>
          <th className="border border-gray-300 p-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => {
          return (
            <tr key={advocate.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">
                {advocate.firstName}
              </td>
              <td className="border border-gray-300 p-2">
                {advocate.lastName}
              </td>
              <td className="border border-gray-300 p-2">{advocate.city}</td>
              <td className="border border-gray-300 p-2">{advocate.degree}</td>
              <td className="border border-gray-300 p-2">
                {advocate.specialties.map((s, index) => (
                  <div key={index} className="mb-1">
                    {s}
                  </div>
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {advocate.yearsOfExperience}
              </td>
              <td className="border border-gray-300 p-2">
                {advocate.phoneNumber}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
