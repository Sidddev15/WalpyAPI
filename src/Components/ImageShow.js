import './imageShow.css';

function ImageShow({ image }) {
    return <div className="Image-show">
        <img src={image.urls.small} alt={image.alt_description} />
        </div>;
  }
  
  export default ImageShow;