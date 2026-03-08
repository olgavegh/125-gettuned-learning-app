import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnboardingPage from './pages/OnboardingPage'

const router = createBrowserRouter([
  { path: '/', element: <OnboardingPage /> },
  { path: '/course', element: <div>Course page coming soon</div> },
  { path: '/story', element: <div>Story page coming soon</div> },
])

export default function App() {
  return <RouterProvider router={router} />
}



