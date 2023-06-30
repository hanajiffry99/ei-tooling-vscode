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

export function PayloadFactoryMediatorProperty(props: Props) {
  const handleCancelClick = () => {
    props.modalClose(false);
  };

  const [selectedPayloadFormat, setSelectedPayloadFormat] = useState("Inline");
  const [selectedMediaType, setSelectedMediaType] = useState("xml");
  const [selectedTemplateType, setSelectedTemplateType] = useState("Default");
  const [payloadKey, setPayloadKey] = useState("");
  const [payload, setPayload] = useState("");
  const [args, setArgs] = useState("");
  const [description, setDescription] = useState("");

  const {
    api: {
      ls: { getDiagramEditorLangClient },
    },
  } = useContext(DiagramContext);

  const handlePayloadFormatSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPayloadFormat(event.target.value);
  };
  const handleMediaTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedMediaType(event.target.value);
  };
  const handleTemplateTypeSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTemplateType(event.target.value);
  };
  const handlePayloadKey = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPayloadKey(event.target.value);
  };
  const handlePayloadChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPayload(event.target.value);
  };
  const handleArgsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArgs(event.target.value);
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
            Payload Factory Mediator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Modal.Title className="text-secondary">Properties</Modal.Title>
            <Form>
              <Form.Group>
                <Form.Label className="PayloadFormat">
                  Payload Format
                </Form.Label>
                <Form.Select
                  className="custom-form-control"
                  value={selectedPayloadFormat}
                  onChange={handlePayloadFormatSelectChange}
                >
                  <option value="Inline">Inline</option>
                  <option value="RegistryReference">Registry Reference</option>
                </Form.Select>
                <Form.Label className="MediaType">Media Type</Form.Label>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="help-tooltip">
                      Used to specify whether the message payload should be
                      created in JSON, XML, or text
                    </Tooltip>
                  }
                >
                  <span className="custom-question-icon">
                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                  </span>
                </OverlayTrigger>
                <Form.Select
                  className="custom-form-control"
                  value={selectedMediaType}
                  onChange={handleMediaTypeSelectChange}
                >
                  <option value="xml">xml</option>
                  <option value="json">json</option>
                  <option value="text">text</option>
                </Form.Select>
                <Form.Label className="TemplateType">Template Type</Form.Label>
                <Form.Select
                  className="custom-form-control"
                  value={selectedTemplateType}
                  onChange={handleTemplateTypeSelectChange}
                >
                  <option value="xml">Default</option>
                  <option value="json">Freemarker</option>
                </Form.Select>
                {selectedPayloadFormat === "RegistryReference" && (
                  <>
                    <Form.Label className="PayloadKey">Payload Key</Form.Label>
                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                    <Form.Control
                      className="custom-form-control"
                      type="text"
                      readOnly
                      value={payloadKey}
                      onChange={handlePayloadKey}
                    />
                  </>
                )}
              </Form.Group>
            </Form>
          </Row>
          <Row className="mb-4">
            <Modal.Title className="text-secondary">Payload</Modal.Title>
            <Form>
              <Form.Group>
                {selectedPayloadFormat === "Inline" && (
                  <>
                    <Form.Label className="Payload">Payload</Form.Label>
                    <Form.Control
                      className="custom-form-control"
                      as="textarea"
                      onChange={handlePayloadChange}
                      placeholder="<inline>"
                      rows={5}
                    />
                  </>
                )}
                <Form.Label className="Args">Args</Form.Label>
                {/*When a user clicks this textbox, the Expression Selector Model or Default Model appears*/}
                <Form.Control
                  className="custom-form-control"
                  type="text"
                  readOnly
                  value={args}
                  onChange={handleArgsChange}
                />
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
