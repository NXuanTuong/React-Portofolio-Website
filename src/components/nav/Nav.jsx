import './nav.css';

const Nav = () => {

    return (
        <>
        <nav className="nav container padd-15">
                {/* <!-- nav-logo --> */}
                <a href="" className="nav-logo">
                    <h2>TuongNX</h2>
                </a>
                
                    <div className="nav-menu" id="nav-menu">
                        {/* <!-- nav list --> */}
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#home" className="nav-link active-link">Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#experience" className="nav-link ">Experience</a></li>
                            <li className="nav-item"><a href="#pricing" className="nav-link ">Pricing</a></li>
                            <li className="nav-item"><a href="#portfolio" className="nav-link ">Portfolio</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link ">Contact</a></li>
                        </ul>

                        <div className="nav-close" id="nav-close">
                            <i className="lni lni-close"></i>
                        </div>
                    </div>
                    {/* <!-- nav btn --> */}
                    <div className="nav-btns">
                        <i className="lni lni-pallet change-theme" id="theme-button"></i>
                        <div className="nav-toggle" id="nav-toggle">
                            <i className="lni lni-grid-alt"></i>
                        </div>
                    </div>
        </nav>
        <div className="customize-theme">
        <div className="card">
            <h2>Customize your view</h2>
            <p>Mange your font size, color, and background</p>

            <div className="font-size">
                <h3>Font Size</h3>

                <div>
                    <h6>Aa</h6>
                    <div className="choose-size">
                        <span className="font-size-1"></span>
                        <span className="font-size-2"></span>
                        <span className="font-size-3 active"></span>
                        <span className="font-size-4"></span>
                    </div>
                    <h3>Aa</h3>
                </div>
            </div>

            <div className="color">
                <h3>Color</h3>
                <div className="choose-color">
                    <span className="color-1"></span>
                    <span className="color-2"></span>
                    <span className="color-3 active"></span>
                    <span className="color-4"></span>
                    <span className="color-5"></span>

                </div>
            </div>

            <div className="background">
                <h3>Background</h3>
                <div className="choose-bg">
                    <div className="bg-1 active">
                        <span></span>
                        <h5 className="bg-1">Light</h5>
                    </div>

                    <div className="bg-2">
                        <span></span>
                        <h5 className="bg-2">Dim</h5>
                    </div>

                    <div className="bg-3">
                        <span></span>
                        <h5 className="bg-3">Dark</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Nav