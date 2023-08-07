import React, { useRef, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import eyeimg from "../eye.jpg";
import pdfs from "../bookpdf.png"
import video from "../video.mp4";
import axios from 'axios';
function Mainpage() {
  const [loader, setLoader] = useState(false);
  const [quest, setQuest] = useState("What is Human eye ?");
   const [caption, setCaption] = useState('');
  const [isListening, setIsListening] = useState(false);

  const videoRef = useRef(null);
  const recognitionRef = useRef(null);

  const handleToggleListening = () => {
    if (!isListening) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;

      recognitionRef.current.onresult = event => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setCaption(transcript);
      };

      recognitionRef.current.onerror = event => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.start();
      setIsListening(true);
    } else {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };
  const [answer, setAnswer] = useState([]);
  const getResult = () => {
    const userRequest = {
      "question": quest,
      "complexity": "low",
      "language": "english"
    }
    setLoader(true)
    axios.post("http://192.168.0.108:4000/getsummary", userRequest).then(res => {
      const data = res?.data?.data
      const new_ip = "192.168.0.110"

      data["matchingPageUrl"] = data["matchingPageUrl"].replace("localhost", new_ip)
      data["imageUrl"] = data["imageUrl"].replace("localhost", new_ip)
      data["audioUrl"] = data["audioUrl"].replace("localhost", new_ip)
      data["videoUrl"] = data["videoUrl"].replace("localhost", new_ip)

      setAnswer(data)


      setLoader(false);

    }).catch(err => console.log("err"))

  }
  
  console.log("caption", caption)


  return (

    <div style={{ margin: "30px", marginTop: "15px" }} >

      <div className="p-4 mb-3 text-bg-dark rounded-3 sticky-top ">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className='col-md-6 '>
              <input type="text" className="form-control" onChange={(e) => setQuest(e.target.value)} placeholder="Ask your Questions ?" />
            </div>
            <div className='col-md-6 '>
              <button type="button" className="btn btn-outline-info btn-md px-4 me-sm-3 fw-bold"
              //  onClick={getResult}
               >Get Answer</button>
            </div>
          </div>
        </div>
      </div>
      {loader ? <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}><Spinner /> </div> :

        <div>

          <div className="row">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>{quest}</h2>
                <p>
                  The human eye is a special part of our body that helps us see the world around us. It is like a camera that takes pictures and sends them to our brain. The eye has a round shape and is located in our face. It has a colored part called the iris, which can be blue, green, brown, or other colors. The iris controls how much light enters the eye. Inside the eye, there is a lens that focuses the light onto a special part called the retina. The retina has cells that can detect light and send signals to our brain. Our brain then interprets these signals and helps us understand what we are seeing
                </p>
                <button className="btn btn-outline-light" type="button">Learn more</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark  border rounded-3">
                <h2>Diagram</h2>
                <img className="img-fluid rounded" src={eyeimg} />
              </div>
            </div>

          </div>
          <br />
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className=" p-5 text-bg-dark  border rounded-3">
                <h2 className='mt-0'>Book</h2>
                <img src={pdfs} className="img-fluid rounded" />
                {/* {answer?.matchingPageUrl && (
                    <iframe src={answer?.matchingPageUrl}  title="title">

                     </iframe>
                  )} */}




                <button className="btn btn-outline-secondary mt-3" type="button">Download PDF</button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="h-100 p-3 text-bg-dark border rounded-3">
                <h2 className='mt-4 mb-0 ml-4'>Tutorial</h2>
                <video  ref={videoRef} className ="mb-0" width="100%" height="400" controls>
                  <source src={video} type="video/mp4" />
 
                </video>
                <button onClick={handleToggleListening}>
              {isListening ? 'Stop Captions' : 'Start Captions'}
            </button>
            {caption && <p>{caption}</p>}
              </div>
            </div>


          </div>

        </div >
      }

    </div>

  )
}

export default Mainpage