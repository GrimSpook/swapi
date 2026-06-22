import Card, { CardItem } from "../components/Card";
import type { Starship } from "../types/api/starship.types";
import CategoryWrapper from "../components/CategoryWrapper";

export default function StarshipPage() {

    return <>
        <CategoryWrapper<Starship> category="starships" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.name}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/starships/${item.id}`}
                            >
                                <CardItem field="Cargo Capacity" value={item.cargo_capacity} />
                                <CardItem field="Consumables" value={item.consumables} />
                            </Card>
                        </div>
                    )
                })}
            </>}
        </CategoryWrapper>
    </>
}
