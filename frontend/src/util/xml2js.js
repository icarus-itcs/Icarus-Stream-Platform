var parseString = require('xml2js').parseString;

export default function xml2js(xml){
  var cleanedXml = xml.toString().replace("\ufeff", "");
  return parseString(cleanedXml, function (err, result) {
      return result;
  });
}
