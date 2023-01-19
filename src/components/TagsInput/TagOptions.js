
const tagOptionsList = [
    '',
    'favourites',
    'breakfast',
    'lunch',
    'dinner',
    'pudding',
    'snack',
    'starter'
]

const TagOptions = () => {
    return (
        <datalist id="tagOptions">
            {tagOptionsList.map((tag, index) => {
                return <option key={index} value={tag} />
            })}
        </datalist>
    )
}

export default TagOptions;