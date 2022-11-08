const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

const entityList = [
  {
    id: "urn:ngsi-ld:TemperatureSensor:002",
    type: "TemperatureSensor",
    category: {
      type: "Property",
      value: "sensor",
    },
    temperature: {
      type: "Property",
      value: 20,
      unitCode: "CEL",
    },
  },
  {
    id: "urn:ngsi-ld:TemperatureSensor:003",
    type: "TemperatureSensor",
    category: {
      type: "Property",
      value: "sensor",
    },
    temperature: {
      type: "Property",
      value: 2,
      unitCode: "CEL",
    },
  },
  {
    id: "urn:ngsi-ld:TemperatureSensor:004",
    type: "TemperatureSensor",
    category: {
      type: "Property",
      value: "sensor",
    },
    temperature: {
      type: "Property",
      value: 100,
      unitCode: "CEL",
    },
  },
];

const entityDetail = {
  "@context": "https://e8.co.kr/ngsi-ld/v1/context.jsonld",
  id: "urn:ngsi-ld:Vehicle:651",
  type: "Vehicle",
  vehicleType: {
    type: "Property",
    value: "sedan",
  },
  speed: {
    type: "Property",
    value: 44.60653965536181,
    unitCode: "km/h",
    observedAt: "2020-09-17T09:41:56.755Z",
    verify: {
      type: "Property",
      value: true,
    },
  },
  linkTo: {
    type: "Relationship",
    object: "urn:ngsi-ld:Link:102",
  },
  lane: {
    type: "Property",
    value: 4,
  },
  location: {
    type: "GeoProperty",
    value: {
      type: "Point",
      coordinates: [13.3598, 52.5165],
    },
    observedAt: "2020-09-17T09:41:56.755Z",
  },
  orgLocation: {
    type: "GeoProperty",
    value: {
      type: "Point",
      coordinates: [13.3598, 52.5165],
    },
    observedAt: "2020-09-17T09:41:56.755Z",
  },
};

const contextList = [
  "https://uri.etsi.org/ngsi-ld/Date",
  "https://uri.fiware.org/ns/data-models#AgriFarm",
];

const modelList = {
  Vehicle: "https://uri.e8ight/ngsi-ld/:Vehicle",
  Pedestrian: "https://uri.e8ight/ngsi-ld/:Pedestrian",
  Link: "https://uri.e8ight/ngsi-ld/:Link",
  TrafficLight: "https://uri.e8ight/ngsi-ld/:TrafficLight",
  linkTo: "https://uri.e8ight/ngsi-ld/:linkTo",
  verified: "https://uri.e8ight/ngsi-ld/:verified",
  vehicleDescription: "https://uri.e8ight/ngsi-ld/:vehicleDescription",
  vehicleType: "https://uri.e8ight/ngsi-ld/:vehicleType",
  speed: "https://uri.e8ight/ngsi-ld/:Speed",
  trafficSignal: "https://uri.e8ight/ngsi-ld/:trafficSignal",
  property: "https://uri.e8ight/ngsi-ld/:Property",
};

// context list
app.get("/jsonldContexts", (req, res) => {
  res.json(contextList);
});

// model list
app.get("/ngsi-ld/v1/datamodels", (req, res) => {
  res.json(modelList);
});

// entity list
app.get("/ngsi-ld/v1/entities", (req, res) => {
  res.json(entityList);
});

// entity detail
app.get(
  "/ngsi-ld/v1/entities/urn:ngsi-ld:TemperatureSensor:002",
  (req, res) => {
    res.json(entityDetail);
  }
);

app.get("/test", (req, res) => {
  res.send("test");
});

app.get("/*", (req, res) => {
  res.json({
    test: "서버 연결 성공",
  });
});

app.listen(port, () => {
  console.log("###########################################");
  console.log(`#### Eample app listening on port ${port} ####`);
  console.log("###########################################");
});
