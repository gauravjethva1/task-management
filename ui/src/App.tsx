import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { RoutesProvider } from './routes'
import TaskProvider from './context/taskContextProvider'

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <RoutesProvider />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 1500,
            style: {
              borderRadius: '4px',
            },
          }}
        />
      </TaskProvider>
    </Router>
  )
}

export default App
