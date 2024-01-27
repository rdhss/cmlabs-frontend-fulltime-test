const Instructions = (props) => {
    const { text } = props
    return (
        <div>
            <h1 className="text-2xl">Instructions</h1>
            <p className="text-lg mt-6">
                {text}
            </p>
        </div>
    )
}

export default Instructions