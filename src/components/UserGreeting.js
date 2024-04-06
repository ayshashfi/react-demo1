export const UserGreeting=()=>{
    const isLoggedIn=false
    return (
        // <div>
        //     Welcome {isLoggedIn ? 'Aysha' : 'Guest'}
        // </div>
        <div>
            Welcome {isLoggedIn && 'Aysha'}
        </div>
    )
}