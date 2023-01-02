import AVT1 from '../../assets/1.svg'
import AVT2 from '../../assets/2.svg'
import AVT3 from '../../assets/3.svg'
import './blog.css'

const Blog = () => {
  return (
    // <!-- Blog -->
    <section className="section">
    <div className="container">
        {/* <!-- section title --> */}
        <h2 className="section-title padd-15">
            Latest Posts
        </h2>

        <div className="row">
            <div className="blog-item padd-15">
                <div className="inner">
                    <div className="thumb">
                        <a href=""><span className="category">Reviews</span> </a>
                        <a href=""><img src={AVT1} alt="" /></a>
                    </div>
                    <div className="details">
                        <h3 className="title">
                            <a href="">5 Best App Development Tool</a>
                        </h3>
                        <ul className="meta">
                            <li>09 February, 2021</li>
                            <li>Tuong NX</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-item padd-15">
                <div className="inner">
                    <div className="thumb">
                        <a href=""><span className="category">Tutorial</span> </a>
                        <a href=""><img src={AVT2} alt="" /></a>
                    </div>
                    <div className="details">
                        <h3 className="title">
                            <a href="">Common Misconceptions About Payment</a>
                        </h3>
                        <ul className="meta">
                            <li>07 February, 2021</li>
                            <li>Tuong NX</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-item padd-15">
                <div className="inner">
                    <div className="thumb">
                        <a href=""><span className="category">Business</span> </a>
                        <a href=""><img src={AVT3} alt="" /></a>
                    </div>
                    <div className="details">
                        <h3 className="title">
                            <a href="">3 Things to know about startup business</a>
                        </h3>
                        <ul className="meta">
                            <li>09 February, 2021</li>
                            <li>Tuong NX</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Blog