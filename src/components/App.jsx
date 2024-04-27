import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./Imagegallery"
import css from '../css/app.module.css'



export const App = () => {

  const API = '42510468-83e1823d3ac9bdf29bf082bf9'
  let q = `yellow flowers`
  let page = 1
  
  const searchParams = new URLSearchParams({
    key: API,
    q: q,
    page: page,
    per_page: 10,
  });
  
  const [inputData, setInputData] = useState('')
  const [dataResponse, setDataResponse] = useState([])
  const [markup, setMarkup] = useState()
  

  const onChange = (event) => {
    event.preventDefault();
    setInputData(event.target.value)
  }

  const onClick = (event) => {
    event.preventDefault();
    let url = `https://pixabay.com/api/?${searchParams}`
    fetch(url)
      .then(response => response.json())
      .then(data => setDataResponse(data))
  }


  useEffect(() => {
    if (dataResponse.hits) {
      setMarkup(dataResponse)
    }
}, [dataResponse]);
  


  return (
    <div className={css.mainDiv}>
      <Searchbar onChange={onChange} onClick={onClick} />
      <ImageGallery markup={markup} />
      {/*<ImageGalleryItem />
      <Loader />
    <Modal/>*/}
    </div>
  );
};
