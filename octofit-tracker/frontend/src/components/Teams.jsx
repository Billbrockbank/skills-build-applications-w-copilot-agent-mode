import ResourceTable from './ResourceTable.jsx'

export default function Teams() {
  return <ResourceTable title="Teams" endpoint="teams" columns={[
    { label: 'Team', render: (team) => team.name },
    { label: 'Mascot', render: (team) => team.mascot },
    { label: 'Coach', render: (team) => team.coach },
    { label: 'Members', render: (team) => team.memberCount },
    { label: 'Points', render: (team) => team.totalPoints },
  ]} />
}