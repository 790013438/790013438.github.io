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
// Ҫдһ���ڷ��������ܵ�Java������Ҫ����������:
// 1. ��ѭServlet�淶 (ʵ��Servlet�ӿڻ��߼̳�HttpServlet��)
// 2. �ѳ����ڷ������ϲ������ (��Servletӳ���һ��URL)
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		// ÿ��Servlet�����϶�����3������:
		// 1. �����û������� (��������ȡ������)
		String name = req.getParameter("name");
		req.setAttribute("name", name);
		// 2. �����û�����ִ�ж�Ӧ��ҵ���߼�
		// ������ɺ�������� Ȼ������ݰ󶨵���Ӧ��������
		String[] fruits = { "ƻ��", "�㽶", "����", "����", "������" };
		int index = (int) (Math.random() * fruits.length);
		// �����ݰ󶨵�������
		req.setAttribute("fruit", fruits[index]);
		// 3. ��ת��JSPҳ�� ��JSPҳ������ʾ��̬����(����)
		req.getRequestDispatcher("index.jsp").forward(req, resp);
	}
}









