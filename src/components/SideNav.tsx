import { ReactElement } from 'react'
import SideNavButton from './SideNavButton'
import SalesIcon from '../icons/SalesIcon'
import CustomersIcon from '../icons/CustomersIcon'
import DashboardIcon from '../icons/DashboardIcon'
import CalendarIcon from '../icons/CalendarIcon'
import TasksIcon from '../icons/TasksIcon'
import DispatchIcon from '../icons/DispatchIcon'
import CustomerServiceIcon from '../icons/CustomerServiceIcon'
import MarketingIcon from '../icons/MarketingIcon'
import AccountingIcon from '../icons/AccountingIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ReportsIcon from '../icons/ReportsIcon'
import Tooltip from './Tooltip'

const iconProps: { size: string; fill: string } = {
    size: '50',
    fill: 'none',
}

const sideNavBtnList: { message: string, icon: ReactElement, id: number }[] = [
    {
        message: 'Dashboard',
        icon: <DashboardIcon {...iconProps} />,
        id: 1
    },
    {
        message: 'Calendars',
        icon: <CalendarIcon {...iconProps} />,
        id: 2
    },
    {
        message: 'Tasks',
        icon: <TasksIcon {...iconProps} />,
        id: 3
    },
    {
        message: 'Sales',
        icon: <SalesIcon {...iconProps} />,
        id: 4
    },
    {
        message: 'Customers',
        icon: <CustomersIcon {...iconProps} />,
        id: 5
    },
    {
        message: 'Dispatch',
        icon: <DispatchIcon {...iconProps} />,
        id: 6
    },
    {
        message: 'Customer Service',
        icon: <CustomerServiceIcon {...iconProps} />,
        id: 7
    },
    {
        message: 'Marketing',
        icon: <MarketingIcon {...iconProps} />,
        id: 8
    },
    {
        message: 'Accounting',
        icon: <AccountingIcon { ...iconProps } />,
        id: 9
    },
    {
        message: 'Reports',
        icon: <ReportsIcon { ...iconProps } />,
        id: 10
    },
    {
        message: 'Settings',
        icon: <SettingsIcon { ...iconProps } />,
        id: 11
    },
]

function SideNav() {
    return (
        <nav className='w-25'>
            <ul className="flex-col items-center justify-center">
                { sideNavBtnList.map(btn => (
                    <li className='m-5 lg:m-10' key={ btn.id }>
                        <Tooltip message={ btn.message }>
                            <SideNavButton icon={ btn.icon } />
                        </Tooltip>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default SideNav
