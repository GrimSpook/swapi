import DetailTop from "../../components/DetailTop"
import DetailCard, { DetailLinksList } from "../../components/DetailCard"
import { ListGroup } from "react-bootstrap"
import { CardItem } from "../../components/Card"
import type { SpecieById } from "../../types/api/specie.types"
import DetailWrapper from "../../components/DetailWrapper"

export default function SpecieDetailPage() {

    return <>
        <DetailWrapper<SpecieById> category="species" >
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
                                <CardItem field="Language" value={data.language} />
                                <CardItem field="Classification" value={data.classification} />
                                <CardItem field="Designation" value={data.designation} />
                                <CardItem field="Average height" value={data.average_height} />
                                <CardItem field="Average lifespan" value={data.average_lifespan} />
                                <CardItem field="Eye colors" value={data.eye_colors} />
                                <CardItem field="Hair colors" value={data.hair_colors} />
                                <CardItem field="Skin colors" value={data.skin_colors} />
                            </ListGroup>
                        </DetailCard>

                        <DetailCard title="Films">
                            <DetailLinksList route="films" data={data.films} />
                        </DetailCard>

                        <DetailCard title="People">
                            <DetailLinksList route="people" data={data.people} />
                        </DetailCard>

                    </div>

                </div>

            )}
        </DetailWrapper>

    </>
}
