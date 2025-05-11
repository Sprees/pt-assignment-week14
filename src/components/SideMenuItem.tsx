import { ReactElement } from 'react'
import { NavLink } from 'react-router'
import SideMenuToolTip from './SideMenuTooltip'

type SideMenuItemProps = {
    icon: ReactElement
    to: string
    text: string
}

function SideMenuItem({ icon, to, text }: SideMenuItemProps) {
    return (
        <NavLink
            to={to}
            className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 aria-[current=page]:bg-blue-50"
        >
            {icon}
            <SideMenuToolTip text={text} />
        </NavLink>
    )
}

export default SideMenuItem
