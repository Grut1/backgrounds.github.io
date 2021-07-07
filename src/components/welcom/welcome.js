import React, { Component } from 'react';

export default class Welcome extends Component {
    
    state = {
        click: true,
    }
    onHoldBtn = () => {
        console.log('was clicked');
        this.setState({
            click: !this.state.click,
        })
        console.log(this.state.click);
    }
    render () {


        return (
            <div className='welcome'>
                <h1 className='welcome-h1'>Welcome</h1> 
                
                <SvgActive click={this.state.click} />
                <button className='welcome-btn' onClick={() => this.onHoldBtn()}>Click me!</button>
            </div>
        )
      }
}


const SvgActive = ({click}) => {
    
    const lg = <linearGradient id="linear-gradient-lg"  fy="0" gradientTransform="rotate(180 .5 .5)" >
                    <stop offset="5%" stopColor="black" className=''>
                        {/* <animate attributeName="offset" dur="2s" values="1;0" repeatCount="indefinite"  /> */}
                    </stop>
                    <stop offset="10%" stopColor="red" className=''>
                        <animate attributeName="offset" dur="2s" values="1;0;1" repeatCount="indefinite" />
                    </stop>
                    <stop offset="15%" stopColor="black" className=''/>
                    <stop offset="20%" stopColor="#ff7300" className=''/>
                    <stop offset="25%" stopColor="black" className=''/>
                    <stop offset="30%" stopColor="#fffb00" className=''/>
                    <stop offset="40%" stopColor="#48ff00" className=''/>
                    <stop offset="50%" stopColor="#00ffd5" className=''/>
                    <stop offset="60%" stopColor="#002bff" className=''/>
                    <stop offset="70%" stopColor="#7a00ff" className=''/>
                    <stop offset="75%" stopColor="black" className=''/>
                    <stop offset="80%" stopColor="#ff00c8" className=''/>
                    <stop offset="85%" stopColor="black" className=''/>
                    <stop offset="100%" stopColor="red" className=''/>
                </linearGradient>;
    const blackSvg = <linearGradient id="linear-gradient-lg">
                    <stop offset="100%" stopColor="black"/>
                </linearGradient>;
    const lgActive = click ? blackSvg : lg;
    return (
        <div className='center-block'>
            <svg className={click ? 'welcome-svg' : 'welcome-svg-active'} id="Capa_1" enableBackground="new 0 0 512 512" height="400" viewBox="0 0 512 512" width="400" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#linear-gradient-lg)" d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-178.977 58.779c-5.151 0-10.096.886-14.705 2.496v-23.389h29.322v23.359c-4.583-1.59-9.498-2.466-14.617-2.466zm-143.753-20.893h99.049v61.515c0 33.919-27.595 61.515-61.515 61.515h-37.534c-33.919 0-61.515-27.596-61.515-61.515s27.596-61.515 61.515-61.515zm188.371 61.515v-61.515h95.823c33.919 0 61.515 27.596 61.515 61.515s-27.595 61.515-61.515 61.515h-34.308c-33.92 0-61.515-27.596-61.515-61.515zm98.66-91.467c-.943-.029-289.468-.017-290.678.031 40.656-34.266 91.567-52.945 145.357-52.945 53.774 0 104.671 18.668 145.321 52.914zm14.485 332.892c-42.686 42.686-99.439 66.194-159.806 66.194s-117.12-23.508-159.806-66.194-66.194-99.439-66.194-159.806c0-13.207 1.125-26.241 3.33-38.993 15.355 29.046 45.882 48.888 80.96 48.888h37.534c49.093 0 89.276-38.859 91.419-87.433h.096c0-8.107 6.597-14.704 14.705-14.704s14.705 6.597 14.705 14.704h.009c2.143 48.574 42.326 87.433 91.419 87.433h34.308c34.628 0 64.824-19.333 80.365-47.772 2.079 12.397 3.15 25.054 3.15 37.877 0 60.367-23.508 117.12-66.194 159.806z"/><path fill="url(#linear-gradient-lg)" d="m117.046 310.757c0 76.619 62.334 138.954 138.954 138.954s138.954-62.335 138.954-138.954v-15h-277.908zm138.954 108.954c-31.412 0-59.758-13.368-79.661-34.709h159.322c-19.903 21.34-48.249 34.709-79.661 34.709zm107.925-93.954c-1.421 10.272-4.285 20.089-8.371 29.245h-199.108c-4.086-9.156-6.95-18.973-8.371-29.245z"/></g>
            {lgActive}
            </svg>
        </div>
    )
}


function Svg () {
    return (
        <div>
            <svg className='welcome-svg' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 368 368" space="preserve"><g><g><g>
                    <path d="M261.336,258.04c-3.304-2.952-8.352-2.672-11.296,0.624C233.352,277.312,209.28,288,184,288, c-25 28,0-49.352-10.688-66.04-29.336c-2.944-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296 C125.76,291.368,154.176,304,184,304c29.832,0,58.24-12.64,77.96-34.664C264.904,266.04,264.624,260.984,261.336,258.04z"/>
			        <path d="M344,80h-8.304C301.312,29.856,244.976,0,184,0C123.016,0,66.68,29.856,32.304,80H24C10.768,80,0,90.768,0,104v80 c0,101.456,82.544,184,184,184c101.464,0,184-82.544,184-184v-80C368,90.768,357.232,80,344,80z M184,16 c51.904,0,100.112,23.704,131.856,64H52.152C83.88,39.704,132.088,16,184,16z M184,352c-80.928,0-148.656-57.528-164.488-133.832 C25.528,221.792,32.48,224,40,224h80c22.056,0,40-17.944,40-40v-24h48v24c0,22.056,17.944,40,40,40h80 c7.52,0,14.472-2.208,20.488-5.832C332.656,294.472,264.928,352,184,352z M352,184c0,13.232-10.768,24-24,24h-80 c-13.232,0-24-10.768-24-24v-24c0-8.824-7.176-16-16-16h-48c-8.824,0-16,7.176-16,16v24c0,13.232-10.768,24-24,24H40 c-13.232,0-24-10.768-24-24v-80c0-4.408,3.592-8,8-8h320c4.416,0,8,3.592,8,8V184z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
        </div>
    )
}