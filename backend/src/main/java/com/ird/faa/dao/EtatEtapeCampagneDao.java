package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.EtatEtapeCampagne;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface EtatEtapeCampagneDao extends JpaRepository<EtatEtapeCampagne,Long> {



    @Query("SELECT item FROM EtatEtapeCampagne item ORDER BY item.ordre ASC")
    List<EtatEtapeCampagne> findAll();

    EtatEtapeCampagne findByCode(String code);

    int deleteByCode(String code);



}
