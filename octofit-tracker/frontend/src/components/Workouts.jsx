import ResourceTable from './ResourceTable.jsx'

export default function Workouts() {
  return <ResourceTable title="Workouts" endpoint="workouts" columns={[
    { label: 'Workout', render: (workout) => workout.title },
    { label: 'Focus', render: (workout) => workout.focusArea },
    { label: 'Difficulty', render: (workout) => workout.difficulty },
    { label: 'Duration', render: (workout) => `${workout.durationMinutes} min` },
    { label: 'Recommended for', render: (workout) => workout.recommendedFor?.join(', ') || 'All athletes' },
  ]} />
}