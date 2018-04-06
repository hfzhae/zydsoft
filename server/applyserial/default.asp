<!-- #include file="../public.asp" -->
<%
dim t, key, rs, rsIP, sql, result, serial, msg, UserIP

t = ClngEx(request("type"))
key = SQLInputParam(request("key"))
result = 0
serial = ""
msg = ""
UserIP = Request.ServerVariables("HTTP_X_FORWARDED_FOR") 
if UserIP = "" then UserIP = Request.ServerVariables("REMOTE_ADDR")

getSerial()

function getSerial()
	if len(UserIP) = 0 then
		msg = "IP err."
	else
		GetConnEx()
		
		sql = "select * from UserIP where IP = '"&UserIP&"' and productid="&t&" and CreateDate >= date()"
		set rsIP = Server.CreateObject("ADODB.RecordSet")
		rsIP.open sql, conn, 3, 3, 1
		
		if not rsIP.eof and not key="1336633290" then
			msg = "This IP address has been applied today."
		else
			rsIP.addnew
			rsIP("IP") = UserIP
			rsIP("CreateDate") = now()
			rsIP("ProductID") = t
			rsIP.update
			
			sql = "select top 1 * from productserial where getdate is null and productid=" & t
			set rs = Server.CreateObject("ADODB.RecordSet")

			rs.open sql, conn, 3, 3, 1
			if not rs.eof then
				serial = rs("productserial").value
				result = 1
				rs("GetDate") = now()
				rs("UserIP") = UserIP
				rs.update
			else
				msg = "No resources were found."
			end if
		end if
	end if
end function

%>
{"result":<%=result%>,"serial":"<%=serial%>","msg":"<%=msg%>"}
