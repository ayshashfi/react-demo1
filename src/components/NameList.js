export const NameList=()=>{
    const names=["clark","diana","aysha"]
    return (
        <div>
            {names.map((name)=>{
                return <h2 key={name}>{name}</h2>
            })}
        </div>

    )
}