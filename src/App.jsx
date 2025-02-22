import './App.css'
import PowerBIEmbed from './components/PowerBIEmbed'
import ReportForm from './components/ReportForm'

function App() {
  return (
    <div className="min-h-screen  flex flex-col items-center py-10">
    <h1 className="text-2xl font-bold mb-6">Custom Report Generator</h1>
    <ReportForm />
    <PowerBIEmbed />
  </div>
  )
}

export default App
