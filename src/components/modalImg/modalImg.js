import React, { Component } from 'react';

export default class ModalImg extends Component {
    
    /* onOpenImg = (i) => {
        console.log('image was clicked');
        console.log(i);
        const {arrImg} = this.props;
        console.log(arrImg);
        let index = arrImg.findIndex(item => item.id === i);
        let src = arrImg.map(item => item.src);
        let item = src[index];
        console.log(item);
        
    } */

    render () {
        const { active, setActive, modalSrc } = this.props;
        
        

        return (
            <div className={active ? "modal-gallery active" : "modal-gallery"} onClick={() => setActive()} >
                <div className="modal-gallery-content fade2" onClick={e => e.stopPropagation()} >
                    <div className="modal-gallery-close" onClick={() => setActive()} >&times;</div>
                    <img src={modalSrc} alt="img" ></img>
                </div>	
            </div>
        )
    }
    
}

 