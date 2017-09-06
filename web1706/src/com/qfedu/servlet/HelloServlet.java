package com.qfedu.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


// web.xml
// <servlet>
//		<servlet-name>a</servlet-name>
//		<servlet-class>com.qfedu.servlet.HelloServlet</servlet-class>
// </servlet>
// <servlet-mapping>
//		<servlet-name>a</servlet-name>
//		<url-pattern>/hello</url-pattern>
// </servlet-mapping>
// 要写一个在服务器上跑的Java程序需要做两件事情:
// 1. 遵循Servlet规范 (实现Servlet接口或者继承HttpServlet类)
// 2. 把程序在服务器上部署出来 (将Servlet映射成一个URL)
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		// 每个Servlet基本上都是做3件事情:
		// 1. 处理用户的请求 (从请求中取出参数)
		String name = req.getParameter("name");
		req.setAttribute("name", name);
		// 2. 根据用户请求执行对应的业务逻辑
		// 处理完成后会获得数据 然后把数据绑定到对应的作用域
		String[] fruits = { "苹果", "香蕉", "葡萄", "榴莲", "火龙果" };
		int index = (int) (Math.random() * fruits.length);
		// 把数据绑定到请求中
		req.setAttribute("fruit", fruits[index]);
		// 3. 跳转到JSP页面 由JSP页面来显示动态内容(数据)
		req.getRequestDispatcher("index.jsp").forward(req, resp);
	}
}









