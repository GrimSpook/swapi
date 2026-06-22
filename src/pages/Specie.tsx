import Card, { CardItem } from "../components/Card";
import type { Specie } from "../types/api/specie.types";
import CategoryWrapper from "../components/CategoryWrapper";

export default function SpeciesPage() {

    return <>
        <CategoryWrapper<Specie> category="species" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.name}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/species/${item.id}`}
                            >
                                <CardItem field="Classification" value={item.classification} />
                                <CardItem field="Designation" value={item.designation} />
                            </Card>
                        </div>
                    )
                })}
            </>}
        </CategoryWrapper>
    </>
}
