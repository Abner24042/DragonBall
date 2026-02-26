import './App.css'
import Card from "./components/card"
import { usePersonas } from "./hooks"

function App() {
  const {personas} = usePersonas()

  return (
   <>
   <h1>DRAGON BALL</h1>
   <div className="cards-grid">
     {personas.map(p => (
       <Card 
       key={p.id}
        name={p.name}
        image={p.image}
        ki={p.ki}
        maxki={p.maxki}
        race={p.race}
        />
     ))}
   </div>
   </>
  )
}

export default App