import ResourceTable from './ResourceTable.jsx'

export default function Users() {
  return <ResourceTable title="Users" endpoint="users" columns={[
    { label: 'Name', render: (user) => user.name },
    { label: 'Email', render: (user) => user.email },
    { label: 'Role', render: (user) => user.role },
    { label: 'Grade', render: (user) => user.grade },
    { label: 'Team', render: (user) => user.team },
    { label: 'Points', render: (user) => user.points },
  ]} />
}