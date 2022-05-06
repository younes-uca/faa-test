package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Distinction;


@Repository
public interface DistinctionDao extends JpaRepository<Distinction,Long> {





    List<Distinction> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<Distinction> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);
    List<Distinction> findByCampagneCode(String code);
    int deleteByCampagneCode(String code);

    List<Distinction> findByCampagneId(Long id);

    int deleteByCampagneId(Long id);
    List<Distinction> findByEtatEtapeCampagneCode(String code);
    int deleteByEtatEtapeCampagneCode(String code);

    List<Distinction> findByEtatEtapeCampagneId(Long id);

    int deleteByEtatEtapeCampagneId(Long id);

    List<Distinction> findByChercheurUsernameAndCampagneId(String username, Long compagneId);
    List<Distinction> findByChercheurUsername(String username);

}
