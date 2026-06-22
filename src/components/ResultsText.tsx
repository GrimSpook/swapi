
interface ResultsTextProps {
    text: string
    count: number
}

export default function ResultsText({ text, count }: ResultsTextProps) {

    const isCountZero = count === 0

    return <>

        <div className="d-flex gap-2 py-4">
            Search Results for <h5>"{text}"</h5>
        </div>

        {isCountZero && <span>No Items</span>}

    </>
}
