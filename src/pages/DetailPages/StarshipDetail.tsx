import DetailTop from "../../components/DetailTop"
import DetailCard, { DetailLinksList } from "../../components/DetailCard"
import { ListGroup } from "react-bootstrap"
import { CardItem } from "../../components/Card"
import type { StarshipById } from "../../types/api/starship.types"
import DetailWrapper from "../../components/DetailWrapper"

export default function StarshipDetailPage() {

    return <>
        <DetailWrapper<StarshipById> category="starships" >
            {(data) => (

                <div className="d-flex flex-column gap-5">
                    <DetailTop
                        title={data.name}
                        short={data.short_description}
                        long={data.long_description}
                        imageUrl={data.image_url}
                    />

                    <div className="grid mb-5">
                        <DetailCard title="Attributes">
                            <ListGroup variant="flush">
                                <CardItem field="Model" value={data.model} />
                                <CardItem field="Starship class" value={data.starship_class} />
                                <CardItem field="Manufacturer" value={data.manufacturer} />
                                <CardItem field="Cost in credits" value={data.cost_in_credits} />
                                <CardItem field="Length" value={data.length} />
                                <CardItem field="Crew" value={data.crew} />
                                <CardItem field="Passengers" value={data.passengers} />
                                <CardItem field="Max atmosphering speed" value={data.max_atmosphering_speed} />
                                <CardItem field="Hyperdrive rating" value={data.hyperdrive_rating} />
                                <CardItem field="MGLT" value={data.MGLT} />
                                <CardItem field="Cargo capacity" value={data.cargo_capacity} />
                                <CardItem field="Consumables" value={data.consumables} />
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Films">
                            <DetailLinksList route="films" data={data.films} />
                        </DetailCard>

                        <DetailCard title="Pilots">
                            <DetailLinksList route="people" data={data.pilots} />
                        </DetailCard>

                    </div>

                </div>

            )}
        </DetailWrapper>
    </>
}
