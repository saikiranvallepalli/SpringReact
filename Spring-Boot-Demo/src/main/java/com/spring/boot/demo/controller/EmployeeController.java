package com.spring.boot.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.demo.entity.Employee;
import com.spring.boot.demo.errors.EmployeeDetailsNotFound;
import com.spring.boot.demo.service.EmployeeService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	private final Logger LOGGER=LoggerFactory.getLogger(Employee.class);
	
	@PostMapping("/employees")
	public Employee saveEmployee(@Valid @RequestBody Employee employee)
	{
		LOGGER.info("Inside saveEmployee()");
		return employeeService.saveEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(Employee employee)
	{
		return employeeService.getAllEmployees(employee);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable("id") Integer employeeId) throws EmployeeDetailsNotFound
	{
		return employeeService.getEmployeeById(employeeId);
		
	}
	
	@DeleteMapping("/employees/{id}")
	public String deleteEmployeeById(@PathVariable("id") Integer employeeId)
	{
		LOGGER.info("Inside deleteEmployeeById()");
		employeeService.deleteEmployeeById(employeeId);
		
		return "Deletion Success";
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployeeById(@PathVariable("id") Integer employeeId,
										@RequestBody Employee employee)
	{
		return employeeService.updateEmployeeById(employeeId,employee);
	}


}
