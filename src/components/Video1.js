import Video from '../components/images/video1.mp4';

export default function Video1() {

    return (
        <div className="App">
        <div class="mid">
             <video autoPlay loop muted>
                <source class="embed-responsive" src={Video} type="video/mov" />
             </video>
         </div> 
         <h1 className="main-title">Mahabharatam</h1>
        <a href="/instruction4"> Enter Next Level</a>
      
        </div>
    );
}