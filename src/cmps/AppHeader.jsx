
import { Component } from 'react'
import { MenuBar } from './MenuBar'
import Hamburger from 'hamburger-react'


export class AppHeader extends Component {
    state = {
        isMenuOpen: false,
    }
    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    render() {
        return (
            <div className="main-container">
                <header className="app-header">
                    <div className="logo">IFrame</div>
                    <nav className="main-nav">
                        <span onClick={this.toggleMenu} className="menu-bar"><Hamburger /></span>
                    </nav>
                </header>
                {this.state.isMenuOpen && <MenuBar />}
            </div>
        )
    }
}

