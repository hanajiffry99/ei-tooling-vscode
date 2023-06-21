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

export function ConditionalRouter(props: SquareProps) {
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
        <circle id="Ellipse 2" cx="300" cy="300" r="300" fill="#357B51" />
        <path
          id="Conditional Route"
          d="M163.196 496.094H156.974C156.861 495.289 156.629 494.574 156.278 493.949C155.928 493.314 155.478 492.775 154.929 492.33C154.38 491.884 153.745 491.544 153.026 491.307C152.315 491.07 151.544 490.952 150.71 490.952C149.205 490.952 147.893 491.326 146.776 492.074C145.658 492.812 144.792 493.892 144.176 495.312C143.561 496.723 143.253 498.437 143.253 500.455C143.253 502.528 143.561 504.271 144.176 505.682C144.801 507.093 145.672 508.158 146.79 508.878C147.907 509.598 149.2 509.957 150.668 509.957C151.491 509.957 152.254 509.848 152.955 509.631C153.665 509.413 154.295 509.096 154.844 508.679C155.393 508.253 155.848 507.737 156.207 507.131C156.577 506.525 156.832 505.833 156.974 505.057L163.196 505.085C163.035 506.42 162.633 507.708 161.989 508.949C161.354 510.18 160.497 511.283 159.418 512.259C158.348 513.224 157.069 513.991 155.582 514.56C154.105 515.118 152.434 515.398 150.568 515.398C147.973 515.398 145.653 514.811 143.608 513.636C141.572 512.462 139.962 510.762 138.778 508.537C137.604 506.312 137.017 503.617 137.017 500.455C137.017 497.282 137.614 494.583 138.807 492.358C140 490.133 141.619 488.437 143.665 487.273C145.71 486.098 148.011 485.511 150.568 485.511C152.254 485.511 153.816 485.748 155.256 486.222C156.705 486.695 157.988 487.386 159.105 488.295C160.223 489.195 161.132 490.298 161.832 491.605C162.543 492.912 162.997 494.408 163.196 496.094ZM177.351 515.426C175.144 515.426 173.236 514.957 171.626 514.02C170.026 513.073 168.79 511.757 167.919 510.071C167.048 508.376 166.612 506.411 166.612 504.176C166.612 501.922 167.048 499.953 167.919 498.267C168.79 496.572 170.026 495.256 171.626 494.318C173.236 493.371 175.144 492.898 177.351 492.898C179.557 492.898 181.461 493.371 183.061 494.318C184.671 495.256 185.911 496.572 186.783 498.267C187.654 499.953 188.089 501.922 188.089 504.176C188.089 506.411 187.654 508.376 186.783 510.071C185.911 511.757 184.671 513.073 183.061 514.02C181.461 514.957 179.557 515.426 177.351 515.426ZM177.379 510.739C178.383 510.739 179.221 510.455 179.893 509.886C180.566 509.309 181.072 508.523 181.413 507.528C181.764 506.534 181.939 505.402 181.939 504.134C181.939 502.865 181.764 501.733 181.413 500.739C181.072 499.744 180.566 498.958 179.893 498.381C179.221 497.803 178.383 497.514 177.379 497.514C176.366 497.514 175.514 497.803 174.822 498.381C174.141 498.958 173.625 499.744 173.274 500.739C172.933 501.733 172.763 502.865 172.763 504.134C172.763 505.402 172.933 506.534 173.274 507.528C173.625 508.523 174.141 509.309 174.822 509.886C175.514 510.455 176.366 510.739 177.379 510.739ZM198.075 502.386V515H192.024V493.182H197.791V497.031H198.047C198.53 495.762 199.339 494.759 200.476 494.02C201.612 493.272 202.99 492.898 204.609 492.898C206.125 492.898 207.446 493.229 208.572 493.892C209.699 494.555 210.575 495.502 211.2 496.733C211.825 497.955 212.138 499.413 212.138 501.108V515H206.087V502.188C206.096 500.852 205.755 499.811 205.064 499.062C204.373 498.305 203.421 497.926 202.209 497.926C201.394 497.926 200.675 498.101 200.05 498.452C199.434 498.802 198.951 499.313 198.601 499.986C198.26 500.649 198.085 501.449 198.075 502.386ZM224.947 515.355C223.29 515.355 221.789 514.929 220.444 514.077C219.109 513.215 218.048 511.951 217.262 510.284C216.486 508.608 216.097 506.553 216.097 504.119C216.097 501.619 216.5 499.541 217.305 497.884C218.11 496.217 219.18 494.972 220.515 494.148C221.86 493.314 223.332 492.898 224.933 492.898C226.154 492.898 227.172 493.106 227.987 493.523C228.81 493.93 229.473 494.441 229.975 495.057C230.487 495.663 230.875 496.259 231.14 496.847H231.325V485.909H237.362V515H231.396V511.506H231.14C230.856 512.112 230.453 512.713 229.933 513.31C229.421 513.897 228.754 514.384 227.93 514.773C227.115 515.161 226.121 515.355 224.947 515.355ZM226.864 510.54C227.84 510.54 228.664 510.275 229.336 509.744C230.018 509.205 230.539 508.452 230.898 507.486C231.268 506.52 231.452 505.388 231.452 504.091C231.452 502.794 231.272 501.667 230.913 500.71C230.553 499.754 230.032 499.015 229.35 498.494C228.668 497.973 227.84 497.713 226.864 497.713C225.87 497.713 225.032 497.983 224.35 498.523C223.668 499.062 223.152 499.811 222.802 500.767C222.451 501.723 222.276 502.831 222.276 504.091C222.276 505.36 222.451 506.482 222.802 507.457C223.162 508.423 223.678 509.181 224.35 509.73C225.032 510.27 225.87 510.54 226.864 510.54ZM242.337 515V493.182H248.388V515H242.337ZM245.376 490.369C244.477 490.369 243.705 490.071 243.061 489.474C242.427 488.868 242.109 488.144 242.109 487.301C242.109 486.468 242.427 485.753 243.061 485.156C243.705 484.55 244.477 484.247 245.376 484.247C246.276 484.247 247.043 484.55 247.678 485.156C248.321 485.753 248.643 486.468 248.643 487.301C248.643 488.144 248.321 488.868 247.678 489.474C247.043 490.071 246.276 490.369 245.376 490.369ZM264.84 493.182V497.727H251.701V493.182H264.84ZM254.684 487.955H260.735V508.295C260.735 508.854 260.82 509.29 260.991 509.602C261.161 509.905 261.398 510.118 261.701 510.241C262.013 510.365 262.373 510.426 262.781 510.426C263.065 510.426 263.349 510.402 263.633 510.355C263.917 510.298 264.135 510.256 264.286 510.227L265.238 514.73C264.935 514.825 264.509 514.934 263.96 515.057C263.41 515.189 262.743 515.27 261.957 515.298C260.498 515.355 259.22 515.161 258.121 514.716C257.032 514.271 256.185 513.58 255.579 512.642C254.973 511.705 254.674 510.521 254.684 509.091V487.955ZM268.782 515V493.182H274.833V515H268.782ZM271.822 490.369C270.922 490.369 270.15 490.071 269.506 489.474C268.872 488.868 268.555 488.144 268.555 487.301C268.555 486.468 268.872 485.753 269.506 485.156C270.15 484.55 270.922 484.247 271.822 484.247C272.721 484.247 273.488 484.55 274.123 485.156C274.767 485.753 275.089 486.468 275.089 487.301C275.089 488.144 274.767 488.868 274.123 489.474C273.488 490.071 272.721 490.369 271.822 490.369ZM289.538 515.426C287.332 515.426 285.424 514.957 283.814 514.02C282.214 513.073 280.978 511.757 280.107 510.071C279.235 508.376 278.8 506.411 278.8 504.176C278.8 501.922 279.235 499.953 280.107 498.267C280.978 496.572 282.214 495.256 283.814 494.318C285.424 493.371 287.332 492.898 289.538 492.898C291.745 492.898 293.648 493.371 295.249 494.318C296.858 495.256 298.099 496.572 298.97 498.267C299.841 499.953 300.277 501.922 300.277 504.176C300.277 506.411 299.841 508.376 298.97 510.071C298.099 511.757 296.858 513.073 295.249 514.02C293.648 514.957 291.745 515.426 289.538 515.426ZM289.567 510.739C290.571 510.739 291.409 510.455 292.081 509.886C292.753 509.309 293.26 508.523 293.601 507.528C293.951 506.534 294.126 505.402 294.126 504.134C294.126 502.865 293.951 501.733 293.601 500.739C293.26 499.744 292.753 498.958 292.081 498.381C291.409 497.803 290.571 497.514 289.567 497.514C288.554 497.514 287.701 497.803 287.01 498.381C286.328 498.958 285.812 499.744 285.462 500.739C285.121 501.733 284.95 502.865 284.95 504.134C284.95 505.402 285.121 506.534 285.462 507.528C285.812 508.523 286.328 509.309 287.01 509.886C287.701 510.455 288.554 510.739 289.567 510.739ZM310.263 502.386V515H304.212V493.182H309.979V497.031H310.234C310.717 495.762 311.527 494.759 312.663 494.02C313.8 493.272 315.178 492.898 316.797 492.898C318.312 492.898 319.633 493.229 320.76 493.892C321.887 494.555 322.763 495.502 323.388 496.733C324.013 497.955 324.325 499.413 324.325 501.108V515H318.274V502.188C318.284 500.852 317.943 499.811 317.251 499.062C316.56 498.305 315.608 497.926 314.396 497.926C313.582 497.926 312.862 498.101 312.237 498.452C311.622 498.802 311.139 499.313 310.788 499.986C310.447 500.649 310.272 501.449 310.263 502.386ZM335.316 515.412C333.924 515.412 332.683 515.17 331.594 514.688C330.505 514.195 329.644 513.471 329.009 512.514C328.384 511.548 328.072 510.346 328.072 508.906C328.072 507.694 328.294 506.676 328.739 505.852C329.184 505.028 329.79 504.366 330.558 503.864C331.325 503.362 332.196 502.983 333.171 502.727C334.156 502.472 335.188 502.292 336.268 502.188C337.537 502.055 338.559 501.932 339.336 501.818C340.112 501.695 340.676 501.515 341.026 501.278C341.377 501.042 341.552 500.691 341.552 500.227V500.142C341.552 499.242 341.268 498.546 340.7 498.054C340.141 497.562 339.345 497.315 338.313 497.315C337.224 497.315 336.358 497.557 335.714 498.04C335.07 498.513 334.644 499.11 334.435 499.83L328.839 499.375C329.123 498.049 329.682 496.903 330.515 495.938C331.348 494.962 332.423 494.214 333.739 493.693C335.065 493.163 336.599 492.898 338.342 492.898C339.554 492.898 340.714 493.04 341.822 493.324C342.939 493.608 343.929 494.048 344.79 494.645C345.662 495.241 346.348 496.009 346.85 496.946C347.352 497.874 347.603 498.987 347.603 500.284V515H341.864V511.974H341.694C341.344 512.656 340.875 513.258 340.288 513.778C339.701 514.29 338.995 514.692 338.171 514.986C337.347 515.27 336.396 515.412 335.316 515.412ZM337.049 511.236C337.939 511.236 338.725 511.061 339.407 510.71C340.089 510.35 340.624 509.867 341.012 509.261C341.4 508.655 341.594 507.969 341.594 507.202V504.886C341.405 505.009 341.145 505.123 340.813 505.227C340.491 505.322 340.127 505.412 339.719 505.497C339.312 505.573 338.905 505.644 338.498 505.71C338.091 505.767 337.721 505.819 337.39 505.866C336.68 505.971 336.059 506.136 335.529 506.364C334.999 506.591 334.587 506.899 334.293 507.287C334 507.666 333.853 508.139 333.853 508.707C333.853 509.531 334.151 510.161 334.748 510.597C335.354 511.023 336.121 511.236 337.049 511.236ZM358.349 485.909V515H352.298V485.909H358.349ZM372.567 515V485.909H384.045C386.242 485.909 388.117 486.302 389.67 487.088C391.232 487.865 392.421 488.968 393.235 490.398C394.059 491.818 394.471 493.49 394.471 495.412C394.471 497.344 394.054 499.006 393.221 500.398C392.388 501.78 391.18 502.841 389.599 503.58C388.027 504.318 386.123 504.688 383.888 504.688H376.204V499.744H382.894C384.068 499.744 385.044 499.583 385.82 499.261C386.597 498.939 387.174 498.456 387.553 497.812C387.942 497.169 388.136 496.368 388.136 495.412C388.136 494.446 387.942 493.632 387.553 492.969C387.174 492.306 386.592 491.804 385.806 491.463C385.03 491.113 384.049 490.938 382.866 490.938H378.718V515H372.567ZM388.278 501.761L395.508 515H388.718L381.644 501.761H388.278ZM408.21 515.426C406.004 515.426 404.096 514.957 402.486 514.02C400.885 513.073 399.65 511.757 398.778 510.071C397.907 508.376 397.472 506.411 397.472 504.176C397.472 501.922 397.907 499.953 398.778 498.267C399.65 496.572 400.885 495.256 402.486 494.318C404.096 493.371 406.004 492.898 408.21 492.898C410.417 492.898 412.32 493.371 413.92 494.318C415.53 495.256 416.771 496.572 417.642 498.267C418.513 499.953 418.949 501.922 418.949 504.176C418.949 506.411 418.513 508.376 417.642 510.071C416.771 511.757 415.53 513.073 413.92 514.02C412.32 514.957 410.417 515.426 408.21 515.426ZM408.239 510.739C409.242 510.739 410.08 510.455 410.753 509.886C411.425 509.309 411.932 508.523 412.273 507.528C412.623 506.534 412.798 505.402 412.798 504.134C412.798 502.865 412.623 501.733 412.273 500.739C411.932 499.744 411.425 498.958 410.753 498.381C410.08 497.803 409.242 497.514 408.239 497.514C407.225 497.514 406.373 497.803 405.682 498.381C405 498.958 404.484 499.744 404.134 500.739C403.793 501.733 403.622 502.865 403.622 504.134C403.622 505.402 403.793 506.534 404.134 507.528C404.484 508.523 405 509.309 405.682 509.886C406.373 510.455 407.225 510.739 408.239 510.739ZM436.875 505.71V493.182H442.926V515H437.116V511.037H436.889C436.397 512.315 435.578 513.343 434.432 514.119C433.295 514.896 431.908 515.284 430.27 515.284C428.812 515.284 427.528 514.953 426.42 514.29C425.313 513.627 424.446 512.685 423.821 511.463C423.205 510.241 422.893 508.778 422.884 507.074V493.182H428.935V505.994C428.944 507.282 429.29 508.3 429.972 509.048C430.653 509.796 431.567 510.17 432.713 510.17C433.442 510.17 434.124 510.005 434.759 509.673C435.393 509.332 435.904 508.83 436.293 508.168C436.69 507.505 436.884 506.686 436.875 505.71ZM459.371 493.182V497.727H446.232V493.182H459.371ZM449.215 487.955H455.266V508.295C455.266 508.854 455.352 509.29 455.522 509.602C455.692 509.905 455.929 510.118 456.232 510.241C456.545 510.365 456.905 510.426 457.312 510.426C457.596 510.426 457.88 510.402 458.164 510.355C458.448 510.298 458.666 510.256 458.817 510.227L459.769 514.73C459.466 514.825 459.04 514.934 458.491 515.057C457.942 515.189 457.274 515.27 456.488 515.298C455.03 515.355 453.751 515.161 452.653 514.716C451.564 514.271 450.716 513.58 450.11 512.642C449.504 511.705 449.206 510.521 449.215 509.091V487.955ZM473.022 515.426C470.778 515.426 468.846 514.972 467.227 514.062C465.617 513.144 464.376 511.847 463.505 510.17C462.634 508.485 462.198 506.491 462.198 504.19C462.198 501.946 462.634 499.976 463.505 498.281C464.376 496.586 465.603 495.265 467.184 494.318C468.775 493.371 470.64 492.898 472.781 492.898C474.22 492.898 475.56 493.13 476.8 493.594C478.05 494.048 479.139 494.735 480.067 495.653C481.005 496.572 481.734 497.727 482.255 499.119C482.776 500.502 483.036 502.121 483.036 503.977V505.639H464.613V501.889H477.34C477.34 501.018 477.151 500.246 476.772 499.574C476.393 498.902 475.868 498.376 475.195 497.997C474.532 497.609 473.761 497.415 472.88 497.415C471.961 497.415 471.147 497.628 470.437 498.054C469.736 498.471 469.187 499.034 468.789 499.744C468.391 500.445 468.188 501.226 468.178 502.088V505.653C468.178 506.733 468.377 507.666 468.775 508.452C469.182 509.238 469.755 509.844 470.494 510.27C471.232 510.696 472.108 510.909 473.121 510.909C473.794 510.909 474.409 510.814 474.968 510.625C475.527 510.436 476.005 510.152 476.403 509.773C476.8 509.394 477.103 508.93 477.312 508.381L482.908 508.75C482.624 510.095 482.042 511.269 481.161 512.273C480.29 513.267 479.163 514.044 477.781 514.602C476.407 515.152 474.821 515.426 473.022 515.426Z"
          fill="white"
        />
        <rect
          id="Rectangle 10"
          x="121"
          y="166"
          width="357"
          height="238"
          rx="37"
          fill="#357B51"
          stroke="white"
          stroke-width="6"
        />
        <g id="Group 2">
          <g id="Group 1">
            <path
              id="Vector"
              d="M205.288 292.5V284.962H212.067L209.431 278.367L211.254 273.806L217.219 288.731L211.254 303.657L209.431 299.096L212.067 292.5H205.288Z"
              fill="white"
            />
            <rect
              id="Rectangle 5"
              x="205.288"
              y="285"
              width="7.46269"
              height="24.2882"
              transform="rotate(90 205.288 285)"
              fill="white"
            />
          </g>
          <ellipse
            id="Ellipse 3"
            cx="234.542"
            cy="288.721"
            rx="15.7475"
            ry="15.3488"
            fill="white"
          />
          <ellipse
            id="Ellipse 4"
            cx="368.395"
            cy="199.884"
            rx="15.7475"
            ry="14.8837"
            fill="white"
          />
          <ellipse
            id="Ellipse 5"
            cx="368.395"
            cy="285"
            rx="15.7475"
            ry="15.3488"
            fill="white"
          />
          <ellipse
            id="Ellipse 6"
            cx="368.395"
            cy="370.116"
            rx="15.7475"
            ry="14.8837"
            fill="white"
          />
          <rect
            id="Rectangle 6"
            width="134.043"
            height="7.60362"
            transform="matrix(0.828677 -0.559727 0.600976 0.799267 242.559 277.611)"
            fill="white"
          />
          <rect
            id="Rectangle 7"
            x="380.206"
            y="196.163"
            width="37.794"
            height="7.44186"
            fill="white"
          />
          <rect
            id="Rectangle 8"
            x="380.206"
            y="280.814"
            width="37.794"
            height="8.37209"
            fill="white"
          />
          <rect
            id="Rectangle 9"
            x="380.206"
            y="366.395"
            width="37.794"
            height="7.44186"
            fill="white"
          />
        </g>
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
