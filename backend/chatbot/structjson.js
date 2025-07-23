function jsonToStructProto(json) {
    const fields = {};
    for (let k in json) {
      fields[k] = convert(json[k]);
    }
    return { fields };
  }
  
  function convert(value) {
    if (value === null) return { nullValue: 'NULL_VALUE' };
    switch (typeof value) {
      case 'number': return { numberValue: value };
      case 'string': return { stringValue: value };
      case 'boolean': return { boolValue: value };
      case 'object':
        if (Array.isArray(value)) {
          return { listValue: { values: value.map(convert) }};
        }
        return { structValue: jsonToStructProto(value) };
      default: return { stringValue: String(value) };
    }
  }
  
  module.exports = { jsonToStructProto };
  