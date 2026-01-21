function App() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>BillCured Design System Test</h1>
      <p className="text-muted">Verifying all styles are working correctly.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>This is body text. <a href="#">This is a link</a>.</p>
        <p className="text-muted">This is muted text.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-primary btn-large">Large Primary</button>
          <button className="btn btn-secondary">Secondary Button</button>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Colors</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#2B6B7C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Primary</div>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#FA8072', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>CTA</div>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#E86B5D', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>CTA Hover</div>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#C5544A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>CTA Active</div>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Card</h2>
        <div className="card">
          <h3>Card Title</h3>
          <p className="mb-0">This is a card component with proper styling.</p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Form Elements</h2>
        <div style={{ maxWidth: '400px' }}>
          <input type="text" placeholder="Text input" style={{ marginBottom: '1rem' }} />
          <input type="email" placeholder="Email input" className="input-error" />
          <p className="error" style={{ fontSize: '14px', marginTop: '4px' }}>This field has an error</p>
        </div>
      </section>
    </div>
  )
}

export default App
