package com.spring.boot.demo.service;

import java.util.List;

import com.spring.boot.demo.entity.Employee;

public interface EmployeeService {

	public Employee saveEmployee(Employee employee);

	public List<Employee> getAllEmployees(Employee employee);

	public Employee getEmployeeById(Integer employeeId);

	public void deleteEmployeeById(Integer employeeId);

	public Employee updateEmployeeById(Integer employeeId, Employee employee);

}
