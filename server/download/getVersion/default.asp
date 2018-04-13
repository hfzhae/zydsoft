<!-- #include file="../../public.asp" -->
<% 
dim result, msg, list, callback, connsql

result = 0
list = ""
msg = ""
callback = SQLInputParam(request("jsoncallback"))

getVersion

sub getVersion()
    dim ver, rs, verArr, sql, pid, i
    pid = ClngEx(request("pid"))
    ver = SQLInputParam(request("v"))
    if len(pid) = 0 then
        msg = "not pid"
        exit sub
    end if
    if len(ver) = 0 then
        msg = "not ver"
        exit sub
    end if
    verArr = split(ver, ",")
    ver = ""
    for each i in verArr
        ver = ver & "'"&i&"',"
    next
    ver = left(ver, len(ver) - 1)
    sql = "select Version,title,ReDate from biDevDoc where ProjectID="&pid&" and Version in ("&ver&") and StateID in (3,4) order by ReDate desc"
    set rs = Server.CreateObject("Adodb.recordset")
	getConn()
    rs.Open sql, connsql, 0, 1, 1
    if not rs.eof then
        do while not rs.EOF
            list = list & "{""version"":"""&rs("Version").value&""",""title"":"""&escape(rs("title").value)&""",""redate"":"""&rs("ReDate").value&"""},"
        rs.MoveNext
        loop
    else
        msg = "not doc"
    end if
end sub

function getConn()
	Set connsql=Server.CreateObject("adodb.connection")
	connsql.Open = "driver={SQL Server};server=.; uid=ebsvr;pwd=zydsvr=888;database=ebDevDoc"
end function
%><%=callback %>({"result":"<%=result %>","list":[<%=list %>],"msg":"<%=msg %>"})
