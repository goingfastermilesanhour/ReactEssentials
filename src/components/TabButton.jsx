export default function TabButton({children, onSelect}) {
    console.log("Tab Button component executing")
    // the children prop refers to content between <TabButton> tags in App.jsx component
    return (<li>
            <button onClick={onSelect}>{children}</button>
        </li>)

}