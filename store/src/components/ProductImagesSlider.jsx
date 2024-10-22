import Slider from 'react-slick'

function ProductImagesSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div>
        <img width={200} src="/default_img.png" alt="default image" />
      </div>
    </Slider>
  )
}

export default ProductImagesSlider
