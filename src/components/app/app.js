import React, { Component } from 'react';
import Header from '../header';
import RandomBg from '../randomBg';
import GalleryBg from '../galleryBg';
import RatingBg from '../ratingBg';
import ModalImg from '../modalImg';
import Welcome from '../welcom';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import '../index.min.css';

export default class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            modalImgActive: false, 
            setModalImgActive: false,
            modalSrc: null,
            arrImg: [
                {src: '../img/bg_0.jpg', liked: false, disliked: false, scoreUser: '', id: 0}, 
                {src: '../img/bg_1.jpg', liked: false, disliked: false, scoreUser: '', id: 1}, 
                {src: '../img/bg_2.jpg', liked: false, disliked: false, scoreUser: '', id: 2}, 
                {src: '../img/bg_3.jpg', liked: false, disliked: false, scoreUser: '', id: 3}, 
                {src: '../img/bg_4.jpg', liked: false, disliked: false, scoreUser: '', id: 4}, 
                {src: '../img/bg_5.jpg', liked: false, disliked: false, scoreUser: '', id: 5}, 
                {src: '../img/bg_6.jpg', liked: false, disliked: false, scoreUser: '', id: 6}, 
                {src: '../img/bg_7.jpg', liked: false, disliked: false, scoreUser: '', id: 7}, 
                {src: '../img/bg_8.jpg', liked: false, disliked: false, scoreUser: '', id: 8},
                {src: '../img/bg_9.jpg', liked: false, disliked: false, scoreUser: '', id: 9}, 
                {src: '../img/bg_10.jpg', liked: false, disliked: false, scoreUser: '', id: 10}, 
                {src: '../img/bg_11.jpg', liked: false, disliked: false, scoreUser: '', id: 11}, 
                {src: '../img/bg_12.jpg', liked: false, disliked: false, scoreUser: '', id: 12}, 
                {src: '../img/bg_13.jpg', liked: false, disliked: false, scoreUser: '', id: 13}, 
                {src: '../img/bg_14.jpg', liked: false, disliked: false, scoreUser: '', id: 14},
                {src: '../img/bg_15.jpg', liked: false, disliked: false, scoreUser: '', id: 15}
            ]
        }      
        this.setModalImgActive = this.setModalImgActive.bind(this);
        /* this.addUserScore = this.addUserScore.bind(this); */
    }

    setModalImgActive = () => {
        this.setState({
            modalImgActive: !this.state.modalImgActive,
            setModalImgActive: !this.setModalImgActive,
        });
        console.log('setModal work!');
       /*  console.log(this.state.modalImgActive); */
    }


    onOpenImg = (i) => {
        console.log('image was clicked');
        console.log(i);
        const {arrImg} = this.state;
        /* console.log(arrImg); */
        let newI = i - 1;
        let index = arrImg.findIndex(item => item.id === newI);
        let src = arrImg.map(item => item.src);
        let item = src[index];
        this.setState({modalSrc: item});  
    }

    /* addUserScore (userScore) {
        console.log('this worked addUserScore!');
        console.log(userScore);
    } */                                     /* рабочий способ переноса данных наверх */

    render () {
       
       const {arrImg, modalImgActive} = this.state;
       const modalImg = modalImgActive ? <ModalImg active={modalImgActive} setActive={this.setModalImgActive} modalSrc={this.state.modalSrc} /> : null;
       const itemArrImg = arrImg.map((item) => item.src);
      /*  console.log(itemArrImg); */
        return (
                <Router>
                    <div className='app-bg'>
                        <Header />
                        <Route path='/welcome' component={Welcome} />
                        <Route path='/randomBg' render={(props) => <RandomBg arrImg={arrImg} itemArrImg={itemArrImg} {...props} />} />
                        <Route path='/galleryBg' render={(props) => <GalleryBg arrImg={arrImg} itemArrImg={itemArrImg} active={modalImgActive} setActive={this.setModalImgActive} onOpenImg={this.onOpenImg} {...props} />} />
                        <Route path='/ratingBg' render={(props) => <RatingBg arrImg={arrImg}  /* onAdd={this.addUserScore} */ {...props} />} />
                    </div>
                    {modalImg}
                </Router>
            

        )
    }
}

