import Nested from './components/Nested'

export default function App() {
  const items = ['One', 'Two', 'Three']

  return (
    <>
      <div className="container">
        <h1>Hello Custom Renderer</h1>
        <Nested />
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
