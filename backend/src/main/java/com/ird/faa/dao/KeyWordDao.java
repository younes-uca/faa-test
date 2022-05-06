package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.KeyWord;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface KeyWordDao extends JpaRepository<KeyWord,Long> {



    @Query("SELECT item FROM KeyWord item ORDER BY item.code ASC")
    List<KeyWord> findAll();

    KeyWord findByCode(String code);

    int deleteByCode(String code);



}
