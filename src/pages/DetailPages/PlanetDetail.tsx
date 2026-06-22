import DetailTop from "../../components/DetailTop"
import DetailCard, { DetailLinksList } from "../../components/DetailCard"
import { ListGroup } from "react-bootstrap"
import { CardItem } from "../../components/Card"
import type { PlanetById } from "../../types/api/planet.types"
import DetailWrapper from "../../components/DetailWrapper"

export default function PlanetDetailPage() {

    return <>
        <DetailWrapper<PlanetById> category="planets" >
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
                                <CardItem field="Rotation period" value={data.rotation_period} />
                                <CardItem field="Orbital period" value={data.orbital_period} />
                                <CardItem field="Diameter" value={data.diameter} />
                                <CardItem field="Climate" value={data.climate} />
                                <CardItem field="Gravity" value={data.gravity} />
                                <CardItem field="Terrain" value={data.terrain} />
                                <CardItem field="Surface water" value={data.surface_water} />
                                <CardItem field="Population" value={data.population} />
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Films">
                            <DetailLinksList route="films" data={data.films} />
                        </DetailCard>

                        <DetailCard title="Residents">
                            <DetailLinksList route="people" data={data.residents} />
                        </DetailCard>

                    </div>

                </div>

            )}
        </DetailWrapper>

    </>
}
