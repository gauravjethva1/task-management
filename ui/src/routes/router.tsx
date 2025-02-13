import { Route, Routes } from 'react-router-dom'
import { PAGE_TASK_MANAGEMENT } from '../constant/page'
import { TaskManagementPage } from '../pages'

const RoutesProvider = () => {
  return (
    <Routes>
      <Route
        path={PAGE_TASK_MANAGEMENT.path}
        element={<TaskManagementPage />}
      />
    </Routes>
  )
}

export default RoutesProvider
