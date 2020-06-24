import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Box.module.css";

const Box = ({ title }) => {
  let box1 = useRef(null);
  let box2 = useRef(null);

  useEffect(() => {
    gsap.from([box1, box2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.1,
      },
    });
  }, [box1, box2]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappingBox}>
        <div className={styles.boxLeft} ref={(el) => (box1 = el)}>
          <p>The custom page transition</p>
          <p>{title}</p>
        </div>
        <div className={styles.boxRight} ref={(el) => (box2 = el)}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            eos quae dolor ipsa autem delectus maxime rem molestias animi vero
            aperiam ratione quaerat possimus maiores. Possimus error repudiandae
            corporis dolore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
