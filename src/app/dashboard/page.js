export default function DashboardPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Dashboard
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Welcome to your learning dashboard
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Total Courses</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>12</p>
        </div>
        
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Completed</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a', margin: 0 }}>8</p>
        </div>
        
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>In Progress</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>4</p>
        </div>
      </div>
    </div>
  )
}