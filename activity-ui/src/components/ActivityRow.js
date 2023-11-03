import { MdDeleteForever, MdModeEdit } from 'react-icons/md'

export default function ActivityRow({ activity, onDelete, onEdit }) {
  return (
    <tr>
      <td>{activity.start}</td>
      <td>{activity.end}</td>
      <td>{activity.name}</td>
      <td>{activity.amount}</td>
      <td>{activity.color}</td>
      <td>{activity.memo}</td>
      <td><MdModeEdit className="icon" onClick={ () => onEdit(activity) }/></td>
      <td><MdDeleteForever className="icon" onClick={ () => onDelete(activity._id) }/></td>
    </tr>
  )
}
