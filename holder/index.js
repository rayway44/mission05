// export GOOGLE_APPLICATION_CREDENTIALS="turners-cars-341321-1b47d5599e7c.json"

console.log('connected')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('youve made it here to TEST TEST TEST')
  console.log('you have hit test')
})

app.get('/image',(req,res) => {

  const projectId = 'turners-cars-341321';
  const location = 'us-central1';
  const modelId = 'ICN3565265409110179840';

  let test = 'cat-image.jpg'
  let image1 = 'test-image01.jpg'
  let image2 = 'test-image02.jpg'
  let image3 = 'test-image03.jpg'
  let image7 = 'test-image07.jpg'
  let image10 = 'test-image10.jpg'
  let image8 = 'test-image08.jpg'

  const filePath = image10;

  // Imports the Google Cloud AutoML library
  const {PredictionServiceClient} = require('@google-cloud/automl').v1;
  const fs = require('fs');

  // Instantiates a client
  const client = new PredictionServiceClient();

  // Read the file content for translation.
  const content = fs.readFileSync(filePath);

  async function predict() {
    
    
    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        image: {
          imageBytes: content,
        },
      },
    };

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {
      console.log(`Predicted class name: ${annotationPayload.displayName}`);
      res.json(`${annotationPayload.displayName}`);

      console.log(`Predicted class score: ${annotationPayload.classification.score}`);

    }
  }

  predict();

})

// ====================================

app.get('/query/:question', (req, res) => {
  
  let queryQuestion = req.params.question

  const DiscoveryV1 = require('ibm-watson/discovery/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
      apikey: 'T4Fqk5tqAt_4gOX0SydZ3JviYrl0yRU3sPy8BWdaIMU4',
  }),
  serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/cd2788f9-45f5-49a7-861a-f98f2272cf33',
  });

  const queryParams = {
      environmentId: '08063a73-44a5-4ec9-bb4d-32b60719a3e3',
      collectionId: 'a56cd779-ef14-4482-aa4b-befa737b8248',
      query: queryQuestion,
      highlight: true,
  };

  console.log('query point hit')
  discovery.query(queryParams)
  .then(queryResponse => {
    console.log(JSON.stringify(queryResponse, null, 2));
    res.send(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

})

app.listen('4000', () => {
  console.log('port 4000 open')
})

// 

/*

curl -X POST -u "apikey:Nl2diCjZvWcRnIwvcvvw27zBUXWeq4hHrWtlMZhXcV98" \
--header "Content-Type: application/json" \
--data '{
  "url": "https://www.turners.co.nz/Cars/finance-insurance/car-insurance/",
  "features": {
    "sentiment": {
      "targets": [
        "insurance"
      ]
    },
    "keywords": {
      "emotion": true
    }
  }
}' \
"https://api.au-syd.natural-language-understanding.watson.cloud.ibm.com/instances/033bff25-d1cc-4471-b4a3-3de2a4c6750f/v1/analyze?version=2019-07-12"


*/