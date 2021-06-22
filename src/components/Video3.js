import Video from '../components/images/video3.mp4'

export default function Video3() {

    return (
        <div className="App">
        <div class="mid">
             <video autoPlay loop muted>
                <source class="embed-responsive" src={Video} type="video/mov" />
             </video>
         </div> 
         <h1 className="main-title">Mahabharatam</h1>
        <a href="/"> Enter Next Level</a>
      
        </div>
    );
}