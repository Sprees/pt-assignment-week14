import { useState } from 'react'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

// TOP LEFT
// Title of current tab - Job Calendar / Office Calendar
// Month selection - April 2025 < >
// Tabs - Job Calendar / Office Calendar

// TOP RIGHT
// Filters - Office selection / Job Types / Distances / Summary
// Total Booked Moves: NUMBER
// import MonthCalendar from "../../components/Calendar/MonthCalendar"

function Calendars() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [currentCalendarType, setCurrentCalendarType] = useState('Job Calendar')
    return (
        <div>
            <div>{currentCalendarType}</div>
            <div>
                <div className='inline-block w-20'>
                    { currentDate.toLocaleString('en-us', { month: 'long' }) }
                </div>
                <div className='inline-block'>
                    <button className='cursor-pointer' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1,  1))}>{ '<' }</button>
                    <button className='cursor-pointer' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1,  1))}>{ '>' }</button>
                </div>
            </div>
            <div className="flex items-start w-[calc(100vw-6.25rem)]">
                <NavLink
                    to="job"
                    className="px-5 py-1 border-b-2 dark:border-gray-300 aria-[current=page]:border-blue-600 aria-[current=page]:text-blue-600"
                    onClick={() => setCurrentCalendarType('Job Calendar')}
                >
                    Job Calendar
                </NavLink>
                <NavLink
                    to="office"
                    className="px-5 py-1 border-b-2 dark:border-gray-300 aria-[current=page]:border-blue-600 aria-[current=page]:text-blue-600"
                    onClick={() => setCurrentCalendarType('Office Calendar')}
                >
                    Office Calendar
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Calendars
