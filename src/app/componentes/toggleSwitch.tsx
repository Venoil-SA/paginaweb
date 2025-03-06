"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="w-20 h-8 bg-verde cursor-pointer p-2 flex rounded-xl items-center"
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
<<<<<<< HEAD
                className="w-6 h-6 rounded-full bg-white "
=======
                className="w-6 h-6 text-azul rounded-full bg-white "
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
<<<<<<< HEAD
            />
=======
            >{`${isOn?"ES":"EN"}`}</motion.div>
>>>>>>> 76031e9def9177f29d8736de0f542ad8bc949955
        </button>
    )
}