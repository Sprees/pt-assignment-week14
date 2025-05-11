import { Outlet } from 'react-router'
import SideMenu from './components/SideMenu'
import TopNav from './components/TopNav'

function App() {
    return (
        <>
            <TopNav />
            {/* <div className="flex">
                <ul className="flex justify-end flex-1/4">
                    <li className="inline">Search</li>
                    <li className="inline">Notifications</li>
                    <li className="inline">Inbox</li>
                    <li className="inline">Sales Scripts</li>
                    <li className="inline">Profile</li>
                </ul>
            </div> */}
            <div className='flex'>
                <SideMenu />
                <Outlet />
            </div>
        </>
    )
}

export default App
