import DataStore from 'flux/stores/DataStore.js'

class WeWorkWith extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('we-work-with');

        return (
            <div>
                <h2>We Work With page template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />

            </div>
        );
    }
}

export default WeWorkWith;
