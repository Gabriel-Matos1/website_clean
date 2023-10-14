import styles from "./quinto_quadrado.css"
function quinto_quadrado() {
    return (
        
        <div className="feed_quinto">
           
           <div className="title">
            Who’s in charge - you or your knees?
            </div> 
            <p>
            Listen to what some of our members have to say about the impact Goodnick has had.
            </p>
        
        <div className="videoconteiner">
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=SPt9vWekqm0" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="videotext">
                <p>"I’m in my late 60’s, I've stopped my gym membership and needed motivation to do regular exercise. This is a great programme."</p>

                <p>Debs, 67</p>
                <div className="box_video_text">
                    <p className="video_text_box1"> This is why we built Goodnick.</p>
                   <p className="video_text_box2"> Want to grind ageing into the dust? You can, in just 9 weeks.
                    </p>
                </div>
            </div>
            </div>
            <button className="getstartbutton">Get Started</button>
        </div>
)
}
export default quinto_quadrado