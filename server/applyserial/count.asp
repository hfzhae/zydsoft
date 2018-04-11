<!-- #include file="../public.asp" -->
<%
dim result, msg

result = 0
msg = ""

getCount()

sub getCount()
	dim rs, sql
	
	GetConnEx()

	sql = "select count(id) as n, productid from productserial where getdate is null group by productid order by productid desc"
	set rs = Server.CreateObject("ADODB.RecordSet")
	rs.open sql, conn, 0, 1, 1
	if not rs.eof then
		result = 1
		do while not rs.eof
			if rs("productid").value = 19 then
				msg = msg & "2000:" & rs("n").value & ","
			end if
			if rs("productid").value = 1 then
				msg = msg & "3000:"& rs("n").value
			end if
		rs.MoveNext
		loop
	end if
end sub
%>{"result":<%=result%>,"msg":"<%=msg%>"}
