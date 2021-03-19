import "./Pictures.css"

const imgData = [
    {
        src: '/assets/img1.jpg',
        alt: 'landscape',
    },
    {
        src: '/assets/img2.jpg',
        alt: 'landscape',
    },
    {
        src: '/assets/img3.jpg',
        alt: 'landscape',
    },
    {
        src: '/assets/img4.jpg',
        alt: 'landscape',
    }
]

const Pictures = () => (
    <div className="pictures-body">
        <div className="pictures-wrapper">
            <div className="pictures-row">
            {imgData.map((item, index) => (
                <div key={index} className="pictures-column">
                        <div className="pictures-content">
                            <img src={`${process.env.PUBLIC_URL + item.src}`} alt={item.alt} style={{width:"100%"}}/>
                            <h3>My landscape picture</h3>
                            <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no. Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        </div>
                    </div>
            ))}
            </div>
            <div className="pictures-content">
                <img src={`${process.env.PUBLIC_URL}/assets/img5.jpeg`} alt="description" style={{width:"100%"}}/>
                <h3>Some Other Work</h3>
                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no. Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
            </div>
        </div>
    </div>

)

export default Pictures