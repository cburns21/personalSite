import React from 'react'
import nested from './nested.js'


class Home extends React.Component {
    constructor(props){
        super(props)
    }

    goProjects = () => {
        this.props.history.push('/projects')
    }

    render() {
        return(
            <div className="home">`
                <div className="header">
                    <h1>
                        Caroline Burns
                    </h1>
                </div>
                <div className="contact">
                    <div className="row">
                        <img src='../email.png'></img>
                        321cburns@gmail.com
                    </div>
                    <div className="row">
                        <img src='linkedin.png'></img>
                        <a href='//www.linkedin.com/in/carolinehburns/'>carolinehburns</a>
                    </div>
                    <div className="row">
                        <img src='github.png'></img>
                        <a href='https://github.com/cburns21'>cburns21</a>
                    </div> 
                </div>
                <div>
                    <button onClick={this.goProjects}>My Projects</button>
                </div>
            </div>
        )
    }
}

export default Home 