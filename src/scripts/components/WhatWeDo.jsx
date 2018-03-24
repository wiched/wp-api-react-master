import DataStore from "flux/stores/DataStore.js";
import css from "./css/whatwedo.css";

class WhatWeDo extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug("what-we-do");

    return (
      <React.Fragment>

          <div id="services">
            <div className="container">
              <div className="services-boxes">
                <div className="lg-service-box">
                  <a href="/web">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon web-icon">
                        </div>
                        <h3>
                          Web<br /> Development
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <ul>
                          <li>Изграждане на нов уеб сайт</li>
                          <li>Ре-дизайн на съществуващ уеб сайт</li>
                          <li>Изграждане на уеб базирани системи</li>
                          <li>Поддръжка на уеб сайт</li>
                          <li>...и всичко останало свързано с уеб</li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lg-service-box gd-box">
                  <a href="/graphic">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon gd-icon">
                        </div>
                        <h3>
                          Graphic<br /> Design
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <p>
                          От изграждането на цялостният дизайн на уеб сайта, до
                          всеки един малък детайл и продукт. А защо не и лого,
                          банер, печатни материали, или цялостна фирмена
                          идентичност.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lg-service-box marketing-box">
                  <a href="/marketing">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon marketing-icon">
                        </div>
                        <h3>
                          Facebook<br /> Marketing
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <ul>
                          <li>
                            Изграждане на обложка и <br />профилно изображение
                          </li>
                          <li>Поддръжка на Facebook страници</li>
                          <li>
                            Концепция и развитие на <br />рекламни кампании
                          </li>
                          <li>
                            Дизайн на изображения съобразени <br />с препоръките
                            на Facebook
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lg-service-box mobile-box">
                  <a href="/mobile">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon mobile-icon">
                        </div>
                        <h3>
                         Mobile<br /> Solutions
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <ul>
                          <li>
                            Адаптивен/хибриден/мобилен <br />дизайн за Вашият
                            уеб сайт
                          </li>
                          <li>
                            Съобразени със съвременните <br />мобилни устройства
                          </li>
                          <li>
                            Концепция и изграждане на <br />мобилни приложения
                            за смартфони
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lg-service-box identity-box">
                  <a href="/identity">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon identity-icon">
                        </div>
                        <h3>
                          Web<br /> Identity
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <p>
                          Имате идея за съществуващ сайт?
                        </p>
                        <p>
                          Ние ще направим всичко вместо Вас!
                        </p>
                        <p>
                          Поверете Вашето онлайн присъствие в сигурни ръце!
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lg-service-box seo-box">
                  <a href="/seo">
                    <div className="lg-service-box-inner">
                      <div className="lg-service-box-title">
                        <div className="lg-service-box-icon seo-icon">
                        </div>
                        <h3>
                          SEO<br /> Optimization
                        </h3>
                      </div>
                      <div className="lg-service-box-content">
                        <ul>
                          <li>SEO одит на Вашият сайт</li>
                          <li>Анализ на конкуренцията</li>
                          <li>Подбор на ключови фрази</li>
                          <li>On-page оптимизация по сайта</li>
                          <li>Off-page оптимизация и линк билдинг</li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} /> */}
      </React.Fragment>
    );
  }
}

export default WhatWeDo;
