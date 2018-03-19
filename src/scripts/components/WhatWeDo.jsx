import DataStore from 'flux/stores/DataStore.js'

class WhatWeDo extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('what-we-do');

        return (
            <div>
                <h2>What We Do page template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />

            </div>
        );
    }
}

export default WhatWeDo;
