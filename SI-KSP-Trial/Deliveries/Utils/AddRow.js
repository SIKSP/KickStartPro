//====================
function sleep(delay){
//====================
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
//===============================================
function js_replaceString( sString, sFrom, sTo ){
//===============================================
    var sAfterString = "";
    try{
        var iIndexOf = sString.indexOf(sFrom)
        var sAfterString = sString.replace( sFrom, sTo );
        var iIndexOf = sAfterString.indexOf(sFrom)
        if( iIndexOf >= 0 ){
            js_replaceString( sAfterString, sFrom, sTo )
        }
    }catch(e){
        alert(e);
    }
    return sAfterString;
}
//===============================================
function js_Replace( varString, varFrom, varTo ){
//===============================================
    //alert( "js_Replace\nString: " + varString + "\nFrom: " + varFrom + "\nTo: " + varTo );
    try{
        var iIndexOf = varString.indexOf(varFrom)
        while( iIndexOf >=0 ){
            varString = js_replaceString( varString, varFrom, varTo );
            sleep(1)
            iIndexOf = varString.indexOf(varFrom)
        }
    }catch(e){alert(e);}
    return varString;
}
//==============================
function rebuildCell( varCell ){
//==============================
    var varId = "";

    var intStart = varCell.indexOf("<button");
    var intEnd = varCell.indexOf("</button>") + 9;
    var varRemove = varCell.substring( intStart, intEnd )
    
    varCell = js_Replace( varCell, varRemove, "" );
    varCell = js_Replace( varCell, "<td id=", "" );
    varCell = js_Replace( varCell, "</td>", "" );
    
    var arr = varCell.split(">");
    var err = arr[0];
    var arrErr = err.split("_");
    
    var index = arrErr[1];
    index = js_Replace( index, "\"", "" );
    
    varCell = "<td><button id='id_"+index+"' type='button' onClick='window.scroll(0,findPos(document.getElementById("+err+")));' class='btn btn-danger'>"+index+"</button></td>"

    return varCell;    
}
//=========================			
function failedSteps(varID){
//=========================
	
	//alert('failedSteps ' + varID );

	try{
		js_hideObject('NoPassedStepsMsg_ID');
		js_hideObject('NoFailedStepsMsg_ID');
		js_hideObject(varID);
		delete_Row(varID, 'all');
		var x = document.getElementsByClassName('danger alert alert-danger');
		js_unhideObject( 'P_F_Steps_id' );
		js_setElementInnerText( 'P_F_Steps_id', 'There are (' + x.length + ') Failed steps');
		
		if( x.length > 0){
			js_unhideObject(varID);
			for( var intRowIndex = 0; intRowIndex < x.length; intRowIndex++ ){
				addRow( varID, x[intRowIndex].innerHTML, intRowIndex, 'SAD' );
			}
		}else if( x.length == 0 ){
			js_unhideObject('NoFailedStepsMsg_ID');
		}
	}catch(err){}
}	
//==========================
function passedSteps(varID){
//==========================
	
	//alert("passedSteps " + varID );
	
	try{
		js_hideObject('NoPassedStepsMsg_ID');
		js_hideObject('NoFailedStepsMsg_ID');
		js_hideObject(varID);
		
		var x = document.getElementsByClassName("MY CLASS");
		delete_Row(varID, 'all');
		js_unhideObject( 'P_F_Steps_id' );
		js_setElementInnerText( 'P_F_Steps_id', 'There are (' + x.length + ') Passed steps');
		
		if( x.length > 0){
			js_unhideObject(varID);
			for( var intRowIndex = 0; intRowIndex < x.length; intRowIndex++ ){
				addRow( varID, x[intRowIndex].innerHTML, intRowIndex, 'HAPPY' );
			}
		}else if( x.length == 0 ){
			js_unhideObject('NoPassedStepsMsg_ID');
		}
	}catch(err){}
}	
//===========================================================
function addRow(tableID, varRow, intRowIndex, strSad_Happy ){
//===========================================================
	/*
	alert( "addRow(Table ID: " + tableID +
		 "\nRow: " + varRow +
		 "\nRowIndex: " + intRowIndex + 
		 "\nSad_Happy: " + strSad_Happy + 
		 ")")
	*/
    try{
        var iMod = intRowIndex % 2;

        varRow = js_Replace( varRow, ",", "__" );

        varRow = js_Replace( varRow, "</td>", "," );

        var arrRow = varRow.split(",");
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        var row = table.insertRow(rowCount);
        var colCount = table.rows[1].cells.length;
        var varCellValue;
		
		var strValue;
		
		for (var i = 0; i < colCount; i++) {
            var newcell = row.insertCell(i);
            if( iMod == 0 ){
				if( strSad_Happy == "SAD" )
					newcell.style.backgroundColor = "#FFAEC9"
				else if( strSad_Happy == "HAPPY" )
					newcell.style.backgroundColor = "#B3FFB3"
            }else if( iMod == 1){
				if( strSad_Happy == "SAD" )
					newcell.style.backgroundColor = "#FF0080"
				else if( strSad_Happy == "HAPPY" )
					newcell.style.backgroundColor = "#00EE00"
            }
			
			if( arrRow[i] != null ) {
				strValue = arrRow[i]; 
				if( strValue.length > 0 ){
					varCellValue = strValue + "</td>";
					varCellValue = js_Replace( varCellValue, "__", "," );
					if( i == 1 ){
						if( varCellValue.indexOf("error") >=0 ){
							varCellValue = rebuildCell(varCellValue)
						}    
					}
					newcell.innerHTML = varCellValue;
				}
			}	
        }
    }catch(e){alert(e);}
}
//========================================
function delete_Row(tableID, varRowIndex){
//========================================
	
	//alert("delete_Row(Table ID: " + tableID +"\nRowIndex: " + varRowIndex +")")
    
	try{
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        if( varRowIndex == 'all' ){
            var tb = document.getElementById(tableID);

            while(tb.rows.length > 2){
				tb.deleteRow(2);
            }
        }else{
            table.deleteRow(varRowIndex);
        }    
    }catch(e){alert(e);}
} 