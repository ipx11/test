import React, {Component} from 'react';

export default class CardLinks extends Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

        const linksList = profileLinks.map((link, index) => 
            <li key={index}>
                <a href="#">
                    <i className={`fa fa-${link}`}></i>
                </a>
            </li>
        );
        return (
            <div className='card-scocial-links'>
                <ul className='social-links'>
                    {linksList}
                </ul>
            </div>
        )
    }
}