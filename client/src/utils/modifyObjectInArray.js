module.exports = (arr, objectId, modifyValue) => {
  return arr.reduce((accum, current) => {
    if (current._id === objectId) current = modifyValue;
    accum.push(current);
    return accum;
  }, []);
};
