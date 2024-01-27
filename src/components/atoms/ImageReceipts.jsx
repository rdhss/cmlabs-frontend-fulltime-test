import Image from "next/image"

const ImageReceipts = (props) => {
    const { link } = props
    return (
        <div className="overflow-hidden rounded-2xl w-full">
            <Image 
            width={1000}
            height={1000}
            src={link} 
            />
        </div>
    )
}

export default ImageReceipts