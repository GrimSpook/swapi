
interface DetailTopProps {
    title: string
    short: string
    long: string
    imageUrl: string
}

export default function DetailTop({ title, short, long, imageUrl }: DetailTopProps) {

    return <div className="d-flex flex-column-reverse flex-lg-row gap-4 justify-content-between align-items-center">
        <div className="">
            <h1>{title}</h1>
            <p className=" fs-4">{short}</p>
            <p>{long}</p>
        </div>

        <div className="d-flex flex-column">
            <img src={imageUrl} alt="" width={"400px"} className="object-fit-cover" />
            {/* <span>Image source:  </span> */}
        </div>
    </div>


}
