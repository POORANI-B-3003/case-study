package com.hexaware.assetmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hexaware.assetmanagement.dto.EmployeeRequestDTO;
import com.hexaware.assetmanagement.dto.EmployeeResponseDTO;
import com.hexaware.assetmanagement.serviceimpl.EmployeeService;

@RestController
@RequestMapping("/employees") 
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeService service;

    // GET /employees - Get all employees
    @GetMapping
    public ResponseEntity<List<EmployeeResponseDTO>> getAllEmployees() {
        List<EmployeeResponseDTO> list = service.getAllEmployee();

        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // GET /employees/{id} - Get employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponseDTO> getEmployeeById(@PathVariable int id) {
        EmployeeResponseDTO dto = service.getEmployeeById(id);

        if (dto != null) {
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // POST /employees/add - Add new employee
    @PostMapping("/add")
    public ResponseEntity<EmployeeResponseDTO> addEmployee(@RequestBody EmployeeRequestDTO requestDto) {
        EmployeeResponseDTO dto = service.addEmployee(requestDto);

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Success-Message", "Employee created successfully");

        return new ResponseEntity<>(dto, headers, HttpStatus.CREATED);
    }

    // PUT /employees/update/{id} - Update employee
    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeResponseDTO> updateEmployee(@PathVariable int id, @RequestBody EmployeeRequestDTO requestDto) {
        try {
            EmployeeResponseDTO dto = service.updateEmployee(id, requestDto);
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // DELETE /employees/delete/{id} - Delete employee
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
        EmployeeResponseDTO dto = service.deleteEmployee(id);
        if (dto != null) {
            return new ResponseEntity<>("Employee with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Employee not found with ID " + id, HttpStatus.NOT_FOUND);
        }
    }
}
