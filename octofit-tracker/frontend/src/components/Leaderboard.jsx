import ResourceTable from './ResourceTable.jsx'

export default function Leaderboard() {
  return <ResourceTable title="Leaderboard" endpoint="leaderboard" columns={[
    { label: 'Rank', render: (entry) => entry.rank },
    { label: 'Athlete', render: (entry) => entry.displayName },
    { label: 'Team', render: (entry) => entry.team },
    { label: 'Points', render: (entry) => entry.points },
  ]} />
}