import { Advocate } from "../types";

type TableProps = {
  advocates: Advocate[];
};

function Table({ advocates }: TableProps) {
  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");

    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return phoneNumber;
  };
  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-emerald-700 text-white">
          <th className="border border-gray-300 p-2">First Name</th>
          <th className="border border-gray-300 p-2">Last Name</th>
          <th className="border border-gray-300 p-2">City</th>
          <th className="border border-gray-300 p-2">Degree</th>
          <th className="border border-gray-300 p-2 w-48">Specialties</th>
          <th className="border border-gray-300 p-2">Years of Experience</th>
          <th className="border border-gray-300 p-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => {
          return (
            <tr key={advocate.id} className="hover:bg-emerald-50">
              <td className="border border-gray-300 p-2">
                {advocate.firstName}
              </td>
              <td className="border border-gray-300 p-2">
                {advocate.lastName}
              </td>
              <td className="border border-gray-300 p-2">{advocate.city}</td>
              <td className="border border-gray-300 p-2">{advocate.degree}</td>
              <td className="border border-gray-300 p-2">
                <ul className="flex flex-row flex-wrap text-xs gap-1 max-h-32 overflow-hidden hover:overflow-y-auto">
                  {advocate.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className=" bg-emerald-200 p-1 rounded-md"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-2">
                {advocate.yearsOfExperience} year
                {Number(advocate.yearsOfExperience) > 1 ? "s" : ""}
              </td>
              <td className="border border-gray-300 p-2">
                {formatPhoneNumber(advocate.phoneNumber)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
