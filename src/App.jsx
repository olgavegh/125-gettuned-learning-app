
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnboardingPage from './pages/OnboardingPage'
import CoursePage from './pages/CoursePage'
import StoryPage from './pages/StoryPage'

const router = createBrowserRouter([
  { path: '/', element: <OnboardingPage /> },
  { path: '/course', element: <CoursePage /> },
  { path: '/story', element: <StoryPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}



