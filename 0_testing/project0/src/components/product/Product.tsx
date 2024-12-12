import React, { ReactHTMLElement } from 'react'

export default function Product({ name, cost }) {
    console.log();
    return <p>
        name: <span>{name}</span>,
        cost: <span>{cost}</span>,
    </p>
}