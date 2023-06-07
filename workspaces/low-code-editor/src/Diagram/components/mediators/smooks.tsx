
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

export function Smooks(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;
    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.type, { model: child }));
    })

    return (
        <>
            <svg x={viewState.bBox.x} y={viewState.bBox.y} width={viewState.bBox.r * 2} height={viewState.bBox.r * 2} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="Ellipse 4" cx="300" cy="300" r="300" fill="#644A9B" />
                <path id="Smooks" d="M246.31 507.276C246.196 506.13 245.708 505.24 244.847 504.605C243.985 503.971 242.815 503.653 241.338 503.653C240.334 503.653 239.487 503.795 238.795 504.08C238.104 504.354 237.574 504.738 237.205 505.23C236.845 505.723 236.665 506.281 236.665 506.906C236.646 507.427 236.755 507.882 236.991 508.27C237.238 508.658 237.574 508.994 238 509.278C238.426 509.553 238.919 509.795 239.477 510.003C240.036 510.202 240.633 510.372 241.267 510.514L243.881 511.139C245.15 511.423 246.314 511.802 247.375 512.276C248.436 512.749 249.354 513.331 250.131 514.023C250.907 514.714 251.509 515.528 251.935 516.466C252.37 517.403 252.593 518.478 252.602 519.69C252.593 521.471 252.138 523.014 251.239 524.321C250.348 525.618 249.061 526.627 247.375 527.347C245.699 528.057 243.677 528.412 241.31 528.412C238.961 528.412 236.916 528.052 235.173 527.332C233.44 526.613 232.086 525.547 231.111 524.136C230.145 522.716 229.638 520.959 229.591 518.866H235.543C235.609 519.842 235.888 520.656 236.381 521.31C236.883 521.954 237.55 522.441 238.384 522.773C239.226 523.095 240.178 523.256 241.239 523.256C242.28 523.256 243.185 523.104 243.952 522.801C244.728 522.498 245.33 522.077 245.756 521.537C246.182 520.997 246.395 520.377 246.395 519.676C246.395 519.023 246.201 518.473 245.812 518.028C245.434 517.583 244.875 517.205 244.136 516.892C243.407 516.58 242.512 516.295 241.452 516.04L238.284 515.244C235.831 514.648 233.895 513.715 232.474 512.446C231.054 511.177 230.348 509.468 230.358 507.318C230.348 505.557 230.817 504.018 231.764 502.702C232.721 501.385 234.032 500.358 235.699 499.619C237.366 498.881 239.259 498.511 241.381 498.511C243.54 498.511 245.424 498.881 247.034 499.619C248.653 500.358 249.913 501.385 250.812 502.702C251.712 504.018 252.176 505.543 252.205 507.276H246.31ZM256.626 528V506.182H262.393V510.031H262.648C263.103 508.753 263.861 507.744 264.921 507.006C265.982 506.267 267.251 505.898 268.728 505.898C270.224 505.898 271.498 506.272 272.549 507.02C273.6 507.759 274.301 508.762 274.651 510.031H274.879C275.324 508.781 276.129 507.782 277.293 507.034C278.468 506.277 279.855 505.898 281.455 505.898C283.491 505.898 285.144 506.546 286.413 507.844C287.691 509.132 288.33 510.959 288.33 513.327V528H282.293V514.52C282.293 513.308 281.971 512.399 281.327 511.793C280.683 511.187 279.879 510.884 278.913 510.884C277.814 510.884 276.957 511.234 276.342 511.935C275.726 512.626 275.418 513.54 275.418 514.676V528H269.552V514.392C269.552 513.322 269.244 512.47 268.629 511.835C268.022 511.201 267.222 510.884 266.228 510.884C265.556 510.884 264.95 511.054 264.41 511.395C263.879 511.726 263.458 512.195 263.146 512.801C262.833 513.398 262.677 514.098 262.677 514.903V528H256.626ZM302.968 528.426C300.762 528.426 298.853 527.957 297.244 527.02C295.643 526.073 294.407 524.757 293.536 523.071C292.665 521.376 292.229 519.411 292.229 517.176C292.229 514.922 292.665 512.953 293.536 511.267C294.407 509.572 295.643 508.256 297.244 507.318C298.853 506.371 300.762 505.898 302.968 505.898C305.174 505.898 307.078 506.371 308.678 507.318C310.288 508.256 311.529 509.572 312.4 511.267C313.271 512.953 313.707 514.922 313.707 517.176C313.707 519.411 313.271 521.376 312.4 523.071C311.529 524.757 310.288 526.073 308.678 527.02C307.078 527.957 305.174 528.426 302.968 528.426ZM302.996 523.739C304 523.739 304.838 523.455 305.511 522.886C306.183 522.309 306.69 521.523 307.031 520.528C307.381 519.534 307.556 518.402 307.556 517.134C307.556 515.865 307.381 514.733 307.031 513.739C306.69 512.744 306.183 511.958 305.511 511.381C304.838 510.803 304 510.514 302.996 510.514C301.983 510.514 301.131 510.803 300.44 511.381C299.758 511.958 299.242 512.744 298.891 513.739C298.55 514.733 298.38 515.865 298.38 517.134C298.38 518.402 298.55 519.534 298.891 520.528C299.242 521.523 299.758 522.309 300.44 522.886C301.131 523.455 301.983 523.739 302.996 523.739ZM327.499 528.426C325.293 528.426 323.385 527.957 321.775 527.02C320.174 526.073 318.939 524.757 318.067 523.071C317.196 521.376 316.761 519.411 316.761 517.176C316.761 514.922 317.196 512.953 318.067 511.267C318.939 509.572 320.174 508.256 321.775 507.318C323.385 506.371 325.293 505.898 327.499 505.898C329.706 505.898 331.609 506.371 333.21 507.318C334.819 508.256 336.06 509.572 336.931 511.267C337.802 512.953 338.238 514.922 338.238 517.176C338.238 519.411 337.802 521.376 336.931 523.071C336.06 524.757 334.819 526.073 333.21 527.02C331.609 527.957 329.706 528.426 327.499 528.426ZM327.528 523.739C328.531 523.739 329.37 523.455 330.042 522.886C330.714 522.309 331.221 521.523 331.562 520.528C331.912 519.534 332.087 518.402 332.087 517.134C332.087 515.865 331.912 514.733 331.562 513.739C331.221 512.744 330.714 511.958 330.042 511.381C329.37 510.803 328.531 510.514 327.528 510.514C326.514 510.514 325.662 510.803 324.971 511.381C324.289 511.958 323.773 512.744 323.423 513.739C323.082 514.733 322.911 515.865 322.911 517.134C322.911 518.402 323.082 519.534 323.423 520.528C323.773 521.523 324.289 522.309 324.971 522.886C325.662 523.455 326.514 523.739 327.528 523.739ZM347.656 521.722L347.67 514.463H348.55L355.539 506.182H362.485L353.096 517.148H351.661L347.656 521.722ZM342.173 528V498.909H348.224V528H342.173ZM355.809 528L349.388 518.497L353.423 514.222L362.897 528H355.809ZM383.607 512.403L378.067 512.744C377.973 512.271 377.769 511.845 377.457 511.466C377.144 511.078 376.732 510.77 376.221 510.543C375.719 510.306 375.118 510.188 374.417 510.188C373.479 510.188 372.689 510.386 372.045 510.784C371.401 511.172 371.079 511.693 371.079 512.347C371.079 512.867 371.287 513.308 371.704 513.668C372.121 514.027 372.835 514.316 373.849 514.534L377.798 515.33C379.919 515.765 381.5 516.466 382.542 517.432C383.584 518.398 384.104 519.667 384.104 521.239C384.104 522.669 383.683 523.923 382.84 525.003C382.007 526.082 380.861 526.925 379.403 527.531C377.954 528.128 376.282 528.426 374.388 528.426C371.5 528.426 369.199 527.825 367.485 526.622C365.781 525.41 364.781 523.762 364.488 521.679L370.44 521.366C370.62 522.247 371.055 522.92 371.746 523.384C372.438 523.838 373.323 524.065 374.403 524.065C375.463 524.065 376.316 523.862 376.96 523.455C377.613 523.038 377.944 522.503 377.954 521.849C377.944 521.3 377.712 520.85 377.258 520.5C376.803 520.14 376.103 519.866 375.156 519.676L371.377 518.923C369.246 518.497 367.66 517.759 366.619 516.707C365.586 515.656 365.07 514.316 365.07 512.688C365.07 511.286 365.449 510.079 366.207 509.065C366.974 508.052 368.049 507.271 369.431 506.722C370.823 506.172 372.452 505.898 374.317 505.898C377.073 505.898 379.242 506.48 380.823 507.645C382.414 508.81 383.342 510.396 383.607 512.403Z" fill="white" />
                <rect id="smooks-removebg-preview (1) 1" x="96" y="133" width="407" height="302" fill="url(#pattern0)" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
        </>
    )
}