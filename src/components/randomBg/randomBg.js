import React, { Component } from 'react';

export default class RandomBg extends Component {
    constructor (props) {
        super(props);
        this.state = {
            arrImg: this.props.arrImg,
            showContent: false,
            imgIndex: null,
            img: false,
            count: 16,
            actualImage: null,
            shownArr: [],
            likedResult: false,
            likedResultBtn: false,
            sliceArr: [
                {src: '../img/bg_0.jpg', liked: false, disliked: false, id: 0}, 
                {src: '../img/bg_1.jpg', liked: false, disliked: false, id: 1}, 
                {src: '../img/bg_2.jpg', liked: false, disliked: false, id: 2}, 
                {src: '../img/bg_3.jpg', liked: false, disliked: false, id: 3}, 
                {src: '../img/bg_4.jpg', liked: false, disliked: false, id: 4}, 
                {src: '../img/bg_5.jpg', liked: false, disliked: false, id: 5}, 
                {src: '../img/bg_6.jpg', liked: false, disliked: false, id: 6}, 
                {src: '../img/bg_7.jpg', liked: false, disliked: false, id: 7}, 
                {src: '../img/bg_8.jpg', liked: false, disliked: false, id: 8},
                {src: '../img/bg_9.jpg', liked: false, disliked: false, id: 9}, 
                {src: '../img/bg_10.jpg', liked: false, disliked: false, id: 10}, 
                {src: '../img/bg_11.jpg', liked: false, disliked: false, id: 11}, 
                {src: '../img/bg_12.jpg', liked: false, disliked: false, id: 12}, 
                {src: '../img/bg_13.jpg', liked: false, disliked: false, id: 13}, 
                {src: '../img/bg_14.jpg', liked: false, disliked: false, id: 14},
                {src: '../img/bg_15.jpg', liked: false, disliked: false, id: 15}
            ]
        }
        this.onRenderRandomImg = this.onRenderRandomImg.bind(this);
        this.onShowImg = this.onShowImg.bind(this);
        this.onLikeConsole = this.onLikeConsole.bind(this);
        this.onDislikeConsole = this.onDislikeConsole.bind(this);
        this.onShowLikedItem = this.onShowLikedItem.bind(this);
        this.i = 0;
    }

    

    onRenderRandomImg () {
        let {count, sliceArr, shownArr} = this.state
        console.log(count);
            
        let imgIndex = Math.floor(Math.random() * count);
        console.log('this is imgIndex in render function ' + imgIndex);
        if (this.state.img) {
           
            const imgSrc = sliceArr.map((item) => item.src);
            const imgId = sliceArr.map((item) => item.id);

            if (count > 0) {
                let itemShownArr = sliceArr[imgIndex];
                let newItemShownArr = [...shownArr, itemShownArr];
                this.setState({shownArr: newItemShownArr});
            }

            let newImgIndex = imgIndex;

            let newCount = count-1;
            
            const actualArr = [...sliceArr.slice(0, imgIndex), ...sliceArr.slice(imgIndex + 1)] 
            /* console.log(actualArr); */
            
            /* console.log(imgId[imgIndex]);
            console.log(imgSrc[imgIndex]); */
            let elem = <div className="randomBg-select">
                    <img key={imgId[imgIndex]} src={imgSrc[imgIndex]} alt="imgshka" className="randomBg-img" ></img>
                </div>;
            this.setState({
                imgIndex: newImgIndex,
                sliceArr: actualArr,
                count: newCount,
                img: !this.state.img,
                actualImage: elem
            });
           
             
        } else {
            
            const imgSrc = sliceArr.map((item) => item.src);
            const imgId = sliceArr.map((item) => item.id);
            /* console.log(imgSrc[imgIndex]); */

            if (count > 0) {
                let itemShownArr = sliceArr[imgIndex];
                let newItemShownArr = [...shownArr, itemShownArr];
                this.setState({shownArr: newItemShownArr});
            }

            let newImgIndex = imgIndex;

            let newCount = count-1;
            
            const actualArr = [...sliceArr.slice(0, imgIndex), ...sliceArr.slice(imgIndex + 1)] 
            /* console.log(actualArr); */

            let elem = <div className="randomBg-select">
                    <img key={imgId[imgIndex]} src={imgSrc[imgIndex]} alt="imgshka" className="randomBg-img" ></img>
                </div>;

            this.setState({
                imgIndex: newImgIndex,
                sliceArr: actualArr, /* записывается новый массив без показанной картинки */
                count: newCount,
                img: !this.state.img,
                actualImage: elem, 
            });
              
        }
        
    }

    onShowImg () {
        this.setState({showContent: true})
        /* console.log('this work onShowImg'); 
        console.log(this.state.showContent);  */     
    }


    onLikeConsole () {

        console.log('This is like!');
        let { shownArr} = this.state;
        
        let oldItem = shownArr[this.i];
        let likedItem = {...oldItem, liked: true};
    
        shownArr = [...shownArr, likedItem]; /* новвый массив с  лайкнутой картинкой и старой картинкой с false*/
        
        let spliceShownArr = [...shownArr.splice(this.i, 1)]; /* вырезанная картинка с false */
        /* console.log(spliceShownArr); */
        let  newShownArr = shownArr;
        this.setState({shownArr: newShownArr});
        this.i++;

        
        /* console.log('this is imgIndex ' + imgIndex);
        console.log('this is likedItem ' + likedItemIndex);  */
        
        console.log(shownArr);
        
       
    }

    onDislikeConsole () {

        console.log('This is dislike!');
        let { shownArr} = this.state;
        
        let oldItem = shownArr[this.i];
        let likedItem = {...oldItem, disliked: true};
    
        shownArr = [...shownArr, likedItem]; /* новвый массив с  лайкнутой картинкой и старой картинкой с false*/
        
        let spliceShownArr = [...shownArr.splice(this.i, 1)]; /* вырезанная картинка с false */
        /* console.log(spliceShownArr); */
        let  newShownArr = shownArr;
        this.setState({shownArr: newShownArr});
        this.i++;
        
        /* console.log('this is imgIndex ' + imgIndex);
        console.log('this is likedItem ' + likedItemIndex);  */
        
        console.log(shownArr);

    }

    onShowLikedItem ({btnRandom}) {
        console.log('this is click onShowLikedItem');
        const {count, shownArr} = this.state;
        
        console.log(btnRandom);
        const likedItems = <div className="galleryBg-block">
                    <h2 className='liked-result'>Look your liked images</h2>
                    <div className="randomBg-grid-items">
                        <ShowLikedResult shownArr={shownArr} />
                    </div>
                    <h2 className='disliked-result'>...and disliked images'(╥ω╥)'</h2>
                    <div className="randomBg-grid-items">
                        <ShowDislikedResult shownArr={shownArr} />
                    </div>
                </div>;
        btnRandom = null;
        let newlikedResult = count < 0 ? likedItems : <h1>LikedResult not work!</h1> 
        this.setState({
            likedResult: newlikedResult,
            likedResultBtn: true,
        })
          
    }


    render () {
        const arrImg = this.props.arrImg;
        const {count, shownArr, likedResult, likedResultBtn} = this.state;
        /* console.log('this is count in render ' + count); */
        let liked = shownArr.filter(item => item.liked === true).length;
        let disliked = shownArr.filter(item => item.disliked === true).length;
       
        let btnRandom = <button 
                        className="glow-on-hover"
                        onClick={(event) => {this.onRenderRandomImg(); this.onShowImg(event)}}
                    >Random</button>;
        
        /* console.log('this render', this.state.img);  */
        
        let showStatusImg = this.state.showContent ? <StatusImg liked={liked} disliked={disliked} /> : null;
        let randomImg  = this.state.showContent ? this.state.actualImage : null;
        let showSvgLikeBtn = this.state.showContent ? <SvgLikeBtn  LDarrImg={arrImg} onClick={this.onLikeConsole} /> : null;
        let showSvgDislikeBtn = this.state.showContent ? <SvgDislikeBtn LDarrImg={arrImg} onClick={this.onDislikeConsole} /> : null;
        
        if (count < 0) {
            randomImg = <div className='all-images-text'>That was the last picture!</div>;
            showSvgLikeBtn = null;
            showSvgDislikeBtn = null;
            btnRandom = <BtnShowLikedImg onClick={this.onShowLikedItem} liked={liked} />;
            if (likedResultBtn) {
                btnRandom = null;
                randomImg = null;
            }
        }
        
        return (
            /* <h1>This is randomBg of the app</h1> */
            <div>
                <div className="randomBg-block">
                    <h2>Look at random backgrounds</h2>
                    {showStatusImg}
                    <div className="randomBg-img-area">
                        {randomImg}
                        {likedResult}
                    </div>
                    <div className="like-dislike">
                        {showSvgLikeBtn}
                        {showSvgDislikeBtn}
                    </div>
                    {btnRandom}
                </div>
            </div>
        )
    }
}

const StatusImg = ({liked, disliked}) => {
    
    return (
        <div className="counter-likes">You liked <span className="span-like">{liked}</span> backgrounds out of 16 and <span className="span-like">{disliked}</span> did't like</div>
    )
}

function BtnShowLikedImg (props) {
    return (
        <button 
            className="btn-show-like"
            onClick={props.onClick}
        
        >Show your like</button>
    )
}

const ShowLikedResult = ({shownArr}) => {
    const likedArr = shownArr.filter(item => item.liked === true);
    /* const dislikedArr = shownArr.filter(item => item.disliked === true); */
    console.log(likedArr);
    return likedArr.map((item, i=1) => {
        item = item.src;
        i++;
        return (
            <div>  
                <div key={i} className='galleryBg-grid-item'>
                    <img src={item} alt="img" className="img-shadow "></img>
                </div>
            </div>
            
        )
    })
}

const ShowDislikedResult = ({shownArr}) => {
    const dislikedArr = shownArr.filter(item => item.disliked === true);
    /* const dislikedArr = shownArr.filter(item => item.disliked === true); */
    console.log(dislikedArr);
    return dislikedArr.map((item, i=1) => {
        item = item.src;
        i++;
        return (
            <div>  
                <div key={i} className='galleryBg-grid-item'>
                    <img src={item} alt="img" className="img-shadow "></img>
                </div>
            </div>
            
        )
    })
}





function SvgLikeBtn (props) {
    

    return (
        <div className="like-btn" onClick={props.onClick}>
            <svg className="like-btn" fill='#1a9c1f' stroke='blue' strokeWidth="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/	1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  space="preserve"><g><g>
                <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g></g><g><g>
                <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    )
}

function SvgDislikeBtn (props) {
    return (
        <div className="dislike-btn" onClick={props.onClick}>
            <svg width='30px' fill='#ab1f1f' stroke='blue' strokeWidth="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/	1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  space="preserve"><g><g>
                <path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288h96V21.461C140.395,14.72,129.344,10.667,117.333,10.667z"/></g></g><g><g>
                <path d="M512,208c0-18.496-10.581-34.731-26.347-42.667c3.285-6.549,5.013-13.803,5.013-21.333
                c0-18.517-10.603-34.752-26.368-42.688c4.885-9.728,6.315-20.928,3.861-32.043C463.381,47.659,443.051,32,419.819,32H224
                c-13.995,0-35.968,4.416-53.333,12.608v228.651l2.56,1.301l61.44,133.12V480c0,3.243,1.472,6.315,3.989,8.341
                c0.683,0.512,16.512,12.992,38.677,12.992c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.981-85.333h131.776
                c28.715,0,53.141-21.248,55.637-48.363c1.387-15.211-3.691-29.824-13.653-40.725C506.923,232.768,512,220.821,512,208z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    )
}

/* function LikeDislike () {
    
    return (
        <div className="like-dislike">
            <SvgLikeBtn 
              
            />

            <SvgDislikeBtn />
        </div>
    )
}

function SvgLikeBtn () {
    

    return (
        <div className="like-btn">
            <SvgLike 
                
            />
        </div>
    )
}

function SvgLike () {
    return (
        <svg className="like-btn" fill='#1a9c1f' stroke='blue' strokeWidth="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/	1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  space="preserve"><g><g>
                <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z"/></g></g><g><g>
                <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    )
}

function SvgDislikeBtn () {
    return (
        <div className="dislike-btn">
            <SvgDislike />
        </div>
    )
}

function SvgDislike () {
    return (
        
        <svg width='30px' fill='#ab1f1f' stroke='blue' strokeWidth="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/	1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  space="preserve"><g><g>
            <path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288h96V21.461C140.395,14.72,129.344,10.667,117.333,10.667z"/></g></g><g><g>
            <path d="M512,208c0-18.496-10.581-34.731-26.347-42.667c3.285-6.549,5.013-13.803,5.013-21.333
            c0-18.517-10.603-34.752-26.368-42.688c4.885-9.728,6.315-20.928,3.861-32.043C463.381,47.659,443.051,32,419.819,32H224
            c-13.995,0-35.968,4.416-53.333,12.608v228.651l2.56,1.301l61.44,133.12V480c0,3.243,1.472,6.315,3.989,8.341
            c0.683,0.512,16.512,12.992,38.677,12.992c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.981-85.333h131.776
            c28.715,0,53.141-21.248,55.637-48.363c1.387-15.211-3.691-29.824-13.653-40.725C506.923,232.768,512,220.821,512,208z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    
    )
}

 */