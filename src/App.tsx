import SideNav from './components/SideNav'

function App() {
    return (
        <>
            <div className="flex">
                <div className="flex-3/4">Hello</div>
                <ul className="flex justify-end flex-1/4">
                    <li className="inline">Search</li>
                    <li className="inline">Notifications</li>
                    <li className="inline">Inbox</li>
                    <li className="inline">Sales Scripts</li>
                    <li className="inline">Profile</li>
                </ul>
            </div>
            <SideNav />
        </>
    )
}

export default App
