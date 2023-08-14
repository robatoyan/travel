import { useState } from "react"

export const Right_T = () => {
    const [count, setCount] = useState([
        { id: 1, salary: 500, name: "Holiday Package" },
        { id: 2, salary: 100, name: "Luxury Hotel" },
        { id: 3, salary: 7, name: "Premium Airlines" },
        { id: 4, salary: 2000, name: "Happy Customer" }
    ])
    return (
        <div className="Right_T">
            <h3>TRAVEL POINT</h3>
            <h2>
                We helping you find <br />
                your dream location
            </h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not<br />
                simply random text. It has roots in a piece of<br />
                classical Latin literature from 45 BC.
            </p>
            <div className="Count-T">
                {
                    count.map((e) => {
                        return (
                            <div className="CountT" key={e.id}>
                                {
                                    e.salary > 1000 ?
                                        <h4>{e.salary.toString()[0]}<b>K</b>
                                            {e.salary > 400 && (
                                                <b>+</b>
                                            )}
                                        </h4>
                                        :
                                        <h4>{e.salary}
                                            {e.salary > 400 && (
                                                <b>+</b>
                                            )}
                                        </h4>
                                }
                                <h5>{e.name}</h5>
                            </div>
                        )
                    })
                }
                <div className="DivRedusChek">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.522 24.002C39.522 25.629 40.858 26.9528 42.5 26.9528C43.328 26.9528 44 27.6186 44 28.439V33.7916C44 38.318 40.284 42 35.716 42H12.286C7.718 42 4 38.318 4 33.7916V28.439C4 27.6186 4.672 26.9528 5.5 26.9528C7.144 26.9528 8.48 25.629 8.48 24.002C8.48 22.4166 7.198 21.2236 5.5 21.2236C5.102 21.2236 4.722 21.067 4.44 20.7876C4.158 20.5082 4 20.1296 4 19.7373L4.004 14.2103C4.004 9.68402 7.72 6 12.288 6H35.712C40.28 6 43.998 9.68402 43.998 14.2103L44 19.5649C44 19.9573 43.842 20.3378 43.562 20.6152C43.28 20.8946 42.9 21.0512 42.5 21.0512C40.858 21.0512 39.522 22.375 39.522 24.002ZM28.504 25.296L30.862 23.021C31.272 22.6286 31.414 22.05 31.236 21.515C31.06 20.9798 30.6 20.5994 30.044 20.522L26.786 20.0504L25.328 17.1254C25.078 16.622 24.57 16.3089 24.004 16.3069H24C23.436 16.3069 22.928 16.6201 22.674 17.1234L21.216 20.0504L17.964 20.52C17.402 20.5994 16.942 20.9798 16.764 21.515C16.588 22.05 16.73 22.6286 17.138 23.021L19.496 25.296L18.94 28.5124C18.844 29.0672 19.07 29.6182 19.53 29.9492C19.79 30.1334 20.092 30.2286 20.398 30.2286C20.632 30.2286 20.868 30.171 21.084 30.0582L24 28.5402L26.91 30.0542C27.414 30.3216 28.012 30.28 28.47 29.9472C28.932 29.6182 29.158 29.0672 29.062 28.5124L28.504 25.296Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}