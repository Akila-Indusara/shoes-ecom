import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import {Link, useNavigate} from "react-router-dom";
import ProductCard from "../ProductCard.jsx";
import products from "../../assets/mens.json";
import articles from "../../assets/articles.json";
import ArticleCard from "../ArticleCard.jsx";


function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center">
            <div className="container">

                {/*banner*/}
                <div className="md:px-20">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {/* Hero Images */}
                            <img className="sm:hidden object-cover" src="/shoes-ecom/images/banner_m.jpg" alt="banner"/>
                            <img className="max-sm:hidden object-cover" src="/shoes-ecom/images/banner.jpg" alt="banner"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/green-shoes" className="block">
                                <img className="sm:hidden object-cover" src="/shoes-ecom/images/banner_sale_m.jpg" alt="banner"/>
                                <img className="max-sm:hidden object-cover" src="/shoes-ecom/images/banner_sale.jpg" alt="banner"/>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sm:hidden object-cover" src="/shoes-ecom/images/banner_m_placeholder.jpg"
                                 alt="banner"/>
                            <img className="max-sm:hidden object-cover" src="/shoes-ecom/images/banner_placeholder.jpg"
                                 alt="banner"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/*latest*/}
                <div className="md:px-10">
                    <h1 className="px-2 text-2xl font-bold my-5">Newest Arrivals</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                            1440: {slidesPerView: 4}
                        }}
                        navigation
                        pagination={{clickable: true}}
                        modules={[Navigation, Pagination]}
                    >
                        {products.map(brand =>
                            Object.keys(brand).map(brandName => (
                                brand[brandName].slice(-2).map(product => (
                                    <SwiperSlide key={product.name}>
                                        <div className="m-3 mb-10"
                                             onClick={() => navigate(`/category/men/${product.name}`,
                                                 { state: { item: product } })}>
                                            <ProductCard product={product}/>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ))
                        )}
                    </Swiper>
                </div>

                <div className="py-5 md:px-20">
                    <Link to="/running-shoes" className="block">
                        <img className="sm:hidden object-cover" src="/shoes-ecom/images/shoe_banner_m.jpg" alt="banner"/>
                        <img className="max-sm:hidden object-cover" src="/shoes-ecom/images/shoe_banner.jpg" alt="banner"/>
                    </Link>
                </div>

                {/*articles*/}
                <div className="md:px-10">
                    <h1 className="px-2 text-2xl font-bold my-5">Related Articles</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                            1440: {slidesPerView: 4}
                        }}
                        navigation={true}
                        pagination={{clickable: true}}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {articles.map(article => (

                            <SwiperSlide key={article.title}>
                                <ArticleCard article={article}/>
                            </SwiperSlide>

                            )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default HomePage
