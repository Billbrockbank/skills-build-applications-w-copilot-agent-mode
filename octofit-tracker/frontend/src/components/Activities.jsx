import ResourceTable from './ResourceTable.jsx'

export default function Activities() {
  return <ResourceTable title="Activities" endpoint="activities" columns={[
    { label: 'User', render: (activity) => activity.userEmail },
    { label: 'Activity', render: (activity) => activity.type },
    { label: 'Duration', render: (activity) => `${activity.durationMinutes} min` },
    { label: 'Calories', render: (activity) => activity.caloriesBurned },
    { label: 'Points', render: (activity) => activity.pointsEarned },
    { label: 'Logged', render: (activity) => new Date(activity.loggedAt).toLocaleDateString() },
  ]} />
}