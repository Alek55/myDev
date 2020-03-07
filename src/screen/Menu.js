import React, {Component} from 'react'

class Menu extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        menuClassName: this.props.className,
        items: [
            {name: 'Главная', link: '/'},
            {name: 'Видео', link: '/video'},
            {name: 'Обо мне', link: '/about'},
        ],
        social: [
            {bg: 'vk.png', link: 'vk.com/osadin'},
            {bg: 'yt.png', link: 'youtube.com'},
        ]
    }

    changeBg = (e) => {
        e.preventDefault()
        this.setState({
            menuClassName: !this.state.menuClassName
        })
    }

    searchLessons = (event) => {
        const val = event.target.value
    }

    render() {
        return (
            <div id="menu">
                <div id="innerMenu" className={this.state.menuClassName ? 'black': false}>
                    <a onClick={this.changeBg} className="menu" href='../images/menu.png'></a>
                    <ul>
                        {this.state.items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="#">{item.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <div id="search">
                        <input type="text" name="search" placeholder="Поиск по урокам" onChange={this.searchLessons} />
                    </div>
                    <div id="social">
                        {this.state.social.map((soc, index) => {
                            return (
                                <a key={index} target="_blank" href={soc.link}></a>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default Menu