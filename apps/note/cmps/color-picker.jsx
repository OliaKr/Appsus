const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

export function ColorPicker({ onChangeColor, currColor }) {
    const colors = noteService.getColors()
    console.log('currColor', currColor)

    return <section className="color-picker">
        {colors.map(color => <button key={color}
            className={`color-btn ${currColor === color ? 'curr-color' : ''}`}
            style={{ backgroundColor: color }}
            onClick={(ev) => onChangeColor(ev,color)}>
        </button>)}

        <button 
            className={`color-btn ${currColor === 'white' ? 'curr-color' : ''}`}
            style={{ backgroundColor: 'white' }}
            onClick={(ev) => onChangeColor(ev,'white')}
        ><i className="fa-solid fa-droplet-slash"></i></button>
    </section>
}