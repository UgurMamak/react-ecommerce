import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  const assets = [
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


  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:300,400,700%7CMontserrat:300,400,500,600,700,800,900" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/ps-icon/style.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/bootstrap/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/owl-carousel/assets/owl.carousel.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/slick/slick/slick.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/bootstrap-select/dist/css/bootstrap-select.min.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/Magnific-Popup/dist/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/jquery-ui/jquery-ui.min.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/revolution/css/settings.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/revolution/css/layers.css"
        />
        <link
          rel="stylesheet"
          href="skytheme-ecommerce-html5-template/template/plugins/revolution/css/navigation.css"
        />


        <Script src="skytheme-ecommerce-html5-template/template/plugins/jquery/dist/jquery.min.js"></Script>
        <Script src="skytheme-ecommerce-html5-template/template/plugins/bootstrap/dist/js/bootstrap.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {
          assets.forEach((item) => {
            <Script src={item}></Script>
          })
        }
      </body>
    </Html>
  )
}