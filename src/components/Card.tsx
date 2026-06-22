import { type ReactNode } from "react";
import { Card as BootstrapCard, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router";


interface CardProps {
    title: string
    image_url: string
    children: ReactNode
    short: string
    link: string
}


export default function Card({ children, image_url, title, short, link }: CardProps) {
    return <BootstrapCard className="d-flex border-secondary h-100 overflow-hidden">
        <BootstrapCard.Img src={image_url}
            className="flex-grow-1 d-flex align-items-center bg-secondary-subtle border-secondary border-bottom object-fit-cover" />
        <BootstrapCard.Body className="flex-grow-0">
            <BootstrapCard.Title>
                {title}
            </BootstrapCard.Title>
            <BootstrapCard.Text className="text-truncate text-secondary">
                {short}
            </BootstrapCard.Text>
        </BootstrapCard.Body>
        <ListGroup variant="flush">
            {children}
        </ListGroup>
        <BootstrapCard.Footer className="bg-secondary-subtle">

            <NavLink className="link" to={link} >Read More</NavLink>
            {/* <Button variant="link" > */}
            {/*     Read More */}
            {/* </Button> */}
        </BootstrapCard.Footer>
    </BootstrapCard>
}


interface CardItemProps {
    field: string
    value?: string | number
    children?: ReactNode
}

export function CardItem({ field, value, children }: CardItemProps) {
    return <ListGroup.Item className="d-flex gap-2 justify-content-between">
        <span className="fw-bold">
            {field}
        </span>
        <span className="">
            {value}
            {children}
        </span>
    </ListGroup.Item>
}
