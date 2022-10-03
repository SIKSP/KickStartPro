func_terminate( "wscript.exe" )

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
