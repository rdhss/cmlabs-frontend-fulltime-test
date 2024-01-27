const Recipes = (props) => {
    const { text, data } = props
    return (
        <div className="mt-6">
            <h1 className="text-2xl mb-2">Recipes</h1>
            <ul class="list-disc pl-4">
                {
                    data.slice(0, 19).map((item, index) =>
                        <li key={index} className={item.measure === '' && 'hidden'}>{item.measure} {item.ingredient}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Recipes