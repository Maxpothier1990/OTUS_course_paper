# Описание бизнес процессов

## Заказ блюда

На схеме представлены следующие бизнес-процессы:

- выбор блюда
- выбор акционного товара
- оплата заказа
- получение заказа

```bpmn
--8<-- "diagrams/BPMN/make_order.bpmn"


## Выбор блюда из меню

На схеме представлены следующие бизнес-процессы:

- выбор категории блюда
- выбор ингридиентов блюда

<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0ddkqgr" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.0.0-dev">
  <bpmn:collaboration id="Collaboration_06ftr3e">
    <bpmn:participant id="Participant_1q9a472" name="Выбрать блюдо из категории" processRef="Process_1yxubzn" />
  </bpmn:collaboration>
  <bpmn:process id="Process_1yxubzn">
    <bpmn:subProcess id="Activity_0ccc47p" name="Добавить блюдо в корзину">
      <bpmn:incoming>Flow_0m0e60m</bpmn:incoming>
      <bpmn:outgoing>Flow_1x5tt20</bpmn:outgoing>
      <bpmn:standardLoopCharacteristics />
      <bpmn:startEvent id="Event_0eoxprf">
        <bpmn:outgoing>Flow_1k2um76</bpmn:outgoing>
      </bpmn:startEvent>
      <bpmn:exclusiveGateway id="Gateway_010phzr" name="Изменить ингридиенты?" default="Flow_0qx13cu">
        <bpmn:incoming>Flow_0b2z4lx</bpmn:incoming>
        <bpmn:outgoing>Flow_0kyq9xf</bpmn:outgoing>
        <bpmn:outgoing>Flow_0qx13cu</bpmn:outgoing>
      </bpmn:exclusiveGateway>
      <bpmn:exclusiveGateway id="Gateway_1imvc62" default="Flow_179zfwv">
        <bpmn:incoming>Flow_0qx13cu</bpmn:incoming>
        <bpmn:incoming>Flow_02h74sw</bpmn:incoming>
        <bpmn:outgoing>Flow_179zfwv</bpmn:outgoing>
      </bpmn:exclusiveGateway>
      <bpmn:endEvent id="Event_0pk7qui">
        <bpmn:incoming>Flow_1yih2fh</bpmn:incoming>
      </bpmn:endEvent>
      <bpmn:userTask id="Activity_07xeayw" name="Выбрать блюдо">
        <bpmn:incoming>Flow_1k2um76</bpmn:incoming>
        <bpmn:outgoing>Flow_0b2z4lx</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:userTask id="Activity_17gjznf" name="Изменить ингридиенты">
        <bpmn:incoming>Flow_0kyq9xf</bpmn:incoming>
        <bpmn:outgoing>Flow_02h74sw</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:userTask id="Activity_1pn1kxj" name="Добавить блюдо в корзину">
        <bpmn:incoming>Flow_179zfwv</bpmn:incoming>
        <bpmn:outgoing>Flow_1yih2fh</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:sequenceFlow id="Flow_1k2um76" sourceRef="Event_0eoxprf" targetRef="Activity_07xeayw" />
      <bpmn:sequenceFlow id="Flow_0b2z4lx" sourceRef="Activity_07xeayw" targetRef="Gateway_010phzr" />
      <bpmn:sequenceFlow id="Flow_0kyq9xf" name="Да" sourceRef="Gateway_010phzr" targetRef="Activity_17gjznf" />
      <bpmn:sequenceFlow id="Flow_0qx13cu" name="Нет" sourceRef="Gateway_010phzr" targetRef="Gateway_1imvc62" />
      <bpmn:sequenceFlow id="Flow_02h74sw" sourceRef="Activity_17gjznf" targetRef="Gateway_1imvc62" />
      <bpmn:sequenceFlow id="Flow_179zfwv" sourceRef="Gateway_1imvc62" targetRef="Activity_1pn1kxj" />
      <bpmn:sequenceFlow id="Flow_1yih2fh" sourceRef="Activity_1pn1kxj" targetRef="Event_0pk7qui" />
    </bpmn:subProcess>
    <bpmn:startEvent id="Event_0m39c27">
      <bpmn:outgoing>Flow_1qce3g4</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:endEvent id="Event_0w0kp1t">
      <bpmn:incoming>Flow_1x5tt20</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="Activity_19yeb95" name="Выбрать категорию блюда">
      <bpmn:incoming>Flow_1qce3g4</bpmn:incoming>
      <bpmn:outgoing>Flow_0m0e60m</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0m0e60m" sourceRef="Activity_19yeb95" targetRef="Activity_0ccc47p" />
    <bpmn:sequenceFlow id="Flow_1x5tt20" sourceRef="Activity_0ccc47p" targetRef="Event_0w0kp1t" />
    <bpmn:sequenceFlow id="Flow_1qce3g4" sourceRef="Event_0m39c27" targetRef="Activity_19yeb95" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_06ftr3e">
      <bpmndi:BPMNShape id="Participant_1q9a472_di" bpmnElement="Participant_1q9a472" isHorizontal="true">
        <dc:Bounds x="180" y="90" width="1350" height="350" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0m39c27_di" bpmnElement="Event_0m39c27">
        <dc:Bounds x="272" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0w0kp1t_di" bpmnElement="Event_0w0kp1t">
        <dc:Bounds x="1442" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_14snfbr_di" bpmnElement="Activity_19yeb95">
        <dc:Bounds x="360" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ccc47p_di" bpmnElement="Activity_0ccc47p" isExpanded="true">
        <dc:Bounds x="500" y="120" width="870" height="260" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0eoxprf_di" bpmnElement="Event_0eoxprf">
        <dc:Bounds x="540" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_010phzr_di" bpmnElement="Gateway_010phzr" isMarkerVisible="true">
        <dc:Bounds x="785" y="225" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="773" y="188" width="73" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1imvc62_di" bpmnElement="Gateway_1imvc62" isMarkerVisible="true">
        <dc:Bounds x="1045" y="225" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0pk7qui_di" bpmnElement="Event_0pk7qui">
        <dc:Bounds x="1312" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1j3bpcn_di" bpmnElement="Activity_07xeayw">
        <dc:Bounds x="630" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ubzcwy_di" bpmnElement="Activity_17gjznf">
        <dc:Bounds x="890" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0el635b_di" bpmnElement="Activity_1pn1kxj">
        <dc:Bounds x="1150" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1k2um76_di" bpmnElement="Flow_1k2um76">
        <di:waypoint x="576" y="250" />
        <di:waypoint x="630" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0b2z4lx_di" bpmnElement="Flow_0b2z4lx">
        <di:waypoint x="730" y="250" />
        <di:waypoint x="785" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0kyq9xf_di" bpmnElement="Flow_0kyq9xf">
        <di:waypoint x="835" y="250" />
        <di:waypoint x="890" y="250" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="856" y="232" width="14" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0qx13cu_di" bpmnElement="Flow_0qx13cu">
        <di:waypoint x="810" y="275" />
        <di:waypoint x="810" y="330" />
        <di:waypoint x="1070" y="330" />
        <di:waypoint x="1070" y="275" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="931" y="312" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_02h74sw_di" bpmnElement="Flow_02h74sw">
        <di:waypoint x="990" y="250" />
        <di:waypoint x="1045" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_179zfwv_di" bpmnElement="Flow_179zfwv">
        <di:waypoint x="1095" y="250" />
        <di:waypoint x="1150" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1yih2fh_di" bpmnElement="Flow_1yih2fh">
        <di:waypoint x="1250" y="250" />
        <di:waypoint x="1312" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0m0e60m_di" bpmnElement="Flow_0m0e60m">
        <di:waypoint x="460" y="250" />
        <di:waypoint x="500" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1x5tt20_di" bpmnElement="Flow_1x5tt20">
        <di:waypoint x="1370" y="250" />
        <di:waypoint x="1442" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1qce3g4_di" bpmnElement="Flow_1qce3g4">
        <di:waypoint x="308" y="250" />
        <di:waypoint x="360" y="250" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>


## Оплата заказа

На схеме представлены следующие бизнес-процессы:

- выбор способ сервировки блюда
- активация учетной записи клиента
- ипспользование бонусной системы
- выбор способа оплаты

![Оплата заказа](diagrams/BPMN/payment_order.bpmn)