import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'
import css from './css/header.css';

class Header extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (

            <nav className="navBar">
                <nav className="wrapper">
                    <div className="logo"></div>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="label-toggle"></label>
                    <ul>
                    <li key="home"><Link to="/" >Home</Link></li>

                {allPages.map((page) => {
                    if(page.slug != 'home'){
                       return(
                        <li key={page.slug.toString()}>
                            <Link
                            key={page.id}
                                to={`/${page.slug}`}

                            >
                                {page.title.rendered}
                            </Link>
                            </li>
                        )
                   }
                })}
                    </ul>
                    <div className="menu-free-estimate">
      <a href="/enquiry/" className="free-estimate-btn">
        <p>FREE Estimation</p>
        <span>Response in 24 hours</span>
      </a>
    </div>
                </nav>
            </nav>

        );
    }
}

export default Header;