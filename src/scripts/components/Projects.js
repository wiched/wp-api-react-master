import DataStore from 'flux/stores/DataStore.js'

class Projects extends React.Component {
    render() {
        let pageData = DataStore.getAllPortfolio();
        return (
            <div>
            {
                pageData.map(pageData => {
                    return (
                        <div key={pageData.id.toString()}>
                        <h1>{pageData.title.rendered}</h1>

                        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                        <div><img src={`http://jordanov.info/zone/wp-content/uploads/${pageData.better_featured_image.media_details.file}`} alt=""/></div>
                        <div><img src={pageData.acf.project_gallery} alt=""/></div>
                        <div>{pageData.acf.project_description}</div>
                        <div>
                        <a href={pageData.acf.website_address}>{pageData.acf.website_address}</a>
                        </div>
                        <div>{
                            pageData.acf.technologies_used.map((technology) => {
                            if(technology === "HTML5")
                            return (  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" key={technology.toString()}/>
                            )
                            if (technology === "CSS3")
                            return (
                                <img src="https://www.javatpoint.com/csspages/images/css-tutorial.png" key={technology.toString()}/>
                            )
                            if (technology === "JavaScript") {
                            return ( <img src="http://i2.wp.com/blog.sklambert.com/wp-content/uploads/2013/05/JS6_Logo.png?resize=200%2C200" key={technology.toString()} alt=""/> )
                            }
                            if (technology === "jQuery") {
                            return ( <img src="http://www.onlywebpro.com/wp-content/uploads/2015/09/jquery-logo.jpg" key={technology.toString()} alt=""/> )
                            }
                            if (technology === "ReactJS") {
                                return ( <img src="https://www.react-jobs.com/public/assets/images/react.png" key={technology.toString()} alt=""/> )
                                }
                            if (technology === "WordPress") {
                                return ( <img src="https://www.activedemand.com/wp-content/uploads/wordpress-logo.png" key={technology.toString()} alt=""/> )
                                }
                            if (technology === "WooCommerce") {
                                return ( <img src="https://www.cmscritic.com/site/assets/files/5072/woocommerce_logo.png" key={technology.toString()} alt=""/> )
                                }
                            if (technology === "NodeJS") {
                                return ( <img src="http://www.topcode.io/wp-content/uploads/nodejs-square-200.png" key={technology.toString()} alt=""/> )
                                }
                            if (technology === "SASS") {
                                return ( <img src="http://bartlm.com/wp-content/uploads/2017/01/sass-200x200.png" key={technology.toString()} alt=""/> )
                                }
                            if (technology === "PUG") {
                                return ( <img src="https://d2.alternativeto.net/dist/icons/jade_101783.png?width=200&height=200&mode=crop&upscale=false" key={technology.toString()} alt=""/> )
                                }
                            })
                        }</div>
                        <div>
                        { pageData.acf.project_gallery.map(picture => (<img src={picture.project_picture} key={(Math.random() * 10).toString()} alt=""/>)) }
                        </div>

                    </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Projects;
