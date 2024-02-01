import React, { useRef, useEffect } from "react";
import styles from "./MainComponent.module.css";
import IdContainer from "../../images/IdContainer";
import Dirction from "../../images/Dirction";
const MainComponent = ({ subHeading, heading, data, arrowColor }) => {
  const titleRefs = useRef([]);

  useEffect(() => {
    // Get the maximum height among all title elements
    const titles = titleRefs.current.map(
      (ref) => ref.getBoundingClientRect().height
    );
    const maxTitleHeight = Math.max(...titles);

    // Set the maximum height to all title elements using the titleRefs
    titleRefs.current.forEach((ref) => {
      ref.style.height = `${maxTitleHeight}px`;
    });
  }, [data]);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.subHeading}>{subHeading}</h3>

        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.cards}>
          {data.map((el, id) => (
            <div
              key={id}
              className={`${styles.card} ${styles[`items-${data.length}`]}  ${
                data.length > 5 && styles[`items-5`]
              }`}
            >
              {" "}
              <div className={styles.idAndDirection}>
                <div className={styles.idContainer}>
                  <IdContainer color={el.idWrapperBg} />
                  <p className={styles.id}>
                    {id + 1 < 10 ? `0${id + 1}` : id + 1}.
                  </p>
                </div>

                <div
                  className={styles.arrow}
                  style={{ visibility: data.length === id + 1 && "hidden" }}
                >
                  <Dirction color={arrowColor} />
                </div>
              </div>
              <div className={styles.imgContainer}>
                <img src={el.img} alt="#" className={styles.img} />
              </div>
              <h4
                ref={(el) => (titleRefs.current[id] = el)}
                className={styles.title}
              >
                {el.title}
              </h4>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
