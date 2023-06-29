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

export function FaultMediatorProperty(props: Props) {
  const handleCancelClick = () => {
    props.modalClose(false);
  };

  const [selectedSOAPVersion, setSelectedSOAPVersion] = useState("soap11");
  const [selectedSOAP11, setSelectedSOAP11] = useState("VersionMismatch");
  const [selectedCode, setSelectedCode] = useState("VersionMismatch");
  const [selectedSerializeResponse, setSelectedSerializeResponse] =
    useState("");
  const [selectedDetailType, setSelectedDetailType] = useState("VALUE");
  const [selectedReasonType, setSelectedReasonType] = useState("VALUE");
  const [actor, setActor] = useState("");
  const [role, setRole] = useState("");
  const [node, setNode] = useState("");
  const [detailValue, setDetailValue] = useState("");
  const [detailExpression, setDetailExpression] = useState("");
  const [reasonValue, setReasonValue] = useState("");
  const [reasonExpression, setReasonExpression] = useState("");
  const [description, setDescription] = useState("");

  const {
    api: {
      ls: { getDiagramEditorLangClient },
    },
  } = useContext(DiagramContext);

  const handleSOAPVersionSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSOAPVersion(event.target.value);
  };
  const handleSOAP11SelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSOAP11(event.target.value);
  };
  const handleCodeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCode(event.target.value);
  };
  const handleSerializeResponseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedSerializeResponse(event.target.value);
  };
  const handleDetailTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDetailType(event.target.value);
  };
  const handleReasonTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedReasonType(event.target.value);
  };
  const handleActor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActor(event.target.value);
  };
  const handleRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  const handleNode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNode(event.target.value);
  };
  const handleDetailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailValue(event.target.value);
  };
  const handleDetailExpression = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDetailExpression(event.target.value);
  };
  const handleReasonValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReasonValue(event.target.value);
  };
  const handleReasonExpression = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReasonExpression(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Modal.Title className="text-primary">Fault Mediator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Modal.Title className="text-secondary">Properties</Modal.Title>
            <Form>
              <Form.Group>
                <Form.Label className="SOAPVersion">SOAP Version</Form.Label>
                <Form.Select
                  className="custom-form-control"
                  value={selectedSOAPVersion}
                  onChange={handleSOAPVersionSelectChange}
                >
                  <option value="soap11">soap11</option>
                  <option value="soap12">soap12</option>
                  <option value="POX">POX</option>
                </Form.Select>
                {selectedSOAPVersion === "soap11" && (
                  <>
                    <Form.Label className="SOAP11">SOAP11</Form.Label>
                    <Form.Select
                      className="custom-form-control"
                      value={selectedSOAP11}
                      onChange={handleSOAP11SelectChange}
                    >
                      <option value="VersionMismatch">VersionMismatch</option>
                      <option value="MustUnderstand">MustUnderstand</option>
                      <option value="Client">Client</option>
                      <option value="Server">Server</option>
                    </Form.Select>
                    <Form.Label className="Actor">Actor</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id="help-tooltip">
                          The element of the SOAP fault message which is used to
                          capture the party which caused the fault
                        </Tooltip>
                      }
                    >
                      <span className="custom-question-icon">
                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                      </span>
                    </OverlayTrigger>
                    <Form.Control
                      className="custom-form-control"
                      type="text"
                      placeholder="eg: Actor"
                      value={actor}
                      onChange={handleActor}
                    />
                  </>
                )}
                {selectedSOAPVersion === "soap12" && (
                  <>
                    <Form.Label className="Code">Code</Form.Label>
                    <Form.Select
                      className="custom-form-control"
                      value={selectedCode}
                      onChange={handleCodeSelectChange}
                    >
                      <option value="VersionMismatch">VersionMismatch</option>
                      <option value="MustUnderstand">MustUnderstand</option>
                      <option value="DataEncodingUnknown">
                        DataEncodingUnknown
                      </option>
                      <option value="Sender">Sender</option>
                      <option value="Receiver">Receiver</option>
                    </Form.Select>
                    <Form.Label className="Role">Role</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id="help-tooltip">The SOAP role name</Tooltip>
                      }
                    >
                      <span className="custom-question-icon">
                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                      </span>
                    </OverlayTrigger>
                    <Form.Control
                      className="custom-form-control"
                      type="text"
                      placeholder="eg: Role"
                      value={role}
                      onChange={handleRole}
                    />
                    <Form.Label className="Node">Node</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id="help-tooltip">The SOAP node name</Tooltip>
                      }
                    >
                      <span className="custom-question-icon">
                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                      </span>
                    </OverlayTrigger>
                    <Form.Control
                      className="custom-form-control"
                      type="text"
                      placeholder="eg: Node"
                      value={node}
                      onChange={handleNode}
                    />
                  </>
                )}
                <Form.Check
                  type="checkbox"
                  className="checkbox"
                  label={
                    <span className="checkbox-font">Serialize Response</span>
                  }
                  checked={selectedSerializeResponse === "SerializeResponse"}
                  value="SerializeResponse"
                  onChange={handleSerializeResponseChange}
                />
                <br />
                <Row className="mb-4">
                  <Modal.Title className="text-secondary">Detail</Modal.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label className="DetailType">Type</Form.Label>
                      <Form.Select
                        className="custom-form-control"
                        value={selectedDetailType}
                        onChange={handleDetailTypeSelectChange}
                      >
                        <option value="VALUE">VALUE</option>
                        <option value="EXPRESSION">EXPRESSION</option>
                      </Form.Select>
                      {selectedDetailType === "VALUE" && (
                        <>
                          <Form.Label className="DetailValue">Value</Form.Label>
                          <Form.Control
                            className="custom-form-control"
                            type="text"
                            placeholder="eg: Value"
                            value={detailValue}
                            onChange={handleDetailValue}
                          />
                        </>
                      )}
                      {selectedDetailType === "EXPRESSION" && (
                        <>
                          <Form.Label className="DetailExpression">
                            Expression
                          </Form.Label>
                          {/*When a user clicks this textbox, the Expression Selector Model appears*/}
                          <Form.Control
                            className="custom-form-control"
                            type="text"
                            readOnly
                            value={detailExpression}
                            onChange={handleDetailExpression}
                          />
                        </>
                      )}
                    </Form.Group>
                  </Form>
                </Row>
                <br />
                <Row className="mb-4">
                  <Modal.Title className="text-secondary">Reason</Modal.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label className="ReasonType">Type</Form.Label>
                      <Form.Select
                        className="custom-form-control"
                        value={selectedReasonType}
                        onChange={handleReasonTypeSelectChange}
                      >
                        <option value="VALUE">VALUE</option>
                        <option value="EXPRESSION">EXPRESSION</option>
                      </Form.Select>
                      {selectedReasonType === "VALUE" && (
                        <>
                          <Form.Label className="ReasonValue">Value</Form.Label>
                          <Form.Control
                            className="custom-form-control"
                            type="text"
                            placeholder="eg: Value"
                            value={reasonValue}
                            onChange={handleReasonValue}
                          />
                        </>
                      )}
                      {selectedReasonType === "EXPRESSION" && (
                        <>
                          <Form.Label className="ReasonExpression">
                            Expression
                          </Form.Label>
                          {/*When a user clicks this textbox, the Expression Selector Model appears*/}
                          <Form.Control
                            className="custom-form-control"
                            type="text"
                            readOnly
                            value={reasonExpression}
                            onChange={handleReasonExpression}
                          />
                        </>
                      )}
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
