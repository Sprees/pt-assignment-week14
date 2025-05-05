import { ReactElement } from "react";

function SideNavButton({ icon }: { icon: ReactElement }) {
    return (
        <button className='cursor-pointer' onClick={() => alert('clicked!')}>
            { icon }
        </button>
    )
}

export default SideNavButton