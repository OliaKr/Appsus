const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

export function ColorPicker(){
    // const [colors,setColors] = useState(noteService.getColors())
    const colors = noteService.getColors()

    return <section className="color-picker">
        {colors.map(color=><button className="color-btn" style={{backgroundColor: color}}>
        </button>)}
    </section>
}