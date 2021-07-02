package com.spring.boot.demo.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.demo.entity.Employee;
import com.spring.boot.demo.errors.EmployeeDetailsNotFound;
import com.spring.boot.demo.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public Employee saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getAllEmployees(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(Integer employeeId)  {
		// TODO Auto-generated method stub
		return employeeRepository.findById(employeeId).get();
	}

	@Override
	public void deleteEmployeeById(Integer employeeId) {
		// TODO Auto-generated method stub
		 employeeRepository.deleteById(employeeId);
		
	}

	@Override
	public Employee updateEmployeeById(Integer employeeId, Employee employee) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.findById(employeeId).get();
		if(Objects.nonNull(emp.getEmpName()) && !"".equalsIgnoreCase(emp.getEmpName()))
		{
			emp.setEmpName(employee.getEmpName());
		}
		
		if(Objects.nonNull(emp.getEmpMobile()) && !"".equalsIgnoreCase(emp.getEmpMobile()))
		{
			emp.setEmpMobile(employee.getEmpMobile());
		}
		
		return employeeRepository.save(emp);
	}

	

}
