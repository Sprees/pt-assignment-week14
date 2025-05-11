import { createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Dashboard, Calendars, Customers, CustomerService, Dispatch, Marketing, Reports, Sales, Settings, Tasks, Accounting } from './views'
import MonthCalendar from './components/Calendar/MonthCalendar.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        { index: true, Component: Dashboard },
        { path: "dashboard", Component: Dashboard },
        { path: 'calendars', 
          Component: Calendars,
          children: [
            { index: true, Component: MonthCalendar },
            { path: 'job', Component: MonthCalendar },
            { path: 'office', Component: MonthCalendar }
          ]
        },
        { path: 'sales', Component: Sales },
        { path: 'dispatch', Component: Dispatch },
        { path: 'customers', Component: Customers },
        { path: 'customer-service', Component: CustomerService },
        { path: 'tasks', Component: Tasks },
        { path: 'marketing', Component: Marketing },
        { path: 'settings', Component: Settings },
        { path: 'reports', Component: Reports },
        { path: 'accounting', Component: Accounting },
      ],
    },
  ]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
