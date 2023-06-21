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

export function NTLM(props: SquareProps) {
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
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="#AD5656" />
        <rect x="251" y="270" width="98" height="119" fill="white" />
        <path
          d="M388.7 220C405.255 220 418.8 232.729 418.8 248.286V389.714C418.8 405.271 405.255 418 388.7 418H208.1C191.545 418 178 405.271 178 389.714V248.286C178 232.729 191.545 220 208.1 220H343.55V191.714C343.55 167.671 323.985 149.286 298.4 149.286C272.815 149.286 253.25 167.671 253.25 191.714H223.15C223.15 152.114 256.26 121 298.4 121C340.54 121 373.65 152.114 373.65 191.714V220H388.7ZM298.4 347.286C314.955 347.286 328.5 334.557 328.5 319C328.5 303.443 314.955 290.714 298.4 290.714C281.845 290.714 268.3 303.443 268.3 319C268.3 334.557 281.845 347.286 298.4 347.286ZM479 290.714H448.9V205.857H479V290.714ZM479 347.286H448.9V319H479V347.286Z"
          fill="white"
        />
        <circle cx="375.5" cy="375.5" r="52.5" fill="#AD5656" />
        <path
          d="M418 402V415H404.2V405.25H393.85V395.5H383.5L375.703 388.155C373.805 388.707 371.805 389 369.7 389C364.21 389 358.945 386.946 355.063 383.289C351.181 379.632 349 374.672 349 369.5C349 364.328 351.181 359.368 355.063 355.711C358.945 352.054 364.21 350 369.7 350C375.19 350 380.455 352.054 384.337 355.711C388.219 359.368 390.4 364.328 390.4 369.5C390.4 371.483 390.089 373.367 389.503 375.155L418 402ZM366.25 359.75C364.42 359.75 362.665 360.435 361.371 361.654C360.077 362.873 359.35 364.526 359.35 366.25C359.35 367.974 360.077 369.627 361.371 370.846C362.665 372.065 364.42 372.75 366.25 372.75C368.08 372.75 369.835 372.065 371.129 370.846C372.423 369.627 373.15 367.974 373.15 366.25C373.15 364.526 372.423 362.873 371.129 361.654C369.835 360.435 368.08 359.75 366.25 359.75Z"
          fill="white"
        />
        <rect x="440" y="193" width="78" height="169" fill="#AD5656" />
        <path
          d="M269.861 477.909V507H264.548L251.892 488.69H251.679V507H245.528V477.909H250.926L263.483 496.205H263.739V477.909H269.861ZM273.835 482.98V477.909H297.727V482.98H288.82V507H282.741V482.98H273.835ZM301.661 507V477.909H307.812V501.929H320.283V507H301.661ZM324.357 477.909H331.942L339.953 497.455H340.294L348.305 477.909H355.891V507H349.925V488.065H349.683L342.155 506.858H338.092L330.564 487.994H330.322V507H324.357V477.909Z"
          fill="white"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
