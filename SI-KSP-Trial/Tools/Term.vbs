msgbox("Terminate Automation")

func_terminate( "javaw.exe" )
func_terminate( "chrome.exe" )
func_terminate( "chromedriver.exe" )
func_terminate( "msedge.exe" )
func_terminate( "msedgedriver.exe" )

Function func_terminate( strProcess )

	On Error Resume Next
	Set Processes = GetObject("winmgmts:").InstancesOf("Win32_Process")
	For each Process in Processes
		Select Case LCase(Process.Name)
			Case strProcess 
				Process.Terminate(1)
		End Select
	Next

End Function	
