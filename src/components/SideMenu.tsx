import { ReactElement } from 'react'
import SideMenuItem from './SideMenuItem'
import {
    DashboardIcon,
    CalendarIcon,
    TasksIcon,
    SalesIcon,
    CustomersIcon,
    DispatchIcon,
    CustomerServiceIcon,
    MarketingIcon,
    AccountingIcon,
    ReportsIcon,
    SettingsIcon,
    LogoutIcon
} from '../icons'
import SideMenuToolTip from './SideMenuTooltip'

type MenuItem = {
    id: number
    text: string
    to: string
    icon: ReactElement
}

const iconProps = {
    className: 'size-12 opacity-90',
    fill: '#343C54',
} as const

const menuItems: MenuItem[] = [
    {
        text: 'Dashboard',
        icon: <DashboardIcon {...iconProps} />,
        to: 'dashboard',
        id: 1,
    },
    {
        text: 'Calendars',
        icon: <CalendarIcon {...iconProps} />,
        to: 'calendars',
        id: 2,
    },
    {
        text: 'Tasks',
        icon: <TasksIcon {...iconProps} />,
        to: 'tasks',
        id: 3,
    },
    {
        text: 'Sales',
        icon: <SalesIcon {...iconProps} />,
        to: 'sales',
        id: 4,
    },
    {
        text: 'Customers',
        icon: <CustomersIcon {...iconProps} />,
        to: 'customers',
        id: 5,
    },
    {
        text: 'Dispatch',
        icon: <DispatchIcon {...iconProps} />,
        to: 'dispatch',
        id: 6,
    },
    {
        text: 'Customer Service',
        icon: <CustomerServiceIcon {...iconProps} />,
        to: 'customer-service',
        id: 7,
    },
    {
        text: 'Marketing',
        icon: <MarketingIcon {...iconProps} />,
        to: 'marketing',
        id: 8,
    },
    {
        text: 'Accounting',
        icon: <AccountingIcon {...iconProps} />,
        to: 'accounting',
        id: 9,
    },
    {
        text: 'Reports',
        icon: <ReportsIcon {...iconProps} />,
        to: 'reports',
        id: 10,
    },
    // {
    //     text: 'Settings',
    //     icon: <SettingsIcon {...iconProps} />,
    //     to: 'settings',
    //     id: 11,
    // },
]

function SideMenu() {
    return (
        <div className="flex h-[calc(100vh-5rem)] w-25 flex-col justify-between border-e border-gray-300 bg-white">
            <div>
                <div>
                    <div className="px-2">
                        <ul className="space-y-2 border-b border-gray-300 py-4">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <SideMenuItem {...item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="py-4">
                    <a
                        href="#"
                        className="group relative flex justify-center rounded-sm bg-blue-50 px-2 py-1.5 text-blue-700"
                    >
                        <SettingsIcon {...iconProps} />
                        <SideMenuToolTip text="Settings" />
                    </a>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <a
                    href="#"
                    className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                >
                    <LogoutIcon { ...iconProps } />
                    <SideMenuToolTip text='Logout' />
                </a>
            </div>
        </div>
    )
}

export default SideMenu
