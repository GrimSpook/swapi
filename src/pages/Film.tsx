import Card, { CardItem } from "../components/Card";
import type { Film } from "../types/api/film.types";
import CategoryWrapper from "../components/CategoryWrapper";

export default function FilmPage() {

    return <>
        <CategoryWrapper<Film> category="films" >
            {(data) => <>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="d-flex g-col-12 g-col-md-6 g-col-lg-4 align-items-center justify-content-center">
                            <Card
                                title={item.title}
                                image_url={item.image_url}
                                short={item.short_description}
                                link={`/films/${item.id}`}
                            >
                                <CardItem field="Episode" value={item.episode_id} />
                                <CardItem field="Release" value={item.release_date} />
                            </Card>
                        </div>
                    )
                })}
            </>}
        </CategoryWrapper>
    </>
}
