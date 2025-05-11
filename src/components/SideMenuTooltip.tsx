function SideMenuToolTip({ text }: { text: string }) {
    return (
        <span className="text-center invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-4 py-2 text-sm font-medium text-white group-hover:visible">
            {text}
        </span>
    )
}

export default SideMenuToolTip
