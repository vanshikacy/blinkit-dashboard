import './App.css'
import KPI from './components/KPI'
import OrderPerDay from './components/OrdersPerDay'
import { getAvgOrderValue, getCancellationRate, getTotalOrders } from './services/api'

function App() {

  return (
    <div className='w-full h-auto flex flex-col p-10 gap-4'>
      <KPI title={"Total Orders"} apifunction={getTotalOrders()}/>
      <KPI title={"Average Order Value"} apifunction={getAvgOrderValue()} />
      <KPI title={"Cancellation Rate"} apifunction={getCancellationRate()} />
      <OrderPerDay />
    </div>
  )
}

export default App
