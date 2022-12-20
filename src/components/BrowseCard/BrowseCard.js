const BrowseCard = (props) => {
  const { id, title, image } = props.searchResult;
  return (
    <button>
        <h4>{title}</h4>
        <img src={image} alt={title} />
    </button>
  )
}

export default BrowseCard;