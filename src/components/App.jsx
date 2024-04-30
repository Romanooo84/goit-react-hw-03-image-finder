import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./Imagegallery"
import { PaginationButton } from "./Button";
import { Modal } from "./Modal";
import css from '../css/app.module.css'




export const App = () => {

  const [inputData, setInputData] = useState('')
  const [dataResponse, setDataResponse] = useState([])
  const [markup, setMarkup] = useState()
  const [page, setPage] = useState(1)
  const [picture, setPicture] = useState()
  const [modal, setModal] = useState(false)
  const [modalClass, setModalClass] = useState('visually-hidden')

  const API = '42510468-83e1823d3ac9bdf29bf082bf9'

  
  const searchParams = new URLSearchParams({
    key: API,
    q: inputData,
    page: page,
    per_page: 10,
  });
  
  
  

  const onChange = (event) => {
    event.preventDefault();
    setInputData(event.target.value)
  }

  const onClick= (event) => {
    event.preventDefault();
    searchParams.set('page', 1);
    let url = `https://pixabay.com/api/?${searchParams}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          setDataResponse(data);
      });
    searchParams.set('page', page);
  }

  const onClickPag = (event) => {
    event.preventDefault();
    let url = `https://pixabay.com/api/?${searchParams}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          setDataResponse(prevValue => {
            let newData = { ...prevValue }
            for (let i = 0; i < data.hits.length; i++) {
              newData.hits.push(data.hits[i])
            }
            return newData
          })
        }
      );
  }

  const toggleModal = (event) => {
    event.preventDefault()
    setModal(!modal)
    setPicture(event.target.parentNode.getAttribute('href'))
  }

  const escModal = (event) => {
    console.log(event.key)
      if (event.key === 'Escape') {
        console.log('esc')
        setModalClass('visually-hidden')
    }
    }


  useEffect(() => {
    if (dataResponse.hits) {
      setPage(prevValue=>prevValue+1)
      setMarkup(dataResponse)
    }
    else {
    }
  }, [dataResponse]);
  
  useEffect(() => {
    if (modal) {
      setModalClass('modal-open')
    }
    else {
      setModalClass('visually-hidden')
    }
}, [modal]);
  


  return (
    <div className={css.mainDiv}>
      <Searchbar onChange={onChange} onClick={onClick} />
      <ImageGallery markup={markup} toggleModal={toggleModal}  />
      <PaginationButton onClickPag={onClickPag} />
      <Modal modalClass={modalClass} picture={picture} escModal={escModal}/>
      {/*<ImageGalleryItem />
      <Loader />*/}
    </div>
  );
};
