package com.hexaware.assetmanagement.dto;

import java.time.LocalDate;

public class ServiceRequestDTO {

    private int id;
    private String issueType;        // HARDWARE, SOFTWARE, OTHER
    private String description;
    private String status;           // PENDING, APPROVED, RESOLVED
    private LocalDate requestDate;

    private int assetId;             // Reference to asset
    private String assetName;        // Display name
    private int employeeId;          // Reference to employee
    private String employeeName;     // Display name

    // No-arg constructor
    public ServiceRequestDTO() {}

    // All-arg constructor
    public ServiceRequestDTO(int id, String issueType, String description, String status,
                             LocalDate requestDate, int assetId, String assetName,
                             int employeeId, String employeeName) {
        this.id = id;
        this.issueType = issueType;
        this.description = description;
        this.status = status;
        this.requestDate = requestDate;
        this.assetId = assetId;
        this.assetName = assetName;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIssueType() {
        return issueType;
    }

    public void setIssueType(String issueType) {
        this.issueType = issueType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
    }

    public int getAssetId() {
        return assetId;
    }

    public void setAssetId(int assetId) {
        this.assetId = assetId;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }
}
