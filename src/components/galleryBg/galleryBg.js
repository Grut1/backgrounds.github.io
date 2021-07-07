import React, { Component } from 'react';

 

export default class GalleryBg extends Component {
    
    renderItems (itemArrImg ) {
        const {setActive, onOpenImg} = this.props;
        
        return itemArrImg.map((item, i=0) => {
            /* const {arrImg} = this.props;
            let index = arrImg. */
            i++
            return (
                <div key={i} className={`galleryBg-grid-item img${i}`} onClick={() => {setActive(); onOpenImg(i)}}>
                    <img src={item} alt="img" className="img-shadow" ></img>
                </div>
            )
        })
    }

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
        
        const itemArrImg = this.props.itemArrImg;
        /* console.log(arrImg); */
        
        const item = this.renderItems(itemArrImg);
        return (
             
                <div className="galleryBg-block" >
                    <h2>Look at all backgrounds in more detail</h2>
                    <div className="galleryBg-grid-items">
                        {item}
                    </div> 
                </div>
                
            
        )
    }
}

