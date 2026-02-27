import "./Hero.css";
import PS3 from "./images/ps3.png"
import MMM from "./images/blutooth.png"
import Tel from "./images/tel.png"
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-top">
                        <div className="hero-left">
                            <span className="subtitle">THE BEST PLACE TO PLAY</span>
                            <h1>Xbox Consoles</h1>
                            <p>
                                Save up to 50% on select Xbox games. Get <br />
                                3 months of PC Game Pass for $2 USD.
                            </p>
                            <button>SHOP NOW →</button>
                            <img src={PS3} alt="" />
                            <div className="price">$299</div>
                        </div>
                        <div className="hero-right">
                            <div className="hero-card dark">
                                <span className="badge">29% OFF</span>
                                <h4>New Google Pixel 6 Pro</h4>
                                <button>SHOP NOW →</button>
                                <img src={Tel} alt="" />
                            </div>

                            <div className="hero-card light">
                                <h4>Xiaomi FlipBuds Pro</h4>
                                <p>$299 USD</p>
                                <button>SHOP NOW →</button>
                                <img src={MMM} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-features">
                        <div>🚚 Fasted Delivery</div>
                        <div>🔄 24 Hours Return</div>
                        <div>💳 Secure Payment</div>
                        <div>🎧 Support 24/7</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;