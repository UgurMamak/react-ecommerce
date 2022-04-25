import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./index.scss";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux";

/* ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
); */

function AppWithCallbackAfterRender() {
  useEffect(() => {
    /* eslint-disable no-console */
    console.log("rendered");
    /* eslint-enable no-console */

    /* const assets = [
      "skytheme-ecommerce-html5-template/template/plugins/jquery/dist/jquery.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/bootstrap/dist/js/bootstrap.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/jquery-bar-rating/dist/jquery.barrating.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/owl-carousel/owl.carousel.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/gmap3.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/imagesloaded.pkgd.js",
      "skytheme-ecommerce-html5-template/template/plugins/isotope.pkgd.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/bootstrap-select/dist/js/bootstrap-select.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/jquery.matchHeight-min.js",
      "skytheme-ecommerce-html5-template/template/plugins/slick/slick/slick.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/elevatezoom/jquery.elevatezoom.js",
      "skytheme-ecommerce-html5-template/template/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/jquery-ui/jquery-ui.min.js",
      "https:/maps.googleapis.com/maps/api/js?key=AIzaSyAx39JFH5nhxze1ZydH-Kl8xXM3OK4fvcg&amp;region=GB",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/jquery.themepunch.tools.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/jquery.themepunch.revolution.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.video.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.navigation.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.parallax.min.js",
      "skytheme-ecommerce-html5-template/template/plugins/revolution/js/extensions/revolution.extension.actions.min.js",
      "skytheme-ecommerce-html5-template/template/js/main.js",
    ];

    assets.forEach((item) => {
      const script = document.createElement("script");
      script.src = item;
      script.type = "text/javascript";
      script.async = true;
      // script.onload = () => this.scriptLoaded();
      document.body.appendChild(script);
    }); */
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
