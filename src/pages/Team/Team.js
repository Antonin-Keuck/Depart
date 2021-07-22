import "./Team.css"
import Carousel from 'react-elastic-carousel'

const TeamData = [
    {
        src: "/assets/pdp1.png"
},
{
    src: "/assets/pdp2.png"
},
{
    src: "/assets/pdp3.png"
},
{
    src: "/assets/pdp4.png"
},
{
    src: "/assets/pdp5.png"
},
{
    src: "/assets/pdp6.png"
},
{
    src: "/assets/pdp7.png"
},
{
    src: "/assets/pdp8.png"
},
{
    src: "/assets/pdp9.png"
},
{
    src: "/assets/pdp1.png"
},
{
src: "/assets/pdp2.png"
},
{
src: "/assets/pdp3.png"
},
{
src: "/assets/pdp4.png"
},
{
src: "/assets/pdp5.png"
},
{
src: "/assets/pdp6.png"
},
{
src: "/assets/pdp7.png"
},
{
src: "/assets/pdp8.png"
},

]

export const Team = () => {

    return (
    <div className="team-wrapper">
        <div className="team-carousel-wrapper">
            {/* <h1 className="team-carousel-title">Notre equipe :</h1> */}
            <Carousel className="team-carousel-mate" itemsToShow={3} enableAutoPlay={true}>
                {TeamData.map((item, index) => (
                    <img key={index} src={`${process.env.PUBLIC_URL + item.src}`} className="team-carousel-image" alt={"description"}/>
                    ))}
            </Carousel>
        </div>
    </div>
    )
}
