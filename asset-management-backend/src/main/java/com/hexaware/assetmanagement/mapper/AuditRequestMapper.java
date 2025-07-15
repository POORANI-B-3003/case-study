package com.hexaware.assetmanagement.mapper;

import com.hexaware.assetmanagement.dto.AuditRequestDTO;
import com.hexaware.assetmanagement.entity.AuditRequest;
import com.hexaware.assetmanagement.entity.Employee;
import com.hexaware.assetmanagement.entity.Asset;

public class AuditRequestMapper {

    public static AuditRequestDTO toDTO(AuditRequest entity) {
        if (entity == null) return null;

        return new AuditRequestDTO(
            entity.getId(),
            entity.getAction(),
            entity.getPerformedBy(),
            entity.getAuditDescrption(),
            entity.getAuditDate(),
            entity.getEmployee() != null ? entity.getEmployee().getId() : 0,
            entity.getEmployee() != null ? entity.getEmployee().getName() : null,
            entity.getAsset() != null ? entity.getAsset().getId() : 0,
            entity.getAsset() != null ? entity.getAsset().getName() : null
        );
    }

    public static AuditRequest toEntity(AuditRequestDTO dto, Employee employee, Asset asset) {
        if (dto == null) return null;

        AuditRequest entity = new AuditRequest();
        entity.setId(dto.getId());
        entity.setAction(dto.getAction());
        entity.setPerformedBy(dto.getPerformedBy());
        entity.setAuditDescrption(dto.getAuditDescrption());
        entity.setAuditDate(dto.getAuditDate());
        entity.setEmployee(employee);
        entity.setAsset(asset);

        return entity;
    }
}
