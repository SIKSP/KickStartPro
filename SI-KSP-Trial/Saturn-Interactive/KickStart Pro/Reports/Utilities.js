//=================================
function getTime( strTimeFieldID ){
//=================================
	var intTimeInseconds = document.getElementById(strTimeFieldID).innerHTML;
	var intTimeInMinutes = (intTimeInseconds/60).toFixed(2);
	
	document.getElementById(strTimeFieldID).title = intTimeInMinutes + " Minutes";
}
//====================================
function getActionDesc( strActionID ){
//====================================
	
	var strAction = document.getElementById(strActionID).innerHTML;
	
	var strActionDesc = "";
	
	switch(strAction){
		case "ABORT":
			strActionDesc = "Aborts automation run";
			break;
		case "BACK":
			strActionDesc = "Performs Back action to navigate to previous page";
			break;
		case "BREAK":
			strActionDesc = "Breaks out of a reusable component";
			break;
		case "CAPTURE_FIELD_VALUE_VAR":
			strActionDesc = "Reports text field value using a dynamic field name";
			break;
		case "CHECK":
			strActionDesc = "Checks check box";
			break;
		case "CHECK_BUTTON_BY_TEXT_EXIST":
			strActionDesc = "checks a button by button name exists";
			break;
		case "CHECK_BUTTON_BY_TEXT_NOT_EXIST":
			strActionDesc = "checks a button by button name not exist";
			break;
		case "CHECK_BUTTON_SELECTED_STATE":
			strActionDesc = "Checks a button state by button name";
			break;
		case "CHECK_BY_TEXT":
			strActionDesc = "Checks for an element with a specific text";
			break;
		case "CHECK_DIC_VALUE_EQUAL":
			strActionDesc = "Checks a dictionary integer value is equal to a specific integer value";
			break;
		case "CHECK_DIC_VALUE_GREATER_EQUAL_THAN":
			strActionDesc = "Checks a dictionary integer value is greater than or equal to an expected integer value";
			break;
		case "CHECK_DIC_VALUE_GREATER_THAN":
			strActionDesc = "Checks a dictionary integer value is greater than an expected integer value";
			break;
		case "CHECK_DIC_VALUE_LESS_EQUAL_THAN":
			strActionDesc = "Checks a dictionary integer value is less than or equal to a specific integer value";
			break;
		case "CHECK_DIC_VALUE_LESS_THAN":
			strActionDesc = "Checks a dictionary integer value is less than a specific integer value";
			break;
		case "CHECK_ELEMENT_BY_TEXT_DISABLED":
			strActionDesc = "Checks element found by text is disabled";
			break;
		case "CHECK_ELEMENT_BY_TEXT_ENABLED":
			strActionDesc = "Checks element found by text is enabled";
			break;
		case "CHECK_ELEMENT_BY_TEXT_NOT_VISIBLE":
			strActionDesc = "Checks an element found by text is not visible";
			break;
		case "CHECK_ELEMENT_BY_TEXT_VISIBLE":
			strActionDesc = "Checks an element found by text is visible";
			break;
		case "CHECK_ELEMENT_DISABLED":
			strActionDesc = "Checks element disabled";
			break;
		case "CHECK_ELEMENT_ENABLED":
			strActionDesc = "Checks element enabled";
			break;
		case "CHECK_ELEMENT_EXIST":
			strActionDesc = "Checks an element exists";
			break;
		case "CHECK_ELEMENT_MATCH_VALUE":
			strActionDesc = "Validates an element value matches expected";
			break;
		case "CHECK_ELEMENT_NOT_EXIST":
			strActionDesc = "Checks an element does not exist";
			break;
		case "CHECK_ELEMENT_NOT_VISIBLE":
			strActionDesc = "Checks an element is not visible";
			break;
		case "CHECK_ELEMENT_NOT_VISIBLE_VAR":
			strActionDesc = "Checks an element is not visible using variable text";
			break;
		case "CHECK_ELEMENT_VISIBLE":
			strActionDesc = "Checks an element is visible";
			break;
		case "CHECK_FOR_BUTTON_BY_TEXT":
			strActionDesc = "Checks a button by text exists";
			break;
		case "CHECK_MATCH_VALUE":
			strActionDesc = "Matches expected value to an actual value";
			break;
		case "CHECK_STR_START_WITH":
			strActionDesc = "Validates a string starts with a specified character";
			break;
		case "CHECK_VALUE_LESS_EQUAL_THAN":
			strActionDesc = "Checks an integer value is less than or equal to another integer value";
			break;
		case "CHECK_VALUE_LESS_THAN":
			strActionDesc = "Checks an integer value is less than another integer value";
			break;
		case "CHECK_VALUES_EQUAL":
			strActionDesc = "Checks for matching strings";
			break;
		case "CHECK_WINDOW_COUNT":
			strActionDesc = "Validates the number of current windows matches expected count";
			break;
		case "CLEAR_TEXT":
			strActionDesc = "Clears a text field";
			break;
		case "CLICK":
			strActionDesc = "Clicks an element";
			break;
		case "CLICK_AND_SWITCH":
			strActionDesc = "Clicks an element on a child window then switches to parent window";
			break;
		case "CLICK_AND_WAIT":
			strActionDesc = "Clicks an element and wait in seconds";
			break;
		case "CLICK_BUTTON_BY_TEXT":
			strActionDesc = "Clicks button by button name";
			break;
		case "CLICK_BUTTON_BY_TEXT_WHILE_VISIBLE":
			strActionDesc = "Clicks button by button name while it is visible";
			break;
		case "CLICK_BY_INDEX":
			strActionDesc = "Clicks by Index";
			break;
		case "CLICK_CELL":
			strActionDesc = "Clicks a table cell";
			break;
		case "CLICK_CELL_LINK":
			strActionDesc = "Clicks a link in a table cell";
			break;
		case "CLICK_CELL_LINK_SWITCH":
			strActionDesc = "Clicks a link in a table cell then switches to Parent Window";
			break;
		case "CLICK_CELL_LINK_SWITCH1":
			strActionDesc = "Clicks a link in a table cell then switches to Parent Window";
			break;
		case "CLICK_CELL_RELATIVE":
			strActionDesc = "Clicks CELL Relative instead of Center";
			break;
		case "CLICK_COLUMN_RIGHT_VAR":
			strActionDesc = "Clicks right key a specified count using a specified column name";
			break;
		case "CLICK_COLUMN_LEFT_VAR":
			strActionDesc = "Clicks left key a specified count using a specified column name";
			break;
		case "CLICK_COUNT":
			strActionDesc = "Clicks an element a number of times";
			break;
		case "CLICK_ELEMENT":
			strActionDesc = "Clicks an element by its x and y";
			break;
		case "CLICK_ELEMENT_BY_TEXT":
			strActionDesc = "Clicks an element found by text";
			break;
		case "CLICK_ELEMENT_WHILE_TEXT_NOT_VISIBLE":
			strActionDesc = "Clicks an element while another specified text is not visible";
			break;
		case "CLICK_FIELD_VAR":
			strActionDesc = "Clicks a text field using a dynamic field name";
			break;
		case "CLICK_LINK":
			strActionDesc = "Clicks a link";
			break;
		case "CLICK_MODIFIED_VALUE":
			strActionDesc = "Modifies an element attribute value by replacing ### with the user defined value";
			break;
		case "CLICK_ON_TEXT":
			strActionDesc = "Clicks on text found on page";
			break;
		case "CLICK_RELATIVE":
			strActionDesc = "Clicks an element not on the center avoiding black pop up boxes";
			break;
		case "CLICK_TAB_TEXT":
			strActionDesc = "Clicks tab caption text";
			break;
		case "CLICK_TAB_VAR":
			strActionDesc = "Clicks Tab by defined value";
			break;
		case "CLICK_TEXT":
			strActionDesc = "Clicks an element found by a specific text";
			break;
		case "CLICKING_TEXT":
			strActionDesc = "Clicks a Text on current page";
			break;
		case "CLICK_TEXT_VAR":
			strActionDesc = "Clicks a text by user defined value";
			break;
		case "CLICK_UNTIL_NEW_WINDOW":
			strActionDesc = "Clicks an element until a new window is visible";
			break;
		case "CLICK_VAR":
			strActionDesc = "Clicks an element that has a variant value that could be changed run time";
			break;
		case "CLICK_WHILE_ELEMENT_NOT_VISIBLE":
			strActionDesc = "Clicks an element while another element is not visible";
			break;
		case "CLICK_WHILE_ELEMENT_VISIBLE":
			strActionDesc = "Clicks an element while another element is visible";
			break;
		case "CLICK_WHILE_TEXT_NOT_VISIBLE":
			strActionDesc = "Clicks an element until text is visible";
			break;
		case "CLICK_WHILE_VISIBLE":
			strActionDesc = "Clicks an element while it is visible";
			break;
		case "CLICK_WHILE_VISIBLE_VAR":
			strActionDesc = "Clicks an element while it is visible using a variable value";
			break;
		case "CLOSE":
			strActionDesc = "Closes the current page";
			break;
		case "COLLECT AUTEP":
			strActionDesc = "Collects element ids names and classes into a HTML file";
			break;
		case "COLLECT BARCHART TIPS":
			strActionDesc = "Collects Bar chart ToolTip Value by passed defined value";
			break;
		case "COLLECT_CELL_VALUE":
			strActionDesc = "Collect a cell value into a specified Global Variable";
			break;
		case "COLLECT_CHART_TOOLTPS_VAR":
			strActionDesc = "Collects Chart ToolTip Value by passed defined value";
			break;
		case "COLLECT_FULL_PIE_CHART_TOOLTIPS_VAR":
			strActionDesc = "Collects full chart ToolTip Value by passed defined value";
			break;
		case "COLLECT_LOCATION_X":
			strActionDesc = "Collects an element x location into a global variable";
			break;
		case "COLLECT_ROW_INDEX":
			strActionDesc = "Collects a global variable RowIndex given a row value under a specific table column name";
			break;
		case "COLLECT_TEXT_VAR":
			strActionDesc = "Collects/Stores an element text that has a variant value that could be changed run time into (Collect Param Name)";
			break;
		case "COMPARE_DATES":
			strActionDesc = "Compares Dates";
			break;
		case "COMPARE_TWO_LISTS":
			strActionDesc = "Compares 2 Lists are matching";
			break;
		case "COMPARE_VALUES":
			strActionDesc = "Compares expected value to actual value";
			break;
		case "COMPARE_VALUES_NOT":
			strActionDesc = "Compares expected value to actual value";
			break;
		case "COMPARE_WITHIN_TOLERANCE":
			strActionDesc = "Compares integer values within given +-tolerance";
			break;
		case "CONCATENATE_ELEMENTS_VALUES":
			strActionDesc = "Collects a number of element values into a string to be stored in a dictionary parameter to use in subsequent steps";
			break;
		case "CONCATENATE_VALUES":
			strActionDesc = "Concatenates strings into a Global variable using specific delimiter";
			break;
		case "DCLICK_CELL":
			strActionDesc = "Double Clicks a table cell";
			break;
		case "DCLICK_CELL_RELATIVE":
			strActionDesc = "Double Click CELL Relative instead of Center";
			break;
		case "DCLICK_TABLE_CELL":
			strActionDesc = "Double Clicks a table cell";
			break;
		case "DIALOG":
			strActionDesc = "Displays a specific value in dialog box";
			break;
		case "DISPLAY_CURRENT_WINDOW":
			strActionDesc = "Displays current window handle";
			break;
		case "DISPLAY_READONLY":
			strActionDesc = "Reports the read only text fields;check boxes and drop down elements";
			break;
		case "ELEMENT_ACTION":
			strActionDesc = "Uses the stored element to apply an action against it";
			break;
		case "ELEMENT_EXISTS":
			strActionDesc = "Validate element exists";
			break;
		case "ELEMENT_EXISTS_TIME":
			strActionDesc = "Waits for an element to exists within a number of seconds";
			break;
		case "ENTER_CURRENT_MONTH_FIRSTDAY":
			strActionDesc = "Enters current Month first day into a text field";
			break;
		case "ENTER_LAST_MONTH_LASTDAY":
			strActionDesc = "Enters Last Month Last Day into a text field";
			break;
		case "ENTER_MODIFIED_DATE":
			strActionDesc = "Modifies current date by days;months and years to enter to a text field";
			break;
		case "F5":
			strActionDesc = "Refreshes current page";
			break;
		case "FAILED_RC":
			strActionDesc = "Quits Reusable component run";
			break;
		case "FILTER_TABLE_BY_SEARCH_TERM":
			strActionDesc = "Waits for a specific element to be visible to Enter text into it";
			break;
		case "GET_CELL_VALUE_BY_COLUMN_VAR":
			strActionDesc = "Collect Cell value using Column name";
			break;
		case "COMPARE_CELL_VALUE_BY_COLUMN_VAR":
			strActionDesc = "Compares Cell value using Column name";
			break;
		case "GET_CELL_VALUE":
			strActionDesc = "Collects a cell value into a global variable (Cell Value)";
			break;
		case "GET_GV":
			strActionDesc = "Gets a dictionary parameter value into a global variable";
			break;
		case "GET_LIST_OPTION_TEXT":
			strActionDesc = "Stores a multi-list option text into a global variable";
			break;
		case "GET_PARAM_VALUE":
			strActionDesc = "Gets a global variable value from the global file";
			break;
		case "GET_ROW_COUNT":
			strActionDesc = "Collects Table Row Count using a table element into the global variable (Table Row Count)";
			break;
		case "GET_TEXT":
			strActionDesc = "Stores an element Text into a global variable";
			break;
		case "GET_TEXT_VAR":
			strActionDesc = "Stores an element Text into a global variable";
			break;
		case "GET_VALUE":
			strActionDesc = "Stores an element value into a global variable";
			break;
		case "GET_VALUE_VAR":
			strActionDesc = "Stores an element value into a global variable";
			break;
		case "INCBY_GV":
			strActionDesc = "Increments an integer value found in dictionary";
			break;
		case "JS_CLICK":
			strActionDesc = "Clicks an element using JavaScript code";
			break;
		case "LOAD":
			strActionDesc = "Navigates to a specific URL";
			break;
		case "MAXIMIZE":
			strActionDesc = "Maximizes Window";
			break;
		case "MOBILE_CLICK":
			strActionDesc = "Clicks an element in Mobile";
			break;
		case "MOBILE_START_AUTOMATION":
			strActionDesc = "Starts mobile automation";
			break;
		case "MOBILE_STOP_AUTOMATION":
			strActionDesc = "Stops mobile automation";
			break;
		case "MOBILE_VALIDATE_VALUE":
			strActionDesc = "Validates value in mobile";
			break;
		case "MODIFY_DATE_BY":
			strActionDesc = "Modifies Date in Element by Day:Month:Year";
			break;
		case "MOVE_ELEMENT_TO":
			strActionDesc = "Drags an element to x & y coordinates";
			break;
		case "MOVE_ELEMENT_TO_ELEMENT":
			strActionDesc = "Drags a source element over a target element";
			break;
		case "MOVE_MOUSE":
			strActionDesc = "Moves the mouse to a specific coordinates";
			break;
		case "MOVE_MOUSE_CLICK":
			strActionDesc = "Moves the mouse to a specific coordinates and click";
			break;
		case "MOVE_MOUSE_DELAY":
			strActionDesc = "Moves the mouse to a specific coordinates";
			break;
		case "MULTI_SELECT":
			strActionDesc = "Selects items from a multi list element";
			break;
		case "NOT_SELECTED":
			strActionDesc = "Validates that a check box or a radio button are not selected";
			break;
		case "QUIT_ON_ELEMENT_VISIBLE":
			strActionDesc = "Quits test script run if a test script exist";
			break;
		case "REFRESH":
			strActionDesc = "Refreshes current page";
			break;
		case "REMOVE_PRECEDING_ZEROS":
			strActionDesc = "Updates a string by replacing a portion of it";
			break;
		case "REPLACE_STR":
			strActionDesc = "Updates a string by replacing a portion of it";
			break;
		case "REPORT":
			strActionDesc = "Updates a string by replacing a portion of it";
			break;
		case "SCROLL_TO":
			strActionDesc = "Navigates to a specific element to make sure it is in focus";
			break;
		case "SCROLL_TO_AND_CLICK":
			strActionDesc = "Navigates to a specific element then clicks it";
			break;
		case "SCROLL_TO_AND_DCLICK":
			strActionDesc = "Navigates to a specific element then double clicks it";
			break;
		case "SELECT":
			strActionDesc = "Selects an item from a drop down";
			break;
		case "SELECT_CALENDAR_DATE":
			strActionDesc = "Selects a specific date from a pop up calendar";
			break;
		case "SELECT_CALENDAR_DATE_FROM_CURRENT":
			strActionDesc = "Selects a specific date from a pop up calendar from current set date";
			break;
		case "SELECT_OPTION":
			strActionDesc = "Selects an item from a drop down;Drop down will close";
			break;
		case "SELECT_OPTION_FOUND":
			strActionDesc = "Checks an item is found in a drop down";
			break;
		case "SELECT_OPTION_NOT_FOUND":
			strActionDesc = "Checks an item is not found in a drop down";
			break;
		case "SELECT_OPTIONS_FOUND":
			strActionDesc = "Checks an item is found in a drop down";
			break;
		case "SELECT_SAP_TAB":
			strActionDesc = "Breaks out of a reusable component";
			break;
		case "SELECTED":
			strActionDesc = "Validates that a check box or a radio button are selected";
			break;
		case "SEND_BKEYS":
			strActionDesc = "Sends keys such as Enter;Tab;Back";
			break;
		case "SEND_ENTER_WHILE_ELEMENT_VISIBLE":
			strActionDesc = "Sends enter key while an element is visible";
			break;
		case "SEND_KEYS":
			strActionDesc = "Sends keys such as Enter;Tab;Back";
			break;
		case "SET_CELL_VALUE_BY_COLUMN_VAR":
			strActionDesc = "Sets a cell value under a specified column name using a specified row index";
			break;
		case "SET_CELL_VALUE_BY_COLUMN_VAR_ENTER":
			strActionDesc = "Sets a cell value under a specified column name using a specified row index followed by pressing enter";
			break;
		case "SET_FIELD_VALUE_VAR":
			strActionDesc = "Sets text field value using dynamic field name";
			break;
		case "SET_GLOBAL_VARIABLE":
			strActionDesc = "Sets a global variable with a user defined value";
			break;
		case "SET_GV":
			strActionDesc = "Sets a dictionary parameter value";
			break;
		case "SET_INNERHTML":
			strActionDesc = "Sets an element HTMLlabel inner HTML value";
			break;
		case "SET_PARAM_VALUE":
			strActionDesc = "Sets a global variable with an element value";
			break;
		case "SET_TEXT":
			strActionDesc = "Sets Element Text Value";
			break;
		case "SET_VALUE":
			strActionDesc = "Sets an element attribute value to a specific text using Java script";
			break;
		case "SINGLE_SELECT":
			strActionDesc = "Selects an item from a single list element";
			break;
		case "SNAP_SHOT":
			strActionDesc = "Takes a screen shot and puts it in the report";
			break;
		case "SNAP_SHOT_ELEMENT":
			strActionDesc = "Takes a screen shot of a specific element";
			break;
		case "STORE_ELEMENT":
			strActionDesc = "Collects an element and stores it in a global variable to be used later";
			break;
		case "SUB":
			strActionDesc = "Waits for an element value not to be empty";
			break;
		case "SWITCH_TO_IFRAME":
			strActionDesc = "Switches driver to a specific iframe";
			break;
		case "SWITCH_TO_PARENT_WINDOW_BACK":
			strActionDesc = "Updates a string by replacing a portion of it";
			break;
		case "SWITCH_WINDOW_PARENT":
			strActionDesc = "Switches driver to the parent window";
			break;
		case "TEXT":
			strActionDesc = "Enters text to an element text field";
			break;
		case "TEXT_VAR":
			strActionDesc = "Enters text to an element text field using a variant";
			break;
		case "TEXT_ENTER":
			strActionDesc = "Enters text to an element text field followed by enter key";
			break;
		case "TEXT_SLOW":
			strActionDesc = "Enters text to an element text field Slowly";
			break;
		case "TEXT_SLOW_ENTER":
			strActionDesc = "Enters text to an element text field very slowly then send {Enter}";
			break;
		case "TEXT_SLOW_ENTER_TAB":
			strActionDesc = "Enters text to an element text field very slowly then send {Enter} followed by {tab}";
			break;
		case "TEXT_SLOW_SELECT":
			strActionDesc = "Enters text to an element text field slowly. Then select displayed text";
			break;
		case "TEXT_VERY_SLOW":
			strActionDesc = "Enters text to an element text field very slowly";
			break;
		case "TEXTING":
			strActionDesc = "Enters a number of strings delimited by \n";
			break;
		case "UNCHECK":
			strActionDesc = "UnChecks a check box";
			break;
		case "VALIDATE_ALERT_MESSAGE_CONTAINS":
			strActionDesc = "Checks an alert message contains Message";
			break;
		case "VALIDATE_ALERT_MESSAGE":
			strActionDesc = "Checks an alert message to match expected";
			break;
		case "VALIDATE_ATTRIBUTE_VALUE":
			strActionDesc = "Validates an element attribute value";
			break;
		case "VALIDATE_CELL_DATE_VALUE":
			strActionDesc = "Validates an element attribute value";
			break;
		case "VALIDATE_CELL_VALUE":
			strActionDesc = "Validates a table field value contains an expected value";
			break;
		case "VALIDATE_CELL_VALUE_NOT_EQUAL":
			strActionDesc = "Validates a table field value does not equal a specific value";
			break;
		case "VALIDATE_COLUMN_CONTENT":
			strActionDesc = "Validates table column content match a specific value";
			break;
		case "VALIDATE_COLUMN_VALUES":
			strActionDesc = "Checks table column values";
			break;
		case "VALIDATE_CURRENT_URL_CONTAINS":
			strActionDesc = "Checks current URL contains a specific text";
			break;
		case "VALIDATE_FIELD_VALUE_VAR":
			strActionDesc = "Validates field value matches expected using a dynamic field name";
			break;
		case "VALIDATE_ROW_COUNT":
			strActionDesc = "Validates Table row count matches expected";
			break;
		case "VALIDATE_SELECTED_OPTION":
			strActionDesc = "Checks an option is selected";
			break;
		case "VALIDATE_TABLE_CONTAINS_VALUE":
			strActionDesc = "Checks a value is found under a column";
			break;
		case "VALIDATE_TABLE_DOESNOT_CONTAIN_VALUE":
			strActionDesc = "Checks a value is not found under a column";
			break;
		case "VALIDATE_TEXT":
			strActionDesc = "Checks element text matches expected text";
			break;
		case "VALIDATE_TEXT_CONTAINS":
			strActionDesc = "Checks element text contains expected text";
			break;
		case "VALIDATE_TEXT_IS_EMPTY":
			strActionDesc = "Checks element text is empty";
			break;
		case "VALIDATE_TEXT_NOT_ON_PAGE":
			strActionDesc = "Checks a text is not on current page";
			break;
		case "VALIDATE_TEXT_ON_PAGE":
			strActionDesc = "Checks a text is on current page";
			break;
		case "VALIDATE_VALUE":
			strActionDesc = "Checks element Value matches expected text";
			break;
		case "VALIDATE_VALUE_CONTAINS":
			strActionDesc = "Checks element value is not empty";
			break;
		case "VALIDATE_VALUE_NOT_EMPTY":
			strActionDesc = "Checks element value contains expected text";
			break;
		case "VERIFY_TAB_EXISTS":
			strActionDesc = "Checks Tab exists";
			break;
		case "VERIFY_TAB_EXISTS_VAR":
			strActionDesc = "Checks a Tab with specific text exists";
			break;
		case "VERIFY_TAB_NOT_EXISTS":
			strActionDesc = "Checks Tab not exists";
			break;
		case "WAIT_BUTTON_DISABLED":
			strActionDesc = "Waits for a button by text to exit then check it is disabled";
			break;
		case "WAIT_BUTTON_SELECTED_STATE_NOT_VISIBLE":
			strActionDesc = "Waits for a button by state to become invisible";
			break;
		case "WAIT_BUTTON_SELECTED_STATE_VISIBLE":
			strActionDesc = "Waits for a button by state to become visible";
			break;
		case "WAIT_ELEMENT_EXIST":
			strActionDesc = "Waits while an element exists";
			break;
		case "WAIT_ELEMENT_NOT_EXIST":
			strActionDesc = "Waits while an element not exists";
			break;
		case "WAIT_ELEMENT_NOT_VISIBLE":
			strActionDesc = "Waits for a specific element to become not visible";
			break;
		case "WAIT_ELEMENT_NOT_VISIBLE_VAR":
			strActionDesc = "Waits for a specific element to become not visible using a variant";
			break;
		case "WAIT_ELEMENT_VALUE_NOT_EMPTY":
			strActionDesc = "Waits for an element value not to be empty";
			break;
		case "WAIT_ELEMENT_VAR":
			strActionDesc = "Waits for an element that has a variant value that could be changed run time to exist";
			break;
		case "WAIT_ELEMENT_VISIBLE":
			strActionDesc = "Waits for an element to be visible";
			break;
		case "WAIT_ELEMENT_VISIBLE_REFRESH":
			strActionDesc = "Waits for an element to be visible";
			break;
		case "WAIT_ELEMENT_VISIBLE_VAR":
			strActionDesc = "Waits for an element to be visible using a variant";
			break;
		case "WAIT_FOR_ATTRIBUTE_VALUE_VAR":
			strActionDesc = "Waits for an element attribute value to match expected starting with a variant to locate the element";
			break;
		case "WAIT_FOR_BUTTON_BY_TEXT_NOT_EXIST":
			strActionDesc = "Waits for a button by text not to exist";
			break;
		case "WAIT_FOR_BUTTON_BY_TEXT":
			strActionDesc = "Waits for a button by text to exist";
			break;
		case "WAIT_FOR_TABLE_ROW_COUNT":
			strActionDesc = "Waits for a table to load with least two rows before it proceeds";
			break;
		case "WAIT_FOR_TEXT":
			strActionDesc = "Waits for an element with a specific text";
			break;
		case "WAIT_FOR_VALUE":
			strActionDesc = "Waits for a specific value to exist in a text field";
			break;
		case "WAIT_IN_MSEC":
			strActionDesc = "Waits in milliseconds";
			break;
		case "WAIT_IN_SEC":
			strActionDesc = "Waits in seconds";
			break;
		case "WAIT_TAB_EXISTS":
			strActionDesc = "Waits for tab to exist";
			break;
		case "WAIT_TAB_NOT_EXISTS":
			strActionDesc = "Waits for tab not to exist";
			break;
		case "WAIT_TO_TEXT_SLOW_ENTER":
			strActionDesc = "Waits for a specific element to be visible to Enter text into it";
			break;
		case "WAIT_WHILE_ELEMENT_VISIBLE":
			strActionDesc = "Waits while an element is visible";
			break;
		case "WAIT_FOR_ALERT":
			strActionDesc = "Waits for an alert message with a specific text";
			break;
		case "WAITING_FOR_TEXT":
			strActionDesc = "Waits for a specific text";
			break;
		case "WAIT_WINDOW_COUNT":
			strActionDesc = "Waits for window count to match expected";
			break;
	}
	
	document.getElementById(strActionID).title = strActionDesc;
}
//=============================================
function js__CollectElementIDs( strFieldNames )
//=============================================
{
	try{
		var intMod;
		var arrElements;
		var intElementIndex, objElement, strElementID, strElementIDs = "";
		var strFieldName;
		var intFieldNameIndex;
		
		var arrFieldNames = new Array();
		arrFieldNames = strFieldNames.split(",");

		for( intFieldNameIndex = 0; intFieldNameIndex < arrFieldNames.length; intFieldNameIndex++ ){
			strFieldName = arrFieldNames[intFieldNameIndex];
			arrElements = document.getElementsByName( strFieldName );
			for( intElementIndex = 0; intElementIndex < arrElements.length; intElementIndex++ ){
				objElement = arrElements(intElementIndex)
				strElementID = objElement.id
				if ( js_getBGColor( strElementID ) == "yellow" ){
					strElementIDs = strElementIDs + strElementID + "`"
				}					
			}
		}
		if( strElementIDs.length > 0 )strElementIDs = str_RemoveLastChar( strElementIDs )
	}catch(err){js_displayErr(err)}
	
	return strElementIDs;
}
//============================================
function js_CollectElementIDs( strFieldNames )
//============================================
{
	try{
		var intMod;
		var arrElements;
		var intElementIndex, objElement, strElementID, strElementIDs = "";
		var strFieldName;
		var intFieldNameIndex;
		
		var arrFieldNames = new Array();
		arrFieldNames = strFieldNames.split(",");

		for( intFieldNameIndex = 0; intFieldNameIndex < arrFieldNames.length; intFieldNameIndex++ ){
			strFieldName = arrFieldNames[intFieldNameIndex];
			alert(strFieldName)
			arrElements = document.getElementsByName( strFieldName );
			for( intElementIndex = 0; intElementIndex < arrElements.length; intElementIndex++ ){
				objElement = arrElements(intElementIndex)
				strElementID = objElement.id
				if ( js_getBGColor( strElementID ) == "orange" ){
					strElementIDs = strElementIDs + strElementID + "`"
					intMod = (intElementIndex+1) % 2
					if( intMod == 0 ){js_setBGColor( strElementID, "lightYellow" )}
					else if( intMod == 1 ){js_setBGColor( strElementID, "white" )}	
				}					
			}
		}
		if( strElementIDs.length > 0 )strElementIDs = str_RemoveLastChar( strElementIDs )
	}catch(err){js_displayErr(err)}
	
	return strElementIDs;
}
//==========================================================
function js_add_Row_To_Generic_Table( strTableId, objTable )
//==========================================================
{        
	try{
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod, strElementID
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			intMod = rowCount % 2
			if( intMod == 0 ){newcell.style.backgroundColor = "lightyellow"}
			else if( intMod == 1 ){newcell.style.backgroundColor = "white"}	
			//=====================================================
			strElementID = strTableId + "_tblColTxt_" + func_utl_GetIdLetter(intColIndex) + rowCount;
			
			newcell.childNodes[0].id = strElementID;
			if( intMod == 0 ){js_setBGColor( strElementID, "lightYellow" );}
			else if( intMod == 1 ){js_setBGColor( strElementID, "white" );}	
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//===========================================================================
function js_Update_Generic_HTMLTable( strTableId, intRecordIndex, strRecord )
//===========================================================================
{
	try{
		var intSubRecordIndex, strSubRecord
		var arrRecord = new Array();
		var strElementId

		arrRecord = strRecord.split(",");
		intRecordIndex = intRecordIndex + 1
		
		var blnChangeFontSizeAndBGColor = false
		for( intSubRecordIndex = 0; intSubRecordIndex < arrRecord.length; intSubRecordIndex++ ){
			strSubRecord = arrRecord[intSubRecordIndex];
			strElementId = strTableId + "_tblColTxt_" + func_utl_GetIdLetter(intSubRecordIndex) + intRecordIndex

			if( strSubRecord == "Total (Costs/Saving)" )blnChangeFontSizeAndBGColor = true;
			if( blnChangeFontSizeAndBGColor == true){
				js_setBGColor( strElementId, "orange" )
				js_SetFontSize( strElementId, "25px" )
				if( intSubRecordIndex > 1 ){
					if( str_LT(strSubRecord) > 0 ){
						js_setElementInnerText( strElementId, "$" + strSubRecord )
					}else if( str_LT(strSubRecord) == 0 ){
						js_setElementInnerText( strElementId, strSubRecord )
					}	
				}else{
					js_setElementInnerText( strElementId, strSubRecord )
				}
			}else{
				js_setElementInnerText( strElementId, strSubRecord )
			}	
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
}		
//=======================================================================
function js_collectHTMLTableValuesByIds( strElementNames, strElementIds )
//=======================================================================
{
	var sTFValues = ""
	
	try{
		var arrElementNames = new Array();
		var arrElements = new Array();
		var intElementNameIndex, strElementName;
		var intElementIndex, strElement, strElementId, strElementType, strElementValue;
		var strTextArea
		var select_list_field, select_list_selected_index
		var strId

		arrElementNames = strElementNames.split(",");
		
		for( intElementNameIndex = 0; intElementNameIndex < arrElementNames.length; intElementNameIndex++ ){
			strElementName = arrElementNames[intElementNameIndex];
			arrElements = document.getElementsByName( strElementName );
			for( intElementIndex = 0; intElementIndex < arrElements.length; intElementIndex++ ){
				strElement = arrElements[intElementIndex]
				strElementId = strElement.id
				strId = strElementId.replace( strElementName, "" )
				if( strElementIds.indexOf(strId) >= 0 ){
					strElementType = strElement.type
					strElementValue = strElement.value
					
					if( strElementType == 'text'){sTFValues = sTFValues + strElementValue + "`";
					}else if( strElementType == 'select-one'){
						select_list_field = strElement;
						select_list_selected_index = select_list_field.selectedIndex;
						if( select_list_selected_index >= 0 ){
							sTFValues = sTFValues + select_list_field.options[select_list_selected_index].text + "`";
						}
					}else if( strElementType == 'password'){sTFValues = sTFValues + strElementValue + "`";
					}else if( strElementType == 'checkbox'){sTFValues = sTFValues + strElement.checked + "`";
					}else if( strElementType == 'textarea'){
						strTextArea = strElementType
						if( strTextArea.length == 0 )
							strTextArea = "EMPTY"
						sTFValues = sTFValues + strTextArea + "`";
					}else{
						if( str_bln_InString(strElement.src, "ON") == true ){sTFValues = sTFValues + "1" + "`";
						}else if( str_bln_InString(strElement.src, "OFF") == true ){sTFValues = sTFValues + "0" + "`";
						}
					}
				}	
			}
			sTFValues = str_RemoveLastChar( sTFValues )
			sTFValues = sTFValues + ";"
		}
		sTFValues = str_RemoveLastChar( sTFValues )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
	
	return sTFValues;
}
//==================================================================================================
function js_Update_TEM_Dashboard_Application_Table_Records( intTEM_Dashboard_ApplicationRecordIndex, 
															strIndex, 
															strTestCase, 
															strSwimlane, 
															strActive )
//==================================================================================================
{
	try{
		intTEM_Dashboard_ApplicationRecordIndex = intTEM_Dashboard_ApplicationRecordIndex + 1
		
		js_setElementInnerText( "tblColTxt_a" + intTEM_Dashboard_ApplicationRecordIndex, strIndex )
		js_setElementInnerText( "tblColTxt_b" + intTEM_Dashboard_ApplicationRecordIndex, strTestCase )
		js_setElementInnerText( "tblColTxt_c" + intTEM_Dashboard_ApplicationRecordIndex, strSwimlane )
		
		if( strActive == "1" )
			js_selectCheckBox( "tblColCBox_a" + intTEM_Dashboard_ApplicationRecordIndex )
		
		intMod = intTEM_Dashboard_ApplicationRecordIndex % 2
		if( intMod == 0 ){
			js_setBGColor( "tblColTxt_a" + intTEM_Dashboard_ApplicationRecordIndex, "lightYellow" );
			js_setBGColor( "tblColTxt_b" + intTEM_Dashboard_ApplicationRecordIndex, "lightYellow" );
			js_setBGColor( "tblColTxt_c" + intTEM_Dashboard_ApplicationRecordIndex, "lightYellow" );
		}else if( intMod == 1 ){
			js_setBGColor( "tblColTxt_a" + intTEM_Dashboard_ApplicationRecordIndex, "white" );
			js_setBGColor( "tblColTxt_b" + intTEM_Dashboard_ApplicationRecordIndex, "white" );
			js_setBGColor( "tblColTxt_c" + intTEM_Dashboard_ApplicationRecordIndex, "white" );
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==========================================
function js_selectCheckBox( strCheckboxID ){
//==========================================

	if( document.getElementById(strCheckboxID).checked == false )
		js_clickElement( strCheckboxID );	
}
//=========================================
function js_add_Generic_Table( objTable ) 
//=========================================
{        

	try{
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			js_setBGColor( sID, "white" );
			//=====================================================
			if( str_bln_InString( sID, "tblColTxt_a" ) == true ){newcell.childNodes[0].id = "tblColTxt_a" + rowCount;}
			else if( str_bln_InString(sID, "tblColTxt_b") == true ){newcell.childNodes[0].id = "tblColTxt_b" + rowCount;}			
			else if( str_bln_InString(sID, "tblColTxt_c") == true ){newcell.childNodes[0].id = "tblColTxt_c" + rowCount;}
			else if( str_bln_InString(sID, "tblColTxt_d") == true ){newcell.childNodes[0].id = "tblColTxt_d" + rowCount;}
			else if( str_bln_InString(sID, "tblColTxt_e") == true ){newcell.childNodes[0].id = "tblColTxt_e" + rowCount;}
			else if( str_bln_InString(sID, "tblColTxt_f") == true ){newcell.childNodes[0].id = "tblColTxt_f" + rowCount;}
			else if( str_bln_InString(sID, "tblColCBox_a") == true ){newcell.childNodes[0].id = "tblColCBox_a" + rowCount;}			
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
				case "select-one":	newcell.childNodes[0].selectedIndex = 0;break;                 
			}    
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=====================================
function js_addRowToKSTable( objTable ) 
//=====================================
{        
	try{
		var strInsertTestStepAbove = gstrImages + "InsertAbove.png"
		var strInsertTestStepBelow = gstrImages + "InsertBelow.png"
		var strDeleteTestStep = gstrImages + "Delete.png"
		var rowCount = objTable.rows.length; 
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			sID = newcell.childNodes[0].id
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}
			if( str_bln_InString(sID, "ASF") == false ){
				//++++++++++++++++++++++++++++++++++++++++++++++++++++
				// TestCase
				//++++++++++++++++++++++++++++++++++++++++++++++++++++
				if( str_bln_InString(sID, "StepTypeID") == true ){newcell.childNodes[0].id = "StepTypeID" + rowCount;} 
				else if( str_bln_InString(sID, "ActionID") == true ){newcell.childNodes[0].id = "ActionID" + rowCount;} 
				else if( str_bln_InString(sID, "DefaultValueID") == true ){newcell.childNodes[0].id = "DefaultValueID" + rowCount;}				
				else if( str_bln_InString(sID, "NavigateTo_id") == true ){newcell.childNodes[0].id = "NavigateTo_id" + rowCount;}
				else if( str_bln_InString(sID, "PageSelectID") == true ){newcell.childNodes[0].id = "PageSelectID" + rowCount;} 
				else if( str_bln_InString(sID, "PageID") == true ){newcell.childNodes[0].id = "PageID" + rowCount;} 
				else if( str_bln_InString(sID, "StepLabelSelectID") == true ){newcell.childNodes[0].id = "StepLabelSelectID" + rowCount;} 
				else if( str_bln_InString(sID, "StepLabelID") == true ){newcell.childNodes[0].id = "StepLabelID" + rowCount;} 
				else if( str_bln_InString(sID, "LocateByID") == true ){newcell.childNodes[0].id = "LocateByID" + rowCount;} 
				else if( str_bln_InString(sID, "ElementPropertyValueID") == true ){newcell.childNodes[0].id = "ElementPropertyValueID" + rowCount;} 
			}else if( str_bln_InString(sID, "ASF") == true ){
				//++++++++++++++++++++++++++++++++++++++++++++++++++++
				// ASF
				//++++++++++++++++++++++++++++++++++++++++++++++++++++
				if( str_bln_InString(sID, "StepTypeASFID") == true ){newcell.childNodes[0].id = "StepTypeASFID" + rowCount;}
				else if( str_bln_InString(sID, "ActionASFID") == true ){newcell.childNodes[0].id = "ActionASFID" + rowCount;}
				else if( str_bln_InString(sID, "DefaultValueASFID") == true ){newcell.childNodes[0].id = "DefaultValueASFID" + rowCount;}				
				else if( str_bln_InString(sID, "PageASFSelectID") == true ){newcell.childNodes[0].id = "PageASFSelectID" + rowCount;} 
				else if( str_bln_InString(sID, "PageASFID") == true ){newcell.childNodes[0].id = "PageASFID" + rowCount;}
				else if( str_bln_InString(sID, "StepLabelASFSelectID") == true ){newcell.childNodes[0].id = "StepLabelASFSelectID" + rowCount;} 
				else if( str_bln_InString(sID, "StepLabelASFID") == true ){newcell.childNodes[0].id = "StepLabelASFID" + rowCount;} 
				else if( str_bln_InString(sID, "LocateByASFID") == true ){newcell.childNodes[0].id = "LocateByASFID" + rowCount;}
				else if( str_bln_InString(sID, "ElementPropertyValueASFID") == true ){newcell.childNodes[0].id = "ElementPropertyValueASFID" + rowCount;}
			}
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
				case "select-one":	newcell.childNodes[0].selectedIndex = 0;break;                 
			}    
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}          
//==================================================
function js_KS_Table_ReID( strTableID, sFieldNames )
//==================================================
{
	var table = document.getElementById(strTableID);              
	var rowCount = table.rows.length;    
	var iIDIndex
	
	var sFieldNamesArr = new Array();
	var sName, iIndex, array
	var iFieldNamesArrIndex;
	sFieldNamesArr = sFieldNames.split(",");
	
	var sID

	for( iFieldNamesArrIndex=0; iFieldNamesArrIndex < sFieldNamesArr.length; iFieldNamesArrIndex++){
		sName = sFieldNamesArr[iFieldNamesArrIndex]
		array = document.getElementsByName( sName );
		
		for( iIndex = 0; iIndex < array.length; iIndex++ ){
			sID = array[iIndex].id
			iIDIndex = iIndex + 1

			if( str_bln_InString(sID, "ASF") == false ){
				//---------
				//Test Case
				//---------
				if( str_bln_InString(sID, "StepTypeID") == true ){array[iIndex].id = "StepTypeID" + iIDIndex}
				else if( str_bln_InString(sID, "ActionID") == true ){array[iIndex].id = "ActionID" + iIDIndex}
				else if( str_bln_InString(sID, "DefaultValueID") == true ){array[iIndex].id = "DefaultValueID" + iIDIndex}
				else if( str_bln_InString(sID, "NavigateTo_id") == true ){array[iIndex].id = "NavigateTo_id" + iIDIndex}
				else if( str_bln_InString(sID, "PageSelectID") == true ){array[iIndex].id = "PageSelectID" + iIDIndex;}
				else if( str_bln_InString(sID, "PageID") == true ){array[iIndex].id = "PageID" + iIDIndex; js_hideObject( "PageID" + iIDIndex);}
				else if( str_bln_InString(sID, "StepLabelSelectID") == true ){array[iIndex].id = "StepLabelSelectID" + iIDIndex}
				else if( str_bln_InString(sID, "StepLabelID") == true ){array[iIndex].id = "StepLabelID" + iIDIndex; 
					js_hideObject( "StepLabelID" + iIDIndex);
				}
				else if( str_bln_InString(sID, "LocateByID") == true ){array[iIndex].id = "LocateByID" + iIDIndex}
				else if( str_bln_InString(sID, "ElementPropertyValueID") == true ){array[iIndex].id = "ElementPropertyValueID" + iIDIndex}			
			}else if( str_bln_InString(sID, "ASF") == true ){	
				//---------
				//ASF
				//---------
				if( str_bln_InString(sID, "StepTypeASFID") == true ){array[iIndex].id = "StepTypeASFID" + iIDIndex}
				else if( str_bln_InString(sID, "ActionASFID") == true ){array[iIndex].id = "ActionASFID" + iIDIndex}
				else if( str_bln_InString(sID, "DefaultValueASFID") == true ){array[iIndex].id = "DefaultValueASFID" + iIDIndex}
				else if( str_bln_InString(sID, "PageASFSelectID") == true ){array[iIndex].id = "PageASFSelectID" + iIDIndex}
				else if( str_bln_InString(sID, "PageASFID") == true ){array[iIndex].id = "PageASFID" + iIDIndex; js_hideObject( "PageASFID" + iIDIndex);}
				else if( str_bln_InString(sID, "StepLabelASFSelectID") == true ){array[iIndex].id = "StepLabelASFSelectID" + iIDIndex;}
				else if( str_bln_InString(sID, "StepLabelASFID") == true ){array[iIndex].id = "StepLabelASFID" + iIDIndex; js_hideObject( "StepLabelASFID" + iIDIndex);}
				else if( str_bln_InString(sID, "LocateByASFID") == true ){array[iIndex].id = "LocateByASFID" + iIDIndex}
				else if( str_bln_InString(sID, "ElementPropertyValueASFID") == true ){array[iIndex].id = "ElementPropertyValueASFID" + iIDIndex}			
			}	
		}
	}
}
//=======================================================================
function insertRow( strTableID, intRowIndex, strFieldNames, strPosition )
//=======================================================================
{           
  	try{    
		var intIndex = InsertRowPosition(strTableID, intRowIndex, strPosition);
		switch(strTableID){
			case "IBM_iSeriesActionParams":
				js_reID( strTableID, strFieldNames )
				intIndex -= 1;
				js_UpdateTableRow( intIndex, "", "", false, false, false, false, "" );
				break;
			case "KS_Table_id": case "ASF_Table_id":	
				js_KS_Table_ReID( strTableID, strFieldNames )
				intIndex -= 1;
				js_Update_KS_TableRow( intIndex, "", "", false, false, false, false, "" );
				break;
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================================
function deleteRow( strTableID, iRowIndex, strFieldNames )
//========================================================
{
	try
	{             
		var iIndex = iRowIndex.rowIndex
		var table = document.getElementById(strTableID);
		var rowCount = table.rows.length;
		
		if( rowCount > 2){
			table.deleteRow(iIndex);
			switch(strTableID){
				case "IBM_iSeriesActionParams":
					js_reID( strTableID, strFieldNames )
					break;
				case "KS_Table_id": case "ASF_Table_id":	
					js_KS_Table_ReID( strTableID, strFieldNames )
					break;
			}			
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//===========================================================
function js_collectSelectedMonthsFromList( strCheckboxName ){ 
//===========================================================

	var intMonthIndex
	var strSelectedMonths = ""
	var objCheckbox
	
	try{
		var arrCheckboxs = document.getElementsByName(strCheckboxName); 
		var intCheckboxIndex
		for( intCheckboxIndex = 0; intCheckboxIndex < arrCheckboxs.length; intCheckboxIndex++){
			objCheckbox = arrCheckboxs[intCheckboxIndex]
			if(objCheckbox.type == 'checkbox'){
				if( js_isChecked( objCheckbox.id ) == true ){
					intMonthIndex = intCheckboxIndex + 1
					strSelectedMonths = strSelectedMonths + func_utl_str_GetMonthName( intMonthIndex ) + "^";
				}	
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	strSelectedMonths = js_StripLastChar( strSelectedMonths )

	return strSelectedMonths;
}
//=========================================================================
function js_collectSelectedOptionsFromList( strCheckboxName, strOptionID ){ 
//=========================================================================

	var intID
	
	var strSelectedOptions = ""
	
	try{
		var array = document.getElementsByName(strCheckboxName); 
		for(var i = 0; i < array.length; i++){
			if(array[i].type == 'checkbox'){
				if( js_isChecked( array[i].id ) == true ){
					intID = i + 1
					strSelectedOptions = strSelectedOptions + js_getElementInnerText( strOptionID + intID ) + "^";
				}	
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	strSelectedOptions = js_StripLastChar( strSelectedOptions )
	
	return strSelectedOptions;
}
//=======================================
function js_SetFontSize( strID, strSize )
//=======================================
{
	try{
		document.getElementById(strID).style.fontSize = strSize
	}catch(err){js_displayErr(err)}    
}
//=======================================
function js_add_ListOptionRow( objTable ) 
//=======================================
{
	try{
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightGray"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			//=====================================================
			if( str_bln_InString( sID, "ReleaseMonthCheckbox_id" ) == true ){
				newcell.childNodes[0].id = "ReleaseMonthCheckbox_id" + rowCount;
			}
			else if( str_bln_InString( sID, "ReleaseMonthName_id" ) == true ){
				newcell.childNodes[0].id = "ReleaseMonthName_id" + rowCount;
			}
			else if( str_bln_InString( sID, "ReleaseYearCheckbox_id" ) == true ){
				newcell.childNodes[0].id = "ReleaseYearCheckbox_id" + rowCount;
			}
			else if( str_bln_InString( sID, "ReleaseYear_id" ) == true ){
				newcell.childNodes[0].id = "ReleaseYear_id" + rowCount;
			}			
			else if( str_bln_InString( sID, "ApplicationNameCheckbox_id" ) == true ){
				newcell.childNodes[0].id = "ApplicationNameCheckbox_id" + rowCount;
			}
			else if( str_bln_InString( sID, "ApplicationName_id" ) == true ){
				newcell.childNodes[0].id = "ApplicationName_id" + rowCount;
			}		
			else if( str_bln_InString( sID, "AutomationSolutionCheckbox_id" ) == true ){
				newcell.childNodes[0].id = "AutomationSolutionCheckbox_id" + rowCount;
			}
			else if( str_bln_InString( sID, "AutomationSolution_id" ) == true ){
				newcell.childNodes[0].id = "AutomationSolution_id" + rowCount;
			}		
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
			}    
		} 
	}catch(err){js_displayErr(err)}    
}
//=======================================
function js_unCheckCBs( strCheckboxName )
//=======================================
{
	try{
		var array = document.getElementsByName(strCheckboxName); 
		for(var i = 0; i < array.length; i++){
			if(array[i].type == 'checkbox'){ 
				array[i].checked = false; 
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=====================================
function js_CheckCBs( strCheckboxName )
//=====================================
{
	try{
		var array = document.getElementsByName(strCheckboxName); 
		for(var i = 0; i < array.length; i++){
			if(array[i].type == 'checkbox'){ 
				array[i].checked = true; 
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}	
	
//=====================================
function js_InsertListRow( intRowIndex, 
						   strOptionID, 	
						   strOption ) 
//=====================================
{   
	intRowIndex = intRowIndex + 1
	js_setElementInnerText( strOptionID + intRowIndex, strOption )
}
//============================================
function js_add_Automation_ROI_Row( objTable ) 
//============================================
{       
	try{
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			//=====================================================
			if( str_bln_InString( sID, "Index_id" ) == true ){
				newcell.childNodes[0].id = "Index_id" + rowCount;
			}
			else if( str_bln_InString( sID, "BarChartIt_id" ) == true ){
				newcell.childNodes[0].id = "BarChartIt_id" + rowCount;
			}
			else if( str_bln_InString( sID, "LineChartIt_id" ) == true ){
				newcell.childNodes[0].id = "LineChartIt_id" + rowCount;
			}
			else if( str_bln_InString( sID, "Application_id" ) == true ){
				newcell.childNodes[0].id = "Application_id" + rowCount;
			}
			else if( str_bln_InString(sID, "Release_Month_id") == true ){
				newcell.childNodes[0].id = "Release_Month_id" + rowCount; 
			}			
			else if( str_bln_InString(sID, "Release_Year_id") == true ){
				newcell.childNodes[0].id = "Release_Year_id" + rowCount; 
			}			
			else if( str_bln_InString(sID, "Project_id") == true ){
				newcell.childNodes[0].id = "Project_id" + rowCount; 
			}
			else if( str_bln_InString(sID, "Automated_Solution_id") == true ){
				newcell.childNodes[0].id = "Automated_Solution_id" + rowCount; 
			}
			else if( str_bln_InString(sID, "Automated_Test_Cases_id") == true ){
				newcell.childNodes[0].id = "Automated_Test_Cases_id" + rowCount; 
			}			
			else if( str_bln_InString(sID, "Total_Execution_Cost_Manually_id") == true ){
				newcell.childNodes[0].id = "Total_Execution_Cost_Manually_id" + rowCount; 
			}
			else if( str_bln_InString(sID, "Total_Execution_Cost_Automation_id") == true ){
				newcell.childNodes[0].id = "Total_Execution_Cost_Automation_id" + rowCount; 
			}
			else if( str_bln_InString(sID, "Cost_Savings_id") == true ){
				newcell.childNodes[0].id = "Cost_Savings_id" + rowCount; 
			}			
			else if( str_bln_InString(sID, "Cost_Avoidance_id") == true ){
				newcell.childNodes[0].id = "Cost_Avoidance_id" + rowCount; 
			}						

			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
			}    
		} 
	}catch(err){js_displayErr(err)}    
}
//======================================================================
function js_UpdateAutomationROISummaryTableRow( intRowIndex, 
												strApplication, 
												strRelease_Month, 
												strAutomated_Solution, 
												strAutomated_Test_Cases, 
												strCost_Avoidance ) 
//======================================================================
{   

/* 	alert ( "Index: " + intRowIndex + "\n" + 
			    "Application: " + strApplication + "\n" + 
				"Release Month: " + strRelease_Month + "\n" + 
				"Automated Solution: " + strAutomated_Solution + "\n" + 
				"Automated_Test_Cases: " + strAutomated_Test_Cases + "\n" + 
				"Cost Avoidance: " + strCost_Avoidance ); */
			
	intRowIndex = intRowIndex + 1
	
	var strFtColor, strBGColor
	
	if( strCost_Avoidance.length > 0 ){
		js_setElementInnerText( "Cost_Avoidance_id" + intRowIndex, "$"+strCost_Avoidance )
	}else if( strCost_Avoidance.length = 0 ){
		js_setElementInnerText( "Cost_Avoidance_id" + intRowIndex, "" )
	}
	
	js_setElementInnerText( "Application_id" + intRowIndex, strApplication )
	js_setElementInnerText( "Release_Month_id" + intRowIndex, strRelease_Month )
	js_setElementInnerText( "Automated_Solution_id" + intRowIndex, strAutomated_Solution )
	js_setElementInnerText( "Automated_Test_Cases_id" + intRowIndex, strAutomated_Test_Cases )
	
	if( str_bln_InString( strApplication, "Total Cost Avoidance for Solution" ) == true ){
		strFtColor = "brown"
	}else if( str_bln_InString( strApplication, "Total Cost Avoidance for Application" ) == true ){
		strFtColor = "blue"
	}else if( str_bln_InString( strApplication, "All Applications Cost Avoidance" ) == true ){
		strFtColor = "green"
	}
	js_setColor( "Application_id" + intRowIndex, strFtColor );
	js_setColor( "Cost_Avoidance_id" + intRowIndex, strFtColor );
	js_setColor( "Automated_Test_Cases_id" + intRowIndex, strFtColor );
	js_SetFontSize("Application_id" + intRowIndex, "large")
	js_SetFontSize("Cost_Avoidance_id" + intRowIndex, "large")
	js_SetFontSize("Automated_Test_Cases_id" + intRowIndex, "large")
}
//==========================================================================
function js_UpdateAutomationROITableRow( intRowIndex, 
										 strRecordIndex, 
										 strApplication, 
										 strRelease_Month, 
										 strRelease_Year, 
										 strProject, 
										 strAutomated_Solution, 
										 strAutomated_Test_Cases, 
										 strTotal_Execution_Cost_Manually, 
										 strTotal_Execution_Cost_Automation, 
										 strCost_Savings ) 
//==========================================================================
{   
	     
/* 	alert ( "Index: " + intRowIndex + "\n" + 
			"RecordIndex: " + strRecordIndex + "\n" + 
			"Application: " + strApplication + "\n" + 
			"Release Month: " + strRelease_Month + "\n" + 
			"Release Year: " + strRelease_Year + "\n" + 
			"Project: " + strProject + "\n" + 
			"Automated Solution: " + strAutomated_Solution + "\n" + 
			"Automated_Test_Cases: " + strAutomated_Test_Cases + "\n" + 
			"Total Execution Cost Manually: " + strTotal_Execution_Cost_Manually + "\n" + 
			"Total Execution Cost Automation: " + strTotal_Execution_Cost_Automation + "\n" + 
			"Cost Savings: " + strCost_Savings ); */
	
	intRowIndex = intRowIndex + 1
	if( strApplication == "Chart" ){
		js_unhideObject( "BarChartIt_id" + intRowIndex )
		js_unhideObject( "LineChartIt_id" + intRowIndex )
		js_setElementValueByID( "BarChartIt_id" + intRowIndex, strRelease_Month )
		js_setElementValueByID( "LineChartIt_id" + intRowIndex, strRelease_Month )
		js_setElementInnerText( "Index_id" + intRowIndex, "" )	
		js_setElementInnerText( "Application_id" + intRowIndex, "" )
		js_setElementInnerText( "Release_Month_id" + intRowIndex, "" )
		js_setElementInnerText( "Release_Year_id" + intRowIndex, "" )
		js_setElementInnerText( "Project_id" + intRowIndex, "" )
		js_setElementInnerText( "Automated_Solution_id" + intRowIndex, "" )
		js_setElementInnerText( "Automated_Test_Cases_id" + intRowIndex, "" )
		js_setElementInnerText( "Total_Execution_Cost_Manually_id" + intRowIndex, "" )
		js_setElementInnerText( "Total_Execution_Cost_Automation_id" + intRowIndex, "" )
		js_setElementInnerText( "Cost_Savings_id" + intRowIndex, "" )
	}
	if( strApplication != "Chart" ){
		js_setElementInnerText( "Index_id" + intRowIndex, strRecordIndex )	
		js_setElementInnerText( "Application_id" + intRowIndex, strApplication )
		js_setElementInnerText( "Release_Month_id" + intRowIndex, strRelease_Month )
		js_setElementInnerText( "Release_Year_id" + intRowIndex, strRelease_Year )
		js_setElementInnerText( "Project_id" + intRowIndex, strProject )
		js_setElementInnerText( "Automated_Solution_id" + intRowIndex, strAutomated_Solution )
		js_setElementInnerText( "Automated_Test_Cases_id" + intRowIndex, strAutomated_Test_Cases )
		
		if( strTotal_Execution_Cost_Manually.length > 0 )
			js_setElementInnerText( "Total_Execution_Cost_Manually_id" + intRowIndex, "$"+strTotal_Execution_Cost_Manually )
		else if( strTotal_Execution_Cost_Manually.length = 0 )
			js_setElementInnerText( "Total_Execution_Cost_Manually_id" + intRowIndex, "" )
		
		if( strTotal_Execution_Cost_Automation.length > 0 )
			js_setElementInnerText( "Total_Execution_Cost_Automation_id" + intRowIndex, "$"+strTotal_Execution_Cost_Automation )
		else if( strTotal_Execution_Cost_Automation.length = 0 )
			js_setElementInnerText( "Total_Execution_Cost_Automation_id" + intRowIndex, "" )
		
		if( strCost_Savings.length > 0 )
			js_setElementInnerText( "Cost_Savings_id" + intRowIndex, "$"+strCost_Savings )
		else if( strCost_Savings.length = 0 )
			js_setElementInnerText( "Cost_Savings_id" + intRowIndex, "" )
		
		
		if( strApplication == "Grand Sum" ){
			var strFtColor = "white"
			var strBGColor = "gray"
			js_setColor( "Index_id" + intRowIndex, strFtColor );
			js_setColor( "Application_id" + intRowIndex, strFtColor );
			js_setColor( "Release_Month_id" + intRowIndex, strFtColor );
			js_setColor( "Release_Year_id" + intRowIndex, strFtColor );
			js_setColor( "Project_id" + intRowIndex, strFtColor );
			js_setColor( "Automated_Solution_id" + intRowIndex, strFtColor );
			js_setColor( "Automated_Test_Cases_id" + intRowIndex, strFtColor );
			js_setColor( "Total_Execution_Cost_Manually_id" + intRowIndex, strFtColor );
			js_setColor( "Total_Execution_Cost_Automation_id" + intRowIndex, strFtColor );
			js_setColor( "Cost_Savings_id" + intRowIndex, strFtColor );
			
			js_setBGColor( "Index_id" + intRowIndex, strBGColor );
			js_setBGColor( "Application_id" + intRowIndex, strBGColor );
			js_setBGColor( "Release_Month_id" + intRowIndex, strBGColor );
			js_setBGColor( "Release_Year_id" + intRowIndex, strBGColor );
			js_setBGColor( "Project_id" + intRowIndex, strBGColor );
			js_setBGColor( "Automated_Solution_id" + intRowIndex, strBGColor );
			js_setBGColor( "Automated_Test_Cases_id" + intRowIndex, strBGColor );
			js_setBGColor( "Total_Execution_Cost_Manually_id" + intRowIndex, strBGColor );
			js_setBGColor( "Total_Execution_Cost_Automation_id" + intRowIndex, strBGColor );
			js_setBGColor( "Cost_Savings_id" + intRowIndex, strBGColor );
		}
		if( strApplication == "Chart" ){
			var strBGColor = "white"
			js_setBGColor( "Index_id" + intRowIndex, strBGColor );
			js_setBGColor( "Application_id" + intRowIndex, strBGColor );
			js_setBGColor( "Release_Month_id" + intRowIndex, strBGColor );
			js_setBGColor( "Release_Year_id" + intRowIndex, strBGColor );
			js_setBGColor( "Project_id" + intRowIndex, strBGColor );
			js_setBGColor( "Automated_Solution_id" + intRowIndex, strBGColor );
			js_setBGColor( "Automated_Test_Cases_id" + intRowIndex, strBGColor );
			js_setBGColor( "Total_Execution_Cost_Manually_id" + intRowIndex, strBGColor );
			js_setBGColor( "Total_Execution_Cost_Automation_id" + intRowIndex, strBGColor );
			js_setBGColor( "Cost_Savings_id" + intRowIndex, strBGColor );
		}
	}	
}
//=======================================
function js_ExpandCollapse( strImageID ){
//=======================================

	try{
		var blnExpanded = false
		var strExpandImage = gstrImages + "+.png";
		var strCollapseImage = gstrImages + "-.png";
		var objImageID = document.getElementById(strImageID);		
		var strCurrentSwitchSrc = objImageID.src;
		if( utl_CheckForString(strCurrentSwitchSrc, "+.png") == true ){
			blnExpanded = true
			objImageID.src = strCollapseImage;
		}else if( utl_CheckForString(strCurrentSwitchSrc, "-.png") == true ){
			blnExpanded = false;
			objImageID.src = strExpandImage;
		}
	}catch(err){
		txt="Error description: " + err.message + "\n\n";
		txt+="Click OK to continue.\n\n";
		alert(txt);
	}
	return blnExpanded;
}
//==================
function js_OnOff(){
//==================
	
	try{
		var strImageID = "OnOff_id"
		var blnOn = false
		var strOnImage = gstrImages + "ON.png";
		var strOFFImage = gstrImages + "OFF.png";
		var objImageID = document.getElementById(strImageID);		
		var strCurrentSwitchSrc = objImageID.src;
		if( utl_CheckForString(strCurrentSwitchSrc, "ON.png") == true ){
			blnOn = false
			objImageID.src = strOFFImage;
		}else if( utl_CheckForString(strCurrentSwitchSrc, "OFF.png") == true ){
			blnOn = true;
			objImageID.src = strOnImage;
		}
	}catch(err){
		txt="Error description: " + err.message + "\n\n";
		txt+="Click OK to continue.\n\n";
		alert(txt);
	}
	return blnOn;
}
//=========================================================
function js_setElementValueFromElement( sToID, varFromID ){
//=========================================================

	try{
		varSteps = Get_Select_Items( varFromID )
		var arrSteps = new Array();
		arrSteps = varSteps.split("^");
		var intArrLen = arrSteps.length;
		var varStep;
		var intArrayIndex;
		if( intArrLen > 0 ){
			varSteps = "";
			for( intArrayIndex = 0; intArrayIndex < intArrLen; intArrayIndex++ ){
				varStep = arrSteps[intArrayIndex];
				varSteps = varSteps + varStep + "\r";
			}
		}
		if( varSteps.length > 0 ){
			document.getElementById(sToID).value = varSteps;
			js_unhideObject(sToID);
		}
		if( varSteps == "\r" ){
			js_hideObject(sToID);
		}
	}catch(e){alert(e)}	
}
//================================
function js_LOG( sJSFunctionName )
//================================
{
	//LIB_AppendToFile( sLog, "<-- JavaScript --> " + sJSFunctionName )
}
//==========================================
function js_display_Err( err, strFuncName ){
//==========================================

	var strError = "Error description: " + err.message + "\n\n";
	strError += "Function Name: " + strFuncName + ".\n\n";
	strError += "Click OK to continue.\n\n";
	
	alert(strError);
}
//========================================
function js_GetDropDownSelectedText( sID )
//========================================
{
	var strListItem = "";
	
	try{
		var select_list_field = document.getElementById( sID );
		var select_list_selected_index = select_list_field.selectedIndex;
		if( select_list_selected_index >= 0 ){
			strListItem = select_list_field.options[select_list_selected_index].text;
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	return strListItem;
}
//=========================================
function js_GetDropDownSelectedIndex( sID )
//=========================================
{
	var strListItem = "";
	
	try{
		var select_list_field = document.getElementById( sID );
		var select_list_selected_index = select_list_field.selectedIndex;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return select_list_selected_index;
}
//=======================================================
function js_getSelectedItem( strSelectID, intItemIndex ){
//=======================================================
	
	try{
		var objSelect = document.getElementById( strSelectID );
		var strSelectedItem = objSelect.options[intItemIndex].text;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return strSelectedItem;
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
//==========================================================
function js_PopulateSelectWithData( sID, sData, blnSorted ){
//==========================================================

	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options.length = 0;
		var sDataArr = new Array();
		sDataArr = sData.split("^");
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
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
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
			varSelectItems = varSelectItems + varSelectItem + "^"
		}
		varSelectItems = js_StripLastChar( varSelectItems )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return varSelectItems;
}
//==================================
function js_getSelectedItems( sID ){
//==================================

	var varSelectItems = "";
	
	try{
		var varSelectItem;
		var intArrayIndex;
		var ID_Select = document.getElementById( sID );
		var intCurrentSelectLen = ID_Select.options.length;
		
		for( intArrayIndex = 0; intArrayIndex < intCurrentSelectLen; intArrayIndex++ ){
			if( ID_Select.options[intArrayIndex].selected ){
				varSelectItem = ID_Select.options[intArrayIndex].text;
				varSelectItems = varSelectItems + varSelectItem + "^"
			}
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return varSelectItems;
}
//================================
function js_getSelectItems( sID ){
//================================

	var varSelectItems = "";
	
	try{
		var varSelectItem;
		var intArrayIndex;
		var ID_Select = document.getElementById( sID );
		var intCurrentSelectLen = ID_Select.options.length;
		
		for( intArrayIndex = 0; intArrayIndex < intCurrentSelectLen; intArrayIndex++ ){
			varSelectItem = ID_Select.options[intArrayIndex].text;
			varSelectItems = varSelectItems + varSelectItem + "^"
		}
		
		varSelectItems = js_StripLastChar( varSelectItems )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return varSelectItems;
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
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==================================================
function js_getSelectValueIndex( strID, strOption ){
//==================================================

	try{
		var objSelect = document.getElementById(strID);
		var intOptionIndex = 0
		
		for( intOptionIndex = 0; intOptionIndex < objSelect.options.length; intOptionIndex++ ){
			if( objSelect.options[intOptionIndex].text == strOption ){
				intOptionIndex++;
				break;
			}
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return intOptionIndex;
}
//==============================
function js_isChecked( strID ){
//==============================

	var blnChecked;
	
	try{
		var objObject = document.getElementById(strID);
		blnChecked = objObject.checked;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return blnChecked;
}
//=============================================
function js_setSelectValue( strID, strOption ){
//=============================================

	//alert( "js_setSelectValue(" + strID + "," + strOption + ")" )

	try{
		var objSelect = document.getElementById(strID);
		var intSelectElementIndex = 0;
		
		for (var intOptionIndex = 0; intOptionIndex < objSelect.options.length; intOptionIndex++ ){
			if( objSelect.options[intOptionIndex].text == strOption ){
				intSelectElementIndex = intOptionIndex;
				break;
			}
		}
		objSelect.selectedIndex = intSelectElementIndex;
		objSelect.selected = true;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================================
function js_setSelectValueByIndex( strID, intExpOptionIndex ){
//============================================================

	try{
		var objSelect = document.getElementById(strID);
		var intOptionIndex;
		
		for( intOptionIndex = 0; intOptionIndex < objSelect.options.length; intOptionIndex++ ){
			if( intOptionIndex == intExpOptionIndex ) 
				break;
		}
		objSelect.selectedIndex = intOptionIndex;
		objSelect.selected = true;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//====================================================================================================================================
function js_UpdateElementPropertiesTable( intRowIndex, strElementPage, strElementLabel, strElementLocateBy, strElementLocateByValue ){
//====================================================================================================================================
	
	try{
		js_setElementInnerText( "ElementPage_id" + intRowIndex, strElementPage )
		js_setElementInnerText( "ElementLabel_id" + intRowIndex, strElementLabel )
		js_setElementInnerText( "ElementLocateBy_id" + intRowIndex, strElementLocateBy )
		js_setElementInnerText( "ElementLocateByValue_id" + intRowIndex, strElementLocateByValue )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=========================================================================================
function js_Update_APM_Table( intRowIndex, strApplicationName, strApplicationSL, strP_F ){
//=========================================================================================

	try{
		strApplicationSL = strApplicationSL.toUpperCase();
		js_setElementInnerText( "Application_Name_id" + intRowIndex, strApplicationName )
		js_setElementInnerText( "Application_SwimLane_id" + intRowIndex, strApplicationSL )
		js_setImage( "Application_Env_Status_id" + intRowIndex, gstrImages + strP_F + ".png" )	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================================
function js_insertNewColumn( strTableID, intColumnIndex ){
//========================================================

	try{
		var intIndex = intColumnIndex.cellIndex
		var objTable = document.getElementById(strTableID);              
		var x = document.getElementsByTagName("tr");

		intRowCount = x.length
		var strTR_id
		var row, x 
		
		var strBGColor = "#AFFA8C";
    
		for( var intRowIndex = 0; intRowIndex < intRowCount; intRowIndex++){
			strTR_id = "Row" + intRowIndex;
			row = document.getElementById(strTR_id);
			x = row.insertCell(intIndex);
			x.style.backgroundColor = strBGColor;
			
			if( intIndex == 1 ){
				x.innerHTML = objTable.rows[intRowIndex].cells[2].innerHTML;
			}else if( intIndex > 1 ){
				x.innerHTML = objTable.rows[intRowIndex].cells[1].innerHTML;
			}	
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=====================================================
function js_deleteColumn( strTableID, intColumnIndex ){
//=====================================================

	try{
		var intIndex = intColumnIndex.cellIndex
		var objTable = document.getElementById(strTableID);
		var x = document.getElementsByTagName("tr");

		intRowCount = x.length
		var strTR_id
		var row, x 
    
		for( var intRowIndex = 0; intRowIndex < intRowCount; intRowIndex++){
			strTR_id = "Row" + intRowIndex;
			row = document.getElementById(strTR_id);
			x = row.deleteCell(intIndex);
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}	
//=================================================================
function InsertRowPosition( strTableID, intRowIndex, strPosition ){
//=================================================================

	try{             
		var intIndex = intRowIndex.rowIndex
		
		var objTable = document.getElementById(strTableID);              
		var objRow
		
		var strBGColor = "#FFFA8C";
		
		if( strPosition == "above" ){
			if( intIndex == 1 ){
				intRowIndex.style.backgroundColor = strBGColor;
				objRow = objTable.insertRow(2);
			}else if( intIndex > 1 ){
				objRow = objTable.insertRow(intIndex);
				objRow.style.backgroundColor = strBGColor;
			}	
			var intColCount = objTable.rows[1].cells.length;
			var intColIndex, objNewcell;
				
			for( intColIndex = 0; intColIndex < intColCount; intColIndex++ ){     
				objNewcell = objRow.insertCell(intColIndex);                   
				objNewcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;   
			}
		}	
		else if( strPosition == "below" ){
			if( intIndex == 1 ){
				intRowIndex.style.backgroundColor = strBGColor;
				objRow = objTable.insertRow(2);
			}else if( intIndex > 1 ){
				objRow = objTable.insertRow(intIndex);
				objRow.style.backgroundColor = strBGColor;
			}	
			var intColCount = objTable.rows[1].cells.length;
			var intColIndex, objNewcell;
				
			for( intColIndex = 0; intColIndex < intColCount; intColIndex++ ){     
				objNewcell = objRow.insertCell(intColIndex);                   
				objNewcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;   
			}
		}	
		return intIndex;	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================================
function addNewRow( strTableID, intRowIndex, strPosition )
//========================================================
{           
  	try{    
		var intIndex = InsertRowPosition(strTableID, intRowIndex, strPosition);
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==============================================
function js_UpdateTableRow( iIDIndex, 
							sParamName, 
							iParamSize, 
							bParamRequired, 
							bParamListField, 
							bParamUserInput, 
							bParamComplexMethod, 
							sParamDefaultValue ) 
//==============================================
{       
	//alert("js_UpdateTableRow(" + sParamName + "\n" + iParamSize + "\n" + bParamRequired + "\n" + sParamDefaultValue + ")" )
	
	try{
		iIDIndex = iIDIndex + 1
		var sOFFImage = gstrImages + "OFF.png"
		var sONImage = gstrImages + "ON.png"
		
		js_setElementInnerText( "ParameterID" + iIDIndex, sParamName )
		js_setElementInnerText( "SizeID" + iIDIndex, iParamSize )
		js_setElementSrc( "RequiredField" + iIDIndex, bParamRequired, sOFFImage, sONImage )
		js_setElementInnerText( "ValueID" + iIDIndex, sParamDefaultValue )

		js_setBGColor( "ParameterID" + iIDIndex, "white" );
		js_setBGColor( "SizeID" + iIDIndex, "white" );
		js_setBGColor( "ValueID" + iIDIndex, "white" );
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==============================================
function js_Update_KS_TableRow( iIDIndex, 
								sParamName, 
							    iParamSize, 
							    bParamRequired, 
								bParamListField, 
								bParamUserInput, 
								bParamComplexMethod, 
								sParamDefaultValue ) 
//==============================================
{       
	//alert("js_Update_KS_TableRow(" + sParamName + "\n" + iParamSize + "\n" + bParamRequired + "\n" + sParamDefaultValue + ")" )
	
	try{
		iIDIndex = iIDIndex + 1
		/*
		js_setElementInnerText( "ParameterID" + iIDIndex, sParamName )
		js_setElementInnerText( "SizeID" + iIDIndex, iParamSize )
		js_setElementSrc( "RequiredField" + iIDIndex, bParamRequired, sOFFImage, sONImage )
		js_setElementInnerText( "ValueID" + iIDIndex, sParamDefaultValue )

		js_setBGColor( "ParameterID" + iIDIndex, "white" );
		js_setBGColor( "SizeID" + iIDIndex, "white" );
		js_setBGColor( "ValueID" + iIDIndex, "white" );
		*/
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================================= 
function js_getElementIDByName( strName, strElementValue ){ 
//=========================================================
	
	var strElementID = "";

	try{
		var array = document.getElementsByName( strName ); 
		
		for(var i = 0; i < array.length; i++){
			if(array[i].value == strElementValue){ 
				strElementID = array[i].id
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return strElementID;
}
//======================================================== 
function js_resetElementsBGColorTo( strName, strBGColor ){ 
//========================================================

	var strElementID = "";
	
	try{
		var array = document.getElementsByName( strName ); 
		for(var i = 0; i < array.length; i++){
			strElementID = array[i].id
			js_setBGColor( strElementID, strBGColor )
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//===============================
function js_runBatch( strBatch ){ 
//===============================

	try{
		var wshShell = new ActiveXObject("WScript.Shell");
		wshShell.Run("\"C:/work/" + strBatch + "\"", 0, false );
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//================================ 
function js_select_All( blnFlag ){ 
//================================ 

	try{
		var array = document.getElementsByName('Select_Application'); 
		for(var i = 0; i < array.length; i++){
			if(array[i].type == 'checkbox'){ 
				array[i].checked = blnFlag; 
			} 
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================
function js_CollectFieldsCount( strFieldName )
//============================================
{
	var arrFieldsCount = 0
	
	try{
		arrFieldsCount = document.getElementsByName( strFieldName );
		arrFieldsCount.length
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	return arrFieldsCount.length;
}
//======================================================================================
function js_UpdateDashboardTableRow( strApplicationName, intIDIndex, strURL, strStatus ) 
//======================================================================================
{        
	try{
		intIDIndex = intIDIndex + 1
		js_setElementInnerText( strApplicationName + "_UL_id" + intIDIndex, strURL )
		js_setElementInnerText( strApplicationName + "_Status_id" + intIDIndex, strStatus )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//================================================================
function js_UpdateApplicationRow( intIDIndex, strApplicationName ) 
//================================================================
{        
	try{
		intIDIndex = intIDIndex + 1
		var strApplicationID = "ApplicationName_id" + intIDIndex
		
		var blnNewUFT = false	
		var blnNewCSharp = false	
		//js_setElementChecked( "SelectApplication_id" + intIDIndex )
		
		if( strApplicationName.indexOf("_SEPARATE_") >= 0 ){
			blnNewUFT = true
			strApplicationName = strApplicationName.replace( "_SEPARATE_", "" )			
		}else if( strApplicationName.indexOf("_CSHARP_") >= 0 ){
			blnNewCSharp = true
			strApplicationName = strApplicationName.replace( "_CSHARP_", "" )			
		}
		if( blnNewUFT == true )
			js_setElementInnerText( strApplicationID, strApplicationName + " *" )
		else if( blnNewCSharp == true )
			js_setElementInnerText( strApplicationID, strApplicationName + " #" )
		else if( blnNewUFT == false && blnNewCSharp == false )
			js_setElementInnerText( strApplicationID, strApplicationName )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================================================================================
function js_UpdateApplicationCredentialRow( intIDIndex, strApplicationName, strURL, strUsername, strPassword ) 
//============================================================================================================
{        
	try{
		intIDIndex = intIDIndex + 1
		js_setElementInnerText( "ApplicationName_id" + intIDIndex, strApplicationName )
		js_setElementInnerText( "URL_id" + intIDIndex, strURL )
		js_setElementInnerText( "Username_id" + intIDIndex, strUsername )
		js_setElementInnerText( "Password_id" + intIDIndex, strPassword )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================
function js_LocateElementByID( strElementID ){
//============================================

	try{
		var objElement = document.getElementById(strElementID);
		if( objElement == null){
			alert("Element: " + strElementID + " was not Located" )
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==========================
function js_displayErr(err){
//==========================

	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	var strError = "Error description: " + err.message + "\n\n";
	strError += "Function Name: " + fName + ".\n\n";
	strError += "Click OK to continue.\n\n";
	
	alert(strError);
}	
//================================
function js_clearList( strListID )
//================================
{
	try{
		document.getElementById(strListID).options.length = 0;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
}
//===============================
function js_setImage( sID, sSRC )
//===============================
{
	try{
		document.getElementById(sID).src = sSRC;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=======================================
function js_clickElement( strElementID ){
//=======================================
	
	try{
		//js_scrollToElement( strElementID );
		var objElement = document.getElementById(strElementID);
		objElement.click();
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=========================================
function js_scrollToElement( strElementID )
//=========================================
{
	try{
		var objElement = document.getElementById(strElementID);
		objElement.scrollIntoView();
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}	
//====================================
function js_StripLastChar( varString )
//====================================
{
	try{
		if( varString != null ){
			varString = varString.substring( 0, varString.length - 1 );
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}

	return varString;
}
//=======================
function mouseCoords(ev){
//=======================
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};
}
//====================
function js_register()
//====================
{	
	try{
		var sUsername = js_getElementValueByID('UN_ID')
		
		if( str_LT(sUsername) > 0 ) {
			if ( LIB_GetCredentials_VBS( sUsername ) == true ) 
				LIB_BuildAndLaunchMainPage( sUsername );
		}	
		else if( str_LT(sUsername) == 0 ){
			alert( "Please enter a user name." )
		}				
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==============================================
function js_replaceString( sString, sFrom, sTo )
//==============================================
{
	js_LOG( "js_replaceString" );

	var iIndexOf = sString.indexOf(sFrom)
	var sAfterString = sString.replace( sFrom, sTo );
	var iIndexOf = sAfterString.indexOf(sFrom)
	
	if( iIndexOf >= 0 ){
		js_replaceString( sAfterString, sFrom, sTo )
	}
	return sAfterString;
}
//=====================================
function js_AddStrToArr( sAdd, sArray )
//=====================================
{
	var iArrayLength = sArray.length;
	var sString = "";

	var sModifiedArr = new Array();

	sModifiedArr[0] = sAdd

	//js_DisplayArr( sArray );

	for(var i = 1; i < iArrayLength+1; i++)
	{
		sModifiedArr[i] = sArray[i-1]
	}
	
	//js_DisplayArr( sModifiedArr );

	return sModifiedArr;
}
//============================================
function js_set_Date( iYears, iMonths, iDays )
//============================================
{
	alert("js_set_Date")
	
	var date = new Date();
	var Setdate = new Date(date);

	var iCurrentYear = Setdate.getFullYear()
	var iCurrentMonth = Setdate.getMonth()
	var iCurrentDay = Setdate.getDate()

	var iNewYear = iCurrentYear + iYears 
	var iNewMonth = iCurrentMonth + iMonths
	var iNewDay = iCurrentDay + iDays

	var NewDate = new Date(iNewYear, iNewMonth, iNewDay);
	var newdate = new Date(NewDate);

	return newdate;
}	
//================================
function js_getEditModeTestSteps()
//================================
{
	js_LOG( "js_getEditModeTestSteps" );
	
	var sData = "";
	var sOmit, sWorksheet_Keyword, sWorksheetName_KeywordName, sKeyword_Parameters, sSub_TestID, itdIndex;
	var array = document.getElementsByName( 'TS_Instruction' );
	var sTableContentArr = new Array();
	
	for(var i = 0; i < array.length; i++)
	{
		itdIndex = i + 1;
		sOmit = js_getElementInnerText( "Omit" + itdIndex );

		sWorksheet_Keyword = js_getElementInnerText( "Worksheet_Keyword" + itdIndex );
		
		if( sWorksheet_Keyword == "Keyword" )
		{
			sWorksheetName_KeywordName = js_getElementInnerText( "Keyword" + itdIndex );
			sKeyword_Parameters = js_getElementInnerText( "Keyword_Parameters" + itdIndex );
			sSub_TestID = ""
		}
		else if( sWorksheet_Keyword == "Worksheet" )
		{
			sWorksheetName_KeywordName = js_GetDropDownSelectedText("Workbook" + itdIndex );
			sKeyword_Parameters = js_GetDropDownSelectedText("Worksheet" + itdIndex );
			sSub_TestID = js_getElementValueByID( "SubTestID" + itdIndex );
		}
		sData = sData + sOmit + "!" + sWorksheet_Keyword + "!" + sWorksheetName_KeywordName + "!" + sKeyword_Parameters + "!" + sSub_TestID + "@";
	}
	
	sData = sData.substring( 0, sData.length-1 );

	return sData;
}
//================================
function js_loadXMLDoc( sXMLFile )
//================================
{
	alert( sXMLFile )
	var xhttp;
	if (window.XMLHttpRequest) 
	{
		alert( "if" )
		xhttp = new XMLHttpRequest();
	}
	else
	{
		alert( "else" )
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",sXMLFile,false);
	xhttp.send("");
	
	return xhttp.responseXML;
}
//===========================================
function js_getXPathValue( sXMLFile, sXPath )
//===========================================
{
	var sValues = ""

	xml=js_loadXMLDoc(sXMLFile);
	
	if (window.ActiveXObject)
	{
		xml.setProperty("SelectionLanguage","XPath");
		var nodes=xml.selectNodes(sXPath);

		for (i=0;i<nodes.length;i++)
		{
			sValues = sValues + nodes[i].childNodes[0].nodeValue + ",";
		}
	}
	return sValues
}	
//=========================================
function js_AddSelectToParamValue( iIndex )
//=========================================
{
	js_LOG( "js_AddSelectToParamValue" );

	//alert( "js_AddSelectToParamValue" );
	
	var sID = "ValueID" + iIndex
	js_setFocus( sID );
	
	var sCurrentValue = js_getElementValueByID( sID );
	
	var sCheckBoxID = "List_Field_Select_ID" + iIndex
	var bStatus = js_getCheckboxStatus(sCheckBoxID)
	//alert( bStatus );
	
	if( bStatus == true )
	{ 
		//alert( "TRUE" );
		sCurrentValue = "SEL^" + sCurrentValue;
	}
	else if( bStatus == false )
	{
		//alert( "FALSE" );
		sCurrentValue = js_replaceAll( sID, sCurrentValue, "SEL^", "");
	}
	//alert( sCurrentValue );
	js_setElementValue( sID, sCurrentValue );
}
//=============================================
function js_hideObjectsByName( strObjectsName )
//=============================================
{
	//alert("js_hideObjectsByName(" + strObjectsName + ")" );
	array = document.getElementsByName( strObjectsName );
		
	for( iIndex = 0; iIndex < array.length; iIndex++ ) 
	{
		array[iIndex].style.display = "none";
	}		
}
//===============================================
function js_unhideObjectsByName( strObjectsName )
//===============================================
{
	//alert("js_unhideObjectsByName(" + strObjectsName + ")" );
	array = document.getElementsByName( strObjectsName );
	
	for( iIndex = 0; iIndex < array.length; iIndex++ ) 
	{
		array[iIndex].style.display = "";
	}		
}
//===========================
function js_hideObject( sID )
//===========================
{
	document.getElementById(sID).style.display = "none";
}
//=============================
function js_unhideObject( sID )
//=============================
{
	document.getElementById(sID).style.display = "";
}
//=============================
function js_isDisabled( strID )
//=============================
{
	return document.getElementById(strID).disabled;
}
//==============================
function js_disableObject( sID )
//==============================
{
	document.getElementById(sID).disabled = "disabled";
}
//=============================
function js_enableObject( sID )
//=============================
{
	document.getElementById(sID).disabled = "";
}
//===========================================
function js_CollectFieldValues( sFieldNames )
//===========================================
{
	var sTFValues = "";

	try{
		var array
		var iIndex
		var sFieldNamesArr = new Array();
		var sName
		var iFieldNamesArrIndex;
		var strTextArea
		var select_list_field, select_list_selected_index
		
		sFieldNamesArr = sFieldNames.split(",");
		
		for( iFieldNamesArrIndex = 0; iFieldNamesArrIndex < sFieldNamesArr.length; iFieldNamesArrIndex++ ){
			sName = sFieldNamesArr[iFieldNamesArrIndex];
			array = document.getElementsByName( sName );
			for( iIndex = 0; iIndex < array.length; iIndex++ ){
				if( array[iIndex].type == 'text'){sTFValues = sTFValues + array[iIndex].value + "`";
				}else if( array[iIndex].type == 'select-one'){
					select_list_field = array[iIndex];
					select_list_selected_index = select_list_field.selectedIndex;
					if( select_list_selected_index >= 0 ){
						sTFValues = sTFValues + select_list_field.options[select_list_selected_index].text + "`";
					}
				}else if( array[iIndex].type == 'password'){sTFValues = sTFValues + array[iIndex].value + "`";
				}else if( array[iIndex].type == 'checkbox'){sTFValues = sTFValues + array[iIndex].checked + "`";
				}else if( array[iIndex].type == 'textarea'){
					strTextArea = array[iIndex].value
					if( strTextArea.length == 0 )
						strTextArea = "EMPTY"
					sTFValues = sTFValues + strTextArea + "`";
				}else{
					if( str_bln_InString(array[iIndex].src, "ON") == true ){sTFValues = sTFValues + "1" + "`";
					}else if( str_bln_InString(array[iIndex].src, "OFF") == true ){sTFValues = sTFValues + "0" + "`";
					}
				}
			}
			sTFValues = str_RemoveLastChar( sTFValues )
			sTFValues = sTFValues + ";"
		}
		sTFValues = str_RemoveLastChar( sTFValues )
	}catch(err){js_displayErr(err)}
	
	return sTFValues;
}
//=========================================
function js_DisplayStepsCount( strTableID )
//=========================================
{
	try{
		var objTable = document.getElementById(strTableID);              
		var intRowCount = objTable.rows.length;

		var strCurrentTestName = flf_GetParamValue( "Current Test Steps Filename" )
		
		js_setElementInnerText( "TestStepsCount_id", "There are (" + intRowCount + ") steps in this test." );

		js_unhideObject( "TestStepsCount_id" );
		js_unhideObject( strTableID );
		js_unhideObject( "CurrentTestName_id" )
		
		js_setElementInnerText( "CurrentTestName_id", "Editing Test Steps (" + strCurrentTestName + ")" );
		
		js_hideObject( "AvailableTestsLabel_id");
		js_hideObject( "AvailableTests_ID" );
		js_hideObject( "Refresh_ID" );
		js_hideObject( "AvailableTestsLabel_id" );
		js_hideObject( "AvailableTestsTable_ID" );
		
		js_scrollToElement( strTableID )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//======================================
function js_reID( tableID, sFieldNames )
//======================================
{
	js_LOG( "js_reID" );
	
	//alert("js_reID (" + tableID + "," + sFieldNames + ")" )

	var table = document.getElementById(tableID);              
	var rowCount = table.rows.length;    
	var iIDIndex
	
	//alert( "rowCount: " + rowCount )

	var sFieldNamesArr = new Array();
	var sName, iIndex, array
	var iFieldNamesArrIndex;
	sFieldNamesArr = sFieldNames.split(",");
	
	var sID
	for( iFieldNamesArrIndex=0; iFieldNamesArrIndex < sFieldNamesArr.length; iFieldNamesArrIndex++) 
	{
		sName = sFieldNamesArr[iFieldNamesArrIndex]
		
		//alert( "Field Name: " + sName )
		
		array = document.getElementsByName( sName );

		for( iIndex = 0; iIndex < array.length; iIndex++ ) 
		{
			sID = array[iIndex].id
			iIDIndex = iIndex + 1
			
			//alert(sID)
			
			if( str_bln_InString(sID, "X_id") == true )
			{
				array[iIndex].id = "X_id" + iIDIndex
			}
			else if( str_bln_InString(sID, "ListField") == true )
			{
				array[iIndex].id = "ListField" + iIDIndex
			}
			else if( str_bln_InString(sID, "RequiredField") == true )
			{
				array[iIndex].id = "RequiredField" + iIDIndex
			}
			else if( str_bln_InString(sID, "UserInputField") == true )
			{
				array[iIndex].id = "UserInputField" + iIDIndex
			}
			else if( str_bln_InString(sID, "ComplexMethodField") == true )
			{
				array[iIndex].id = "ComplexMethodField" + iIDIndex
			}
			else if( str_bln_InString(sID, "ParameterID") == true )
			{
				array[iIndex].id = "ParameterID" + iIDIndex
			}
			else if( str_bln_InString(sID, "ScreenNames_ID") == true )
			{
				array[iIndex].id = "ScreenNames_ID" + iIDIndex
			}
			else if( str_bln_InString(sID, "SizeID") == true )
			{
				array[iIndex].id = "SizeID" + iIDIndex
			}
			else if( str_bln_InString(sID, "ValueID") == true )
			{
				array[iIndex].id = "ValueID" + iIDIndex
			}
			else if( str_bln_InString(sID, "EditedScreen_ID") == true )
			{
				array[iIndex].id = "EditedScreen_ID" + iIDIndex
			}
			else if( str_bln_InString(sID, "Edited_Screen_Parameters_Value_ID") == true )
			{
				array[iIndex].id = "Edited_Screen_Parameters_Value_ID" + iIDIndex
			}
		}
	}
}
//============================================
function js_setElementTitle( strID, strTitle )
//============================================
{
	try{
		document.getElementById(strID).title = strTitle;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==========================================================
function js_Update_ID3DataProcess_ReportRow( intIDIndex, 
											 strIndex, 
									 		 strGrid, 
											 strContract, 
											 strProduct, 
											 strOption, 
											 strAge, 
											 strDuration, 
											 strRate, 
											 strType, 
											 strProductCode, 
											 strTable )
//==========================================================
{        
	intIDIndex = intIDIndex + 1
	
	js_setElementInnerText( "Index_id" + intIDIndex, strIndex )
	js_setElementInnerText( "Grid_id" + intIDIndex, strGrid )
	js_setElementInnerText( "Contract_id" + intIDIndex, strContract )
	js_setElementInnerText( "Product_id" + intIDIndex, strProduct )
	js_setElementInnerText( "Option_id" + intIDIndex, strOption )
	js_setElementInnerText( "Age_id" + intIDIndex, strAge )
	js_setElementInnerText( "Duration_id" + intIDIndex, strDuration )
	js_setElementInnerText( "Rate_id" + intIDIndex, strRate )
	js_setElementInnerText( "Type_id" + intIDIndex, strType )
	js_setElementInnerText( "ProductCode_id" + intIDIndex, strProductCode )
	js_setElementInnerText( "Table_id" + intIDIndex, strTable )
}
//========================================================
function js_setElementSrc( sID, bFlag, sOFF_SRC, sON_SRC )
//========================================================
{
	try{
		switch(bFlag){
			case true:	document.getElementById(sID).src = sON_SRC; break;
			case false:	document.getElementById(sID).src = sOFF_SRC; break;
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================================
function js_UpdateExpvsAct( intIDIdex, strPF, strExp, strAct )
//============================================================
{        
	//alert( "js_UpdateExpvsAct(" + intIDIdex + "," + strPF + "," + strExp + "," + strAct + ")" )
	
	intIDIdex = intIDIdex + 1
	
	js_setElementInnerText( "PFID" + intIDIdex, strPF )
	js_setElementInnerText( "ExpID" + intIDIdex, strExp )
	js_setElementInnerText( "ActID" + intIDIdex, strAct )
	
	var strField;	
	strField = document.getElementById( "PFID" + intIDIdex );
	strField.style.fontsize = "25px";
	
	if( str_bln_InString( strExp, "COLUMN" ) == true ){
		js_setElementInnerText( "ExpID" + intIDIdex, "Exp" )
		js_setElementInnerText( "ActID" + intIDIdex, "Act" )

		js_setColor( "PFID" + intIDIdex, "White" );
		js_setColor( "ExpID" + intIDIdex, "White" );
		js_setColor( "ActID" + intIDIdex, "White" );

		js_setBGColor( "PFID" + intIDIdex, "Green" );
		js_setBGColor( "ExpID" + intIDIdex, "Green" );
		js_setBGColor( "ActID" + intIDIdex, "Green" );
	}else if( strPF == "Fail" ){
		js_setColor( "PFID" + intIDIdex, "Red" );
		js_setColor( "ExpID" + intIDIdex, "Red" );
		js_setColor( "ActID" + intIDIdex, "Red" );
		js_setBGColor( "PFID" + intIDIdex, "Yellow" );
		js_setBGColor( "ExpID" + intIDIdex, "Yellow" );
		js_setBGColor( "ActID" + intIDIdex, "Yellow" );
	}else if( strPF == "Pass" ){
		js_setColor( "PFID" + intIDIdex, "Green" );
		js_setColor( "ExpID" + intIDIdex, "Black" );
		js_setColor( "ActID" + intIDIdex, "Black" );
		js_setBGColor( "PFID" + intIDIdex, "White" );
		js_setBGColor( "ExpID" + intIDIdex, "White" );
		js_setBGColor( "ActID" + intIDIdex, "White" );
	}	
} 
//===============================================================================
function js_UpdateScreenTableRow( intIDIdex, strScreenName, strScreenParameters )
//===============================================================================
{        
	//alert( intIDIdex + "-" + strScreenName + "-" + strScreenParameters )
	intIDIdex = intIDIdex + 1
	
	js_setElementInnerText( "ScreenID" + intIDIdex, strScreenName )
	js_setElementInnerText( "ScreenParametersID" + intIDIdex, strScreenParameters )
}    
//=====================================================================================
function js_UpdateScreenTableRowToEdit( intIDIdex, strScreenName, strScreenParameters )
//=====================================================================================
{        
	//alert( intIDIdex + "-" + strScreenName + "-" + strScreenParameters )
	intIDIdex = intIDIdex + 1

	js_setElementInnerText( "EditedScreen_ID" + intIDIdex, strScreenName )
	js_setElementInnerText( "Edited_Screen_Parameters_Value_ID" + intIDIdex, strScreenParameters )
}    
//============================================================================================================================================================
function js_UpdateParamsTableRow( iIDIdex, sParamName, iParamSize, bParamRequired, bParamListField, bParamUserInput, bParamComplexMethod, sParamDefaultValue ) 
//============================================================================================================================================================
{   
	/*     
	alert ( "Param Index: " + iIDIdex + "\n" + 
			"Param Name: " + sParamName + "\n" + 
			"Param Size: " + iParamSize + "\n" + 
			"Param Required: " + bParamRequired + "\n" + 
			"Param List Field: " + bParamListField + "\n" + 
			"Param User Input: " + bParamUserInput + "\n" + 
			"Param Complex Method: " + bParamComplexMethod + "\n" + 
			"Param Default Value: " + sParamDefaultValue );
	*/
	
	iIDIdex = iIDIdex + 1
	
	var sOFFImage = gstrImages + "OFF.png"
	var sONImage = gstrImages + "ON.png"
	
	js_setElementInnerText( "ParameterID" + iIDIdex, sParamName )
	js_setElementInnerText( "SizeID" + iIDIdex, iParamSize )
	js_setElementInnerText( "ValueID" + iIDIdex, sParamDefaultValue )

	if( iParamSize == "0" ){
		js_disableObject( "ValueID" + iIDIdex)
		js_hideObject( "SelectID" + iIDIdex )
	}
	else{
		js_enableObject( "ValueID" + iIDIdex)
		js_unhideObject( "SelectID" + iIDIdex )
	}
	js_hideObject( "EditWorkbook_id" );
	js_hideObject( "EditSQL_id" );
	if( sParamName == "Select worksheet" ){
		js_unhideObject( "SelectID" + iIDIdex )
		js_unhideObject( "EditWorkbook_id" );
		js_setColor( "EditWorkbook_id", "Yellow" )
	}else if( sParamName == "Direct Execution of SQL on ID3" ){
		js_unhideObject( "SelectID" + iIDIdex )
		js_unhideObject( "EditSQL_id" );
		js_setColor( "EditSQL_id", "orange" )		
	}else{	
		js_hideObject( "EditWorkbook_id" );
		js_hideObject( "EditSQL_id" );
	}	
	if( bParamRequired == true ){
		var sBGColor = "Orange"
		//alert( "Row @ index " + iIDIdex + " is Required.")
		js_setBGColor( "ParameterID" + iIDIdex, sBGColor )
	}

	if( bParamUserInput == true ){
		var sBGColor = "LightGreen"
		//alert( "Row @ index " + iIDIdex + " is Required.")
		js_setBGColor( "ParameterID" + iIDIdex, sBGColor )
	}

	//js_setElementSrc( "RequiredField" + iIDIdex, bParamRequired, sOFFImage, sONImage )
	
	//if( bParamListField == false )
	//{
	//	js_hideObject( "List_Field_Select_ID" + iIDIdex )
	//}
	//else if(bParamListField == true )
	//{
	//	js_unhideObject( "List_Field_Select_ID" + iIDIdex )
	//}
	//js_setElementSrc( "UserInputField" + iIDIdex, bParamUserInput, sOFFImage, sONImage )
	//js_setElementSrc( "ComplexMethodField" + iIDIdex, bParamComplexMethod, sOFFImage, sONImage )
	
}
//=========================================
function js_add_IBM_iSeries_Row( objTable ) 
//=========================================
{        
	try{
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			js_setBGColor( sID, "white" );
			//=====================================================
			if( str_bln_InString( sID, "ParameterID" ) == true ){
				newcell.childNodes[0].id = "ParameterID" + rowCount;
			}
			else if( str_bln_InString(sID, "SizeID") == true ){
				newcell.childNodes[0].id = "SizeID" + rowCount; 
			}			
			else if( str_bln_InString(sID, "ValueID") == true ){
				newcell.childNodes[0].id = "ValueID" + rowCount; 
			}			
			else if( str_bln_InString(sID, "SelectID") == true ){
				newcell.childNodes[0].id = "SelectID" + rowCount; 
			}
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
				case "select-one":	newcell.childNodes[0].selectedIndex = 0;break;                 
			}    
		} 
	}catch(err){js_displayErr(err)}    
}
//====================================================
function js_add_IBM_iSeries_Add_Modify_Row( objTable ) 
//====================================================
{        
	try{
		var sOFFImage = gstrImages + "OFF.png"
		var sONImage = gstrImages + "ON.png"
		var sInsertOverImage = gstrImages + "+.png"
		var sInsertBelowImage = gstrImages + "-.png"
		
		var strInsertTestStepAbove = gstrImages + "InsertAbove.png"
		var strInsertTestStepBelow = gstrImages + "InsertBelow.png"
		var strDeleteTestStep = gstrImages + "Delete.png"
		
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			//=====================================================
			if( str_bln_InString( sID, "InsertActionOverParam" ) == true ){
				newcell.childNodes[0].id = "InsertActionOverParam" + rowCount; 
				newcell.childNodes[0].src = sInsertOverImage
			}			
			else if( str_bln_InString( sID, "DelActionParam" ) == true ){
				newcell.childNodes[0].id = "DelActionParam" + rowCount; 
				newcell.childNodes[0].src = sDelImage
			}
			else if( str_bln_InString( sID, "MethodNames_ID" ) == true ){
				newcell.childNodes[0].id = "MethodNames_ID" + rowCount;
			}			
			else if( str_bln_InString( sID, "ParameterID" ) == true ){
				newcell.childNodes[0].id = "ParameterID" + rowCount;
			}
			else if( str_bln_InString(sID, "SizeID") == true ){
				newcell.childNodes[0].id = "SizeID" + rowCount; 
			}
			else if( str_bln_InString(sID, "RequiredField") == true ){
				newcell.childNodes[0].id = "RequiredField" + rowCount; 
				newcell.childNodes[0].src = sOFFImage;
			}
			else if( str_bln_InString(sID, "ValueID") == true ){
				newcell.childNodes[0].id = "ValueID" + rowCount; 
			}			
			else if( str_bln_InString(sID, "SelectID") == true ){
				newcell.childNodes[0].id = "SelectID" + rowCount; 
			}
			
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
				case "select-one":	newcell.childNodes[0].selectedIndex = 0;break;                 
			}    
		} 
	}catch(err){js_displayErr(err)}    
}
//============================
function js_addRow( objTable ) 
//============================
{        
	try{

		var sOFFImage = gstrImages + "OFF.png"
		var sONImage = gstrImages + "ON.png"
		var sInsertOverImage = gstrImages + "+.png"
		var sInsertBelowImage = gstrImages + "-.png"
		
		var strInsertTestStepAbove = gstrImages + "InsertAbove.png"
		var strInsertTestStepBelow = gstrImages + "InsertBelow.png"
		var strDeleteTestStep = gstrImages + "Delete.png"
		
		var rowCount = objTable.rows.length;             
		var row = objTable.insertRow(rowCount);
		var colCount = objTable.rows[1].cells.length;
		var sID, iIndex;
		var intMod
		
		for( var intColIndex = 0; intColIndex < colCount; intColIndex++ ){     
			var newcell = row.insertCell(intColIndex);                   
			newcell.innerHTML = objTable.rows[1].cells[intColIndex].innerHTML;      
			sID = newcell.childNodes[0].id
			
			intMod = rowCount % 2
			if( intMod == 0 ){
				newcell.style.backgroundColor = "lightyellow"
			}else if( intMod == 1 ){
				newcell.style.backgroundColor = "white"
			}	
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			// Dashboard
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "ALIP_UL_id") == true ){newcell.childNodes[0].id = "ALIP_UL_id" + rowCount; 
			}else if( str_bln_InString(sID, "ALIP_Status_id") == true ){newcell.childNodes[0].id = "ALIP_Status_id" + rowCount; 
			}else if( str_bln_InString(sID, "INTERACTIVE_UL_id") == true ){newcell.childNodes[0].id = "INTERACTIVE_UL_id" + rowCount; 
			}else if( str_bln_InString(sID, "INTERACTIVE_Status_id") == true ){newcell.childNodes[0].id = "INTERACTIVE_Status_id" + rowCount; 
			}
			//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// A P P L I C A T I O N S - P E R F O R M A N C E - M O N I T O R
			//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "Application_Name_id") == true ){
				newcell.childNodes[0].id = "Application_Name_id" + rowCount; 
			}else if( str_bln_InString(sID, "Application_SwimLane_id") == true ){
				newcell.childNodes[0].id = "Application_SwimLane_id" + rowCount; 
			}else if( str_bln_InString(sID, "Application_Env_Status_id") == true ){
				newcell.childNodes[0].id = "Application_Env_Status_id" + rowCount;
			}
			//+++++++++++++++++++++++++++++++++++
			// E l e m e n t  P r o p e r t i e s 
			//+++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "ElementPage_id") == true ){
				newcell.childNodes[0].id = "ElementPage_id" + rowCount; 
			}else if( str_bln_InString(sID, "ElementLabel_id") == true ){
				newcell.childNodes[0].id = "ElementLabel_id" + rowCount; 
			}else if( str_bln_InString(sID, "ElementLocateBy_id") == true ){
				newcell.childNodes[0].id = "ElementLocateBy_id" + rowCount; 
			}else if( str_bln_InString(sID, "ElementLocateByValue_id") == true ){
				newcell.childNodes[0].id = "ElementLocateByValue_id" + rowCount; 
			}
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "ListField") == true || 
				str_bln_InString(sID, "RequiredField") == true || 
				str_bln_InString(sID, "UserInputField") == true || 
				str_bln_InString(sID, "ComplexMethodField") == true 
			  ){
				newcell.childNodes[0].src = sOFFImage
			}else if( str_bln_InString(sID, "DelActionParam") == true ){
				newcell.childNodes[0].src = sDelImage
			}else if( str_bln_InString(sID, "InsertActionOverParam") == true ){
				newcell.childNodes[0].src = sInsertOverImage
			}else if( str_bln_InString(sID, "InsertTestStepAbove") == true ){
				newcell.childNodes[0].src = strInsertTestStepAbove
			}else if( str_bln_InString(sID, "InsertTestStepBelow") == true ){
				newcell.childNodes[0].src = strInsertTestStepBelow
			}else if( str_bln_InString(sID, "DeleteTestStep") == true ){
				newcell.childNodes[0].src = strDeleteTestStep
			}	
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "ScreenID") == true ){
				newcell.childNodes[0].id = "ScreenID" + rowCount; 
			}else if( str_bln_InString(sID, "ScreenParametersID") == true ){
				newcell.childNodes[0].id = "ScreenParametersID" + rowCount; 
			}else if( str_bln_InString(sID, "PFID") == true ){
				newcell.childNodes[0].id = "PFID" + rowCount; 
			}else if( str_bln_InString(sID, "ExpID") == true ){
				newcell.childNodes[0].id = "ExpID" + rowCount; 
			}else if( str_bln_InString(sID, "ActID") == true ){
				newcell.childNodes[0].id = "ActID" + rowCount; 
			}else if( str_bln_InString(sID, "EditedScreen_ID") == true ){
				newcell.childNodes[0].id = "EditedScreen_ID" + rowCount; 
			}else if( str_bln_InString(sID, "Edited_Screen_Parameters_Value_ID") == true ){
				newcell.childNodes[0].id = "Edited_Screen_Parameters_Value_ID" + rowCount; 
			}
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			// DCC UI
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "SelectApplication_id") == true ){
				newcell.childNodes[0].id = "SelectApplication_id" + rowCount; 
			}else if( str_bln_InString(sID, "ApplicationName_id") == true ){
				newcell.childNodes[0].id = "ApplicationName_id" + rowCount; 
			}else if( str_bln_InString(sID, "URL_id") == true ){
				newcell.childNodes[0].id = "URL_id" + rowCount; 
			}else if( str_bln_InString(sID, "Username_id") == true ){
				newcell.childNodes[0].id = "Username_id" + rowCount; 
			}else if( str_bln_InString(sID, "Password_id") == true ){
				newcell.childNodes[0].id = "Password_id" + rowCount;
			}
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			// DCC UI
			//++++++++++++++++++++++++++++++++++++++++++++++++++++
			if( str_bln_InString(sID, "X_id") == true ){
				newcell.childNodes[0].id = "X_id" + rowCount; 
			}else if( str_bln_InString(sID, "ListField") == true ){
				newcell.childNodes[0].id = "ListField" + rowCount; 
			}else if( str_bln_InString(sID, "RequiredField") == true ){
				newcell.childNodes[0].id = "RequiredField" + rowCount; 
			}else if( str_bln_InString(sID, "UserInputField") == true ){
				newcell.childNodes[0].id = "UserInputField" + rowCount; 
			}else if( str_bln_InString(sID, "ComplexMethodField") == true ){
				newcell.childNodes[0].id = "ComplexMethodField" + rowCount; 
			}else if( str_bln_InString( sID, "MethodNames_ID" ) == true ){
				newcell.childNodes[0].id = "MethodNames_ID" + rowCount;
			}
			//=====================================================
			// I D 3 - D a t a - P r o c e s s i n g - R e p o r t
			//=====================================================
			if( str_bln_InString( sID, "P_F_id" ) == true ){
				newcell.childNodes[0].id = "P_F_id" + rowCount;
			}else if( str_bln_InString( sID, "Index_id" ) == true ){
				newcell.childNodes[0].id = "Index_id" + rowCount;
			}else if( str_bln_InString( sID, "Grid_id" ) == true ){
				newcell.childNodes[0].id = "Grid_id" + rowCount;
			}else if( str_bln_InString( sID, "Contract_id" ) == true ){
				newcell.childNodes[0].id = "Contract_id" + rowCount;
			}else if( str_bln_InString( sID, "Product_id" ) == true ){
				newcell.childNodes[0].id = "Product_id" + rowCount;
			}else if( str_bln_InString( sID, "Option_id" ) == true ){
				newcell.childNodes[0].id = "Option_id" + rowCount;
			}
			
			if( str_bln_InString( sID, "Age_id" ) == true ){
				newcell.childNodes[0].id = "Age_id" + rowCount;
			}else if( str_bln_InString( sID, "Duration_id" ) == true ){
				newcell.childNodes[0].id = "Duration_id" + rowCount;
			}else if( str_bln_InString( sID, "Rate_id" ) == true ){
				newcell.childNodes[0].id = "Rate_id" + rowCount;
			}else if( str_bln_InString( sID, "Type_id" ) == true ){
				newcell.childNodes[0].id = "Type_id" + rowCount;
			}else if( str_bln_InString( sID, "ProductCode_id" ) == true ){
				newcell.childNodes[0].id = "ProductCode_id" + rowCount;
			}else if( str_bln_InString( sID, "Table_id" ) == true ){
				newcell.childNodes[0].id = "Table_id" + rowCount;
			}
			//=====================================================
			// I D 3 - D a t a - P r o c e s s i n g - R e p o r t
			//=====================================================
			//=====================================================
			if( str_bln_InString( sID, "ParameterID" ) == true ){
				newcell.childNodes[0].id = "ParameterID" + rowCount;
				js_setBGColor( "ParameterID" + rowCount, "white" );
			}
			else if( str_bln_InString( sID, "Screen_Names_ID" ) == true ){
				newcell.childNodes[0].id = "Screen_Names_ID" + rowCount;
			}
			else if( str_bln_InString(sID, "SizeID") == true ){
				newcell.childNodes[0].id = "SizeID" + rowCount; 
				js_setBGColor( "SizeID" + rowCount, "white" );
			}
			else if( str_bln_InString(sID, "ValueID") == true ){
				newcell.childNodes[0].id = "ValueID" + rowCount; 
				js_setBGColor( "ValueID" + rowCount, "white" );
			}
			//=====================================================
			if( str_bln_InString(sID, "SelectID") == true ){
				newcell.childNodes[0].id = "SelectID" + rowCount; 
			}else if( str_bln_InString(sID, "List_Field_Select_ID") == true ){
				newcell.childNodes[0].id = "List_Field_Select_ID" + rowCount; 
			}else if( str_bln_InString(sID, "TestSelect") == true ){
				newcell.childNodes[0].id = "TestSelect" + rowCount; 
			}else if( str_bln_InString(sID, "TestCheck") == true ){
				newcell.childNodes[0].id = "TestCheck" + rowCount; 
			}else if( str_bln_InString(sID, "TestIndex") == true ){
				newcell.childNodes[0].id = "TestIndex" + rowCount; 
			}else if( str_bln_InString(sID, "TestID") == true ){
				newcell.childNodes[0].id = "TestID" + rowCount; 
			}else if( str_bln_InString(sID, "TestName") == true ){
				newcell.childNodes[0].id = "TestName" + rowCount; 
			}else if( str_bln_InString(sID, "DelActionParam") == true ){
				newcell.childNodes[0].id = "DelActionParam" + rowCount; 
			}else if( str_bln_InString(sID, "InsertActionOverParam") == true ){
				newcell.childNodes[0].id = "InsertActionOverParam" + rowCount; 
			
			}else if( str_bln_InString(sID, "InsertTestStepAbove") == true ){
				newcell.childNodes[0].id = "InsertTestStepAbove" + rowCount; 
			}else if( str_bln_InString(sID, "InsertTestStepBelow") == true ){
				newcell.childNodes[0].id = "InsertTestStepBelow" + rowCount; 
			}else if( str_bln_InString(sID, "DeleteTestStep") == true ){
				newcell.childNodes[0].id = "DeleteTestStep" + rowCount; 
			}
			//M(newcell.childNodes[0].id)
			switch(newcell.childNodes[0].type){                     
				case "button":      newcell.childNodes[0].value = "X";		break;                     
				case "text":     	newcell.childNodes[0].value = "";		break;                     
				case "password":    newcell.childNodes[0].value = "";		break;                     
				case "checkbox":	newcell.childNodes[0].checked = false;	break;                     
				case "select-one":	newcell.childNodes[0].selectedIndex = 0;break;                 
			}    
		} 
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}          
//============================
function js_Index( iRowIndex )
//============================
{
	js_LOG( "js_Index" );
	
	return iRowIndex.rowIndex;
}
//==================================
function js_deleteAllRows( tableID )
//==================================
{             
	try
	{             
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var iRowIndex

		//alert( "Table (" + tableID + ") has " + rowCount + " rows" )
		
		if( rowCount > 2 )
		{
			//alert("rowCount: " + rowCount)
			for( iRowIndex = rowCount-1; iRowIndex >= 2; iRowIndex-- )
			{
				//alert("iRowIndex: " + iRowIndex)
				table.deleteRow(iRowIndex);
			}	
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
} 
//===========================
function js_getID(iRowIndex){
//===========================
	var iIndex = iRowIndex.rowIndex;
	return iIndex;
}
//===============================================================================
function insertTestStepRow( strTableID, intRowIndex, strFieldNames, strPosition )
//===============================================================================
{
	alert( "insertTestStepRow(" + strTableID + "," + intRowIndex + "," + strPosition + ")" )
	try{             
		var intIndex = InsertRowPosition(strTableID, intRowIndex, strPosition);
		js_reID( strTableID, strFieldNames )
		js_setElementInnerText( "EditedScreen_ID" + intIndex, "" )
		js_setElementInnerText( "Edited_Screen_Parameters_Value_ID" + intIndex, "" )
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================
function js_GetSW_WithIndex( sSW, iIndex )
//========================================
{	
	js_LOG( "js_GetSW_WithIndex" );
	
	//alert("js_GetSW_WithIndex: " + sSW + iIndex)

	var sOFFImage = gstrImages + "OFF.png"
	var sONImage = gstrImages + "ON.png"
		
	var sID = sSW + iIndex

	switch ( sSW )
	{
		case "ListField":
			sSW = "<img src='" + sOFFImage + "' id='" + sID + "' onClick='getSwitchState( " + sID + " )'>";
			//alert(sSW)
			break;
	}		
	return sSW
}
//=========================================================================
function js_insertColumnsAndRowsIntoTable( sTableID, iRowCount, iColCount )
//=========================================================================
{
	js_LOG( "js_insertColumnsAndRowsIntoTable" );
	
	var table=document.getElementById(sTableID);
	
	var iRowIndex, iColIndex
	var oRow, oCol
	
	for ( iRowIndex = 0; iRowIndex < iRowCount; iRowIndex++ )
	{
		oRow = table.insertRow(iRowIndex);
		for ( iColIndex = 0; iColIndex < iColCount; iColIndex++ )
		{
			
			oCol = oRow.insertCell(iColIndex);
			var element1 = document.createElement("input");    
			switch(iColIndex)	
			{
				case 0:
					element1.type = "checkbox";   
					break;	
				case 1:
					element1.type = "text";             
					break;	
				case 2:
					element1.type = "button";             
					break;	
				default:
					element1.type = "radio";             
					break;	
			}
			oCol.appendChild(element1); 
			//oCol.innerHTML="New";
			
		}
	}	
}
//=================================
function js_ResetProgressBar( sID )
//=================================
{
	js_LOG( "js_ResetProgressBar" );
	
	var sElement = document.getElementById(sID);
	var iCurrentWidth = "0" + "%"
	sElement.style.width = iCurrentWidth; 
}
//========================================
function js_ElementWidth( sID, sChangeBy )
//========================================
{
	js_LOG( "js_ElementWidth" );
	
	//alert("js_ElementWidth(" + sID + "," + sChangeBy + ")" )
	var sElement = document.getElementById(sID);

	var iCurrentWidth = sElement.style.width
	
	iCurrentWidth = iCurrentWidth.replace( "%", "" );
	//alert("iCurrentWidth: " + iCurrentWidth)
	var iWidth = parseInt(iCurrentWidth) + parseInt(sChangeBy)

	iWidth = parseInt(iWidth/1.1696)
	
	//alert("iWidth: " + iWidth)
	iCurrentWidth = iWidth + "%"
	
	//alert("iCurrentWidth: " + iCurrentWidth)
	sElement.style.width = iCurrentWidth; 
}
//========================================
function js_SetElementWidth( sID, iWidth )
//========================================
{
	js_LOG( "js_SetElementWidth" );

	//alert("js_SetElementWidth(" + sID + "," + iWidth + ")" )
	var sElement = document.getElementById(sID);
	
	sElement.style.width = iWidth
}
//======================
function js_delay( ims )
//======================
{
	setTimeout( "", ims );
}
//=======================
function js_pausecomp(ms) 
//=======================
{
	js_LOG( "js_pausecomp" );

	var sOrgms = ms;
	//alert( "In js_pausecomp: " + ms )
	
	ms += new Date().getTime();
	while (new Date() < ms)
	{
	}
	//LIB_AppendToFile( sLog, "js_pausecomp = " + sOrgms )
} 
//=========================================
function mouseEvent( type, sx, sy, cx, cy )
//=========================================
{
	js_LOG( "mouseEvent" );

	//alert( "mouseEvent" )

	var evt;
	var e = 
	{
		bubbles: true, cancelable: (type != "mousemove"), view: window, detail: 0,
		screenX: sx, screenY: sy, clientX: cx, clientY: cy,
		ctrlKey: false, altKey: false, shiftKey: false, metaKey: false,
		button: 1, relatedTarget: undefined
	};

	if (typeof( document.createEvent ) == "function") 
	{
		//alert("document.createEvent" )
		
		evt = document.createEvent("MouseEvents");
		evt.initMouseEvent(type, e.bubbles, e.cancelable, e.view, e.detail,
		e.screenX, e.screenY, e.clientX, e.clientY,
		e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
		e.button, document.body.parentNode);
	} 
	else if (document.createEventObject) 
	{
		//alert("document.createEventObject" )
		evt = document.createEventObject();
		for (prop in e) 
		{
			evt[prop] = e[prop];
			//alert("evt[prop]: " + evt[prop] )
		}
		//alert("evt.button: " + evt.button )
		evt.button = { 0:1, 1:4, 2:2 }[evt.button] || evt.button;
	}
	//alert("evt: " + evt )
	return evt;
}
//===============================
function dispatchEvent( el, evt ) 
//===============================
{
	js_LOG( "dispatchEvent" );

	//alert( "dispatchEvent" )

	if (el.dispatchEvent) 
	{
		//alert( "el.dispatchEvent" )
		el.dispatchEvent(evt);
	} 
	else if (el.fireEvent) 
	{
		//alert( "el.fireEvent" )
		el.fireEvent("on" + type, evt);
	}
	return evt;
}
//===========================
function js_MouseClick( sID )
//===========================
{
	js_LOG( "js_MouseClick" );

	//alert( "js_MouseClick " + sID )
	
	window.onclick = function()
	{
		//alert("window clicked");
	}

	//var test = document.getElementById(sID);
	
	//test.onclick = function()
	//{
	//	alert("test clicked");
	//}
	
	var evt = mouseEvent("mousemove", 1, 50, 1, 50);
	
	dispatchEvent(window, evt);
}
//=============================
function js_sortItems( sItems )
//=============================
{
	js_LOG( "js_sortItems" );

	var sItemsArr = new Array(); 
	sItemsArr = sItems.split(",");
	
	sItems = ""
	
	sItemsArr = sItemsArr.sort();
	
	var iArrIndex
	
	for( iArrIndex = 0; iArrIndex < sItemsArr.length; iArrIndex++ )
	{ 
		sItems = sItems + sItemsArr[iArrIndex] + ",";
	}
	
	sItems = LIB_RemoveLastChar(sItems);
	return sItems;
}
//===============================================
function js_SetSelectText( sID, sOptions, sText )
//===============================================
{
	js_LOG( "js_SetSelectText" );

	//alert( "js_SetSelectText " + sID + " " + sOptions + " " + sText )
	
	var sOptionsArr = new Array(); 
	sOptionsArr = sOptions.split(",");
	
	sOptionsArr = sOptionsArr.sort();
	
	var _Select = document.getElementById( sID );
	_Select.value = js_GetValueIndexFromArr( sOptionsArr, sText );	
}
//=============================================
function js_ClearOnce( e, sID, obj, sTF_Value )
//=============================================
{
	alert(e.keyCode)
	var InitialKeyValue = utl_KeyValue(e.keyCode);
	alert(InitialKeyValue)
	var sCurrentValue;
	
	if( str_LT( js_getElementValueByID( sID ) ) > 0 ) 
	{
		if( js_getElementValueByID( sID ) == sTF_Value )
		{
			js_setElementValue( sID, "" );
			var newO = document.createElement('input');
			
			if( str_UT(sTF_Value) == "PASSWORD" ) 
			{
				newO.setAttribute('type','password');
			}	
			newO.setAttribute('id',obj.getAttribute('id'));

			//newO.setAttribute('name',obj.getAttribute('name'));
			newO.setAttribute('size',obj.getAttribute('size'));

			obj.parentNode.replaceChild(newO,obj);
			
			js_setElementValue( sID, InitialKeyValue )
			
			sCurrentValue = js_getElementValueByID( sID );

			alert(sCurrentValue)
			
			//alert( "sCurrentValue: " + sCurrentValue )
			js_setFocus( sID );
			js_setFocus( sID );
			js_setFocus( sID );
			js_setElementValue( sID, sCurrentValue );
		}
	}	
}
//=======================================
function js_PopulateSelect( sID, sItems )
//=======================================
{
	js_LOG( "js_PopulateSelect" );
	
	//alert ( "js_PopulateSelect ID("+ sID + ") Items: (" + sItems + ")" )

	document.getElementById(sID).options.length = 0;
	
	var iArrIndex;
	var _Select = document.getElementById(sID);
	var sItemsArr = new Array();
	
	sItemsArr = sItems.split(",");

	for( iArrIndex = 0; iArrIndex < sItemsArr.length; iArrIndex++ )
	{ 
		_Select.options[_Select.options.length] = new Option(sItemsArr[iArrIndex], iArrIndex);
	}
}
//==========================
function js_bInvert( bBool ) 
//========================== 
{
	js_LOG( "js_bInvert" );

	//alert ("Before js_bInvert Bool("+bBool+")")
	
	if(bBool == true)
	{
		bBool = false
	}	
	else if(bBool == false)
	{
		bBool = true
	}	

	//alert ("After js_bInvert Bool("+bBool+")")

	return	bBool
}
//=========================
function js_getColor( sID ) 
//=========================
{
	js_LOG( "js_getColor" );

	var sElement = document.getElementById(sID);

	return sElement.style.color; 
}
//===========================
function js_getBGColor( sID ) 
//===========================
{
	js_LOG( "js_getBGColor" );

	var sElement = document.getElementById(sID);

	return sElement.style.backgroundColor;
}
//=================================
function js_setColor( sID, sColor ) 
//=================================
{
	js_LOG( "js_setColor" );

	//alert( "js_setColor ID ("+sID+"), Color("+sColor+")" ) 
	
	var sElement = document.getElementById(sID);
	sElement.style.color = sColor;
}
//========================================
function js_changeBGColor( sID, sBGColor ) 
//========================================
{
	//alert( "js_changeBGColor ID("+sID+"), BG Color("+sBGColor+")" ) 
	
	var sElement = document.getElementById(sID);
	sElement.style.backgroundColor = sBGColor;
}
//=====================================
function js_setBGColor( sID, sBGColor ) 
//=====================================
{
	//alert( "js_setBGColor ID("+sID+"), BG Color("+sBGColor+")" ) 
	
	try{
		var sElement = document.getElementById(sID);
		sElement.style.backgroundColor = sBGColor;
	}catch(err){js_displayErr(err)}
}
//==============================
function js_handleBrowseClick(){
//==============================

	//alert("js_handleBrowseClick")

	try{
		var fileinput = document.getElementById("browse");
		fileinput.click();
	}catch(err){js_displayErr(err)}
}
//=========================
function js_handlechange(){
//=========================
	
	//alert("js_handlechange")
	
	try{
		var fileinput = document.getElementById("browse");
		var textinput = document.getElementById("filename");
		gstrSelectedFile = fileinput.value;
	}catch(err){js_displayErr(err)}
}
//===============================================
function js_updateAllSelectableParametersValues()
//===============================================
{
	try{
		var sIBM_iSeriesTextArea = document.getElementById('ActionParams_ID');
		var sParamName, sParamNameID;
		var sParamValue, sParamValueID;
		var sIBM_iSeriesKeywordString = js_GetDropDownSelectedText("ScreenNames_ID") + "|";
		var bStatus;
		var array = document.getElementsByName('ActionParameter');
		var iRowIDIndex
		for(var i = 0; i < array.length; i++){
			iRowIDIndex = i + 1
			if( array[i].type == 'checkbox' && array[i].style.display == "" ){
				bStatus = array[i].checked
				if( bStatus == true ){
					sParamName = js_getElementInnerText( "ParameterID"+ iRowIDIndex );
					sParamValue = js_getElementValue( "ValueID", iRowIDIndex );
					//alert("ParamName: " + sParamName )
					//alert("ParamValue: " + sParamValue )
					js_setElementValueBGColor( "ValueID", iRowIDIndex, "black","#FFF868" );
					sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString + sParamName + "(" + sParamValue + ")~";
				}
				else if( bStatus == false )
				{
					js_setElementValueBGColor( "ValueID", iRowIDIndex, "Blue","white" );
				}
			}
		}
		var sLastChar = sIBM_iSeriesKeywordString.substring(sIBM_iSeriesKeywordString.length-1, sIBM_iSeriesKeywordString.length);
		//alert( sLastChar );
		if( sLastChar == "~" )
		{
			sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString.substring( 0, sIBM_iSeriesKeywordString.length-1 );
		}	
		sIBM_iSeriesTextArea.value = sIBM_iSeriesKeywordString;
		sgIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//==========================================================
function js_updateIBM_iSeriesKeywordStringNew( strSelectID )
//==========================================================
{
	try{
		strSelectID = strSelectID.replace( "SelectID", "" )
		var strParamName = js_getElementInnerText( 'ParameterID' + strSelectID )
		
		if( strParamName == "Select worksheet" ){
			var strScreenName = js_GetDropDownSelectedText("ASFNames_ID")
			var arrParams = new Array();
			arrParams = strScreenName.split("-");
			var strSheetname = arrParams[1];
			strSheetname = str_LCT(strSheetname);
			js_handleBrowseClick()
			js_setElementValueBGColor( "ValueID", strSelectID, "black", "white" );
			var strNewValue = gstrSelectedFile + "," + strSheetname;
			js_setElementValue( "ValueID"+strSelectID, strNewValue );
			utl_Update_ScreenDefaultValue( strScreenName, strParamName, strNewValue );
		}else if( strParamName == "Direct Execution of SQL on ID3" ){
			var strScreenName = js_GetDropDownSelectedText("ASFNames_ID")
			js_handleBrowseClick()
			js_setElementValueBGColor( "ValueID", strSelectID, "black", "white" );
			js_setElementValue( "ValueID"+strSelectID, gstrSelectedFile );
			utl_Update_ScreenDefaultValue( strScreenName, strParamName, gstrSelectedFile );			
		}else{	
			var sIBM_iSeriesTextArea = document.getElementById('ActionParams_ID');
			var sParamName, sParamNameID;
			var sParamValue, sParamValueID;
			var sIBM_iSeriesKeywordString = js_GetDropDownSelectedText("ScreenNames_ID") + "|";
			var bStatus;
			var array = document.getElementsByName('ActionParameter');
			var iRowIDIndex
			for(var i = 0; i < array.length; i++){
				iRowIDIndex = i + 1
				if( array[i].type == 'checkbox' && array[i].style.display == "" ){
					bStatus = array[i].checked
					if( bStatus == true ){
						sParamName = js_getElementInnerText( "ParameterID"+ iRowIDIndex );
						sParamValue = js_getElementValue( "ValueID", iRowIDIndex );
						//alert("ParamName: " + sParamName )
						//alert("ParamValue: " + sParamValue )
						js_setElementValueBGColor( "ValueID", iRowIDIndex, "black","#FFF868" );
						sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString + sParamName + "(" + sParamValue + ")~";
					}
					else if( bStatus == false )
					{
						js_setElementValueBGColor( "ValueID", iRowIDIndex, "Blue","white" );
					}
				}
			}
			var sLastChar = sIBM_iSeriesKeywordString.substring(sIBM_iSeriesKeywordString.length-1, sIBM_iSeriesKeywordString.length);
			//alert( sLastChar );
			if( sLastChar == "~" )
			{
				sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString.substring( 0, sIBM_iSeriesKeywordString.length-1 );
			}	
			sIBM_iSeriesTextArea.value = sIBM_iSeriesKeywordString;
			sgIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString;
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================================
function js_updateIBM_iSeriesKeywordString( sIBM_iSeries_KW_Name )
//========================================================
{
	js_LOG( "js_updateIBM_iSeriesKeywordString" );

	//alert( "js_updateIBM_iSeriesKeywordString IBM_iSeries Action ("+sIBM_iSeries_KW_Name+")" ) 

	var sIBM_iSeriesTextArea = document.getElementById('ActionParams_ID');
	var sParamName, sParamNameID;
	var sParamValue, sParamValueID;
	var sIBM_iSeriesKeywordString = sIBM_iSeries_KW_Name + "|";
	var bStatus;
	var array = document.getElementsByName('Parameter');
	
	for(var i = 0; i < array.length; i++) 
	{
		if( array[i].type == 'checkbox' )
		{
			bStatus = array[i].checked
			if( bStatus == true )
			{
				sParamName = js_getElementValue("ParamName_id", i);
				sParamValue = js_getElementValue("ParamValue_id", i);
				js_setElementValueBGColor( "ParamValue_id", i, "black", "#FFF868" );
				sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString + sParamName + "(" + sParamValue + ")~";
			}
			else if( bStatus == false )
			{
				js_setElementValueBGColor( "ParamValue_id", i, "Gray","white" );
			}
		}
	}
	var sLastChar = sIBM_iSeriesKeywordString.substring(sIBM_iSeriesKeywordString.length-1, sIBM_iSeriesKeywordString.length);
	//alert( sLastChar );
	if( sLastChar == "~" )
	{
		sIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString.substring( 0, sIBM_iSeriesKeywordString.length-1 );
	}	
	sIBM_iSeriesTextArea.value = sIBM_iSeriesKeywordString;
	sgIBM_iSeriesKeywordString = sIBM_iSeriesKeywordString;
}
//===========================
function js_Automated_Tests()
//===========================
{
	js_LOG( "js_Automated_Tests" );

	//alert( "js_Automated_Tests" );
	
	js_ResetProgressBar( "progressParID" );
	if( js_ReadLineByIndex( sLocal + "PW.PW", 3 ) == 5 ) 	
	{ 	
		LIB_Report();
	}
	else 	
	{ 	
		var sEnv = SetDBLocation();
		js_ElementWidth( "progressParID", 31 )
		
		var bContinue = LIB_SetDBEnv(sEnv)
		if( bContinue == true )
		{	
			js_ElementWidth( "progressParID", 31 )
			var bCheckCredentials = PASS();
			js_ElementWidth( "progressParID", 31 )

			if ( bCheckCredentials == true )
			{
				var sIBM_iSeriesMac_Path = LIB_GetKey( sLocal + "PW.PW", "IBM_iSeries Mac Path" )
				var bPathfound = LIB_FolderExists( sIBM_iSeriesMac_Path )
				if( bPathfound == true )
				{
					if( str_LT(sIBM_iSeriesMac_Path) > 0 )
					{
						
						LIB_CopyFiles( "IBM_iSeries.mac", LIB_GetKey( sLocal + "User.ini", "SRC Files" ), sIBM_iSeriesMac_Path )
					}
				}	
				else if( bPathfound == false )
				{
					var sCurrentPath = sIBM_iSeriesMac_Path
					var sCurrentSystemIBM_iSeriesMacPath
					while( bPathfound == false )
					{	
						sCurrentSystemIBM_iSeriesMacPath = LIB_ReportMessage( "o IBM_iSeries Mac Path {" + sCurrentPath + "} does not exist on the current system.~o You will be able to develop automated test cases, but you will not be able to execute them.~o Would you like to select the Current System IBM_iSeries path to be able to execute test cases?" )
						sCurrentPath = sCurrentSystemIBM_iSeriesMacPath
						bPathfound = LIB_FolderExists( sCurrentSystemIBM_iSeriesMacPath )
						if( bPathfound == true )
						{
							//LIB_ReportMessage( "New IBM_iSeries mac Path is {" + sCurrentSystemIBM_iSeriesMacPath + "}" )
							LIB_CopyFiles( "IBM_iSeries.mac", LIB_GetKey( sLocal + "User.ini", "SRC Files" ), sCurrentSystemIBM_iSeriesMacPath )
						}	
					}	
				}	
					
				LIB_UpdateParams( "Category-ALL,Sub Category-,Test ID-,Reload-" );
				js_ElementWidth( "progressParID", 31 )
				var sReady = LIB_GetKeyFromPersonal( "Test Ready" )
				if( str_LT(sReady) == 0 )
				{
					sReady = "ALL"
				}
				js_Write_Automated_Tests( "Automated Tests.html", "ALL", "ALL", "", sReady );
				js_ElementWidth( "progressParID", 31 )
				LIB_Launch_App( LIB_GetKey( sLocal + "User.ini", "Network HTML") + "Automated Tests.html" );
			}
			else if ( bCheckCredentials == false )
			{
				alert("System failed to validate your Credentials! You must've entered Invalid Password");
				location.reload(true);
			}
			else
			{
				alert( "bCheckCredentials = " + bCheckCredentials );
			}
		}	
	}
}
//=========================== 
function RefreshCurrentPage() 
//=========================== 
{
	js_LOG( "RefreshCurrentPage" );

	//alert( "RefreshCurrentPage" )
	location.reload(true); 
}
//==================== 
function CloseWindow()
//==================== 
{
	js_LOG( "CloseWindow" );

	window.open('', '_self', ''); 
	window.close(); 
}
//============================
function getSwitchState( sID )
//============================
{
	js_LOG( "getSwitchState" );

	//alert( "getSwitchState: " + sID )
	js_ChangeSwitch( sID );
}
//=================================================
function js_PopulateDropDownPlusOther( sID, sData )
//=================================================
{
	//alert( "js_PopulateAllSelectWithData: sID(" + sID + ") Data(" + sData + ")" )
	
	var ID_Select
	var sDataArr = new Array();
	sDataArr = sData.split(",");
	var iArrLength = sDataArr.length;
	var strValue;
	
	document.getElementById( sID ).options.length = 0;

	ID_Select = document.getElementById( sID );
		
	if( iArrLength > 0 )
	{
		sDataArr = sDataArr.sort();
		for( iArrIndex = 0; iArrIndex < sDataArr.length; iArrIndex++ ){
			strValue = sDataArr[iArrIndex];
			strValue = utl_ReplaceStringsInString( strValue, "<C>", "," );
			sDataArr[iArrIndex] = strValue
		}
		
		if( sID == "UI_Users" || sID == "ReadyFlag" || sID == "TS_Category" ) 
		{
			ID_Select.options[ID_Select.options.length] = new Option("ALL", 0);
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex+1);
			}
		}
		else if( sID == "TS_Subcategory" ) 
		{
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex);
			}
		}
		else
		{
			ID_Select.options[ID_Select.options.length] = new Option( "<None Selected>", 0);
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex+1);
			}
			ID_Select.options[ID_Select.options.length] = new Option("Other", iArrIndex+1);
		}
	}
	else if( iArrLength == 0 )
	{
		ID_Select.options[ID_Select.options.length] = new Option(sDataArr[0], 1);
	}
	
	//js_DisplayArr(sDataArr)
	
	return sDataArr;
}

//=================================================
function js_PopulateAllSelectWithData( sID, sData )
//=================================================
{
	//alert( "js_PopulateAllSelectWithData: sID(" + sID + ") Data(" + sData + ")" )
	
	var ID_Select
	var sDataArr = new Array();
	sDataArr = sData.split(",");
	var iArrLength = sDataArr.length;
	var strValue;
	
	document.getElementById( sID ).options.length = 0;

	ID_Select = document.getElementById( sID );
		
	if( iArrLength > 0 )
	{
		sDataArr = sDataArr.sort();
		for( iArrIndex = 0; iArrIndex < sDataArr.length; iArrIndex++ ){
			strValue = sDataArr[iArrIndex];
			strValue = utl_ReplaceStringsInString( strValue, "<C>", "," );
			sDataArr[iArrIndex] = strValue
		}
		
		if( sID == "UI_Users" || sID == "ReadyFlag" || sID == "TS_Category" ) 
		{
			ID_Select.options[ID_Select.options.length] = new Option("ALL", 0);
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex+1);
			}
		}
		else if( sID == "TS_Subcategory" ) 
		{
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex);
			}
		}
		else
		{
			ID_Select.options[ID_Select.options.length] = new Option( "<None Selected>", 0);
			for( iArrIndex = 0; iArrIndex < iArrLength; iArrIndex++ )
			{
				ID_Select.options[ID_Select.options.length] = new Option(sDataArr[iArrIndex], iArrIndex+1);
			}
		}
	}
	else if( iArrLength == 0 )
	{
		ID_Select.options[ID_Select.options.length] = new Option(sDataArr[0], 1);
	}
	
	//js_DisplayArr(sDataArr)
	
	return sDataArr;
}
//==================================================================
function js_PopulateDropDown( strDropDownID, strOptions, blnSorted ) 
//==================================================================
{
	//alert( "js_PopulateDropDown > Drop Down ID (" + strDropDownID + ") Data = (" + strOptions + ")" )
	
	try{	
		var objDropDown = document.getElementById( strDropDownID );
		objDropDown.options.length = 0;
		if( str_LT(strOptions) > 0 ){
			var arrOptions = new Array();
			arrOptions = strOptions.split(",");
			var intArraySize = arrOptions.length;
			var strOption
			if( intArraySize > 0 ){
				if( blnSorted == true )arrOptions = arrOptions.sort();
				for( var intArrayIndex = 0; intArrayIndex < intArraySize; intArrayIndex++ ){
					strOption = arrOptions[intArrayIndex]
					strOption = func_str_str_Replace( strOption, "<C>", "," );
					objDropDown.options[objDropDown.options.length] = new Option(strOption, intArrayIndex+1);
				}
			}else if( intArraySize == 0 ){
				objDropDown.options[objDropDown.options.length] = new Option(arrOptions[0], 1);
			}
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//======================================
function js_getSwitchStatus( sSwitchID )
//======================================
{
	js_LOG( "js_getSwitchStatus" );

	var bSwitchState;
	var sSwitch = document.getElementById(sSwitchID);
	var sCurrentSwitchSrc = sSwitch.src;
	var src = sSwitch.getAttribute('src'); 

	if( LIB_CheckForString(sCurrentSwitchSrc, "OFF.png") == true )
	{
		bSwitchState = false;
	}
	else if( LIB_CheckForString(sCurrentSwitchSrc, "ON.png") == true )
	{
		bSwitchState = true;
	}
	return bSwitchState;
}
//===================================
function js_ChangeSwitch( sSwitchID )
//===================================
{
	try{
		var sSwitchOFFImage = gstrImages + "OFF.png";
		var sSwitchONImage = gstrImages + "ON.png";
		
		var sSwitchONImage = gstrImages + "ON.png";
		
		var sSwitch = document.getElementById(sSwitchID);
		
		var sCurrentSwitchSrc = sSwitch.src;
		var src = sSwitch.getAttribute('src'); 
		
		if( utl_CheckForString(sCurrentSwitchSrc, "OFF.png") == true )
		{
			sSwitch.src = sSwitchONImage;
		}
		else if( utl_CheckForString(sCurrentSwitchSrc, "ON.png") == true )
		{
			sSwitch.src = sSwitchOFFImage;
		}
	}catch(err){
		txt="Error description: " + err.message + "\n\n";
		txt+="Click OK to continue.\n\n";
		alert(txt);
	}
}
//========================================
function js_ChangeReadySwitch( sSwitchID )
//========================================
{
	js_LOG( "js_ChangeReadySwitch" );

	//alert( "js_ChangeReadySwitch "  + sSwitchID )
	
	var sSwitchOFFImage = js_ReadLineByIndex( "C:/IBM_iSeries/QAPath.ini", 0) + "Images/TestNotReady.png";
	var sSwitchONImage = js_ReadLineByIndex( "C:/IBM_iSeries/QAPath.ini", 0) + "Images/TestReady.png";
	var sSwitch = document.getElementById(sSwitchID);
	var sCurrentSwitchSrc = sSwitch.src;
	var src = sSwitch.getAttribute('src'); 
	

	if( LIB_CheckForString(sCurrentSwitchSrc, "TestNotReady.png") == true )
	{
		sSwitch.src = sSwitchONImage;
	}
	else if( LIB_CheckForString(sCurrentSwitchSrc, "TestReady.png") == true )
	{
		sSwitch.src = sSwitchOFFImage;
	}
}
//========================================
function js_getSelectedIndex( sRadioName )
//========================================
{
	js_LOG( "js_getSelectedIndex" );

	var sTestIDs = "";
	var iSelectedIndex = -1
	var array = document.getElementsByName(sRadioName);
	for( var i = 0; i < array.length; i++ ) 
	{
		if( array[i].type == 'radio')
		{
			if( array[i].checked == true )
			{
				iSelectedIndex = i;
				break;
			} 
		}
	}
	return iSelectedIndex;
}
//==================================
function js_CollectTestID( sTestID )
//==================================
{
	js_LOG( "js_CollectTestID" );
	
	var sFile = sLocal + "Running Tests.log";
	
	var sTestName = js_getElementInnerText("lbl_" + sTestID);
	
	LIB_AppendToFile( sFile, sTestID + "~" + sTestName );
}
//===================================
function js_Collect_TestID( sTestID )
//===================================
{
	js_LOG( "js_Collect_TestID" );
	
	var sFile = sLocal + "Running Tests.log";
	
	LIB_AppendToFile( sFile, sTestID + "~" );
}
//==========================
function js_CollectTestIDs()
//==========================
{
	js_LOG( "js_CollectTestIDs" );

	var sTestNames = "";
	var sTestIDs = "";
	var array = document.getElementsByName('TestCase_Checkbox');
	var TestCase_NameArr = document.getElementsByName('TestCase_Name');
	
	var sFile = sLocal + "Running Tests.log"
	
	LIB_WriteToFile( sFile, "" );
	LIB_GetAppendFileHandle( sFile );

	//LIB_AppendTextToFile( "" );
	for( var i = 0; i < array.length; i++ ) 
	{
		if( array[i].type == 'checkbox')
		{
			if( array[i].checked == true )
			{
				sTestIDs = sTestIDs + array[i].id + ",";
				sTestNames = sTestNames + TestCase_NameArr[i].value + "~";
				LIB_AppendTextToFile( array[i].id + "~" + TestCase_NameArr[i].value );
			} 
		}
	}
	LIB_CloseAppendFile();
	
	sTestIDs = LIB_RemoveLastChar(sTestIDs)
	//alert( "sTestNames: " + sTestNames )

	return sTestIDs;
}
//====================================
function js_CollectTestIDsForTestSet()
//====================================
{
	js_LOG( "js_CollectTestIDsForTestSet" );
	
	var sFile = sLocal + "Running Tests.log" 
	
	LIB_WriteToFile( sFile, "" );
	LIB_GetAppendFileHandle( sFile );

	var iTestIDIndex;
	var sTestID, sTestName; 
	var sTestIDs = "";
	var array = document.getElementsByName('TestCase_Checkbox');
	
	for( var i = 0; i < array.length; i++ )
	{
		if( array[i].type == 'checkbox')
		{
			if( array[i].checked == true )
			{
				iTestIDIndex = i + 1;
				sTestID = "TestID" + iTestIDIndex;
				sTestName = "TestName" + iTestIDIndex;
				sTestID = js_getElementValueByID(sTestID);
				sTestName = js_getElementValueByID(sTestName);
				
				LIB_AppendTextToFile( sTestID + "~" + sTestName );
				
				sTestIDs = sTestIDs + sTestID + ",";
			} 
		}
	}
	LIB_CloseAppendFile();
	
	sTestIDs = LIB_RemoveLastChar(sTestIDs);
	
	return sTestIDs;
}
//=============================
function js_Select_All( bflag )
//=============================
{
	js_LOG( "js_Select_All" );

	var array = document.getElementsByName('TestCase_Checkbox');
	for( var i = 0; i < array.length; i++ )
	{
		if(array[i].type == 'checkbox')
		{
			array[i].checked = bflag;
		}
	}
}
//================================================
function js_replaceAll( sID, sString, sFrom, sTo )
//================================================
{
	js_LOG( "js_replaceAll" );

	var iIndexOf = sString.indexOf(sFrom)
	var sAfterString = sString.replace( sFrom, sTo );
	var iIndexOf = sAfterString.indexOf(sFrom)
	js_setElementValue( sID, sAfterString );
	
	if( iIndexOf >= 0 )
	{
		js_replaceAll( sID, sAfterString, sFrom, sTo )
	}
	sAfterString = js_getElementValueByID( sID );
	
	return sAfterString;
}
//==========================================
function js_getCheckboxStatus( sCheckBoxID )
//==========================================
{
	js_LOG( "js_getCheckboxStatus" );

	//alert( "js_getCheckboxStatus CheckBox ID(" + sCheckBoxID + ")" )

	return document.getElementById(sCheckBoxID).checked;
}
//=========================
function js_setFocus( sID )
//=========================
{
	js_LOG( "js_setFocus" );

	//alert("js_setFocus: ID ("+sID+")" ) 
	document.getElementById( sID ).focus(); 
}
//========================================
function js_setElementValue( sID, sValue )
//========================================
{
	js_LOG( "js_setElementValue" );

	//alert( "js_setElementValue with ID=  " + sID + " to value " + sValue )

	document.getElementById(sID).value = sValue;
}
//==================================
function js_setElementChecked( sID )
//==================================
{
	js_LOG( "js_setElementChecked" );
	
	//alert( "js_setElementChecked: " + sID )

	document.getElementById(sID).checked = true;
}
//==================================
function js_setElementunChecked( sID )
//==================================
{
	js_LOG( "js_setElementChecked" );

	document.getElementById(sID).checked = false;
}
//==========================================
function js_setLabelValue( sLabelID, sValue )
//==========================================
{
	js_LOG( "js_setLabelValue" );

	document.getElementById(sLabelID).innerHTML = sValue;
}
//=============================
function js_getTestSetTestIDs()
//=============================
{
	js_LOG( "js_getTestSetTestIDs" );

	var sTestIDs = "";
	var sTestID, itdIndex;
	var array = new Array();
	var array = document.getElementsByName( 'TestIDs' );
	//alert(array.length)
	for(var i = 0; i < array.length; i++)
	{
		itdIndex = i + 1;
		sTestID = js_getElementInnerText( "TestID" + itdIndex );
		sTestIDs = sTestIDs + sTestID + "^";
	}
	sTestIDs = sTestIDs.substring( 0, sTestIDs.length-1 );
    //alert ( sTestIDs );
	return sTestIDs;
}
//================================
function js_getCheckedRadio( sID )
//================================
{
	js_LOG( "js_getCheckedRadio" );

	var sTests = "";
	var array = document.getElementsByName( sID );
	
	for( var i = 0; i < array.length; i++ ){
		if( array[i].type == 'Radion' )
		{ 
			if( array[i].checked == true )
			{
				break;
			}
		}
	}
	return i;
}
//==================================
function js_Collect_Selected_Tests()
//==================================
{
	js_LOG( "js_Collect_Selected_Tests" );

	var sTests = "";
	var array = document.getElementsByName('TestCase_Checkbox');
	var TestIDButtonArray = document.getElementsByName('TestIDButton');
	
	for( var i = 0; i < array.length; i++ )
	{
		if( array[i].type == 'checkbox' )
		{ 
			if( array[i].checked == true )
			{
				sTests = sTests + TestIDButtonArray[i].value + ",";
			}
		}
	}
	return sTests;
}
//====================
function newPopup(url) 
//====================
{
	alert( url );

	popupWindow = window.open(url,'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}
//===========================================================
function js_PopupHTMLPage( strHTMLPage, intHeight, intWidth )
//===========================================================
{
	popupWindow = window.open(strHTMLPage,'popUpWindow',"height=" + intHeight + ",width=" + intWidth + ",left=0,top=0,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no")
}
//=====================================
function js_popup( mylink, windowname )
//=====================================
{
	js_LOG( "js_popup" );

	if (! window.focus)
		return true;
	var href;
	if (typeof(mylink) == 'string')
	{
		href=mylink;
	}	
	else
	{
		href=mylink.href;
	}  
	window.open(href, windowname, 'height=800,width=1000,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	return false;
}
//===========================================================
function js_popup_Size( mylink, windowname, iHeight, iWidth )
//===========================================================
{
    alert( "js_popup ("+mylink+")" );

	if (! window.focus)
		return true;
	var href;
	if (typeof(mylink) == 'string')
	{
		href=mylink;
	}	
	else
	{
		href=mylink.href;
	}  
	window.open(href, windowname, 'height='+ iHeight +',width='+iWidth+',left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes');
	return false;
}
//============================================================================
function js_popup_Size_Pos( mylink, windowname, iHeight, iWidth, iLeft, iTop )
//============================================================================
{
	js_LOG( "js_popup_Size" );

	if (! window.focus)
		return true;
	var href;
	if (typeof(mylink) == 'string')
	{
		href=mylink;
	}	
	else
	{
		href=mylink.href;
	}  
	window.open(href, windowname, 'height='+ iHeight +',width='+iWidth+',left='+ iLeft + ',top=' + iTop +',resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes');
	return false;
}
//======================================== 
function js_GetCheckedIndexByName( sName )
//========================================
{
	js_LOG( "js_GetCheckedIndexByName" );

	var array = document.getElementsByName(sName);
	var sType;

	for(var i = 0; i < array.length; i++)
	{
		sType = array[i].type 
		if( sType == "radio" )
		{
			if( array[i].checked == true )
			{
				return i+1;
			}
		}
	}
	return -1;
}
//===================================================
function js_getCurrentPageTestInstructions( sTestID )
//===================================================
{
	js_LOG( "js_getCurrentPageTestInstructions" );
	
	var sData = "";
	var sOmit_Status, sWorksheet_Keyword, sWorksheetName_KeywordName, sKeyword_Parameters, sSub_TestID, itdIndex;
	var array = document.getElementsByName( 'TS_Instruction' );
	var sTableContentArr = new Array();
	for(var i = 0; i < array.length; i++)
	{
		itdIndex = i + 1;
		sOmit_Status = js_getCheckboxStatus("Omit_Test_Instruction_" + itdIndex )
		sWorksheet_Keyword = js_getElementInnerText( "Worksheet_Keyword" + itdIndex );
		sWorksheetName_KeywordName = js_getElementInnerText( "WorksheetName_KeywordName" + itdIndex );
		sKeyword_Parameters = js_getElementInnerText( "Keyword_Parameters" + itdIndex );
		if(  sWorksheet_Keyword == "Keyword" )
		{
			sSub_TestID = "";
		}	
		else if(  sWorksheet_Keyword == "Worksheet")
		{
			sSub_TestID = js_getElementInnerText( "SubTestID" + itdIndex );
		}	
		
		sData = sData + sOmit_Status + "!" + sWorksheet_Keyword + "!" + sWorksheetName_KeywordName + "!" + sKeyword_Parameters + "!" + sSub_TestID + "@";
	}
	sData = str_RemoveLastChar(sData);
	
	return sData;
}
//============================================
function js_getCurrentPageTestSteps( sTestID )
//============================================
{
	js_LOG( "js_getCurrentPageTestSteps" );
	
	var sData = "";
	var sOmit, sWorksheet_Keyword, sWorksheetName_KeywordName, sKeyword_Parameters, sSub_TestID, itdIndex;
	var array = document.getElementsByName( 'TS_Instruction' );
	var sTableContentArr = new Array();
	
	//alert("js_getCurrentPageTestSteps: Array Length = " + array.length)
	
	for(var i = 0; i < array.length; i++)
	{
		itdIndex = i + 1;
		sOmit = js_getElementInnerText( "Omit" + itdIndex );
		//alert( "Omit = " + sOmit )

		sWorksheet_Keyword = js_getElementInnerText( "Worksheet_Keyword" + itdIndex );
		//alert( "Worksheet_Keyword = " + sWorksheet_Keyword )
		
		if( sWorksheet_Keyword == "Keyword" )
		{
			sWorksheetName_KeywordName = js_getElementInnerText( "Keyword" + itdIndex );
			//alert( "WorksheetName_KeywordName = " + sWorksheetName_KeywordName )
			
			sKeyword_Parameters = js_getElementInnerText( "Keyword_Parameters" + itdIndex );
			//alert( "Keyword_Parameters = " + sKeyword_Parameters )
			
			sSub_TestID = ""
		}
		else if( sWorksheet_Keyword == "Worksheet" )
		{
			sWorksheetName_KeywordName = js_getElementInnerText( "Workbook" + itdIndex );
			//alert( "WorksheetName_KeywordName = " + sWorksheetName_KeywordName )

			sKeyword_Parameters = js_getElementInnerText( "Worksheet" + itdIndex );
			//alert( "Keyword_Parameters = " + sKeyword_Parameters )

			sSub_TestID = js_getElementInnerText( "SubTestID" + itdIndex );
			//alert( "Sub_TestID = " + sSub_TestID )
		}
		sData = sData + sOmit + "!" + sWorksheet_Keyword + "!" + sWorksheetName_KeywordName + "!" + sKeyword_Parameters + "!" + sSub_TestID + "@";
		//alert ( sData );
	}
	
	sData = str_RemoveLastChar(sData);
	
	return sData;
}
//=================================
function js_roll_over(sID, img_src)
//=================================
{
	js_LOG( "js_roll_over" );
	
    document.getElementById(sID).src = img_src;
}
//====================================
function js_getElementInnerText( sID )
//====================================
{
	js_LOG( "js_getElementInnerText" );

	var sInnerText = document.getElementById(sID).innerText;

	return sInnerText;
}
//==========================================
function js_getElementHeight( strElementID )
//==========================================
{
	var intHeight = -1;
	
	try{	
		var element = document.getElementById(strElementID);
		intHeight = element.offsetHeight
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}

	return intHeight;
}
//=========================================
function js_getElementWidth( strElementID )
//=========================================
{
	var intWidth = -1;

	try{	
		var element = document.getElementById(strElementID);
		intWidth = element.offsetWidth
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
	
	return intWidth;
}
//=======================================
function js_zoonInElement( strElementID )
//=======================================
{
	try{	
		var element = document.getElementById(strElementID);
		intHeight = element.offsetHeight
		intWidth = element.offsetWidth
		intHeight = intHeight*2;
		intWidth = intWidth*2
		element.style.height = intHeight + "px";
		element.style.width = intWidth + "px";
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//========================================
function js_zoonOutElement( strElementID )
//========================================
{
	try{	
		var element = document.getElementById(strElementID);
		intHeight = element.offsetHeight
		intWidth = element.offsetWidth
		intHeight = intHeight/2;
		intWidth = intWidth/2
		element.style.height = intHeight + "px";
		element.style.width = intWidth + "px";
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//============================================
function js_setElementInnerText( sID, sValue )
//============================================
{
	try{
		document.getElementById(sID).innerText = sValue;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//===============================================
function js_setElementValueByID( sID, sNewValue )
//===============================================
{
	try{
		document.getElementById(sID).value = sNewValue;
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//======================================
function js_getElementValueByID( strID )
//======================================
{
	var strValue = "";
	
	try{
		strValue = document.getElementById(strID).value;
		if( strValue != null ){
			if( strValue.length > 0 ){
				strValue = func_str_Trim(strValue);
			}	
		}	
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
	return strValue;
}
//==========================================
function js_getElementValue( sID, iIDIndex )
//==========================================
{
	js_LOG( "js_getElementValue" );
	
	//alert("js_getElementValue ID(" +  sID+iIDIndex + ")" );
	var sID = sID + iIDIndex;
	//alert(sID);
	var sValue = document.getElementById(sID).value;
	//alert("Value: " + sValue);
	return sValue;
}
//==================================================================
function js_setElementValueBGColor( sID, iIDIndex, sColor, sBGcolor)
//==================================================================
{
	js_LOG( "js_setElementValueBGColor" );
	
	var sID = sID + iIDIndex;
	//alert(sID)
	var sElement = document.getElementById(sID);
	sElement.style.color = sColor; 
	sElement.style.backgroundColor= sBGcolor; 
}
//======================================================
function js_setElementColorsByID( sID, sColor, sBGcolor)
//======================================================
{
	js_LOG( "js_setElementColorsByID" );
	
	//alert("js_setElementColorsByID ID ("+sID+")" )
	
	var sElement = document.getElementById(sID);
	sElement.style.color = sColor; 
	sElement.style.backgroundColor= sBGcolor; 
}
//======================================
function js_splitStr( sStr, sDelimiter )
//======================================
{
	js_LOG( "js_splitStr" );
	
	var sIBM_iSeriesKeywordsArr = new Array();
	sIBM_iSeriesKeywordsArr = sStr.split(sDelimiter);
	return sIBM_iSeriesKeywordsArr;
}
//=============================
function includeFile (filename) 
//=============================
{ 
    var fso = new ActiveXObject ("Scripting.FileSystemObject");
	var fileStream = fso.openTextFile (filename);
	var fileData = fileStream.readAll();
	fileStream.Close();
}
//==============================
function js_DisplayArr( sArray )
//==============================
{	
	js_LOG( "js_DisplayArr" );
	
	var iIndex;
	
	for( iIndex = 0; iIndex < sArray.length; iIndex++ )
	{
		alert ( "Array["+iIndex+"] = " + sArray[iIndex] )
	}
}	
//=================================================
function js_GetValueIndexFromArr( sArray, sExpStr )
//=================================================
{
	js_LOG ( "js_GetValueIndexFromArr" );
	
	var iIndex;

	//js_DisplayArr(sArray)
	for( iIndex = 0; iIndex < sArray.length; iIndex++ )
	{
		//alert ( "ACT Array[" + iIndex + "] = " + sArray[iIndex] + " -- EXP (" + sExpStr + ")")
		if( sArray[iIndex] == sExpStr )
		{
			//alert("Value: " + sExpStr)
			break;
		}
	}
	//alert( sExpStr + " Found at Index: " + iIndex )

	if( str_LT(sArray[0]) > 0 )
	{
		//alert(sArray[0] + " = " + str_LT(sArray[0]) ) 
		iIndex = iIndex+1
		//alert( iIndex )
	}		
	//alert( "Index: " + iIndex )
	
	return iIndex;
}
//=====================================
function js_WriteToFile( sFile, sText )
//=====================================
{
	js_LOG( "js_WriteToFile" );
	
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var oWrite = fso.OpenTextFile( sFile, 2 )
	oWrite.WriteLine(sText);
	oWrite.Close();
}
//================
function js_Show()
//================
{
	js_LOG( "js_Show" )
	
	document.location.reload(true);
}
//======================================
function js_AppendToFile( sFile, sText )
//======================================
{
	js_LOG( "js_AppendToFile" );
	
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var oAppend = fso.OpenTextFile( sFile, 8 )
	oAppend.WriteLine(sText);
	oAppend.Close();
}
//==========================================
function js_ReadLineByIndex( sFile, iIndex )
//==========================================
{
	js_LOG( "js_ReadLineByIndex" );
	
	var sLine;
	var iLineIndex = 0;
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var oRead = fso.OpenTextFile( sFile, 1, true);

    while(!oRead.AtEndOfStream)
	{
		sLine = oRead.ReadLine();
		if( iIndex == iLineIndex ) 
		{
			break;
		}
	} 
	return sLine;
}
//=====================
function js_Add_Step(){
//=====================
	try{
		var strValue = document.getElementById( "ActionParams_ID" ).value;
		if( strValue.length > 0 )
			js_UpdateSelectWithData( "To_List_id", strValue );
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
}
//=============================================
function js_UpdateSelectWithData( sID, sData ){
//=============================================
	try{
		var ID_Select = document.getElementById( sID );
		ID_Select.options[ID_Select.options.length] = new Option( sData, 1 );
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
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
			arrSteps = varItems.split("^");
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
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}
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
					varSelectItems = varSelectItems + varSelectItem + "^"
				}	
			}
			if( varSelectItems.length > 0 ){
				varSelectItems = js_StripLastChar( varSelectItems )
				js_PopulateSelectWithData( sID, varSelectItems, false )
			}
		}else if( intCurrentSelectLen == 1 ){
			ID_Select.options.length = 0;
			//js_hideControl( sID );
		}
	}catch(err){
		var strFuncName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
		js_display_Err(err, strFuncName)
	}	
}
