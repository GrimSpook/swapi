import Card, { CardItem } from "../components/Card"
import type { People } from "../types/api/people.types"
import CategoryWrapper from "../components/CategoryWrapper"

export default function PeoplePage() {

    return <>
        <CategoryWrapper<People> category="people" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.name}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/people/${item.id}`}
                            >
                                <CardItem field="birth year" value={item.birth_year} />
                                <CardItem field="Films" value={item.films_count} />
                            </Card>
                        </div>
                    )
                })}
            </>}
        </CategoryWrapper>
    </>

}
