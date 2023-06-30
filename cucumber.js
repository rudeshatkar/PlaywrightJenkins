const common = `
  --require src/hooks.ts 
  --require src/test/steps/*.ts
  `;
module.exports = {
  default: `src/test/featurers/*.feature ${common}`,
};