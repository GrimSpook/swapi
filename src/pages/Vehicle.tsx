import Card, { CardItem } from "../components/Card";
import type { Vehicle } from "../types/api/vehicle.types";
import CategoryWrapper from "../components/CategoryWrapper";

export default function VehiclePage() {

    return <>
        <CategoryWrapper<Vehicle> category="vehicles" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.name}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/vehicles/${item.id}`}
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
