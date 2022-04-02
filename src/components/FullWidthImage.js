import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 800,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0 margin-bottom-0"
        style={{
          // display: "grid",
          alignItems: "center",
          height: "100vh"
        }}
      >{title && (
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            // boxShadow:
            //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "white",
            color: "#655",
            lineHeight: "1",
            fontSize: "5em",
            padding: "0.25em",
            textAlign: 'center'
          }}
        >
          {title}
        </h1>
      )}
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            // objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // height: "100vh",
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            // aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {subheading && (
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              // boxShadow:
              //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                // backgroundColor: "#8300E9",
              color: "#656",
              lineHeight: "1",
              padding: "0.25rem",
              marginTop: "0.5rem",
              textAlign: 'center'
            }}
          >
            {subheading}
          </h3>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
