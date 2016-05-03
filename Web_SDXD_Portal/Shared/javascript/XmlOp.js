//getPath - get file path
//linkID - key tag
//xmlBranchObj - branch node
function getPath(linkTag,linkID,xmlBranchObj)
{
    // var returnValue=null;
    for(var iNum=0;iNum=xmlBranchObj.length;iNum++)
    {
        var xmlChildNode=xmlBranchObj[iNum].childNodes;
        if(xmlChildNode.nodename==linkTag)
        {
            //traverse the child node
            for()

        }
    }
}

//get web path according to the ID of xml file
//add by YangDu 0429
function getPath(linkID,xmlFilePath)
{
    var xml = loadXMLDoc1(xmlFilePath);
    var object = xml.getElementByTagName(linkID);
    for(var iNum=0;iNum<object.length;iNum++)
    {
        if(object[iNum].getElementByTagName(""))
    }
}

//get img Url from xml file.
function getUrl(linkID)
{

}

//there are two kinds of methods of loading xml
//1,using xpath
//2,using javascript to retrival
//loading xml file
function loadXMLDoc1(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send("");
    return xhttp.responseXML;
}


