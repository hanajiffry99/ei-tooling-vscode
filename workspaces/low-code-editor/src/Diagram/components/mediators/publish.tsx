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

export function Publish(props: SquareProps) {
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
        <circle cx="300" cy="300" r="300" fill="#238C77" />
        <path
          d="M170.528 500V470.909H182.006C184.212 470.909 186.092 471.33 187.645 472.173C189.198 473.007 190.382 474.167 191.196 475.653C192.02 477.131 192.432 478.835 192.432 480.767C192.432 482.699 192.015 484.403 191.182 485.881C190.348 487.358 189.141 488.509 187.56 489.332C185.988 490.156 184.084 490.568 181.849 490.568H174.534V485.639H180.855C182.039 485.639 183.014 485.436 183.781 485.028C184.558 484.612 185.135 484.039 185.514 483.31C185.902 482.571 186.097 481.723 186.097 480.767C186.097 479.801 185.902 478.958 185.514 478.239C185.135 477.509 184.558 476.946 183.781 476.548C183.005 476.141 182.02 475.938 180.827 475.938H176.679V500H170.528ZM210.305 490.71V478.182H216.356V500H210.546V496.037H210.319C209.826 497.315 209.007 498.343 207.862 499.119C206.725 499.896 205.338 500.284 203.7 500.284C202.241 500.284 200.958 499.953 199.85 499.29C198.742 498.627 197.876 497.685 197.251 496.463C196.635 495.241 196.323 493.778 196.313 492.074V478.182H202.364V490.994C202.374 492.282 202.719 493.3 203.401 494.048C204.083 494.796 204.997 495.17 206.143 495.17C206.872 495.17 207.554 495.005 208.188 494.673C208.823 494.332 209.334 493.83 209.722 493.168C210.12 492.505 210.314 491.686 210.305 490.71ZM221.31 500V470.909H227.361V481.847H227.545C227.811 481.259 228.194 480.663 228.696 480.057C229.207 479.441 229.87 478.93 230.685 478.523C231.509 478.106 232.531 477.898 233.753 477.898C235.344 477.898 236.812 478.314 238.156 479.148C239.501 479.972 240.576 481.217 241.381 482.884C242.186 484.541 242.588 486.619 242.588 489.119C242.588 491.553 242.195 493.608 241.409 495.284C240.633 496.951 239.572 498.215 238.227 499.077C236.892 499.929 235.396 500.355 233.739 500.355C232.564 500.355 231.565 500.161 230.741 499.773C229.927 499.384 229.259 498.897 228.739 498.31C228.218 497.713 227.82 497.112 227.545 496.506H227.276V500H221.31ZM227.233 489.091C227.233 490.388 227.413 491.52 227.773 492.486C228.133 493.452 228.653 494.205 229.335 494.744C230.017 495.275 230.846 495.54 231.821 495.54C232.806 495.54 233.639 495.27 234.321 494.73C235.003 494.181 235.519 493.423 235.869 492.457C236.229 491.482 236.409 490.36 236.409 489.091C236.409 487.831 236.234 486.723 235.884 485.767C235.533 484.811 235.017 484.062 234.335 483.523C233.653 482.983 232.815 482.713 231.821 482.713C230.836 482.713 230.003 482.973 229.321 483.494C228.649 484.015 228.133 484.754 227.773 485.71C227.413 486.667 227.233 487.794 227.233 489.091ZM252.677 470.909V500H246.626V470.909H252.677ZM257.524 500V478.182H263.575V500H257.524ZM260.564 475.369C259.664 475.369 258.893 475.071 258.249 474.474C257.614 473.868 257.297 473.144 257.297 472.301C257.297 471.468 257.614 470.753 258.249 470.156C258.893 469.55 259.664 469.247 260.564 469.247C261.464 469.247 262.231 469.55 262.865 470.156C263.509 470.753 263.831 471.468 263.831 472.301C263.831 473.144 263.509 473.868 262.865 474.474C262.231 475.071 261.464 475.369 260.564 475.369ZM286.576 484.403L281.036 484.744C280.942 484.271 280.738 483.845 280.425 483.466C280.113 483.078 279.701 482.77 279.19 482.543C278.688 482.306 278.086 482.188 277.386 482.188C276.448 482.188 275.657 482.386 275.013 482.784C274.37 483.172 274.048 483.693 274.048 484.347C274.048 484.867 274.256 485.308 274.673 485.668C275.089 486.027 275.804 486.316 276.817 486.534L280.766 487.33C282.888 487.765 284.469 488.466 285.511 489.432C286.552 490.398 287.073 491.667 287.073 493.239C287.073 494.669 286.652 495.923 285.809 497.003C284.976 498.082 283.83 498.925 282.371 499.531C280.923 500.128 279.251 500.426 277.357 500.426C274.469 500.426 272.168 499.825 270.454 498.622C268.749 497.41 267.75 495.762 267.457 493.679L273.408 493.366C273.588 494.247 274.024 494.92 274.715 495.384C275.406 495.838 276.292 496.065 277.371 496.065C278.432 496.065 279.284 495.862 279.928 495.455C280.582 495.038 280.913 494.503 280.923 493.849C280.913 493.3 280.681 492.85 280.227 492.5C279.772 492.14 279.071 491.866 278.124 491.676L274.346 490.923C272.215 490.497 270.629 489.759 269.587 488.707C268.555 487.656 268.039 486.316 268.039 484.688C268.039 483.286 268.418 482.079 269.175 481.065C269.942 480.052 271.017 479.271 272.4 478.722C273.792 478.172 275.421 477.898 277.286 477.898C280.042 477.898 282.21 478.48 283.792 479.645C285.383 480.81 286.311 482.396 286.576 484.403ZM296.935 487.386V500H290.884V470.909H296.764V482.031H297.02C297.512 480.743 298.308 479.735 299.406 479.006C300.505 478.267 301.883 477.898 303.54 477.898C305.055 477.898 306.376 478.229 307.503 478.892C308.639 479.545 309.52 480.488 310.145 481.719C310.779 482.94 311.092 484.403 311.082 486.108V500H305.031V487.188C305.041 485.843 304.7 484.796 304.009 484.048C303.327 483.3 302.37 482.926 301.139 482.926C300.315 482.926 299.586 483.101 298.952 483.452C298.327 483.802 297.834 484.313 297.474 484.986C297.124 485.649 296.944 486.449 296.935 487.386ZM325.216 500V470.909H344.818V475.98H331.366V482.912H343.81V487.983H331.366V494.929H344.875V500H325.216ZM369.935 478.182L362.308 500H355.489L347.862 478.182H354.254L358.785 493.793H359.012L363.529 478.182H369.935ZM382.272 500.426C380.028 500.426 378.096 499.972 376.477 499.062C374.867 498.144 373.626 496.847 372.755 495.17C371.884 493.485 371.448 491.491 371.448 489.19C371.448 486.946 371.884 484.976 372.755 483.281C373.626 481.586 374.853 480.265 376.434 479.318C378.025 478.371 379.89 477.898 382.031 477.898C383.47 477.898 384.81 478.13 386.05 478.594C387.3 479.048 388.389 479.735 389.317 480.653C390.255 481.572 390.984 482.727 391.505 484.119C392.026 485.502 392.286 487.121 392.286 488.977V490.639H373.863V486.889H386.59C386.59 486.018 386.401 485.246 386.022 484.574C385.643 483.902 385.118 483.376 384.445 482.997C383.782 482.609 383.011 482.415 382.13 482.415C381.211 482.415 380.397 482.628 379.687 483.054C378.986 483.471 378.437 484.034 378.039 484.744C377.641 485.445 377.438 486.226 377.428 487.088V490.653C377.428 491.733 377.627 492.666 378.025 493.452C378.432 494.238 379.005 494.844 379.744 495.27C380.482 495.696 381.358 495.909 382.371 495.909C383.044 495.909 383.659 495.814 384.218 495.625C384.777 495.436 385.255 495.152 385.653 494.773C386.05 494.394 386.353 493.93 386.562 493.381L392.158 493.75C391.874 495.095 391.292 496.269 390.411 497.273C389.54 498.267 388.413 499.044 387.031 499.602C385.657 500.152 384.071 500.426 382.272 500.426ZM402.286 487.386V500H396.235V478.182H402.002V482.031H402.258C402.741 480.762 403.55 479.759 404.687 479.02C405.823 478.272 407.201 477.898 408.82 477.898C410.335 477.898 411.656 478.229 412.783 478.892C413.91 479.555 414.786 480.502 415.411 481.733C416.036 482.955 416.349 484.413 416.349 486.108V500H410.298V487.188C410.307 485.852 409.966 484.811 409.275 484.062C408.584 483.305 407.632 482.926 406.42 482.926C405.605 482.926 404.886 483.101 404.261 483.452C403.645 483.802 403.162 484.313 402.812 484.986C402.471 485.649 402.296 486.449 402.286 487.386ZM432.723 478.182V482.727H419.584V478.182H432.723ZM422.567 472.955H428.618V493.295C428.618 493.854 428.703 494.29 428.874 494.602C429.044 494.905 429.281 495.118 429.584 495.241C429.896 495.365 430.256 495.426 430.663 495.426C430.947 495.426 431.232 495.402 431.516 495.355C431.8 495.298 432.018 495.256 432.169 495.227L433.121 499.73C432.818 499.825 432.392 499.934 431.842 500.057C431.293 500.189 430.625 500.27 429.839 500.298C428.381 500.355 427.103 500.161 426.004 499.716C424.915 499.271 424.068 498.58 423.462 497.642C422.856 496.705 422.557 495.521 422.567 494.091V472.955Z"
          fill="white"
        />
        <path
          d="M254 393L475 288.5L254 184V265.278L411.857 288.5L254 311.722V393Z"
          fill="white"
        />
        <rect x="139" y="277" width="106" height="10" fill="white" />
        <rect x="163" y="263" width="82" height="10" fill="white" />
        <rect x="189" y="249" width="56" height="10" fill="white" />
        <rect x="189" y="321" width="56" height="10" fill="white" />
        <rect x="163" y="307" width="82" height="10" fill="white" />
        <rect x="139" y="293" width="106" height="10" fill="white" />
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
