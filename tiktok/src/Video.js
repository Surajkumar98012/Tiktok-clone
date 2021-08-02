import React,{useRef,useState} from 'react';
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,song,likes,shares,messages}) {
    const [playing,setPlaying]=useState(false);
    const videoRef=useRef(null);

    
    const handleVideoPress=()=>{
        if (playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
        // if the video playing
        //stop it
        //otherwise if its not playing
        //play it ...
    }
    return (
        <div className="video">
        <video className="video_player"
        onClick={handleVideoPress}
         loop
         controls
         ref={videoRef}
         autostart autoPlay src={url}/>
        

            {/* video footer */}

            <VideoFooter channel={channel} description={description} song={song} />
            {/* video sidebar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>

        </div>
    )
}

export default Video
