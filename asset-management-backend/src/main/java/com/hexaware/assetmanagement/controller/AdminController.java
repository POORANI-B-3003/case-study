package com.hexaware.assetmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.hexaware.assetmanagement.dto.DashboardStatsDTO;
import com.hexaware.assetmanagement.dto.EmployeeResponseDTO;
import com.hexaware.assetmanagement.serviceimpl.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    AdminService service;

    // GET /api/admin/employees - List all employees
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/employees")
    public ResponseEntity<List<EmployeeResponseDTO>> getAllEmployees() {
        List<EmployeeResponseDTO> list = service.getAllEmployeeDetails();

        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // PUT /api/admin/employee/{id}/status/{active} - Update employee's active status
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/admin/employee/{id}/status/{active}")
    public ResponseEntity<EmployeeResponseDTO> updateEmployeeStatus(
            @PathVariable int id,
            @PathVariable boolean active) {
        try {
            EmployeeResponseDTO dto = service.updateEmployeeStatus(id, active);
            return new ResponseEntity<>(dto, HttpStatus.FOUND);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // DELETE /api/admin/employee/{id} - Delete employee
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/admin/employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
        boolean deleted = service.deleteEmployeeById(id);
        if (deleted) {
            return new ResponseEntity<>("Employee with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Employee not found with ID " + id, HttpStatus.NOT_FOUND);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/api/admin/dashboard")
    public ResponseEntity<DashboardStatsDTO> getDashboardStats() {
        DashboardStatsDTO stats = service.getDashboardStats();
        return new ResponseEntity<>(stats, HttpStatus.OK);
    }

}
