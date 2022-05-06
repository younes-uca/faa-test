package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.IdentifiantRecherche;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface IdentifiantRechercheDao extends JpaRepository<IdentifiantRecherche,Long> {



    @Query("SELECT item FROM IdentifiantRecherche item ORDER BY item.code ASC")
    List<IdentifiantRecherche> findAll();

    IdentifiantRecherche findByCode(String code);

    int deleteByCode(String code);

    List<IdentifiantRecherche> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<IdentifiantRecherche> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
