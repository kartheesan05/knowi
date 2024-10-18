import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import  styles from './Events.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

// import slider_image_1 from './images/image1.png';
// import slider_image_2 from './images/image2.png';
// import slider_image_3 from './images/image3.png';
// import slider_image_4 from './images/image4.png';
// import slider_image_5 from './images/image5.png';
// import slider_image_6 from './images/image6.png';
// import slider_image_7 from './assets/images/image7.png';

export const Events = () => {

  return (
    <div className={styles.container}>
      <div className={styles.containertitle}>EVENTS</div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        loop={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className={styles.eventcard}>
            <img src={"/eventimages/image1.png"} alt="slide_image" className="image-size"/>
            <div className={styles.eventdesc}>
              <div>Analytics Showdown</div>
              <br />
              An 2 day immersive data Analytics event featuring complex data set to create compelling visualizations and uncover meaningful insights
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.eventcard}>
            <img src={"/eventimages/image2.png"} alt="slide_image" className="image-size" />
            <div className={styles.eventdesc}>
              <div>Fresher stories</div>
              <br />
              Freshers Stories," a captivating event tailored for newcomers, unfolded in three stimulating rounds. The "Connections" round, blending accuracy and speed, had participants guess images, while "Picture Yourself" assessed problem-solving through brief pitches. In the final round, "Block and Tackle," articulation on assigned topics was key. The winners, receiving certificates from Dr. R. Anitha, Head of the Department, who commended their exceptional performance.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.eventcard}>
            <img src={"/eventimages/image3.png"} alt="slide_image" className={styles.imagesize} />
            <div className={styles.eventdesc}>
              <div>Developer Dungeons</div>
              <br />
              A fullstack development contest organized in partnership with TakeMyTickets
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.eventcard}>
            <img src={"/eventimages/image4.png"} alt="slide_image" className="image-size" />
            <div  className={styles.eventdesc}>
              <div>Data War Tech</div>
              <br />
              Create a prognostic model for precision
              In this dynamic one-day event, each participating team of three will be assigned a specific topic or domain, challenging their collaborative skills and machine learning expertise.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.eventcard}>
              <img src={"/eventimages/image5.png"} alt="slide_image" className="image-size" />
            <div className={styles.eventdesc}>
              <div>Honest Engineering Placements</div>
              <br />
              A truthful converse for seniors to juniors about their placement journey
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.eventcard}>
            <img src={"/eventimages/image6.png"} alt="slide_image" className="image-size" />
            <div className={styles.eventdesc}>
              <div >Venture Spark</div>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ab vero est cumque numquam minima delectus, molestias fugit. Asperiores soluta dolorem accusamus, sunt porro reiciendis dicta excepturi sint corporis a.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <hr styles={}></hr> */}
    </div>
  )
}

