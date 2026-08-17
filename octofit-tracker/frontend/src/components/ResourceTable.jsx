import { useEffect, useState } from 'react'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : '/api'

function getRecords(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.items)) return payload.items
  return []
}

export default function ResourceTable({ title, endpoint, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecords() {
      try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}/`, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
        setRecords(getRecords(await response.json()))
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus(error.message)
      }
    }

    loadRecords()
    return () => controller.abort()
  }, [endpoint])

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1>{title}</h1>
        <span className="text-secondary">{status === 'ready' ? `${records.length} records` : ''}</span>
      </div>
      {status === 'loading' && <p>Loading {title.toLowerCase()}...</p>}
      {status !== 'loading' && status !== 'ready' && <div className="alert alert-danger">Unable to load {title.toLowerCase()}: {status}</div>}
      {status === 'ready' && (
        <div className="table-responsive bg-white border rounded-2">
          <table className="table table-hover mb-0">
            <thead><tr>{columns.map((column) => <th key={column.label}>{column.label}</th>)}</tr></thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id ?? `${endpoint}-${index}`}>
                  {columns.map((column) => <td key={column.label}>{column.render(record)}</td>)}
                </tr>
              ))}
              {!records.length && <tr><td colSpan={columns.length} className="text-center text-secondary py-4">No {title.toLowerCase()} found.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}