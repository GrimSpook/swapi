import type { FilmById } from "../../types/api/film.types"
import DetailTop from "../../components/DetailTop"
import DetailCard, { DetailLinksList } from "../../components/DetailCard"
import { CardBody, ListGroup } from "react-bootstrap"
import { CardItem } from "../../components/Card"
import DetailWrapper from "../../components/DetailWrapper"

export default function FilmDetailPage() {

    return <>
        <DetailWrapper<FilmById> category="films" >
            {(data) =>
                <div className="d-flex flex-column gap-5">
                    <DetailTop
                        title={data.title}
                        short={data.short_description}
                        long={data.long_description}
                        imageUrl={data.image_url}
                    />

                    <div className="grid mb-5">
                        <DetailCard title="Opening Crawl">
                            <CardBody>
                                <pre>
                                    {data.opening_crawl}
                                </pre>
                            </CardBody>
                        </DetailCard>

                        <DetailCard title="Attributes">
                            <ListGroup variant="flush">
                                <CardItem field="Episode" value={data.episode_id} />
                                <CardItem field="Director" value={data.director} />
                                <CardItem field="Producer" value={data.producer} />
                                <CardItem field="Release" value={data.release_date} />
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Characters">
                            <DetailLinksList route="people" data={data.characters} />
                        </DetailCard>

                        <DetailCard title="Planets">
                            <DetailLinksList route="planets" data={data.planets} />
                        </DetailCard>

                        <DetailCard title="Species">
                            <DetailLinksList route="species" data={data.species} />

                        </DetailCard>

                        <DetailCard title="Starships">
                            <DetailLinksList route="starships" data={data.starships} />
                        </DetailCard>

                        <DetailCard title="Vehicles">
                            <DetailLinksList route="vehicles" data={data.vehicles} />
                        </DetailCard>
                    </div>
                </div>
            }
        </DetailWrapper>

    </>
}
