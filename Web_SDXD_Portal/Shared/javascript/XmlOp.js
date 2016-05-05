var strPath = "";// page variable of xml path;
var strStatus = "0"; //search status  0 - result not found |  1 - result found
var objNode = new Object();
var returnValue = new Array(3);
returnValue[0] = strPath;
returnValue[1] = strStatus;
returnValue[2] = objNode;
//Create path as name1-name2-name3-name4
//objNode - currentNode (if there is a currentNode , then find its parentNode and create the full path until root node)
//strPath - 
//tagName -
//
function PathMaker(objNode, strPath, tagName) {
    var strPath = "";
    var strPathArray = new Array();
    //&&RootNode.childNodes[0].nodeType!=3
    while (objNode.parentNode.nodeName != "Root") {
        strPathArray.push(objNode.parentNode.nodeName);
        objNode = objNode.parentNode;
    }

    for (var iCount = strPathArray.length - 1; iCount >= 0; iCount--) {
        strPath += strPathArray[iCount];
        strPath += "-";
    }


    return strPath + tagName;
}

function getChildNodes(ObjChildNode) {
    return ObjChildNode.childNodes;
}

function getPath(linkID, xmlFilePath, RootNode, strField) {
    //var strPath="";
    if (RootNode == "Root") {
        strPath = RootNode;
        //load xml files
        var xmlObj = loadXMLDoc(xmlFilePath);
        //get child node from current node
        if (RootNode == null) {
            return false;
        }
        else {
            try {
                var childNodes = getChildNodes(xmlObj.getElementsByTagName(RootNode)[0]);
            }
            catch (err) {
                alert(err.message);
            }
            //typeof(reValue) == "undefined"

            //traverse child nodes;


            for (var iNum = 0; iNum < childNodes.length; iNum++) {
                if (childNodes[iNum].nodeName == strField && childNodes[iNum].nodeTypedValue == linkID) {
                    strPath = PathMaker(childNodes[iNum], strPath, childNodes[iNum].nodeTypedValue);
                    returnValue[0] = strPath; //{strPath,"1"};
                    returnValue[1] = "1"; // result is existed
                    returnValue[2] = childNodes[iNum];  //input node object
                    break;
                }
                else {
                    if (returnValue[1] == "1") {
                        break;
                    }
                    else {
                        returnValue = getPath(linkID, xmlFilePath, childNodes[iNum], strField);
                    }
                }
            }
        }

        ////search for specific products/services and return objects&nodes (an array)
        //var objects = xml.getElementByTagName(linkID);
        ////search node which contain the key value (linkID)
        //for (var iNum = 0; iNum < object.length; iNum++) //
        //{
        //    if (object[iNum].getElementByTagName(""));
        //}
    }
    else {
        //typeof(childNodes)=="undefined")
        //alert(RootNode.childNodes[0].nodeType);
        if (RootNode.hasChildNodes() && RootNode.childNodes[0].nodeType != 3)  // if current node is not the leaf node
        {
            strPath = RootNode.nodeName;
            try {
                var childNodes = getChildNodes(RootNode);
            }
            catch (err) {
                alert(err.message);
                return false; //deal with exception.
            }



            for (var iNum = 0; iNum < childNodes.length; iNum++) {
                if (childNodes[iNum].nodeName == strField && childNodes[iNum].nodeTypedValue == linkID) {
                    strPath = PathMaker(childNodes[iNum], strPath, childNodes[iNum].nodeTypedValue);
                    returnValue[0] = strPath;//{strPath,"1"};
                    returnValue[1] = "1";
                    returnValue[2] = childNodes[iNum];  //input node object
                    break;
                }
                else {
                    if (returnValue[1] == "1") {
                        break;
                    }
                    else {
                        returnValue = getPath(linkID, xmlFilePath, childNodes[iNum], strField);
                    }
                }
            }
        }
        else  // if the node is the final leaf node
        {
            returnValue[0] = strPath;//{strPath,"0"};
            returnValue[1] = "0";
            returnValue[2] = null;
            return returnValue;
        }

    }
    return returnValue;
}

////get img Url from xml file.
//function getUrl(linkID)
//{

//}

////there are two kinds of methods of loading xml
////1,using xpath
////2,using javascript to retrival
////loading xml file
function loadXMLDoc(xml_name) {
    var xmlDoc;
    try {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); // Support IE 
    }
    catch (e) {
        try {
            // Support Firefox, Mozilla, Opera, etc 
            xmlDoc = document.implementation.createDocument("", "", null);// 创建一个空的 XML 文档对象。 
        }
        catch (e) {
            alert(e.message);
        }
    }
    // 加载XML文档 
    try {
        xmlDoc.async = false; // 关闭异步加载 
        xmlDoc.load(xml_name);
    }
    catch (e) {
        // alert(e.message) 如果浏览器是Chrome，则会catch这个异常：Object # (a Document) has no method "load"，所以，以下实现支持chrome加载XML文档（只是粗略的写下） 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", xml_name, false);
        xhr.send(null);
        xmlDoc = xhr.responseXML.documentElement;
    }
    return xmlDoc;

}