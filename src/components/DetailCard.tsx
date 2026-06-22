import type { ReactNode } from "react"
import { Card, ListGroup, type CardProps } from "react-bootstrap"
import { NavLink } from "react-router"
import type { Categorys } from "../services/swapiApi"
import type { Name, Title } from "../types/api/generic.types"

interface DetailCardProps extends CardProps {
    title: string
    children: ReactNode
    className?: string
}

export default function DetailCard({ title, children, className, ...props }: DetailCardProps) {
    return <Card className={`g-col-12 g-col-md-6 ${className}`} {...props}   >

        <Card.Header as="h4">
            {title}
        </Card.Header>

        {children}

    </Card>
}


interface DetailLinksListProps {
    data: Name[] | Title[]
    route: Categorys
}

export function DetailLinksList({ data, route }: DetailLinksListProps) {
    return <>
        <ListGroup variant="flush">
            {data.length > 0 ? data.map((link: Name | Title) => {
                if ("name" in link) {
                    return <DetailLinksItem key={link.id} id={link.id} name={link.name} route={route} />
                } else {
                    return <DetailLinksItem key={link.id} id={link.id} name={link.title} route={route} />
                }
            }) : <Card.Body> <Card.Text className="text-secondary">No Data</Card.Text> </Card.Body>}
        </ListGroup>
    </>
}

interface DetailLinksItemProps {
    name: string
    id: number
    route: Categorys
}

export function DetailLinksItem({ id, name, route }: DetailLinksItemProps) {
    return <ListGroup.Item>
        <NavLink className="link" to={`/${route}/${id}`} >{name}</NavLink>
    </ListGroup.Item>

}
