import DataStore from 'flux/stores/DataStore.js'

class Portfolio extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('portfolio2');

        return (
            <div>
                <h2>Portfolio page template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>
        );
    }
}

export default Portfolio;
