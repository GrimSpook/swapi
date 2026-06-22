import Card, { CardItem } from "../components/Card";
import type { Planet } from "../types/api/planet.types";
import CategoryWrapper from "../components/CategoryWrapper";

export default function PlanetPage() {

    return <>
        <CategoryWrapper<Planet> category="planets" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.name}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/planets/${item.id}`}
                            >
                                <CardItem field="Climate" value={item.climate} />
                                <CardItem field="Gravity" value={item.gravity} />
                            </Card>
                        </div>
                    )
                })}
            </>}
        </CategoryWrapper>
    </>
}
