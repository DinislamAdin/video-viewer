import { useState } from "react";

const Video = () => {
  const [videoLink, setVideoLink] = useState("");
  const [number, setNumber] = useState(0);
  const [output, setOutput] = useState([]);

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const videoId = videoLink.split("v=")[1];
    if (videoId) {
      const embeddedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
      const result = Array(Number(number)).fill(embeddedLink);
      setOutput(result);
    } else {
      alert("Please enter a valid YouTube link.");
    }
  };

  return (
    <div className="my-40 text-center">
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-bold text-red-500">
              Video Link:
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mx-2"
                value={videoLink}
                onChange={handleVideoLinkChange}
              />
            </label>

            <label className="font-bold text-red-500">
              Number:
              <input
                type="number"
                className="input input-bordered w-full max-w-xs mx-2"
                value={number}
                onChange={handleNumberChange}
              />
            </label>

            <button
              type="submit"
              className="btn btn-outline btn-error mx-2 text-red-200"
            >
              Submit
            </button>
          </div>
        </form>
        <hr className="border-t-2 border-gray-300 my-4" />
        <div>
          <h3 className="font-bold text-red-500 m-5">Output:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 mr-2">
            {output.map((link, index) => (
              <div key={index} className="video-responsive relative pb-9/16">
                <iframe
                  width="320"
                  height="180"
                  src={link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Embedded Video ${index}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
