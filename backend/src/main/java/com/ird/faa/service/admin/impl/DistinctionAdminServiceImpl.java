package com.ird.faa.service.admin.impl;

import com.ird.faa.bean.*;
import com.ird.faa.dao.DistinctionDao;
import com.ird.faa.security.bean.User;
import com.ird.faa.security.common.SecurityUtil;
import com.ird.faa.service.admin.facade.*;
import com.ird.faa.service.core.impl.AbstractServiceImpl;
import com.ird.faa.service.util.ListUtil;
import com.ird.faa.service.util.SearchUtil;
import com.ird.faa.ws.rest.provided.vo.DistinctionVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
    public class DistinctionAdminServiceImpl extends AbstractServiceImpl<Distinction> implements DistinctionAdminService {

    @Autowired
    private DistinctionDao distinctionDao;

    @Autowired
    private EtatEtapeCampagneAdminService etatEtapeCampagneService;
    @Autowired
    private CampagneAdminService campagneService;
    @Autowired
    private DistinctionDisciplineScientifiqueAdminService distinctionDisciplineScientifiqueService;
    @Autowired
    private ChercheurAdminService chercheurService;
    @Autowired
    private DisciplineScientifiqueChercheurAdminService disciplineScientifiqueChercheurAdminService;
    @Autowired
    private DisciplineScientifiqueAdminService disciplineScientifiqueAdminService;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<Distinction> findAll() {
        return distinctionDao.findAll();
    }

    @Override
    public List<Distinction> findByChercheurNumeroMatricule(String numeroMatricule) {
        return distinctionDao.findByChercheurNumeroMatricule(numeroMatricule);
    }

    @Override
    @Transactional
    public int deleteByChercheurNumeroMatricule(String numeroMatricule) {
        return distinctionDao.deleteByChercheurNumeroMatricule(numeroMatricule);
    }

    @Override
    public List<Distinction> findByChercheurId(Long id) {
        return distinctionDao.findByChercheurId(id);
    }

    @Override
    @Transactional
    public int deleteByChercheurId(Long id) {
        return distinctionDao.deleteByChercheurId(id);
    }


    @Override
    public List<Distinction> findByCampagneCode(String code) {
        return distinctionDao.findByCampagneCode(code);
    }

    @Override
    @Transactional
    public int deleteByCampagneCode(String code) {
        return distinctionDao.deleteByCampagneCode(code);
    }

    @Override
    public List<Distinction> findByCampagneId(Long id) {
        return distinctionDao.findByCampagneId(id);
    }

    @Override
    @Transactional
    public int deleteByCampagneId(Long id) {
        return distinctionDao.deleteByCampagneId(id);
    }


    @Override
    public List<Distinction> findByEtatEtapeCampagneCode(String code) {
        return distinctionDao.findByEtatEtapeCampagneCode(code);
    }

    @Override
    @Transactional
    public int deleteByEtatEtapeCampagneCode(String code) {
        return distinctionDao.deleteByEtatEtapeCampagneCode(code);
    }

    @Override
    public List<Distinction> findByEtatEtapeCampagneId(Long id) {
        return distinctionDao.findByEtatEtapeCampagneId(id);
    }

    @Override
    @Transactional
    public int deleteByEtatEtapeCampagneId(Long id) {
        return distinctionDao.deleteByEtatEtapeCampagneId(id);
    }


    @Override
    public Distinction findById(Long id) {
        if (id == null) return null;
        return distinctionDao.getOne(id);
    }

    @Override
    public Distinction findByIdWithAssociatedList(Long id) {
        Distinction distinction = findById(id);
        findAssociatedLists(distinction);
        return distinction;
    }

    private void findAssociatedLists(Distinction distinction) {
        if (distinction != null && distinction.getId() != null) {
            List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques = distinctionDisciplineScientifiqueService.findByDistinctionId(distinction.getId());
            distinction.setDistinctionDisciplineScientifiques(distinctionDisciplineScientifiques);
        }
    }

    private void deleteAssociatedLists(Long id) {
        if (id != null) {
            distinctionDisciplineScientifiqueService.deleteByDistinctionId(id);
        }
    }

    private void updateAssociatedLists(Distinction distinction) {
        if (distinction != null && distinction.getId() != null) {
            List<List<DistinctionDisciplineScientifique>> resultDistinctionDisciplineScientifiques = distinctionDisciplineScientifiqueService.getToBeSavedAndToBeDeleted(distinctionDisciplineScientifiqueService.findByDistinctionId(distinction.getId()), distinction.getDistinctionDisciplineScientifiques());
            distinctionDisciplineScientifiqueService.delete(resultDistinctionDisciplineScientifiques.get(1));
            associateDistinctionDisciplineScientifique(distinction, resultDistinctionDisciplineScientifiques.get(0));
            distinctionDisciplineScientifiqueService.update(resultDistinctionDisciplineScientifiques.get(0));

        }
    }

    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (distinctionDao.findById(id).isPresent()) {
            deleteAssociatedLists(id);
            distinctionDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Distinction update(Distinction distinction) {
        Distinction foundedDistinction = findById(distinction.getId());
        if (foundedDistinction == null) return null;
        else {
            updateAssociatedLists(distinction);
            return distinctionDao.save(distinction);
        }
    }

    @Override
    public Distinction save(Distinction distinction) {

        Distinction result = null;


        findChercheur(distinction);
        findCampagne(distinction);
        findEtatEtapeCampagne(distinction);

        Distinction savedDistinction = distinctionDao.save(distinction);

        saveDistinctionDisciplineScientifiques(savedDistinction, distinction.getDistinctionDisciplineScientifiques());
        result = savedDistinction;

        return result;
    }

    @Override
    public List<Distinction> save(List<Distinction> distinctions) {
        List<Distinction> list = new ArrayList<>();
        for (Distinction distinction : distinctions) {
            list.add(save(distinction));
        }
        return list;
    }

    private List<DistinctionDisciplineScientifique> prepareDistinctionDisciplineScientifiques(Distinction distinction, List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques) {
        for (DistinctionDisciplineScientifique distinctionDisciplineScientifique : distinctionDisciplineScientifiques) {
            distinctionDisciplineScientifique.setDistinction(distinction);
        }
        return distinctionDisciplineScientifiques;
    }


    @Override
    @Transactional
    public int delete(Distinction distinction) {
        if (distinction.getId() == null) return -1;
        Distinction foundedDistinction = findById(distinction.getId());
        if (foundedDistinction == null) return -1;
        distinctionDao.delete(foundedDistinction);
        return 1;
    }


    public List<Distinction> findByCriteria(DistinctionVo distinctionVo) {

        String query = "SELECT o FROM Distinction o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", distinctionVo.getId());
        query += SearchUtil.addConstraintDate("o", "dateObtention", "=", distinctionVo.getDateObtention());
        query += SearchUtil.addConstraint("o", "intitule", "LIKE", distinctionVo.getIntitule());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateObtention", distinctionVo.getDateObtentionMin(), distinctionVo.getDateObtentionMax());
        if (distinctionVo.getChercheurVo() != null) {
            query += SearchUtil.addConstraint("o", "chercheur.id", "=", distinctionVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint("o", "chercheur.numeroMatricule", "LIKE", distinctionVo.getChercheurVo().getNumeroMatricule());
        }

        if (distinctionVo.getCampagneVo() != null) {
            query += SearchUtil.addConstraint("o", "campagne.id", "=", distinctionVo.getCampagneVo().getId());
            query += SearchUtil.addConstraint("o", "campagne.code", "LIKE", distinctionVo.getCampagneVo().getCode());
        }

        if (distinctionVo.getEtatEtapeCampagneVo() != null) {
            query += SearchUtil.addConstraint("o", "etatEtapeCampagne.id", "=", distinctionVo.getEtatEtapeCampagneVo().getId());
            query += SearchUtil.addConstraint("o", "etatEtapeCampagne.code", "LIKE", distinctionVo.getEtatEtapeCampagneVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    private void saveDistinctionDisciplineScientifiques(Distinction distinction, List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques) {

        if (ListUtil.isNotEmpty(distinction.getDistinctionDisciplineScientifiques())) {
            List<DistinctionDisciplineScientifique> savedDistinctionDisciplineScientifiques = new ArrayList<>();
            distinctionDisciplineScientifiques.forEach(element -> {
                element.setDistinction(distinction);
                distinctionDisciplineScientifiqueService.save(element);
            });
            distinction.setDistinctionDisciplineScientifiques(savedDistinctionDisciplineScientifiques);
        }
    }

    private void findChercheur(Distinction distinction) {
        Chercheur loadedChercheur = chercheurService.findByIdOrNumeroMatricule(distinction.getChercheur());

        if (loadedChercheur == null) {
            return;
        }
        distinction.setChercheur(loadedChercheur);
    }

    private void findCampagne(Distinction distinction) {
        Campagne loadedCampagne = campagneService.findByIdOrCode(distinction.getCampagne());

        if (loadedCampagne == null) {
            return;
        }
        distinction.setCampagne(loadedCampagne);
    }

    private void findEtatEtapeCampagne(Distinction distinction) {
        EtatEtapeCampagne loadedEtatEtapeCampagne = etatEtapeCampagneService.findByIdOrCode(distinction.getEtatEtapeCampagne());

        if (loadedEtatEtapeCampagne == null) {
            return;
        }
        distinction.setEtatEtapeCampagne(loadedEtatEtapeCampagne);
    }

    @Override
    @Transactional
    public void delete(List<Distinction> distinctions) {
        if (ListUtil.isNotEmpty(distinctions)) {
            distinctions.forEach(e -> distinctionDao.delete(e));
        }
    }

    @Override
    public void update(List<Distinction> distinctions) {
        if (ListUtil.isNotEmpty(distinctions)) {
            distinctions.forEach(e -> distinctionDao.save(e));
        }
    }
    @Override
    public List<DisciplineScientifique> findDisciplineScientifiqueWithChercheurDis() {
        List<DisciplineScientifique> all = disciplineScientifiqueAdminService.findAll();
        List<DisciplineScientifique> resultatDisciplineScientifique = new ArrayList<>();
        List<DisciplineScientifique> resultatsAutre;
        User user = SecurityUtil.getCurrentUser();
        if (true) { //user != null
            List<DisciplineScientifiqueChercheur> dSChercheur = disciplineScientifiqueChercheurAdminService.findByChercheurUsername("soufiane");
            if(dSChercheur != null && !dSChercheur.isEmpty()){
                for (DisciplineScientifiqueChercheur d : dSChercheur) {
                    resultatDisciplineScientifique.add(d.getDisciplineScientifique());
                }
                resultatsAutre = disciplineScientifiqueAdminService.findByDifferentIds(idsExtraction(resultatDisciplineScientifique));
                resultatDisciplineScientifique.addAll(resultatsAutre);
                return resultatDisciplineScientifique;
            }
            else {
                return all;
            }
        } else {
            return null;
        }
    }

    private List<Long> idsExtraction(List<DisciplineScientifique> disciplineScientifiques) {
        List<Long> ids = new ArrayList<>();
        for (DisciplineScientifique d : disciplineScientifiques) {
            ids.add(d.getId());
        }
        return ids;
    }


    private void associateDistinctionDisciplineScientifique(Distinction distinction, List<DistinctionDisciplineScientifique> distinctionDisciplineScientifique) {
        if (ListUtil.isNotEmpty(distinctionDisciplineScientifique)) {
            distinctionDisciplineScientifique.forEach(e -> e.setDistinction(distinction));
        }
    }

}
