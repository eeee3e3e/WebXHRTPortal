var strPath = "";// page variable of xml path;
var strStatus = "0"; //search status  0 - result not found |  1 - result found

//Create path as name1-name2-name3-name4
//objNode - currentNode (if there is a currentNode , then find its parentNode and create the full path until root node)
//strPath - 
//tagName -
//
function PathMaker(objNode, strPath, tagName) {
    var strPath = "";
    var strPathArray = new Array();
    //&&RootNode.childNodes[0].nodeType!=3
    while (objNode.parentNode.nodeName != "首页") {
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

/*
//returnValue: [1].Path [2].Status [3].Node Object
function getPath(linkID, xmlFilePath, RootNode, strField) {
    //var strPath="";
    if (RootNode == "首页") {
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

*/
//returnValue: [1].Path [2].Status [3].Node Object
function getPath(linkID, xmlFilePath, RootNode)
{
    var objNode = new Object();
    var returnValue = new Array(3);
    returnValue[0] = strPath;
    returnValue[1] = strStatus;
    returnValue[2] = objNode;

    //var strPath="";
    if (RootNode == "首页") {
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
                if (childNodes[iNum].nodeName == linkID) {
                    strPath = PathMaker(childNodes[iNum], strPath, linkID);
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
                        returnValue = getPath(linkID, xmlFilePath, childNodes[iNum]);
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
                if (childNodes[iNum].nodeName == linkID) {
                    strPath = PathMaker(childNodes[iNum], strPath, linkID);
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
                        returnValue = getPath(linkID, xmlFilePath, childNodes[iNum]);
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



//input the html content into a div element or other containers
function MakeHtml(productName, xmlFilePath, RootNode, strFieldName) {
   // test();
    var strHtml = "";
    var strImgPath = "";
    strHtml += "<ul id=\"orbs\" class=\"bubblewrap clearfix\">";
    var productObject = getPath(productName, xmlFilePath, RootNode);
    var ProductObj = productObject[2];
    DrawPath(productObject[0], "div_CurrentLocation");
    //the childNode is stored in the subItem label, tracking the SubItem array to retrive its child nodes.

    var SubProductObj = new Object();
    //alert(ProductObj.getElementsByTagName("SubItems"));
    if (NodeHasChild(ProductObj)) {
        strFieldName = "SubItems"
        SubProductObj = getNodeValue(ProductObj.childNodes[0], strFieldName)["nodeObj"];
    }
    else {
        SubProductObj = ProductObj;
    }
    for (var iCount = 0; iCount < SubProductObj.childNodes.length; iCount++) {
        if (SubProductObj.childNodes[iCount].childNodes[0].nodeType != 3) {
            nodeObj = SubProductObj.childNodes[iCount].childNodes[0];
            strHtml = DrawHtml(nodeObj, strHtml);
        }
        else  //if (SubProductObj.childNodes[iCount].nodeType == 3)  the node is leaf node
        {
            nodeObj = SubProductObj.childNodes[0];
            $.ajax({
                url: getNodeValue(nodeObj, "WebUrl")["nodeText"],
                dataType: 'html',
                success: function (data) {

                    document.getElementById("div_Product").innerHTML = data;
                }
            });

        }
    }

    document.getElementById("div_Product").innerHTML = strHtml;


}


//true: has child  false: no child
function NodeHasChild(NodeObj) {
    
    var rv = false;
    if (NodeObj != null)
    {
        for (var i = 0; i < NodeObj.childNodes.length; i++) {
            if (NodeObj.childNodes[i].nodeName == "SubItems") {
                rv = true;
                break;
            }
        }
    }
    return rv;
}



function DrawPath(strPath, strDiv) {
    var strRV = "你现在的位置是："; // return value.

    var strFullPath = "首页-" + strPath.replace(/-SubItems/g, "");
    strArray = strFullPath.split("-");
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] == "首页")
        {
            strRV += "<a class=\"gold\" href=\"#\" onclick=\"LinkDirect(\'/home/index\',\'index\')\">" + strArray[i] + "</a>";
        }
        else if (strArray[i] == "产品介绍")
        {
            strRV += "<a class=\"gold\" href=\"#\"" + strArray[i] + "</a>";
        }
        else
        {
            strRV += "<a class=\"gold\" href=\"#\" onclick = \"MakeHtml(\'" + strArray[i] + "\', \'/Shared/xml/xmlPath.xml\', \'首页\', \'" + strArray[i] + "\')\">" + strArray[i] + "</a>";
        }
        if (i != strArray.length - 1)
            strRV += " > ";
    }
    document.getElementById(strDiv).innerHTML = strRV; //div_CurrentLocation
}


//acquire node value according to field name;
//field name: eg-ImgUrl..
function getNodeValue(nodeObj, fieldname) {
    var returnValue = Array();
    while (nodeObj != null || typeof (nodeObj) != "undefined") {
        if (nodeObj.nodeName == fieldname) {
            returnValue["nodeObj"] = nodeObj;
            returnValue["nodeText"] = nodeObj.nodeTypedValue;
            break;
        }
        else {
            nodeObj = nodeObj.nextSibling;
        }
    }
    return returnValue;

}


function DrawHtml(nodeObj, strHtml) {
    //1.Formating
    //strImgPath = nodeObj.ImageUrl; //image url
    strHtml += "<li>";
    strHtml += "<a href='#'>";
    strHtml += "<img style='z-index: 999; left: 0px; top: 0px; display: block;'";
    strHtml += "src='/" + getNodeValue(nodeObj, "ImageUrl")["nodeText"] + "' alt=\"\" onclick=\"MakeHtml(\'" + getNodeValue(nodeObj, "Name")["nodeText"] + "\', \'/Shared/xml/xmlPath.xml\', \'首页\',\'" + getNodeValue(nodeObj, "Name")["nodeText"] + "\')\">";
    //strHtml += "src='/" + getNodeValue(nodeObj, "ImageUrl")["nodeText"] + "' alt=\"\" onclick=\"MakeHtml(\'" + getNodeValue(nodeObj, "Name")["nodeText"] + "\', \'/Shared/xml/xmlPath.xml\', \'首页\',\'SubItems\')\">";

    strHtml += "</a>"
    strHtml += "<div class=\"tooltip\" style=\"z-index: 999; text-align:center;  left: -24.5px; top: -56.5px; padding-top:60px;\">";
    strHtml += "<a href=\"#\" ";
    // strHtml += getNodeValue(nodeObj, "WebUrl")["nodeText"];  //web html url
    strHtml += "\">" + getNodeValue(nodeObj, "Name")["nodeText"] + "</div>";
    /*<div class="tooltip" style="z-index: 999; text-align:center;  left: -24.5px; top: -56.5px; padding-top:60px;">
        <a href="productzx.html">专线业务</a>
    </div>*/
    return strHtml;
}

function LinkDirect(linkAddress, linkName)
{

    window.location.href = linkAddress;

}