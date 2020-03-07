import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main_page">
                <div id="particle-js"></div>
                <header>
                    <a href="#">Подписка</a>
                    <div id="main_page_logo">
                        <img src="images/logo.png" alt="" />
                        <span>Александр Осадин</span>
                    </div>
                </header>
                <div id="main_page_square"></div>
                <h1>Обучение <span>в мире программирования</span></h1>
                <div id="main_page_btn"><a href="#">Начать</a></div>
                <div id="main_page_play">
                    <a href="#">
                        <p>Узнать <br />подробнее</p>
                    </a>
                </div>
                <div id="main_page_web">
                    <p>WEB-DEVELOPMENT</p>
                </div>
                <div id="flower"></div>
            </div>
        )
    }

}

export default Home