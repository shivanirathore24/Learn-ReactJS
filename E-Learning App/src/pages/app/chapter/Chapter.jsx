import React from "react";
import styles from "./Chapter.module.css";

function Chapter() {
  return (
    <div>
      <h1>**CHAPTER TITLE**</h1>
      <h2>**CHAPTER DESCRIPTION**</h2>
      <p className={styles.para}>**CHAPTER**</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
