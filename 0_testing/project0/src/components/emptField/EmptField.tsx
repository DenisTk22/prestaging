import { useState } from "react"

interface EmptFieldTypes {
    id: number
    text: string | number
    type: string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    editEmpt: Function
}

export default function EmptField({ id, text, type, editEmpt }: EmptFieldTypes) {
    const [isEdit, setIsEdit] = useState(false);
    return <td>
        {isEdit
            ? <input value={text} onChange={event => editEmpt(id, type, event)} onBlur={() => setIsEdit(false)} />
            : <span onClick={() => setIsEdit(true)}>{text}</span>
        }
    </td>
}
