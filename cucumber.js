const common = `
  --require src/hooks.js 
  --require src/test/steps/*.ts
  `;
module.exports = {
  default: `${common} src/test/featurers/*.feature`,
};