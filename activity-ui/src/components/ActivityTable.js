import ActivityRow from '../components/ActivityRow.js'

export default function ActivityTable({ activities, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th> Start Time </th>
          <th> End Time </th>
          <th> Acitivity Name </th>
          <th> Amount </th>
          <th> Color </th>
          <th> Memo </th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, i) => <ActivityRow activity={activity} onDelete={onDelete} onEdit={onEdit} key={i}/> )}
      </tbody>
    </table>
  );
}
