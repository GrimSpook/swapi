import DetailTop from "../../components/DetailTop"
import DetailCard, { DetailLinksList } from "../../components/DetailCard"
import { Badge, ListGroup } from "react-bootstrap"
import { CardItem } from "../../components/Card"
import type { PeopleById } from "../../types/api/people.types"
import DetailWrapper from "../../components/DetailWrapper"
import { NavLink } from "react-router"

export default function PeopleDetailPage() {

    return <>
        <DetailWrapper<PeopleById> category="people" >
            {(data) =>
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
                                <CardItem field="Force alignment" children={<Badge bg="secondary">{data.force_alignment}</Badge>} />
                                <CardItem field="Birth year" value={data.birth_year} />
                                <CardItem field="Eye color" children={<Badge bg="secondary">{data.eye_color}</Badge>} />
                                <CardItem field="Hair color" children={<Badge bg="secondary">{data.hair_color}</Badge>} />
                                <CardItem field="Height" value={`${data.height} cm`} />
                                <CardItem field="Mass" children={`${data.mass} kg`} />
                                <CardItem field="Skin color" children={<Badge bg="secondary">{data.skin_color}</Badge>} />
                                <CardItem field="Affiliations" children={
                                    <div className="d-flex flex-wrap gap-2">
                                        {
                                            data.affiliations.map((item, index) =>
                                                <Badge key={index} bg="secondary">
                                                    {item}
                                                </Badge>
                                            )
                                        }
                                    </div>
                                } />
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Links">
                            <ListGroup variant="flush">
                                <CardItem field="Wiki" >
                                    <NavLink className="link" to={data.wiki_link} >Open wiki</NavLink>
                                </CardItem>
                                <CardItem field="Homeworld" >
                                    <NavLink className="link" to={`/planets/${data.homeworld.id}`} >{data.homeworld.name}</NavLink>
                                </CardItem>
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Films">
                            <DetailLinksList route="films" data={data.films} />
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

