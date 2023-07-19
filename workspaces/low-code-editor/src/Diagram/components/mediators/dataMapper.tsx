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

import React, { useState } from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";
import { DataMapperMediatorProperty } from "../PropertyPanels/index";
import {
  DiagramEditorLangClientInterface,
  GetCompletionResponse,
} from "@wso2-ei/low-code-editor-commons";
import DatamapperModal from "../Datamapper/DatamapperModal";

interface SquareProps {
  model: Circle;
  getDiagramEditorLangClient?: () => Promise<DiagramEditorLangClientInterface>;
  textDocumentUrl: string;
  textDocumentFsPath: string;
  items: GetCompletionResponse[];
  previousComponentStartPosition: number;
}
interface vscode {
  postMessage(message: any): void;
}
declare const vscode: vscode;

export function DataMapper(props: SquareProps) {
  const {
    model,
    getDiagramEditorLangClient,
    textDocumentUrl,
    textDocumentFsPath,
    items,
    previousComponentStartPosition,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDoubleClicked, setIsDoubleClicked] = useState<boolean>(false);
  const [datamapperProject, setDatamapperProject] = React.useState('');
  const [datamapperRegistry,setDatamapperRegistry] = React.useState('');
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const viewState = model.viewState;
  model.tag;
  const components: JSX.Element[] = [];

  model.children.forEach((child: any) => {
    components.push(getComponent(child.type, { model: child }));
  });

  const handleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      handleDatamapperButtonClick();
      setTimeout(() => {
        setClickTimeout(null);
      }, 2000);
    } else {
      const timeOut = setTimeout(() => {
        setClickTimeout(null);
        handlePropertyButtonClick();
      }, 500)
      if (timeOut) {
        setClickTimeout(timeOut);
      }
    }
  }

  const handleDatamapperButtonClick = () => {
    setModalOpen(true);
    setIsDoubleClicked(true);
  }

  React.useEffect(() => {
    if (datamapperProject) {
      vscode.postMessage({ command: 'dataMapperView', projectName: datamapperProject,registryName:datamapperRegistry });
    }
  }, [datamapperProject,datamapperRegistry])

  const handlePropertyButtonClick = async () => {
    setOpen(true);
    setIsClicked(true);
  };

  const handleCancelClick = (value: boolean) => {
    setOpen(value);
  };

  const handleModalClose = (value: boolean) => {
    setModalOpen(value);
  };

  const handleDatamapperProject = (value: string) => {
    setDatamapperProject(value);
  }

  const handleDatamapperRegistry = (value: string) => {
    setDatamapperRegistry(value);
  }

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
        id="datamapperMediator"
        onClick={handleClick}>
        <circle cx="300" cy="300" r="300" fill="#644A9B" />
        <path
          d="M189.841 523H179.528V493.909H189.926C192.852 493.909 195.371 494.491 197.483 495.656C199.595 496.812 201.219 498.473 202.355 500.642C203.501 502.811 204.074 505.405 204.074 508.426C204.074 511.456 203.501 514.061 202.355 516.239C201.219 518.417 199.585 520.088 197.455 521.253C195.333 522.418 192.795 523 189.841 523ZM185.679 517.73H189.585C191.403 517.73 192.933 517.408 194.173 516.764C195.423 516.111 196.361 515.102 196.986 513.739C197.62 512.366 197.938 510.595 197.938 508.426C197.938 506.277 197.62 504.52 196.986 503.156C196.361 501.793 195.428 500.789 194.188 500.145C192.947 499.501 191.418 499.179 189.599 499.179H185.679V517.73ZM214.738 523.412C213.346 523.412 212.105 523.17 211.016 522.688C209.927 522.195 209.066 521.471 208.431 520.514C207.806 519.548 207.494 518.346 207.494 516.906C207.494 515.694 207.716 514.676 208.161 513.852C208.606 513.028 209.212 512.366 209.979 511.864C210.746 511.362 211.618 510.983 212.593 510.727C213.578 510.472 214.61 510.292 215.69 510.188C216.959 510.055 217.981 509.932 218.758 509.818C219.534 509.695 220.098 509.515 220.448 509.278C220.799 509.042 220.974 508.691 220.974 508.227V508.142C220.974 507.242 220.69 506.546 220.121 506.054C219.563 505.562 218.767 505.315 217.735 505.315C216.646 505.315 215.78 505.557 215.136 506.04C214.492 506.513 214.066 507.11 213.857 507.83L208.261 507.375C208.545 506.049 209.103 504.903 209.937 503.938C210.77 502.962 211.845 502.214 213.161 501.693C214.487 501.163 216.021 500.898 217.763 500.898C218.976 500.898 220.136 501.04 221.244 501.324C222.361 501.608 223.351 502.048 224.212 502.645C225.084 503.241 225.77 504.009 226.272 504.946C226.774 505.874 227.025 506.987 227.025 508.284V523H221.286V519.974H221.116C220.765 520.656 220.297 521.258 219.71 521.778C219.122 522.29 218.417 522.692 217.593 522.986C216.769 523.27 215.817 523.412 214.738 523.412ZM216.471 519.236C217.361 519.236 218.147 519.061 218.829 518.71C219.511 518.35 220.046 517.867 220.434 517.261C220.822 516.655 221.016 515.969 221.016 515.202V512.886C220.827 513.009 220.567 513.123 220.235 513.227C219.913 513.322 219.549 513.412 219.141 513.497C218.734 513.573 218.327 513.644 217.92 513.71C217.513 513.767 217.143 513.819 216.812 513.866C216.102 513.971 215.481 514.136 214.951 514.364C214.421 514.591 214.009 514.899 213.715 515.287C213.422 515.666 213.275 516.139 213.275 516.707C213.275 517.531 213.573 518.161 214.17 518.597C214.776 519.023 215.543 519.236 216.471 519.236ZM243.325 501.182V505.727H230.185V501.182H243.325ZM233.168 495.955H239.219V516.295C239.219 516.854 239.305 517.29 239.475 517.602C239.646 517.905 239.882 518.118 240.185 518.241C240.498 518.365 240.858 518.426 241.265 518.426C241.549 518.426 241.833 518.402 242.117 518.355C242.401 518.298 242.619 518.256 242.771 518.227L243.722 522.73C243.419 522.825 242.993 522.934 242.444 523.057C241.895 523.189 241.227 523.27 240.441 523.298C238.983 523.355 237.704 523.161 236.606 522.716C235.517 522.271 234.669 521.58 234.063 520.642C233.457 519.705 233.159 518.521 233.168 517.091V495.955ZM253.488 523.412C252.096 523.412 250.855 523.17 249.766 522.688C248.677 522.195 247.816 521.471 247.181 520.514C246.556 519.548 246.244 518.346 246.244 516.906C246.244 515.694 246.466 514.676 246.911 513.852C247.356 513.028 247.962 512.366 248.729 511.864C249.496 511.362 250.368 510.983 251.343 510.727C252.328 510.472 253.36 510.292 254.44 510.188C255.709 510.055 256.731 509.932 257.508 509.818C258.284 509.695 258.848 509.515 259.198 509.278C259.549 509.042 259.724 508.691 259.724 508.227V508.142C259.724 507.242 259.44 506.546 258.871 506.054C258.313 505.562 257.517 505.315 256.485 505.315C255.396 505.315 254.53 505.557 253.886 506.04C253.242 506.513 252.816 507.11 252.607 507.83L247.011 507.375C247.295 506.049 247.853 504.903 248.687 503.938C249.52 502.962 250.595 502.214 251.911 501.693C253.237 501.163 254.771 500.898 256.513 500.898C257.726 500.898 258.886 501.04 259.994 501.324C261.111 501.608 262.101 502.048 262.962 502.645C263.834 503.241 264.52 504.009 265.022 504.946C265.524 505.874 265.775 506.987 265.775 508.284V523H260.036V519.974H259.866C259.515 520.656 259.047 521.258 258.46 521.778C257.872 522.29 257.167 522.692 256.343 522.986C255.519 523.27 254.567 523.412 253.488 523.412ZM255.221 519.236C256.111 519.236 256.897 519.061 257.579 518.71C258.261 518.35 258.796 517.867 259.184 517.261C259.572 516.655 259.766 515.969 259.766 515.202V512.886C259.577 513.009 259.317 513.123 258.985 513.227C258.663 513.322 258.299 513.412 257.891 513.497C257.484 513.573 257.077 513.644 256.67 513.71C256.263 513.767 255.893 513.819 255.562 513.866C254.852 513.971 254.231 514.136 253.701 514.364C253.171 514.591 252.759 514.899 252.465 515.287C252.172 515.666 252.025 516.139 252.025 516.707C252.025 517.531 252.323 518.161 252.92 518.597C253.526 519.023 254.293 519.236 255.221 519.236ZM279.841 493.909H287.426L295.438 513.455H295.778L303.79 493.909H311.375V523H305.409V504.065H305.168L297.639 522.858H293.577L286.048 503.994H285.807V523H279.841V493.909ZM322.55 523.412C321.158 523.412 319.918 523.17 318.829 522.688C317.74 522.195 316.878 521.471 316.244 520.514C315.619 519.548 315.306 518.346 315.306 516.906C315.306 515.694 315.529 514.676 315.974 513.852C316.419 513.028 317.025 512.366 317.792 511.864C318.559 511.362 319.43 510.983 320.406 510.727C321.39 510.472 322.423 510.292 323.502 510.188C324.771 510.055 325.794 509.932 326.57 509.818C327.347 509.695 327.91 509.515 328.261 509.278C328.611 509.042 328.786 508.691 328.786 508.227V508.142C328.786 507.242 328.502 506.546 327.934 506.054C327.375 505.562 326.58 505.315 325.548 505.315C324.459 505.315 323.592 505.557 322.948 506.04C322.304 506.513 321.878 507.11 321.67 507.83L316.073 507.375C316.357 506.049 316.916 504.903 317.749 503.938C318.583 502.962 319.657 502.214 320.974 501.693C322.299 501.163 323.834 500.898 325.576 500.898C326.788 500.898 327.948 501.04 329.056 501.324C330.174 501.608 331.163 502.048 332.025 502.645C332.896 503.241 333.583 504.009 334.085 504.946C334.586 505.874 334.837 506.987 334.837 508.284V523H329.099V519.974H328.928C328.578 520.656 328.109 521.258 327.522 521.778C326.935 522.29 326.229 522.692 325.406 522.986C324.582 523.27 323.63 523.412 322.55 523.412ZM324.283 519.236C325.174 519.236 325.96 519.061 326.641 518.71C327.323 518.35 327.858 517.867 328.246 517.261C328.635 516.655 328.829 515.969 328.829 515.202V512.886C328.639 513.009 328.379 513.123 328.048 513.227C327.726 513.322 327.361 513.412 326.954 513.497C326.547 513.573 326.139 513.644 325.732 513.71C325.325 513.767 324.956 513.819 324.624 513.866C323.914 513.971 323.294 514.136 322.763 514.364C322.233 514.591 321.821 514.899 321.528 515.287C321.234 515.666 321.087 516.139 321.087 516.707C321.087 517.531 321.386 518.161 321.982 518.597C322.588 519.023 323.355 519.236 324.283 519.236ZM339.532 531.182V501.182H345.498V504.847H345.768C346.033 504.259 346.416 503.663 346.918 503.057C347.43 502.441 348.093 501.93 348.907 501.523C349.731 501.106 350.754 500.898 351.975 500.898C353.566 500.898 355.034 501.314 356.379 502.148C357.723 502.972 358.798 504.217 359.603 505.884C360.408 507.541 360.81 509.619 360.81 512.119C360.81 514.553 360.417 516.608 359.631 518.284C358.855 519.951 357.794 521.215 356.45 522.077C355.114 522.929 353.618 523.355 351.961 523.355C350.787 523.355 349.788 523.161 348.964 522.773C348.149 522.384 347.482 521.897 346.961 521.31C346.44 520.713 346.042 520.112 345.768 519.506H345.583V531.182H339.532ZM345.455 512.091C345.455 513.388 345.635 514.52 345.995 515.486C346.355 516.452 346.876 517.205 347.558 517.744C348.239 518.275 349.068 518.54 350.043 518.54C351.028 518.54 351.862 518.27 352.543 517.73C353.225 517.181 353.741 516.423 354.092 515.457C354.451 514.482 354.631 513.36 354.631 512.091C354.631 510.831 354.456 509.723 354.106 508.767C353.755 507.811 353.239 507.062 352.558 506.523C351.876 505.983 351.038 505.713 350.043 505.713C349.058 505.713 348.225 505.973 347.543 506.494C346.871 507.015 346.355 507.754 345.995 508.71C345.635 509.667 345.455 510.794 345.455 512.091ZM364.844 531.182V501.182H370.81V504.847H371.08C371.345 504.259 371.729 503.663 372.231 503.057C372.742 502.441 373.405 501.93 374.219 501.523C375.043 501.106 376.066 500.898 377.288 500.898C378.879 500.898 380.346 501.314 381.691 502.148C383.036 502.972 384.111 504.217 384.915 505.884C385.72 507.541 386.123 509.619 386.123 512.119C386.123 514.553 385.73 516.608 384.944 518.284C384.167 519.951 383.107 521.215 381.762 522.077C380.427 522.929 378.931 523.355 377.273 523.355C376.099 523.355 375.1 523.161 374.276 522.773C373.462 522.384 372.794 521.897 372.273 521.31C371.753 520.713 371.355 520.112 371.08 519.506H370.896V531.182H364.844ZM370.768 512.091C370.768 513.388 370.948 514.52 371.308 515.486C371.667 516.452 372.188 517.205 372.87 517.744C373.552 518.275 374.38 518.54 375.356 518.54C376.341 518.54 377.174 518.27 377.856 517.73C378.538 517.181 379.054 516.423 379.404 515.457C379.764 514.482 379.944 513.36 379.944 512.091C379.944 510.831 379.769 509.723 379.418 508.767C379.068 507.811 378.552 507.062 377.87 506.523C377.188 505.983 376.35 505.713 375.356 505.713C374.371 505.713 373.538 505.973 372.856 506.494C372.183 507.015 371.667 507.754 371.308 508.71C370.948 509.667 370.768 510.794 370.768 512.091ZM400.1 523.426C397.856 523.426 395.924 522.972 394.305 522.062C392.695 521.144 391.454 519.847 390.583 518.17C389.712 516.485 389.276 514.491 389.276 512.19C389.276 509.946 389.712 507.976 390.583 506.281C391.454 504.586 392.681 503.265 394.262 502.318C395.853 501.371 397.719 500.898 399.859 500.898C401.298 500.898 402.638 501.13 403.879 501.594C405.129 502.048 406.218 502.735 407.146 503.653C408.083 504.572 408.812 505.727 409.333 507.119C409.854 508.502 410.114 510.121 410.114 511.977V513.639H391.691V509.889H404.418C404.418 509.018 404.229 508.246 403.85 507.574C403.471 506.902 402.946 506.376 402.273 505.997C401.611 505.609 400.839 505.415 399.958 505.415C399.04 505.415 398.225 505.628 397.515 506.054C396.814 506.471 396.265 507.034 395.867 507.744C395.469 508.445 395.266 509.226 395.256 510.088V513.653C395.256 514.733 395.455 515.666 395.853 516.452C396.26 517.238 396.833 517.844 397.572 518.27C398.31 518.696 399.186 518.909 400.2 518.909C400.872 518.909 401.487 518.814 402.046 518.625C402.605 518.436 403.083 518.152 403.481 517.773C403.879 517.394 404.182 516.93 404.39 516.381L409.987 516.75C409.702 518.095 409.12 519.269 408.239 520.273C407.368 521.267 406.241 522.044 404.859 522.602C403.486 523.152 401.899 523.426 400.1 523.426ZM414.063 523V501.182H419.93V504.989H420.157C420.555 503.634 421.222 502.612 422.16 501.92C423.097 501.22 424.177 500.869 425.398 500.869C425.701 500.869 426.028 500.888 426.379 500.926C426.729 500.964 427.037 501.016 427.302 501.082V506.452C427.018 506.366 426.625 506.291 426.123 506.224C425.621 506.158 425.162 506.125 424.745 506.125C423.855 506.125 423.059 506.319 422.359 506.707C421.667 507.086 421.118 507.616 420.711 508.298C420.313 508.98 420.114 509.766 420.114 510.656V523H414.063Z"
          fill="white"
        />
        <rect
          x="140"
          y="162"
          width="320"
          height="232"
          rx="37"
          fill="#644A9B"
          stroke="white"
          stroke-width="6"
        />
        <ellipse
          cx="206.558"
          cy="216.751"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <ellipse
          cx="206.558"
          cy="277.5"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <ellipse
          cx="206.558"
          cy="338.249"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <ellipse
          cx="393.442"
          cy="216.751"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <ellipse
          cx="393.442"
          cy="277.5"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <ellipse
          cx="393.442"
          cy="338.249"
          rx="19.5577"
          ry="17.7513"
          fill="white"
        />
        <line
          y1="-3"
          x2="230.112"
          y2="-3"
          transform="matrix(0.810109 0.586279 -0.722824 0.691032 209.6 211.623)"
          stroke="white"
          stroke-width="6"
        />
        <line
          y1="-3"
          x2="208.029"
          y2="-3"
          transform="matrix(0.956855 -0.290567 0.401901 0.915683 209.6 339.524)"
          stroke="white"
          stroke-width="6"
        />
        <line
          y1="-3"
          x2="208.029"
          y2="-3"
          transform="matrix(0.956855 -0.290567 0.401901 0.915683 209.6 283.458)"
          stroke="white"
          stroke-width="6"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
      {isClicked && (
        <DataMapperMediatorProperty modalOpen={open} modalClose={handleCancelClick} />
      )}
      {isDoubleClicked && (
        <DatamapperModal modalOpen={modalOpen} modalClose={handleModalClose} projectName={handleDatamapperProject} 
        registryName= {handleDatamapperRegistry}/>
      )}
    </>
  );
}
