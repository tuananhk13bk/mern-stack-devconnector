const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value)).length === 0 ||
  (typeof value === "array" && value.length === 0) ||
  (typeof value === "string" && value === "");

export default isEmpty;
