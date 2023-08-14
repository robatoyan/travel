import { useState } from "react"

export const Left_K = () => {
    const [features, setFeatures] = useState([
        { id: 1, img: "/imgSpecial/icon1.png", title: "We offer best services", text: "Lorem Ipsum is not simply random text" },
        { id: 2, img: "/imgSpecial/icon2.png", title: "Schedule your trip", text: "It has roots in a piece of classical" },
        { id: 3, img: "/imgSpecial/icon3.png", title: "Get discounted coupons", text: "Lorem Ipsum is not simply random text" }
    ])
    return (
        <div className="Left_K">
            <div className="KeyFaturesLeftData">
                <h3>KEY FEATURES</h3>
                <h2>We offer best services</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random<br />
                    text. It has roots in a piece of classical Latin literature<br />
                    from 45 BC.
                </p>
            </div>
            <div className="Features">
                {
                    features.map((e) => {
                        return (
                            <div className="Featur" key={e.id}>
                                <div className="FeaturesIcons">
                                    <img src={e.img} />
                                </div>
                                <div className="FeaturesData">
                                    <h4>{e.title}</h4>
                                    <h5>{e.text}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}