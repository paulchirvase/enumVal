// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
   
  myEnumDef = new RegExp("\\b(enum)\\b(.)*?[;|}]", "gs");
   
  function extractName(s)
  {
      classRegexp = new RegExp("\\b(enum)\\b", "gs");
      s = s.replace(classRegexp, "");
      classRegexp = new RegExp("\\b(class)\\b", "gs");
      s = s.replace(classRegexp, "");
      rightSideTrim = new RegExp("[{]", "gs");
      s = s.substring(0, s.search(rightSideTrim));
      s = s.trim();
   
      return s;
  }
   
  function extractElements(s)
  {
      //console.log(s);
      elements = new RegExp("(?<={).*?(?=})", "gs")
      s=s.match(elements)
      word = new RegExp("\b[^\W]+\b", "gs")
      
      parts = s[0].split(",")
      for(let i = 0; i < parts.length; i++)
      {
          parts[i] = parts[i].trim();
      }
      
      return parts;
  }
   
  // Read the file and print its contents.
  var fs = require('fs')
    , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    //console.log('OK: ' + filename);
    //console.log(data)
   
   
     const found = data.match(myEnumDef);
    
    let enumFunc = "std::string enumVal"
    let enumFile = ""
   
    for (let i = 0; found[i] != null; i++)
    {
      let className = extractName(found[i]);

      enumFile += enumFunc+ "("+className + " v) {\n"
      enumFile += "\tswitch(v)\n\t{\n"
      //console.log(found[i])
      let elements = extractElements(found[i]);
      //console.log(className)
      //console.log(elements)
       for(let i = 0; i < elements.length; i++)
      {
        word = /\b[^\W]+\b/gs;
        let element=elements[i].match(word)
        if(element!=null)
          enumFile += "\t\tcase " + className + "::" + element[0] + ": " + `return "${element[0]}";\n`
      }
      enumFile += "\t}\n"
      enumFile += `\treturn "X";\n`+`}\n\n`

    }
   
    //console.log(enumFile)
    fs.writeFile("enumVal.h", enumFile, ()=>{});
   
  });