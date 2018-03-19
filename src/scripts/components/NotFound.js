import DataStore from 'flux/stores/DataStore.js'

class NotFound extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('404');

        return (
            <div className="center">
                <h1>404 - Page Not Found</h1>
                <img src="https://media1.tenor.com/images/ba972c8cd52bd89e1362954a9be68030/tenor.gif?itemid=5685323" alt=""/>
            </div>
        );
    }
}

export default NotFound;
