  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022"
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022"
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08"
    }
  ];
function YoutubeComponent(props) {
  return (
    <div className="container">
      <img src={props.thumbnail} alt="youtubecomponent-thumbnail" />
      <div className="content">
        <p>{props.title}</p>
        <p>{props.uploader}</p>
        <p>{new Date(props.dateUploaded).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
