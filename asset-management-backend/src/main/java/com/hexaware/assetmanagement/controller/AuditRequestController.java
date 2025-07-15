package com.hexaware.assetmanagement.controller;

import com.hexaware.assetmanagement.dto.AuditRequestDTO;
import com.hexaware.assetmanagement.serviceimpl.AuditRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/audit")
@CrossOrigin(origins = "http://localhost:3000")
public class AuditRequestController {

    @Autowired
    private AuditRequestService service;

    // GET /api/audit/logs - view all audit logs
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/logs")
    public ResponseEntity<List<AuditRequestDTO>> getAllAuditLogs() {
        List<AuditRequestDTO> logs = service.getAllLogs();
        if (logs.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(logs, HttpStatus.OK);
    }

    // GET /api/audit/logs/{id} - view log by ID
    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
    @GetMapping("/logs/{id}")
    public ResponseEntity<AuditRequestDTO> getLogById(@PathVariable int id) {
        AuditRequestDTO dto = service.getLogById(id);
        if (dto != null) {
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // GET /api/audit/user/{uid} - logs for a specific user
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user/{uid}")
    public ResponseEntity<List<AuditRequestDTO>> getLogsByEmployee(@PathVariable int uid) {
        List<AuditRequestDTO> logs = service.getLogsByEmployee(uid);
        if (logs.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(logs, HttpStatus.OK);
    }

    // GET /api/audit/date/{date} - logs by date
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/date/{date}")
    public ResponseEntity<List<AuditRequestDTO>> getLogsByDate(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List<AuditRequestDTO> logs = service.getLogsByDate(date);
        if (logs.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(logs, HttpStatus.OK);
    }
    
    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
    @PostMapping("/addAudit")
    public ResponseEntity<AuditRequestDTO> createAudit(@RequestBody AuditRequestDTO dto) {
        AuditRequestDTO saved = service.addAudit(dto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

}
