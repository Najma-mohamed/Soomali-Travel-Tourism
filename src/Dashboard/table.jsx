import { Link } from "react-router-dom"
const TableBody = (props) =>{
    return <tbody>
    <tr  className="border-b-2  border-gray-100">
      <td className="p-3 border-r-2 border-l-2 border-b-2 border-t-2">{props.name}</td>
      <td className="p-3 border-r-2 border-l-2 border-b-2 border-t-2">{props.email}</td>
      <td className="p-3 border-r-2 border-l-2 border-b-2 border-t-2">{props.address}</td>
      <td className="p-3 border-r-2 border-l-2 border-b-2 border-t-2">{props.phone}</td>
      <td  className="px-6 py-2 text-center border-l-2 border-r-2 border-gray-300">
            <div>
            <Link to={`/updateContact/${props.id}`} ><i className="fa-regular fa-pen-to-square text-green-500 text-3xl"></i></Link> 
                <i className="fa-solid fatrash  text-red-500 pl-3 text-3xl"></i>
            </div>
        </td>
    </tr>
</tbody>
}
export default TableBody