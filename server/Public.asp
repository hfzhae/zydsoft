<%'Option Explicit
dim conn

Function JetOLEDBConnecter(DatabaseName, UserName, Password)
	Dim CnObj
	
	Set CnObj = CreateObject("ADODB.Connection")
	CnObj.Provider = "Microsoft.Jet.OLEDB.4.0"
	CnObj.Properties("Data Source") = DatabaseName
	if Len(UserName) then
		CnObj.Properties("User ID") = UserName
		CnObj.Properties("Password") = Password
	end if
	JetOLEDBConnecter = CnObj.ConnectionString
End Function

function GetConnEx()
	dim  connstr, Device
	Device = server.mapPath("\server\database") & "\applyserial.mdb"
	connstr =JetOLEDBConnecter(Device, "admin", "")
	set Conn =CreateObject("adodb.connection")
	Conn.Open connstr
	Conn.CommandTimeout = 0
end function

function SQLInputParam(s):SQLInputParam = replace(Replace(s, "'", ""),"--",""):End Function
function ClngEx(v):ClngEx = 0:on error resume next:ClngEx = CLng(v):on error goto 0:end function
function CCurEx(v):CCurEx = 0:on error resume next:CCurEx = CCur(v):on error goto 0:end function

%>