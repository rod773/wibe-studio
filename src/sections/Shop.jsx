import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  right: 65%;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;
const Right = styled.div`
  /* width: 65%; */

  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = '' }) => {
  return (
    // x: 100, y: -100
    <Item
      data-scroll
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    // console.log(scrollingElement.scrollWidth);

    // console.log(pinWrapWidth, horizontalScrollLength, window.innerWidth);
    setTimeout(() => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', //locomotive-scroll
          scrub: true,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      gsap.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', //locomotive-scroll
          scrub: true,
          // markers: true,
          // anticipatePin: 1,
        },
        x: -pinWrapWidth,

        ease: 'none',
        // ease: 'slow(0.7, 0.7, false)',
      });
      ScrollTrigger.refresh();

      // ScrollTrigger.create({
      //   trigger: element,
      //   scroller: '.App',

      //   start: 'top top',
      //   end: 'bottom top',
      //   pin: true,
      //   // pinSpacing: false,
      //   markers: true,
      // });
    }, 1000);
    ScrollTrigger.refresh();

    return () => {};
  }, []);

  return (
    <Section data-scroll ref={ref} id="shop">
      <Title
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          duration: 3,
        }}
        data-scroll
        data-scroll-speed="-1"
      >
        New Collection
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We create our
          products using best quality material, including the use of some of the pure
          fabrics to make our products. All products are made using the best materials,
          from the finest cotton to the finest fabrics.
          <br /> <br />
          We have lots of different clothing options like shoes, jackets and dresses. Not
          only clothes but we also provide unique Jewellery as well. It is great for us to
          carry our new clothes all around the country and look different.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewellery" />
        <Product img={img9} title="Watches" />
        <Product img={img10} title="Special Edition" />
      </Right>

      {/* <Horizontal data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />

        <span />
      </Horizontal> */}
    </Section>
  );
};

export default Shop;