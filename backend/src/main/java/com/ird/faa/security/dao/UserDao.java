package com.ird.faa.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ird.faa.security.bean.User;

@Repository
public interface UserDao  extends JpaRepository<User, Long>{
    User findByUsername(String username);
    int deleteByUsername(String username);
    User findByEmail(String email);
}
