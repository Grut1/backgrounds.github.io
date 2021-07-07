import React, { Component } from 'react';

export default class RatingBg extends Component {
    constructor (props) {
        super(props);
        this.state = {
            scoreArr: [],
            submit: false,
            resultBtn: false,
            arrImg: [
                {src: '../img/bg_0.jpg', liked: false, disliked: false, scoreUser: null, id: 0}, 
                {src: '../img/bg_1.jpg', liked: false, disliked: false, scoreUser: null, id: 1}, 
                {src: '../img/bg_2.jpg', liked: false, disliked: false, scoreUser: null, id: 2}, 
                {src: '../img/bg_3.jpg', liked: false, disliked: false, scoreUser: null, id: 3}, 
                {src: '../img/bg_4.jpg', liked: false, disliked: false, scoreUser: null, id: 4}, 
                {src: '../img/bg_5.jpg', liked: false, disliked: false, scoreUser: null, id: 5}, 
                {src: '../img/bg_6.jpg', liked: false, disliked: false, scoreUser: null, id: 6}, 
                {src: '../img/bg_7.jpg', liked: false, disliked: false, scoreUser: null, id: 7}, 
                {src: '../img/bg_8.jpg', liked: false, disliked: false, scoreUser: null, id: 8},
                {src: '../img/bg_9.jpg', liked: false, disliked: false, scoreUser: null, id: 9}, 
                {src: '../img/bg_10.jpg', liked: false, disliked: false, scoreUser: null, id: 10}, 
                {src: '../img/bg_11.jpg', liked: false, disliked: false, scoreUser: null, id: 11}, 
                {src: '../img/bg_12.jpg', liked: false, disliked: false, scoreUser: null, id: 12}, 
                {src: '../img/bg_13.jpg', liked: false, disliked: false, scoreUser: null, id: 13}, 
                {src: '../img/bg_14.jpg', liked: false, disliked: false, scoreUser: null, id: 14},
                {src: '../img/bg_15.jpg', liked: false, disliked: false, scoreUser: null, id: 15}
            ]
        }
        this.OnValueChange = this.OnValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addUserScore = this.addUserScore.bind(this);
    }

    /* componentDidUpdate () {
        this.addUserScore();

    } */

    OnValueChange (e, id) {
        const arrImg = this.state.arrImg;
        const {scoreArr} = this.state;
        
        const index = arrImg.findIndex(elem => elem.id === id); /* index инпута, в которыйй вводят результат */
        const oldItem = arrImg[index];
        let userRate = e.target.value;
        const newItem = {...oldItem, scoreUser: userRate}; 
        const newScoreArr = [...scoreArr, newItem];
        
        const actualScoreArr = newScoreArr;
        
        if (actualScoreArr.length === 23) {
            
            this.setState({
                resultBtn: true
            })
        }
      
        this.setState({
            scoreArr: actualScoreArr,
            
        })
        
        /* if (newItem.scoreUser.length === 2) {
            console.log('if woooork!!');
            console.log('if >>>> 1');
            const spliceItem = [newScoreArr.splice(index - 1, 1)];
            console.log(userRate);
            console.log(index);
            console.log(spliceItem);
            
            const actualScoreArr = newScoreArr;
      
            this.setState({
                scoreArr: actualScoreArr,
            })
        } else {
            console.log('if no work');
            console.log('if ==== 1');
            console.log(userRate);
            const actualScoreArr = newScoreArr;

            this.setState({
                scoreArr: actualScoreArr,
            })
        }
 */
        
    }

    onSubmit (e) {
        e.preventDefault();
        /* здесь рендерится юзерская часть с ответами на основе полученного массива из score в state */
        /* нужно будет сделать порядок картинок в массиве оценок пользователя по id */
        const {scoreArr} = this.state;
        console.log(scoreArr);
        scoreArr.map((item, i) => {
            if (item.scoreUser.length === 2) {
                const spliceItem = [scoreArr.splice(i - 1, 1)];
            }
        })
        /* console.log(scoreArr); */
        const sortScoreArr = scoreArr.sort((a, b) => a.id - b.id);
        /* console.log(sortScoreArr); */

        this.setState({
            submit: true,
        })

        
    }
     
    renderUserItems (arrImg) {
        const {scoreArr, submit} = this.state;
        return arrImg.map((item) => {
            const {id, src} = item;
            
            const scoreArrItem = scoreArr.map(item => item.scoreUser);
            const index = scoreArr.findIndex(item => item.id === id);

            const userInput = <div key={id}  className="ratingBg-item">
                                <div  className="ratingBg-block">
                                    <img src={src} alt="img" className="rating-img img-shadow"></img>
                                </div>
                                <input type="text" className="input-user-rate" onChange = {(e) => this.OnValueChange(e, id)} required></input>
                            </div>;

            const userResult = <div key={id}  className="ratingBg-item">
                                    <div  className="ratingBg-block">
                                        <img src={src} alt="img" className="rating-img img-shadow"></img>
                                    </div>
                                    <div className="user-rate-result">{scoreArrItem[index]}</div>
                                </div>;
            
            const userRateArea = submit ? userResult : userInput;                    
            /* const userRateArea = submit ? console.log('submit - true') : console.log('submit - false'); */
            return (
                [userRateArea]
            )
        })
    }

    

    renderAutorItems (itemArrImg) {
        const authorScore = [12, 5, 6, 9, 1, 4, 10, 3, 7, 15, 11, 8, 2, 13, 14, 16];
         console.log(authorScore);
        const {scoreArr}   = this.state;
        const scoreUser = scoreArr.map(item  => item.scoreUser);
        console.log(scoreUser);
        /* console.log(scoreArr); */ /* приходит отфильтрованный массив по пользовательской оценке */
        
        return itemArrImg.map((item, i=0) => {
            const rightResult = <div className="block-color-result-right">right (≧◡≦)</div>;
            const wrongResult = <div className="block-color-result-wrong">wrong (╥﹏╥)</div>;
            const result = authorScore[i] == scoreUser[i] ? rightResult : wrongResult;
            /* console.log(authorScore); */
            /* console.log(scoreUser); */
            return (
                <div key={i} className="ratingBg-item">
                    {result}
                    <div className="autor-rate-block">{authorScore[i]}</div>
                    <div  className="ratingBg-block">
                        <img src={item} alt="img" className="rating-img img-shadow"></img>
                    </div>
                </div>
            )
        })
    }

    addUserScore () {
        console.log('this worked addUserScore!');
        
        
        /* console.log(scoreUserArr); */
        
    }

    render () {
        
        const {submit, resultBtn, arrImg} = this.state;
        const itemArrImg = arrImg.map((item) => item.src);

        const itemUser = this.renderUserItems(arrImg);
        const itemAuthor =  submit ? this.renderAutorItems(itemArrImg) : null;
        const submitBtn = <input type="submit" value="show result!" className="show-result"></input>;
        const showResultBtn = <button className='show-result-active' /* onClick={this.addUserScore} */>show result!</button>
        const resultButton = resultBtn ? showResultBtn : submitBtn;

        return (
            <form className="ratingBg-block" onSubmit={this.onSubmit}>
                <h2>Rating backgrounds!</h2>
                <div className="ratingBg-descr">Try to rate each background from 1 to 16 (where 1 is the best image and 16 is the worst of the best) and compare your opinion with the opinion of the author of the application!</div>

                <div className="grid-container">

                    <div className="user-rating">
                        <div className="ratingBg-items">
                            {itemUser}
                        </div>
                    </div>
                     
                     <div className= {submit ? "autor-rating op1" : "autor-rating op0"}>
                        <div className="ratingBg-items">
                            {itemAuthor}
                        </div>
                    </div>
                     {resultButton}
                </div>
                
            </form>
        )
    }
}

