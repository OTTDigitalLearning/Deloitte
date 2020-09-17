function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hYalSXabfe":
        Script1();
        break;
  }
}

function Script1()
{
  // Template reports Version to Console and to SCORM-Element cmi.location

var version = "made with Audi Template v";
var player = GetPlayer();

version += player.GetVar("Audi_Template_Version");

SCORM2004_CallSetValue("cmi.location", version);

console.log(version);
}

