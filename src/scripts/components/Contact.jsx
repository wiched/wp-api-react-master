import DataStore from "flux/stores/DataStore.js";
import css from "./css/contact.css";

class Contact extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug("contact");

    return (
      <React.Fragment>
        <section className="height-100vh center-aligned">
          <img className="background-image" src={pageData.acf.banner_image} />
          <div className="title-text">{pageData.acf.banner_text}</div>
        </section>
        <div className="flex-grid">
          <div className="col center">
          <h2>Estimate your projecs</h2>
          <h4>Describe your business idea
          and let us do the rest</h4>
            <img
              src="https://www.indianic.com/wp-content/uploads/2017/10/client-logo-img.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <div className="container">
              <form
                action="https://formspree.io/lubo.jordanov@gmail.com"
                method="POST"
              >
                <ul className="flex-outer">
                  <li>
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="Enter your first name here"
                    />
                  </li>
                  <li>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Enter your last name here"
                    />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="_replyto"
                      placeholder="Enter your email here"
                    />
                  </li>
                  <li>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone-number"
                      placeholder="Enter your phone here"
                    />
                  </li>
                  <li>
                    <label htmlFor="phone">Budget</label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      placeholder="Enter your budget"
                    />
                  </li>
                  <li>
                    <label htmlFor="type">Project Type</label>
                    <select type="text" name="company-type">
                      <option value="">---</option>
                      <option value="Startup - Early Stage">
                        Startup - Early Stage
                      </option>
                      <option value="Startup - Late Stage">
                        Startup - Late Stage
                      </option>
                      <option value="Small or Medium-sized Business">
                        Small or Medium-sized Business
                      </option>
                      <option value="Non-profit">Non-profit</option>
                      <option value="Other">Other</option>
                    </select>
                  </li>
                  <li>
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Enter your message here"
                    />
                  </li>
                  <li>
                    <p>Services Needed</p>
                    <ul className="flex-inner">
                      <li>
                        <input
                          type="checkbox"
                          id="consulting"
                          name="consulting"
                        />
                        <label htmlFor="consulting">Consulting</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="webdevelopment"
                          name="webdevelopment"
                        />
                        <label htmlFor="webdevelopment">Web Development</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="webhosting"
                          name="webhosting"
                        />
                        <label htmlFor="webhosting">Web Hosting</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="websiteoptimization"
                          name="websiteoptimization"
                        />
                        <label htmlFor="websiteoptimization">
                          Website Optimization
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="other" name="other" />
                        <label htmlFor="other">Other service</label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button type="submit">Submit</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
      </React.Fragment>
    );
  }
}

export default Contact;
