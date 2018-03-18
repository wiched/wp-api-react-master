import DataStore from "flux/stores/DataStore.js";

class About extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug("about");

    return (
      <div>
        <section className="height-100vh center-aligned">
          <img className="background-image" src={pageData.acf.banner_image} />
          <div className="title-text">{pageData.acf.banner_text}</div>
        </section>

        <div className="flex-grid">
          <div className="col inner-wrapper">
            <h1 className="center">What is FineDigital?</h1>
            <p>
              Such a simple question to ask. So many appropriate answers.
              Answers that everyone gives. The right answers. The expected
              answers. Such a complex question when you look behind the scenes.
              Behind the words, the lines and the s p a c e s between them.
              Behind the image, and the first impression, and the second or the
              third.
            </p>
            <br />
            <p className="center">
              <strong>
                FineDigital is not its promises. It’s not its location or its
                testimonials.
              </strong>
            </p>
          </div>
        </div>

        <div className="flex-grid inner-wrapper ">
          <div className="col ">
            <div className="image-effect">
              <div className="image-wrap">
                <img
                  src="https://www.indianic.com/wp-content/uploads/2016/10/JP-bg.png"
                  alt="Jigar Panchal"
                />
              </div>
            </div>
          </div>
          <div className="col self-center">
            <p>
              It’s the office filled at 3 am with people staying late. It’s the
              light in their eyes as they wipe their forehead. It’s the pat on
              the shoulder and the look they give each other when they offer
              their support to each other.
            </p>
            <br/>
            <p>
              It’s the takeaway during the break that brings them together, and
              their smile when they are asked how many hours they slept the
              previous night. It’s their dreams and hopes that each of them has
              buried deep inside and put aside every morning when they come
              back.
            </p>
            <br/>
            <p>
              It’s the mentors that inspire them every day by sharing their
              experience, and the look of pride on everyone’s face when they
              accomplish things together.
            </p>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
        <div>{pageData.acf.text}</div>
      </div>
    );
  }
}

export default About;
