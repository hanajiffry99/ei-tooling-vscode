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

import React, { Component, useContext, useState } from "react";
import {
  Col,
  Form,
  Modal,
  Row,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import "./style.scss";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CompletionResponse,
  DiagramEditorLangClientInterface,
  SnippetCompletionResponse,
  TextEdit,
} from "@wso2-ei/low-code-editor-commons";
import { applyChange } from "../../../../DiagramGenerator/generatorUtil";
import { Context as DiagramContext } from "../../../../Contexts";

interface Props {
  modalOpen: boolean;
  modalClose: (value: boolean) => void;
}

export function DataMapperMediatorProperty(props: Props) {
  const handleCancelClick = () => {
    props.modalClose(false);
  };

  const [conLocalPath, setConLocalPath] = useState("");
  const [inSchemaLocalPath, setInSchemaLocalPath] = useState("");
  const [outSchemaLocalPath, setOutSchemaLocalPath] = useState("");
  const [selectedInputType, setSelectedInputType] = useState("XML");
  const [selectedOutputType, setSelectedOutputType] = useState("XML");
  const [description, setDescription] = useState("");
  const {
    api: {
      ls: { getDiagramEditorLangClient },
    },
  } = useContext(DiagramContext);
  const handleConLocalPath = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConLocalPath(event.target.value);
  };
  const handleInSchemaLocalPath = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInSchemaLocalPath(event.target.value);
  };
  const handleOutSchemaLocalPath = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutSchemaLocalPath(event.target.value);
  };
  const handleInputTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedInputType(event.target.value);
  };
  const handleOutputTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOutputType(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Modal
        show={props.modalOpen}
        onHide={handleCancelClick}
        dialogClassName="custom-modal-dialog"
      >
        <Modal.Header>
          <Modal.Title className="text-primary">
            Data Mapper Mediator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Modal.Title className="text-secondary">Properties</Modal.Title>
            <Form>
              <Form.Group>
                <Form.Label className="ConLocalPath">
                  Configuration Local Path
                </Form.Label>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="help-tooltip">
                      Double click on datamapper mediator diagram to load
                      configurations dialog
                    </Tooltip>
                  }
                >
                  <span className="custom-question-icon">
                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                  </span>
                </OverlayTrigger>
                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                <Form.Control
                  className="custom-form-control"
                  type="text"
                  readOnly
                  value={conLocalPath}
                  onChange={handleConLocalPath}
                />
                <Row className="mb-4">
                  <Modal.Title className="text-secondary">
                    Input Type
                  </Modal.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label className="InputType<">Input Type</Form.Label>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id="help-tooltip">
                            Expected input message type &#40;XML/JSON/CSV&#41;
                          </Tooltip>
                        }
                      >
                        <span className="custom-question-icon">
                          <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                        </span>
                      </OverlayTrigger>
                      <Form.Select
                        className="custom-form-control"
                        value={selectedInputType}
                        onChange={handleInputTypeSelectChange}
                      >
                        <option value="XML">XML</option>
                        <option value="CSV">CSV</option>
                        <option value="JSON">JSON</option>
                      </Form.Select>
                      <Form.Label className="InSchemaLocalPath">
                        InputSchema Local Path
                      </Form.Label>
                      {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                      <Form.Control
                        className="custom-form-control"
                        type="text"
                        readOnly
                        value={inSchemaLocalPath}
                        onChange={handleInSchemaLocalPath}
                      />
                    </Form.Group>
                  </Form>
                </Row>
                <Row className="mb-4">
                  <Modal.Title className="text-secondary">
                    Output Type
                  </Modal.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label className="OutputType<">
                        Output Type
                      </Form.Label>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id="help-tooltip">
                            Expected output message type &#40;XML/JSON/CSV&#41;
                          </Tooltip>
                        }
                      >
                        <span className="custom-question-icon">
                          <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                        </span>
                      </OverlayTrigger>
                      <Form.Select
                        className="custom-form-control"
                        value={selectedOutputType}
                        onChange={handleOutputTypeSelectChange}
                      >
                        <option value="XML">XML</option>
                        <option value="CSV">CSV</option>
                        <option value="JSON">JSON</option>
                      </Form.Select>
                      <Form.Label className="OutSchemaLocalPath">
                        OutputSchema Local Path
                      </Form.Label>
                      {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                      <Form.Control
                        className="custom-form-control"
                        type="text"
                        readOnly
                        value={outSchemaLocalPath}
                        onChange={handleOutSchemaLocalPath}
                      />
                    </Form.Group>
                  </Form>
                </Row>
                <Form.Label className="Description">Description</Form.Label>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="help-tooltip">Default description</Tooltip>
                  }
                >
                  <span className="custom-question-icon">
                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                  </span>
                </OverlayTrigger>
                <Form.Control
                  className="custom-form-control"
                  as="textarea"
                  value={description}
                  onChange={handleDescription}
                  placeholder="eg: None"
                />
              </Form.Group>
            </Form>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCancelClick}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleCancelClick}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

async function modifyTextOnComponentSelection(
  url: string,
  fsPath: string,
  text: TextEdit,
  previousComponentStartPosition: number,
  langClient: any
) {
  await applyChange(
    url,
    fsPath,
    text,
    previousComponentStartPosition,
    langClient
  );
}
