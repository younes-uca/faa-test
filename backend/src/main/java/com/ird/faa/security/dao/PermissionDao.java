package com.ird.faa.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ird.faa.security.bean.Permission;

public interface PermissionDao extends JpaRepository<Permission, Long> {
    public Permission findByName(String name);
}
