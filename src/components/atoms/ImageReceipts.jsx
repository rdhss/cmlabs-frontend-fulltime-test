const ImageReceipts = (props) => {
    const {link} = props
  return (
    <div className="overflow-hidden rounded-2xl w-full">
        <img src={link} />
    </div>
  )
}

export default ImageReceipts