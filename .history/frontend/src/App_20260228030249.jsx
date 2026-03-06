import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    {/* User Layout */}
    <Route path='/' element={User}></Route>
    {/* Admin Layout */}
    <Route></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App