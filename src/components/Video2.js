import Video from '../components/images/video.mp4';

export default function Video2() {

    return (
        <div className="App">
        <div class="mid">
             <video autoPlay loop muted>
                <source class="embed-responsive" src={Video} type="video/mp4" />
             </video>
         </div> 
         <h1 className="main-title">Mahabharatam</h1>
        <a href="/instruction7"> Enter Next Level</a>
      
        </div>
    );
}