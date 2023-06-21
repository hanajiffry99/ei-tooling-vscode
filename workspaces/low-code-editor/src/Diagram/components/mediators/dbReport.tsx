/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
  model: Circle;
}

export function DBReport(props: SquareProps) {
  const { model } = props;

  const viewState = model.viewState;
  const components: JSX.Element[] = [];

  model.children.forEach((child) => {
    components.push(getComponent(child.type, { model: child }));
  });

  return (
    <>
      <svg
        x={viewState.bBox.x}
        y={viewState.bBox.y}
        width={viewState.bBox.r * 2}
        height={viewState.bBox.r * 2}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="#008234" />
        <path
          d="M209.841 523H199.528V493.909H209.926C212.852 493.909 215.371 494.491 217.483 495.656C219.595 496.812 221.219 498.473 222.355 500.642C223.501 502.811 224.074 505.405 224.074 508.426C224.074 511.456 223.501 514.061 222.355 516.239C221.219 518.417 219.585 520.088 217.455 521.253C215.333 522.418 212.795 523 209.841 523ZM205.679 517.73H209.585C211.403 517.73 212.933 517.408 214.173 516.764C215.423 516.111 216.361 515.102 216.986 513.739C217.62 512.366 217.938 510.595 217.938 508.426C217.938 506.277 217.62 504.52 216.986 503.156C216.361 501.793 215.428 500.789 214.188 500.145C212.947 499.501 211.418 499.179 209.599 499.179H205.679V517.73ZM228.63 523V493.909H240.278C242.418 493.909 244.203 494.226 245.633 494.861C247.063 495.495 248.138 496.376 248.857 497.503C249.577 498.62 249.937 499.908 249.937 501.366C249.937 502.503 249.71 503.502 249.255 504.364C248.8 505.216 248.175 505.917 247.38 506.466C246.594 507.006 245.694 507.389 244.681 507.616V507.901C245.789 507.948 246.826 508.26 247.792 508.838C248.767 509.416 249.558 510.225 250.164 511.267C250.77 512.299 251.073 513.53 251.073 514.96C251.073 516.504 250.69 517.882 249.923 519.094C249.165 520.296 248.043 521.248 246.556 521.949C245.069 522.65 243.237 523 241.059 523H228.63ZM234.781 517.972H239.795C241.509 517.972 242.759 517.645 243.545 516.991C244.331 516.329 244.724 515.448 244.724 514.349C244.724 513.545 244.53 512.834 244.141 512.219C243.753 511.603 243.199 511.12 242.479 510.77C241.769 510.42 240.922 510.244 239.937 510.244H234.781V517.972ZM234.781 506.082H239.34C240.183 506.082 240.931 505.936 241.585 505.642C242.247 505.339 242.768 504.913 243.147 504.364C243.535 503.814 243.729 503.156 243.729 502.389C243.729 501.338 243.355 500.491 242.607 499.847C241.869 499.203 240.817 498.881 239.454 498.881H234.781V506.082ZM264.333 523V493.909H270.484V517.929H282.955V523H264.333ZM296.773 523.426C294.566 523.426 292.658 522.957 291.048 522.02C289.448 521.073 288.212 519.757 287.341 518.071C286.47 516.376 286.034 514.411 286.034 512.176C286.034 509.922 286.47 507.953 287.341 506.267C288.212 504.572 289.448 503.256 291.048 502.318C292.658 501.371 294.566 500.898 296.773 500.898C298.979 500.898 300.883 501.371 302.483 502.318C304.093 503.256 305.333 504.572 306.205 506.267C307.076 507.953 307.511 509.922 307.511 512.176C307.511 514.411 307.076 516.376 306.205 518.071C305.333 519.757 304.093 521.073 302.483 522.02C300.883 522.957 298.979 523.426 296.773 523.426ZM296.801 518.739C297.805 518.739 298.643 518.455 299.315 517.886C299.988 517.309 300.494 516.523 300.835 515.528C301.186 514.534 301.361 513.402 301.361 512.134C301.361 510.865 301.186 509.733 300.835 508.739C300.494 507.744 299.988 506.958 299.315 506.381C298.643 505.803 297.805 505.514 296.801 505.514C295.788 505.514 294.936 505.803 294.244 506.381C293.563 506.958 293.046 507.744 292.696 508.739C292.355 509.733 292.185 510.865 292.185 512.134C292.185 513.402 292.355 514.534 292.696 515.528C293.046 516.523 293.563 517.309 294.244 517.886C294.936 518.455 295.788 518.739 296.801 518.739ZM321.304 523.426C319.098 523.426 317.189 522.957 315.58 522.02C313.979 521.073 312.743 519.757 311.872 518.071C311.001 516.376 310.565 514.411 310.565 512.176C310.565 509.922 311.001 507.953 311.872 506.267C312.743 504.572 313.979 503.256 315.58 502.318C317.189 501.371 319.098 500.898 321.304 500.898C323.51 500.898 325.414 501.371 327.014 502.318C328.624 503.256 329.865 504.572 330.736 506.267C331.607 507.953 332.043 509.922 332.043 512.176C332.043 514.411 331.607 516.376 330.736 518.071C329.865 519.757 328.624 521.073 327.014 522.02C325.414 522.957 323.51 523.426 321.304 523.426ZM321.332 518.739C322.336 518.739 323.174 518.455 323.847 517.886C324.519 517.309 325.026 516.523 325.366 515.528C325.717 514.534 325.892 513.402 325.892 512.134C325.892 510.865 325.717 509.733 325.366 508.739C325.026 507.744 324.519 506.958 323.847 506.381C323.174 505.803 322.336 505.514 321.332 505.514C320.319 505.514 319.467 505.803 318.776 506.381C318.094 506.958 317.578 507.744 317.227 508.739C316.886 509.733 316.716 510.865 316.716 512.134C316.716 513.402 316.886 514.534 317.227 515.528C317.578 516.523 318.094 517.309 318.776 517.886C319.467 518.455 320.319 518.739 321.332 518.739ZM341.46 516.722L341.474 509.463H342.355L349.344 501.182H356.29L346.901 512.148H345.466L341.46 516.722ZM335.977 523V493.909H342.028V523H335.977ZM349.614 523L343.193 513.497L347.227 509.222L356.702 523H349.614ZM373.25 513.71V501.182H379.301V523H373.491V519.037H373.264C372.772 520.315 371.953 521.343 370.807 522.119C369.67 522.896 368.283 523.284 366.645 523.284C365.187 523.284 363.903 522.953 362.795 522.29C361.688 521.627 360.821 520.685 360.196 519.463C359.58 518.241 359.268 516.778 359.259 515.074V501.182H365.31V513.994C365.319 515.282 365.665 516.3 366.347 517.048C367.028 517.796 367.942 518.17 369.088 518.17C369.817 518.17 370.499 518.005 371.134 517.673C371.768 517.332 372.279 516.83 372.668 516.168C373.065 515.505 373.259 514.686 373.25 513.71ZM384.141 531.182V501.182H390.107V504.847H390.377C390.642 504.259 391.026 503.663 391.528 503.057C392.039 502.441 392.702 501.93 393.516 501.523C394.34 501.106 395.363 500.898 396.585 500.898C398.175 500.898 399.643 501.314 400.988 502.148C402.333 502.972 403.407 504.217 404.212 505.884C405.017 507.541 405.42 509.619 405.42 512.119C405.42 514.553 405.027 516.608 404.241 518.284C403.464 519.951 402.404 521.215 401.059 522.077C399.724 522.929 398.228 523.355 396.57 523.355C395.396 523.355 394.397 523.161 393.573 522.773C392.759 522.384 392.091 521.897 391.57 521.31C391.049 520.713 390.652 520.112 390.377 519.506H390.192V531.182H384.141ZM390.065 512.091C390.065 513.388 390.245 514.52 390.604 515.486C390.964 516.452 391.485 517.205 392.167 517.744C392.849 518.275 393.677 518.54 394.653 518.54C395.638 518.54 396.471 518.27 397.153 517.73C397.835 517.181 398.351 516.423 398.701 515.457C399.061 514.482 399.241 513.36 399.241 512.091C399.241 510.831 399.066 509.723 398.715 508.767C398.365 507.811 397.849 507.062 397.167 506.523C396.485 505.983 395.647 505.713 394.653 505.713C393.668 505.713 392.835 505.973 392.153 506.494C391.48 507.015 390.964 507.754 390.604 508.71C390.245 509.667 390.065 510.794 390.065 512.091Z"
          fill="white"
        />
        <path
          d="M281.053 319.211C291.158 319.211 300.884 318.326 310.232 316.937L346.989 280.179C330.189 288.768 306.316 293.947 281.053 293.947C250.484 293.947 221.684 286.368 205.263 274.368V238.874C223.832 249.358 250.863 256.053 281.053 256.053C311.242 256.053 338.274 249.358 356.842 238.874V270.326L374.4 252.768C376.674 250.495 379.326 248.726 382.105 247.211V205.526C382.105 177.611 336.884 155 281.053 155C225.221 155 180 177.611 180 205.526V331.842C180 357.611 218.653 378.832 268.421 381.989V358.747L270.568 356.6C228.505 354.074 205.263 337.653 205.263 331.842V303.674C225.6 313.526 252.253 319.211 281.053 319.211ZM281.053 180.263C329.937 180.263 356.842 199.211 356.842 205.526C356.842 211.842 329.937 230.789 281.053 230.789C232.168 230.789 205.263 211.842 205.263 205.526C205.263 199.211 232.168 180.263 281.053 180.263ZM371.116 291.8L396.884 317.568L319.453 395H293.684V369.232L371.116 291.8ZM418.105 296.347L405.726 308.726L379.958 282.958L392.337 270.579C394.737 268.053 398.905 268.053 401.432 270.579L418.105 287.253C420.632 289.779 420.632 293.947 418.105 296.347Z"
          fill="white"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
