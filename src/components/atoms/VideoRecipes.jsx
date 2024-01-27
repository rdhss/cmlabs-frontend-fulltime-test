const VideoRecipes = (props) => {
    const { video } = props
    console.log(video);
    return (
        <div>
            <h1 className="text-2xl text-center">VideoRecipes</h1>
            <div className="flex justify-center my-11">
                <iframe width="920" height="545" src={video}>
                </iframe>
            </div>
        </div>
    )
}

export default VideoRecipes