import swagger from 'swagger-autogen';
import doc from  './doc.js';

const swaggerAutogen = swagger();

const outputFile = 'src/documentation/swagger_output.json';
const endpointsFiles = ['src/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
