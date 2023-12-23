'use client'

import Link from "next/link"

export default function ButtonEdit({name, id, typeData}) {

    return ( <Link href={`/${typeData}/${id}`} className="button">{name}</Link> )
}