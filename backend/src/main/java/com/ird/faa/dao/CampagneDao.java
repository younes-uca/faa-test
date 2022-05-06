package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Campagne;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface CampagneDao extends JpaRepository<Campagne,Long> {



    @Query("SELECT item FROM Campagne item ORDER BY item.dateDepart ASC")
    List<Campagne> findAll();

    Campagne findByCode(String code);

    int deleteByCode(String code);



}
