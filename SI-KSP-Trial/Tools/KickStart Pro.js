//==========================================================
function js_PopulateSelectWithData( sID, sData, blnSorted ){
//==========================================================
	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options.length = 0;
		var sDataArr = new Array();
		sDataArr = sData.split(",");
		var iArrLength = sDataArr.length;
		if( iArrLength > 0 ){
			if( blnSorted == true )
				sDataArr = sDataArr.sort();
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex);
			}
		}else if( iArrLength == 0 ){
			ID_Select.options[ID_Select.options.length] = new Option(sDataArr[0], 1);
		}
		js_showElement( sID );
	}catch(e){alert(e)}	
}
//=========================================================
function js_setElementValueFromElement( sToID, varFromID ){
//=========================================================
	try{
		varSteps = Get_Select_Items( varFromID )
		var arrSteps = new Array();
		arrSteps = varSteps.split(",");
		var intArrLen = arrSteps.length;
		var varStep;
		var intArrayIndex;
		if( intArrLen > 0 ){
			varSteps = "";
			for( intArrayIndex = 0; intArrayIndex < intArrLen; intArrayIndex++ ){
				varStep = arrSteps[intArrayIndex];
				if( varStep.indexOf("===") >= 0 || varStep.indexOf("Scenario") >= 0 )
					varStep = "\t" + varStep;
				else if( varStep.indexOf("Given") >= 0 )
					varStep = "\t\t" + varStep;
				else if( varStep.indexOf("When") >= 0 || varStep.indexOf("Then") >= 0 )
					varStep = "\t\t" + varStep;
				varSteps = varSteps + varStep + "\r";
			}
		}
		if( varSteps.length > 0 ){
			document.getElementById(sToID).value = varSteps;
			js_showElement(sToID);
		}
		if( varSteps == "\r" ){
			js_hideElement(sToID);
		}
	}catch(e){alert(e)}	
}

//==================================================================
function js_getSelectedItemIndexFromArray(MyArray, strSelectedItem){
//==================================================================
	
	var intIndex;
	var intFoundIndex = -1;
	var iArrLength = MyArray.length;
	for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
		if( MyArray[iArrIndex] == strSelectedItem){
			intFoundIndex = iArrIndex;
			break;
		}
	}
	return intFoundIndex;
}
//================================================
function js_PopulateSelectByArray( sID, arrData ){
//================================================

	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options.length = 0;
		var iArrLength = arrData.length;
		for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
			ID_Select.options[ID_Select.options.length] = new Option(arrData[iArrIndex], iArrIndex);
		}
		js_showElement( sID );
	}catch(e){alert(e)}	
}
//==============================================
function js_SetSelectedListIndex( strSRCList_id, strTGTList_id ){
//==============================================
	
	try{
		var SRC_List_id = document.getElementById( strSRCList_id );
		var TGT_List_id = document.getElementById( strTGTList_id );
		
		TGT_List_id.selectedIndex = SRC_List_id.selectedIndex;
		
	}catch(e){alert(e)}
}
//===============================
function js_hideElementButtons(){
//===============================
	try{
		document.getElementById("To_List_id").style.display = "none";
		
		document.getElementById("Element_Up_id").style.display = "none";
		document.getElementById("Element_Down_id").style.display = "none";
		document.getElementById("Element_Top_id").style.display = "none";
		document.getElementById("Element_Bottom_id").style.display = "none";
		
		document.getElementById("Edit_Current_Elements_id").style.display = "none";
		document.getElementById("Clear_Current_Elements_id").style.display = "none";
	}catch(e){alert(e)}	
}
//=============================
function js_showElementButtons(){
//=============================
	try{
		
		if( js_GetDropDownSelectedText( "Label_id" ) != "<SELECT LABEL>") {
			document.getElementById("To_List_id").style.display = "";

			document.getElementById("Element_Up_id").style.display = "";
			document.getElementById("Element_Down_id").style.display = "";
			document.getElementById("Element_Top_id").style.display = "";
			document.getElementById("Element_Bottom_id").style.display = "";

			document.getElementById("Edit_Current_Elements_id").style.display = "";
			document.getElementById("Clear_Current_Elements_id").style.display = "";
		}	
	}catch(e){alert(e)}	
}
//===================================
function js_collectLocateByAndValue()
//===================================
{
	//alert( "js_collectLocateByAndValue" );
	
	try{
		var strSelectedPage = js_GetDropDownSelectedText( "Page_id" )
		var strSelectedLabel = js_GetDropDownSelectedText( "Label_id" )
		
		if( strSelectedLabel == "<SELECT LABEL>" ){
			js_hideElement( "Add_Element_id" );
			js_updateElementValue( "Element_Located_By_id", "" );
			js_updateElementValue( "Element_Located_By_Value_id", "" );
		}else{
			//alert( "js_collectLocateByAndValue (Selected Page): " + strSelectedPage );
			//alert( "js_collectLocateByAndValue (Selected Label):" + strSelectedLabel );

			var strSelectedPageAndLabel = strSelectedPage + "`" + strSelectedLabel + "`"
			
			var strCurrentElements = Get_Select_Items( "hLabel_id" );
			var arrCurrentElements = new Array();
			arrCurrentElements = strCurrentElements.split(",");
			
			var intArrayLength = arrCurrentElements.length;

			js_updateElementValue( "Element_Located_By_id", "" );
			js_updateElementValue( "Element_Located_By_Value_id", "" );
			
			js_hideElement( "Element_Div_iFrame_id" );
			js_hideElement( "Element_Div_Text_id" );		
			js_hideElement( "Element_Div_Index_id" );

			for( var intArrayIndex = 0; intArrayIndex < intArrayLength; intArrayIndex++ ){
				strElement = arrCurrentElements[intArrayIndex];
				
				if( strElement.indexOf(strSelectedPageAndLabel) >= 0 )
				{
					var strLocateBy, strLocateByValue;
					var arrElement = new Array();
					arrElement = strElement.split("`");
					
					var strFrame = arrElement[2]; 
					var strName = arrElement[3];
					var strID = arrElement[4];
					var strClass = arrElement[5];
					var strAria_Label = arrElement[6];
					var strxPath = arrElement[7];
					var strText = arrElement[8];
					var strIndex = arrElement[9];

					if( strFrame.length > 0){
						js_showElement( "Element_Div_iFrame_id" )
						js_updateElementValue( "Element_iFrame_id", strFrame );
					}
					if( strName.length > 0){
						strLocateBy = "name";
						strLocateByValue = strName;
					}else if( strID.length > 0){
						strLocateBy = "id";
						strLocateByValue = strID;
					}else if( strClass.length > 0){
						strLocateBy = "class";
						strLocateByValue = strClass;
					}else if( strAria_Label.length > 0){
						strLocateBy = "aria-label";
						strLocateByValue = strAria_Label;
					}else if( strxPath.length > 0){
						strLocateBy = "xpath";
						strLocateByValue = js_ReplaceAll( strxPath, "{CO}", ",");
					}
					
					js_updateElementValue( "Element_Located_By_id", strLocateBy );
					js_updateElementValue( "Element_Located_By_Value_id", strLocateByValue );
					
					if( strText.length > 0){
						js_showElement( "Element_Div_Text_id" )
						js_updateElementValue( "Element_Text_id", strText );
					}
					if( strIndex.length > 0){
						js_showElement( "Element_Div_Index_id" )
						js_updateElementValue( "Element_Index_id", strIndex );
					}
					break;	
				}
			}
		}	
	}catch(e){alert(e)}		
}
//==========================================
function js_PopulateElementLists( varSteps ){
//==========================================

	try{
		var arrSteps = new Array();
		arrSteps = varSteps.split("\n");
		var arrElement = new Array();
		var iArrLength = arrSteps.length;
		var varStep;
		var strPage, strLabel, strPages, strCurrentPages="", arrCurrentPages;
		
		
		var strFrame, strName = arrElement[3];
		strID = arrElement[4];
		strClass = arrElement[5];
		strAria_Label = arrElement[6];
		strxPath = arrElement[7];
		strText = arrElement[8];
		strIndex = arrElement[9];

		js_clearSelect( "hLabel_id" );
		js_clearSelect( "Page_id" );
			
		if( iArrLength > 0 ){
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
				varStep = arrSteps[iArrIndex];
				if( varStep.length > 0 ){
					arrElement = varStep.split("`");
					strPage = arrElement[0]
					strLabel = arrElement[1];
					
					strFrame = arrElement[2]; 
					strName = arrElement[3];
					strID = arrElement[4];
					strClass = arrElement[5];
					strAria_Label = arrElement[6];
					strxPath = arrElement[7];
					strText = arrElement[8];
					strIndex = arrElement[9];
						
					strCurrentPages = strCurrentPages + strPage + "~"
					
					js_UpdateSelectWithData( "hLabel_id", strPage + "`" + 
														  strLabel + "`" + 
														  strFrame + "`" + 
														  strName + "`" + 
														  strID + "`" + 
														  strClass + "`" + 
														  strAria_Label + "`" + 
														  strxPath + "`" +
														  strText + "`" +
														  strIndex ) 	
	
				}
			}
		}
		strCurrentPages = js_StripLastChar( strCurrentPages )
		arrCurrentPages = strCurrentPages.split("~");				
		arrCurrentPages = arrCurrentPages.sort();
		intArrayLength = arrCurrentPages.length;

		js_UpdateSelectWithData( "Page_id", "<SELECT PAGE>" ) 	
		for( iArrIndex = 0; iArrIndex < intArrayLength; iArrIndex++ ){
			strPage = arrCurrentPages[iArrIndex];
			if( strPage.length > 0 ){ 
				strPages = Get_Select_Items( "Page_id" );
				if( strPages.indexOf(strPage) < 0 )
					js_UpdateSelectWithData( "Page_id", strPage ) 
			}			
		}
	}catch(e){alert(e)}	
}
//=============================================
function js_FilterElementBy( strSelectedPage ){
//=============================================
	
	try{
		
		js_updateElementValue( "Element_Located_By_id", "" );
		js_updateElementValue( "Element_Located_By_Value_id", "" );
		
		js_hideElement( "Element_Div_iFrame_id" );
		js_hideElement( "Element_Div_Text_id" );		
		js_hideElement( "Element_Div_Index_id" );		

		var Label_ID = document.getElementById( "Label_id" );
		Label_ID.options.length = 0;		

		var strCurrentLabels = Get_Select_Items( "hLabel_id" );
		
		var arrCurrentLabels = new Array();
		arrCurrentLabels = strCurrentLabels.split(",");
		var strLabels = ""
		var arrLabels = new Array();
		var intArrayLength = arrCurrentLabels.length;
		var varLabel, strPage;
		var arrLabel = new Array();
		
		if( intArrayLength > 0 ){
			
			for( iArrIndex = 0; iArrIndex < intArrayLength; iArrIndex++ ){
				varLabel = arrCurrentLabels[iArrIndex];
				if( varLabel.length > 0 ){
					arrLabel = varLabel.split("`");
					strPage = arrLabel[0]
					
					strLabel = arrLabel[1];
					if( strPage == strSelectedPage ){
						strLabels = strLabels + strLabel + "~"
					}
				}
			}
		}
		strLabels = js_StripLastChar( strLabels )
		arrLabels = strLabels.split("~");				
		arrLabels = arrLabels.sort();
		intArrayLength = arrLabels.length;

		js_UpdateSelectWithData( "Label_id", "<SELECT LABEL>" )
		
		for( iArrIndex = 0; iArrIndex < intArrayLength; iArrIndex++ ){
			strLabel = arrLabels[iArrIndex];
			if( strLabel.length > 0 ) { 
				js_UpdateSelectWithData( "Label_id", arrLabels[iArrIndex] ) 
			}			
		}
	}catch(e){alert(e)}		
}
//===============================
function js_ClearElements( sID ){
//===============================
	
	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options.length = 0;
		js_hideElement( sID );
	}catch(e){alert(e)}	
}
//=============================================
function js_UpdateSelectWithData( sID, sData ){
//=============================================

	try{
		if( sData.length > 0 ){
			var ID_Select = document.getElementById( sID );
			ID_Select.options[ID_Select.options.length] = new Option(sData, 1);
			js_showElement( sID );
		}	
	}catch(e){alert(e)}	
}
//===============================
function Get_Select_Items( sID ){
//===============================
	var varSelectItems = "";
	
	try{
		var varSelectItem;
		var intArrayIndex;
		var ID_Select = document.getElementById( sID );
		var intCurrentSelectLen = ID_Select.options.length;
		for( intArrayIndex = 0; intArrayIndex < intCurrentSelectLen; intArrayIndex++ ){
			varSelectItem = ID_Select.options[intArrayIndex].text;
			varSelectItems = varSelectItems + varSelectItem + ","
		}
		varSelectItems = js_StripLastChar( varSelectItems )
	}catch(e){alert(e)}	
	
	return varSelectItems;
}
//=========================================
function js_GetDropDownSelectedText( sID ){
//=========================================
	var text = "";
	try{
		var select_list_field = document.getElementById( sID );
		var select_list_selected_index = select_list_field.selectedIndex;

		if( select_list_selected_index >= 0 ){
			text = select_list_field.options[select_list_selected_index].text;
		}
	}catch(e){alert(e)}	
	return text;
}
//==================================
function js_RemoveSelectItem( sID ){
//==================================
	try{
		var ID_Select = document.getElementById( sID );
		var select_list_selected_index = ID_Select.selectedIndex;
		var intCurrentSelectLen = ID_Select.options.length;
		var varSelectItem;
		var varSelectItems = "";
		var intArrayIndex;
		if( intCurrentSelectLen > 1 ){
			for( intArrayIndex = 0; intArrayIndex < intCurrentSelectLen; intArrayIndex++ ){
				if( intArrayIndex != select_list_selected_index ){
					varSelectItem = ID_Select.options[intArrayIndex].text;
					varSelectItems = varSelectItems + varSelectItem + ","
				}	
			}
			if( varSelectItems.length > 0 ){
				varSelectItems = js_StripLastChar( varSelectItems )
				js_PopulateSelectWithData( sID, varSelectItems, false )
			}
		}else if( intCurrentSelectLen == 1 ){
			js_ClearCurrentSteps( sID )
			ID_Select.options.length = 0;
			js_hideElement( sID );
			if( sID == "To_ActionList_id" || sID == "To_ValueList_id" )
				js_hideActionButtons();js_hideElement("Action_Steps_id");js_hideElement("Value_Steps_id");
			if( sID == "To_List_id" )
				js_hideElementButtons();js_hideElement("Edit_Elements_id");
		}
	}catch(e){alert(e)}	
}
//====================================
function js_StripLastChar( varString )
//====================================
{
	try{
		if( varString != null ){
			varString = varString.substring( 0, varString.length - 1 );
		}
	}catch(e){alert(e)}	
	return varString;
}	
//=============================================
function js_UpdateList( varStepsStr, varList ){
//=============================================
	try{
		var varCheckForString = "~" + varList + "_" + varStepsStr;
		varCheckForString = varCheckForString.toUpperCase();	
		var varListItems = ""
		var blnCollect = false;
		var varSRCList_ID = "h"+varList+"_List_id";
		var varTGTList_ID = varList+"_List_id";
		var varList_ID = document.getElementById( varSRCList_ID );
		var intListLen = varList_ID.options.length;
		var intIndex;
		
		for( intIndex = 0; intIndex < intListLen; intIndex++ ){
			varListItem = varList_ID.options[intIndex].text;
			if( blnCollect == true && varListItem.indexOf("~") >= 0 ) 
				break;
			if( blnCollect == true )
				varListItems = varListItems + varListItem + ","
			if( varListItem == varCheckForString ) 
				blnCollect = true
		}
		
		varListItems = js_StripLastChar( varListItems )
		varListItems = varList + "," + varListItems;
		js_PopulateSelectWithData( varTGTList_ID, varListItems, true );
		js_showElement( "Add_" + varList + "_Step_id" );
	}catch(e){alert(e)}	
}
//========================
function js_Add_Element(){
//========================
	
	try{
		var Page = document.getElementById( "Page_id" );
		var Label = document.getElementById( "Label_id" );
		var select_list_selected_Page_index = Page.selectedIndex;
		var select_list_selected_Label_index = Label.selectedIndex;

		if( select_list_selected_Page_index >=0 && select_list_selected_Label_index >=0 ){
			varListPage = Page.options[select_list_selected_Page_index].text;
			varListLabel = Label.options[select_list_selected_Label_index].text;
			if( (varListPage.length > 0 && varListPage != "<SELECT PAGE>") && (varListLabel.length > 0 && varListLabel != "<SELECT LABEL>") )
				js_UpdateSelectWithData( "To_List_id", varListPage +":"+ varListLabel  );
		}
	}catch(e){alert(e)}
}
//==============================================
function js_MoveStep( varListID, varDirection ){
//==============================================
	try{
		varDirection = varDirection.toUpperCase();

		var ID_Select = document.getElementById( varListID );
		var select_list_selected_index = ID_Select.selectedIndex;
		var intListLen = ID_Select.options.length;
		
		if( select_list_selected_index >=0 ){
			var varItems = Get_Select_Items( varListID );
			var arrSteps = new Array();
			arrSteps = varItems.split(",");
			var intIndex, varTemp, varSelectedItem
			// ------
			// UP
			// ------
			if( varDirection == "UP" && select_list_selected_index > 0 ){
				varTemp = arrSteps[select_list_selected_index-1];
				varSelectedItem = arrSteps[select_list_selected_index];
				arrSteps[select_list_selected_index-1] = varSelectedItem;
				arrSteps[select_list_selected_index] = varTemp;
				select_list_selected_index -= 1; 
			}	
			// ------
			// DOWN
			// ------
			else if( varDirection == "DOWN" && select_list_selected_index < intListLen-1 ){
				varTemp = arrSteps[select_list_selected_index+1];
				varSelectedItem = arrSteps[select_list_selected_index];
				arrSteps[select_list_selected_index+1] = varSelectedItem;
				arrSteps[select_list_selected_index] = varTemp;
				select_list_selected_index += 1; 
			}	
			// ------
			// TOP
			// ------
			else if( varDirection == "TOP" && select_list_selected_index > 0 ){
				varSelectedItem = arrSteps[select_list_selected_index];
				for( intIndex = select_list_selected_index; intIndex > 0; intIndex-- ){
					arrSteps[intIndex] = arrSteps[intIndex-1]
				}
				arrSteps[0] = varSelectedItem
				select_list_selected_index = 0; 
			}
			// ------
			// BOTTOM
			// ------
			else if( varDirection == "BOTTOM" && select_list_selected_index < intListLen-1 ){
				varSelectedItem = arrSteps[select_list_selected_index];
				for( intIndex = select_list_selected_index; intIndex < intListLen-1; intIndex++ ){
					arrSteps[intIndex] = arrSteps[intIndex+1]
				}
				arrSteps[intListLen-1] = varSelectedItem
				select_list_selected_index = intListLen-1; 
			}	

			js_PopulateSelectByArray( varListID, arrSteps );
			ID_Select.selectedIndex = select_list_selected_index;
		}
	}catch(e){alert(e)}
}
//==============================================
function js_MoveElement( varListID, varDirection ){
//==============================================
	try{
		varDirection = varDirection.toUpperCase();

		var ID_Select = document.getElementById( varListID );
		var select_list_selected_index = ID_Select.selectedIndex;
		var intListLen = ID_Select.options.length;
		
		if( select_list_selected_index >=0 ){
			var varItems = Get_Select_Items( varListID );
			var arrSteps = new Array();
			arrSteps = varItems.split(",");
			var intIndex, varTemp, varSelectedItem
			// ------
			// UP
			// ------
			if( varDirection == "UP" && select_list_selected_index > 0 ){
				varTemp = arrSteps[select_list_selected_index-1];
				varSelectedItem = arrSteps[select_list_selected_index];
				arrSteps[select_list_selected_index-1] = varSelectedItem;
				arrSteps[select_list_selected_index] = varTemp;
				select_list_selected_index -= 1; 
			}	
			// ------
			// DOWN
			// ------
			else if( varDirection == "DOWN" && select_list_selected_index < intListLen-1 ){
				varTemp = arrSteps[select_list_selected_index+1];
				varSelectedItem = arrSteps[select_list_selected_index];
				arrSteps[select_list_selected_index+1] = varSelectedItem;
				arrSteps[select_list_selected_index] = varTemp;
				select_list_selected_index += 1; 
			}	
			// ------
			// TOP
			// ------
			else if( varDirection == "TOP" && select_list_selected_index > 0 ){
				varSelectedItem = arrSteps[select_list_selected_index];
				for( intIndex = select_list_selected_index; intIndex > 0; intIndex-- ){
					arrSteps[intIndex] = arrSteps[intIndex-1]
				}
				arrSteps[0] = varSelectedItem
				select_list_selected_index = 0; 
			}
			// ------
			// BOTTOM
			// ------
			else if( varDirection == "BOTTOM" && select_list_selected_index < intListLen-1 ){
				varSelectedItem = arrSteps[select_list_selected_index];
				for( intIndex = select_list_selected_index; intIndex < intListLen-1; intIndex++ ){
					arrSteps[intIndex] = arrSteps[intIndex+1]
				}
				arrSteps[intListLen-1] = varSelectedItem
				select_list_selected_index = intListLen-1; 
			}	

			js_PopulateSelectByArray( varListID, arrSteps );
			ID_Select.selectedIndex = select_list_selected_index;
		}
	}catch(e){alert(e)}
}
//==============================
function js_hideActionButtons(){
//==============================
	try{
		document.getElementById("To_ActionList_id").style.display = "none";
		document.getElementById("To_ValueList_id").style.display = "none";

		document.getElementById("Action_Up_id").style.display = "none";
		document.getElementById("Action_Down_id").style.display = "none";
		document.getElementById("Action_Top_id").style.display = "none";
		document.getElementById("Action_Bottom_id").style.display = "none";
		
		document.getElementById("Edit_Current_Actions_id").style.display = "none";
		document.getElementById("Clear_Current_Actions_id").style.display = "none";
	}catch(e){alert(e)}	
}
//=============================
function js_showActionButtons(){
//=============================
	try{
		document.getElementById("To_ActionList_id").style.display = "";
		document.getElementById("To_ValueList_id").style.display = "";

		document.getElementById("Action_Up_id").style.display = "";
		document.getElementById("Action_Down_id").style.display = "";
		document.getElementById("Action_Top_id").style.display = "";
		document.getElementById("Action_Bottom_id").style.display = "";

		document.getElementById("Edit_Current_Actions_id").style.display = "";
		document.getElementById("Clear_Current_Actions_id").style.display = "";
	}catch(e){alert(e)}	
}
//=============================
function js_hideElement( sID ){
//=============================

	try{
		document.getElementById(sID).style.display = "none";
	}catch(e){alert(e)}	
}
//=============================
function js_showElement( sID ){
//=============================

	try{
		document.getElementById(sID).style.display = "";
	}catch(e){alert(e)}	
}
//=======================================================
function js_updateElementValue( strElementID, strValue ){
//=======================================================

	try{
		document.getElementById( strElementID ).value = strValue;
	}catch(e){alert(e)}		
}
js_FilterGRCBy
//========================================
function js_FilterGRCBy( strSelectedGRC ){
//========================================

	try{
		var arrValues = new Array();
		var arrCurrentGRCs = new Array();
		var strCurrentGRCs = Get_Select_Items( "GlobalReusableComponent_id" );
		arrCurrentGRCs = strCurrentGRCs.split(",");
		
		document.getElementById( "GRC_RC_id" ).value = strSelectedGRC;
		
		var intSelectedGRCIndex = js_getSelectedItemIndexFromArray(arrCurrentGRCs, strSelectedGRC)
		
		var strExample, strParameters;
		
		if( intSelectedGRCIndex > -1){
			arrValues = Get_Select_Items( "hGRC_Description_id" ).split(",");
			document.getElementById( "GRC_Description_id" ).value = arrValues[intSelectedGRCIndex];

			arrValues = Get_Select_Items( "hGRC_Parameters_id" ).split(",");
			strParameters = arrValues[intSelectedGRCIndex]
			strParameters = js_ReplaceAll(strParameters, "{P}", "|");
			strParameters = js_ReplaceAll(strParameters, "{C}", ":");
			document.getElementById( "GRC_Parameters_id" ).value = strParameters;
			
			arrValues = Get_Select_Items( "hGRC_Examples_id" ).split(",");
			strExample = arrValues[intSelectedGRCIndex];
			strExample = js_ReplaceAll(strExample, "{P}", "|");
			strExample = js_ReplaceAll(strExample, "{C}", ":");
			
			document.getElementById( "GRC_Example_id" ).value = strExample;
		}	
	}catch(e){alert(e)}		
}
//========================================
function js_FilterBy( strSelectedAction ){
//========================================

	//alert("js_FilterBy(" + strSelectedAction + ")" )
	
	try{
		var arrValues = new Array();
		var arrCurrentActions = new Array();
		var strCurrentActions = Get_Select_Items( "Action_id" );
		arrCurrentActions = strCurrentActions.split(",");
		
		document.getElementById( "ActionName_id" ).value = strSelectedAction;
		
		if( strSelectedAction == "<SELECT ACTION>" ){
			js_hideElement( "Add_Action_id" );
			js_hideElement("new_id")
			document.getElementById( "Description_id" ).value = "";
			document.getElementById( "Parameters_id" ).value = "";
			document.getElementById( "Control Required_id" ).value = "";
			document.getElementById( "Example_id" ).value = "";
		}else{	
			js_showElement( "Add_Action_id" );
			intSelectedActionIndex = js_getSelectedItemIndexFromArray(arrCurrentActions, strSelectedAction)
			var strNew, strDescription, strParameters, strExample;
			if( intSelectedActionIndex > 0 ){
				arrValues = Get_Select_Items( "hNew_id" ).split(",");
				var strNew = arrValues[intSelectedActionIndex]
				
				if( strNew == "*" )
					js_showElement("new_id")
				else
					js_hideElement("new_id")

				arrValues = Get_Select_Items( "hDescription_id" ).split(",");
				strDescription = arrValues[intSelectedActionIndex];
				
				document.getElementById( "Description_id" ).value = strDescription;

				arrValues = Get_Select_Items( "hParameters_id" ).split(",");
				strParameters = arrValues[intSelectedActionIndex]
				
				strParameters = js_ReplaceAll(strParameters, "{P}", "|");
				strParameters = js_ReplaceAll(strParameters, "{C}", ":");
				document.getElementById( "Parameters_id" ).value = strParameters;
				
				arrValues = Get_Select_Items( "hControl Required_id" ).split(",");
				document.getElementById( "Control Required_id" ).value = arrValues[intSelectedActionIndex];

				arrValues = Get_Select_Items( "hExample_id" ).split(",");
				strExample = arrValues[intSelectedActionIndex];
				strExample = js_ReplaceAll(strExample, "{P}", "|");
				strExample = js_ReplaceAll(strExample, "{C}", ":");
				
				document.getElementById( "Example_id" ).value = strExample;
			}	
		}	
	}catch(e){alert(e)}		
}
//==================================================
function js_ReplaceAll( strExample, strFrom, strTo){
//==================================================
	
	strExample = strExample.replace(strFrom, strTo)
	if( strExample.indexOf(strFrom) > 0 ){
		strExample = js_ReplaceAll( strExample, strFrom, strTo);
	}
	
	return strExample;
}
//===========================================================
function js_PopulateGlobalReusableComponentLists( varSteps ){
//===========================================================
	
	try{
		var arrSteps = new Array();
		arrSteps = varSteps.split("\n");
		var arrElement = new Array();
		var iArrLength = arrSteps.length;
		var varStep;
		var strGRC, strDescription, strParameters, strExample;
		
		js_clearSelect( "GlobalReusableComponent_id" );
		js_clearSelect( "hGRC_Description_id" );
		js_clearSelect( "hGRC_Parameters_id" );
		js_clearSelect( "hGRC_Examples_id" );
				
		if( iArrLength > 0 ){
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
				varStep = arrSteps[iArrIndex];
				if( iArrIndex == 0 ){
					js_UpdateSelectWithData( "GlobalReusableComponent_id", "<SELECT REUSABLE COMPONENT>" )
					js_UpdateSelectWithData( "hGRC_Description_id", "-" ) 
					js_UpdateSelectWithData( "hGRC_Parameters_id", "-" ) 
					js_UpdateSelectWithData( "hGRC_Examples_id", "-" ) 
				}else if( iArrIndex > 0 ){
					if( varStep.length > 0 ){
						arrElement = varStep.split(",");
						strGRC = arrElement[0];
						strDescription = arrElement[1];
						strParameters = arrElement[2];
						strExample = arrElement[3];
						js_UpdateSelectWithData( "GlobalReusableComponent_id", strGRC ) 
						js_UpdateSelectWithData( "hGRC_Description_id", strDescription ) 
						js_UpdateSelectWithData( "hGRC_Parameters_id", strParameters ) 
						js_UpdateSelectWithData( "hGRC_Examples_id", strExample ) 
					}
				}
			}
		}
	}catch(e){alert(e)}	
}
//==========================================
function js_PopulateActionLists( varSteps ){
//==========================================

	try{
		var arrSteps = new Array();
		arrSteps = varSteps.split("\n");
		var arrElement = new Array();
		var iArrLength = arrSteps.length;
		var varStep;
		var strAction, strNew, strDescription, strParameters, strControl_Required, strExample;
		
		js_clearSelect( "Action_id" );
		js_clearSelect( "hDescription_id" );
		js_clearSelect( "hParameters_id" );
		js_clearSelect( "hControl Required_id" );
		js_clearSelect( "hExample_id" );
				
		if( iArrLength > 0 ){
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ ){
				varStep = arrSteps[iArrIndex];
				if( iArrIndex == 0 ){
					js_UpdateSelectWithData( "Action_id", "<SELECT ACTION>" )
					js_UpdateSelectWithData( "hNew_id", "-" ) 
					js_UpdateSelectWithData( "hDescription_id", "-" ) 
					js_UpdateSelectWithData( "hParameters_id", "-" ) 
					js_UpdateSelectWithData( "hControl Required_id", "-" ) 
					js_UpdateSelectWithData( "hExample_id", "-" ) 
				}else if( iArrIndex > 0 ){
					if( varStep.length > 0 ){
						arrElement = varStep.split(",");
						strAction = arrElement[1];
						strNew = arrElement[2];
						strDescription = arrElement[3];
						strParameters = arrElement[4];
						strControl_Required = arrElement[5];
						strExample = arrElement[6];
						js_UpdateSelectWithData( "Action_id", strAction ) 
						js_UpdateSelectWithData( "hNew_id", strNew ) 
						js_UpdateSelectWithData( "hDescription_id", strDescription ) 
						js_UpdateSelectWithData( "hParameters_id", strParameters ) 
						js_UpdateSelectWithData( "hControl Required_id", strControl_Required ) 
						js_UpdateSelectWithData( "hExample_id", strExample ) 
					}
				}	
			}
		}
	}catch(e){alert(e)}	
}
//====================================
function js_clearSelect( strSelectID )
//====================================
{
	try{
		var ID_Select = document.getElementById( strSelectID );
		ID_Select.options.length = 0;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//===================================
function js_ClearCurrentSteps( sID ){
//===================================
	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options.length = 0;
		js_hideElement( sID );
	}catch(e){alert(e)}	
}
//=============================================
function js_UpdateSelectWithData( sID, sData ){
//=============================================

	try{
		if( sData.length > 0 ){
			var ID_Select = document.getElementById( sID );
			ID_Select.options[ID_Select.options.length] = new Option(sData, 1);
		}	
	}catch(e){alert(e)}	
}
//===============================
function Get_Select_Items( sID ){
//===============================
	var varSelectItems = "";
	try{
		var varSelectItem;
		var intArrayIndex;
		var ID_Select = document.getElementById( sID );
		var intCurrentSelectLen = ID_Select.options.length;
		for( intArrayIndex = 0; intArrayIndex < intCurrentSelectLen; intArrayIndex++ ){
			varSelectItem = ID_Select.options[intArrayIndex].text;
			varSelectItems = varSelectItems + varSelectItem + ","
		}
		varSelectItems = js_StripLastChar( varSelectItems )
	}catch(e){alert(e)}	
	return varSelectItems;
}
//=========================================
function js_GetDropDownSelectedText( sID ){
//=========================================
	var text = "";
	try{
		var select_list_field = document.getElementById( sID );
		var select_list_selected_index = select_list_field.selectedIndex;

		if( select_list_selected_index >= 0 ){
			text = select_list_field.options[select_list_selected_index].text;
		}
	}catch(e){alert(e)}	
	return text;
}
//=============================
function js_Add_Action_Value(){
//=============================
	
	try{
		var strAction = document.getElementById( "ActionName_id" ).value;
		var strValue = document.getElementById( "Example_id" ).value;

		if( strAction.length > 0 ){
			js_UpdateSelectWithData( "To_ActionList_id", strAction  );
			js_UpdateSelectWithData( "To_ValueList_id", strValue  );
		}
	}catch(e){alert(e)}
}




