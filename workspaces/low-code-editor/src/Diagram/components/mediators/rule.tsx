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
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";
import { Circle, Square } from "@wso2-ei/low-code-diagram";

interface SquareProps {
  model: Square;
}

export function Rule(props: SquareProps) {
  const { model } = props;

  const viewState = model.viewState;

  const components: JSX.Element[] = [];

  model.children.forEach((child) => {
    components.push(getComponent(child.tag, { model: child }));
  });

  return (
    <>
      <svg
        x={viewState.bBox.x}
        y={viewState.bBox.y}
        width={viewState.bBox.w}
        height={viewState.bBox.h}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="800" height="600" fill="#C0C0C0" />
        <path d="M10 10H430V590H10V10Z" fill="#7C3838" fill-opacity="0.93" />
        <path
          d="M330 175.238C330 172.034 328.712 168.962 326.42 166.696C324.128 164.431 321.019 163.159 317.778 163.159H281.111V151.079C281.111 147.876 279.823 144.803 277.531 142.538C275.239 140.273 272.13 139 268.889 139H171.111C167.87 139 164.761 140.273 162.469 142.538C160.177 144.803 158.889 147.876 158.889 151.079V163.159H122.222C118.981 163.159 115.872 164.431 113.58 166.696C111.288 168.962 110 172.034 110 175.238V392.665C110 395.868 111.288 398.941 113.58 401.206C115.872 403.471 118.981 404.744 122.222 404.744H317.778C321.019 404.744 324.128 403.471 326.42 401.206C328.712 398.941 330 395.868 330 392.665V175.238ZM183.333 163.159H256.667V187.317H183.333V163.159ZM305.556 380.585H134.444V187.317H158.889V199.396C158.889 202.6 160.177 205.672 162.469 207.938C164.761 210.203 167.87 211.476 171.111 211.476H268.889C272.13 211.476 275.239 210.203 277.531 207.938C279.823 205.672 281.111 202.6 281.111 199.396V187.317H305.556V380.585ZM232.222 344.348C232.222 347.551 230.935 350.624 228.642 352.889C226.35 355.154 223.242 356.427 220 356.427H171.111C167.87 356.427 164.761 355.154 162.469 352.889C160.177 350.624 158.889 347.551 158.889 344.348C158.889 341.144 160.177 338.072 162.469 335.806C164.761 333.541 167.87 332.268 171.111 332.268H220C223.242 332.268 226.35 333.541 228.642 335.806C230.935 338.072 232.222 341.144 232.222 344.348ZM281.111 296.031C281.111 299.234 279.823 302.307 277.531 304.572C275.239 306.837 272.13 308.11 268.889 308.11H171.111C167.87 308.11 164.761 306.837 162.469 304.572C160.177 302.307 158.889 299.234 158.889 296.031C158.889 292.827 160.177 289.754 162.469 287.489C164.761 285.224 167.87 283.951 171.111 283.951H268.889C272.13 283.951 275.239 285.224 277.531 287.489C279.823 289.754 281.111 292.827 281.111 296.031ZM281.111 247.713C281.111 250.917 279.823 253.989 277.531 256.255C275.239 258.52 272.13 259.793 268.889 259.793H171.111C167.87 259.793 164.761 258.52 162.469 256.255C160.177 253.989 158.889 250.917 158.889 247.713C158.889 244.51 160.177 241.437 162.469 239.172C164.761 236.907 167.87 235.634 171.111 235.634H268.889C272.13 235.634 275.239 236.907 277.531 239.172C279.823 241.437 281.111 244.51 281.111 247.713Z"
          fill="white"
        />
        <rect x="480" y="10" width="310" height="580" fill="#A9A9A9" />
        <path d="M468 299.5L439.5 335.44V263.56L468 299.5Z" fill="#71797E" />
        <path
          d="M181.869 532V502.909H192.778C195.013 502.909 196.888 503.297 198.403 504.074C199.928 504.85 201.079 505.939 201.855 507.341C202.641 508.733 203.034 510.357 203.034 512.213C203.034 514.079 202.636 515.698 201.841 517.071C201.055 518.435 199.895 519.491 198.361 520.239C196.827 520.977 194.942 521.347 192.707 521.347H184.938V516.972H191.997C193.304 516.972 194.374 516.792 195.207 516.432C196.041 516.062 196.656 515.527 197.054 514.827C197.461 514.116 197.665 513.245 197.665 512.213C197.665 511.181 197.461 510.3 197.054 509.571C196.647 508.832 196.027 508.274 195.193 507.895C194.36 507.507 193.285 507.312 191.969 507.312H187.139V532H181.869ZM196.898 518.818L204.099 532H198.219L191.145 518.818H196.898ZM221.564 522.824V510.182H226.706V532H221.72V528.122H221.493C221 529.344 220.191 530.343 219.064 531.119C217.946 531.896 216.569 532.284 214.93 532.284C213.5 532.284 212.236 531.967 211.138 531.332C210.049 530.688 209.196 529.756 208.581 528.534C207.965 527.303 207.658 525.816 207.658 524.074V510.182H212.8V523.278C212.8 524.661 213.179 525.759 213.936 526.574C214.694 527.388 215.688 527.795 216.919 527.795C217.677 527.795 218.411 527.611 219.121 527.241C219.831 526.872 220.413 526.323 220.868 525.594C221.332 524.855 221.564 523.932 221.564 522.824ZM237.136 502.909V532H231.994V502.909H237.136ZM252.082 532.426C249.895 532.426 248.006 531.972 246.415 531.062C244.833 530.144 243.616 528.847 242.764 527.17C241.912 525.485 241.486 523.501 241.486 521.219C241.486 518.974 241.912 517.005 242.764 515.31C243.626 513.605 244.829 512.279 246.372 511.332C247.916 510.376 249.729 509.898 251.812 509.898C253.157 509.898 254.426 510.116 255.619 510.551C256.822 510.977 257.883 511.64 258.801 512.54C259.729 513.439 260.458 514.585 260.989 515.977C261.519 517.36 261.784 519.008 261.784 520.92V522.497H243.901V519.031H256.855C256.846 518.046 256.633 517.17 256.216 516.403C255.799 515.627 255.217 515.016 254.469 514.571C253.73 514.126 252.868 513.903 251.884 513.903C250.832 513.903 249.909 514.159 249.114 514.67C248.318 515.172 247.698 515.835 247.253 516.659C246.817 517.473 246.595 518.368 246.585 519.344V522.369C246.585 523.638 246.817 524.727 247.281 525.636C247.745 526.536 248.394 527.227 249.227 527.71C250.061 528.184 251.036 528.42 252.153 528.42C252.902 528.42 253.579 528.316 254.185 528.108C254.791 527.89 255.316 527.573 255.761 527.156C256.206 526.74 256.543 526.223 256.77 525.608L261.571 526.148C261.268 527.417 260.69 528.525 259.838 529.472C258.995 530.409 257.916 531.138 256.599 531.659C255.283 532.17 253.777 532.426 252.082 532.426Z"
          fill="white"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
