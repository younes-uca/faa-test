package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.bean.DisciplineScientifiqueChercheur;
import com.ird.faa.bean.EnjeuxIrdChercheur;
import com.ird.faa.bean.IdentifiantAuteurExpert;
import com.ird.faa.dao.ChercheurDao;
import com.ird.faa.service.admin.facade.ChercheurAdminService;
import com.ird.faa.service.admin.facade.IdentifiantAuteurExpertAdminService;
import com.ird.faa.service.admin.facade.EnjeuxIrdChercheurAdminService;
import com.ird.faa.service.admin.facade.DisciplineScientifiqueChercheurAdminService;

import com.ird.faa.ws.rest.provided.vo.ChercheurVo;
import com.ird.faa.service.util.*;
import com.ird.faa.bean.DisciplineScientifiqueChercheur;
import com.ird.faa.service.admin.facade.DisciplineScientifiqueChercheurAdminService;
import com.ird.faa.bean.EnjeuxIrdChercheur;
import com.ird.faa.service.admin.facade.EnjeuxIrdChercheurAdminService;
import com.ird.faa.bean.IdentifiantAuteurExpert;
import com.ird.faa.service.admin.facade.IdentifiantAuteurExpertAdminService;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class ChercheurAdminServiceImpl extends AbstractServiceImpl<Chercheur> implements ChercheurAdminService {

@Autowired
private ChercheurDao chercheurDao;

        @Autowired
        private IdentifiantAuteurExpertAdminService identifiantAuteurExpertService ;
        @Autowired
        private EnjeuxIrdChercheurAdminService enjeuxIrdChercheurService ;
        @Autowired
        private DisciplineScientifiqueChercheurAdminService disciplineScientifiqueChercheurService ;


@Autowired
private EntityManager entityManager;

    @Override
   public Chercheur findByUsername(String username){
    return chercheurDao.findByUsername(username);
    }

@Override
public List<Chercheur> findAll(){
        return chercheurDao.findAll();
}
    @Override
    public Chercheur findByNumeroMatricule(String numeroMatricule){
    if( numeroMatricule==null) return null;
    return chercheurDao.findByNumeroMatricule(numeroMatricule);
    }

    @Override
    @Transactional
    public int deleteByNumeroMatricule(String  numeroMatricule) {
    return chercheurDao.deleteByNumeroMatricule(numeroMatricule);
    }
    @Override
    public Chercheur findByIdOrNumeroMatricule(Chercheur chercheur){
        Chercheur resultat=null;
        if(chercheur != null){
            if(StringUtil.isNotEmpty(chercheur.getId())){
            resultat= chercheurDao.getOne(chercheur.getId());
            }else if(StringUtil.isNotEmpty(chercheur.getNumeroMatricule())) {
            resultat= chercheurDao.findByNumeroMatricule(chercheur.getNumeroMatricule());
            }else if(StringUtil.isNotEmpty(chercheur.getUsername())) {
            resultat = chercheurDao.findByUsername(chercheur.getUsername());
            }
        }
    return resultat;
    }

@Override
public Chercheur findById(Long id){
if(id==null) return null;
return chercheurDao.getOne(id);
}

@Override
public Chercheur findByIdWithAssociatedList(Long id){
Chercheur chercheur  = findById(id);
findAssociatedLists(chercheur);
return chercheur;
}
private void findAssociatedLists(Chercheur chercheur){
if(chercheur!=null && chercheur.getId() != null) {
        List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs = disciplineScientifiqueChercheurService.findByChercheurId(chercheur.getId());
        chercheur.setDisciplineScientifiqueChercheurs(disciplineScientifiqueChercheurs);
        List<EnjeuxIrdChercheur> enjeuxIrdChercheurs = enjeuxIrdChercheurService.findByChercheurId(chercheur.getId());
        chercheur.setEnjeuxIrdChercheurs(enjeuxIrdChercheurs);
        List<IdentifiantAuteurExpert> identifiantAuteurExperts = identifiantAuteurExpertService.findByChercheurId(chercheur.getId());
        chercheur.setIdentifiantAuteurExperts(identifiantAuteurExperts);
}
}
private void deleteAssociatedLists(Long id){
if(id != null ) {
        disciplineScientifiqueChercheurService.deleteByChercheurId(id);
        enjeuxIrdChercheurService.deleteByChercheurId(id);
        identifiantAuteurExpertService.deleteByChercheurId(id);
}
}

    private void updateAssociatedLists(Chercheur chercheur){
    if(chercheur !=null && chercheur.getId() != null){
            List<List<DisciplineScientifiqueChercheur>> resultDisciplineScientifiqueChercheurs= disciplineScientifiqueChercheurService.getToBeSavedAndToBeDeleted(disciplineScientifiqueChercheurService.findByChercheurId(chercheur.getId()),chercheur.getDisciplineScientifiqueChercheurs());
            disciplineScientifiqueChercheurService.delete(resultDisciplineScientifiqueChercheurs.get(1));
            associateDisciplineScientifiqueChercheur(chercheur,resultDisciplineScientifiqueChercheurs.get(0));
            disciplineScientifiqueChercheurService.update(resultDisciplineScientifiqueChercheurs.get(0));

            List<List<EnjeuxIrdChercheur>> resultEnjeuxIrdChercheurs= enjeuxIrdChercheurService.getToBeSavedAndToBeDeleted(enjeuxIrdChercheurService.findByChercheurId(chercheur.getId()),chercheur.getEnjeuxIrdChercheurs());
            enjeuxIrdChercheurService.delete(resultEnjeuxIrdChercheurs.get(1));
            associateEnjeuxIrdChercheur(chercheur,resultEnjeuxIrdChercheurs.get(0));
            enjeuxIrdChercheurService.update(resultEnjeuxIrdChercheurs.get(0));

            List<List<IdentifiantAuteurExpert>> resultIdentifiantAuteurExperts= identifiantAuteurExpertService.getToBeSavedAndToBeDeleted(identifiantAuteurExpertService.findByChercheurId(chercheur.getId()),chercheur.getIdentifiantAuteurExperts());
            identifiantAuteurExpertService.delete(resultIdentifiantAuteurExperts.get(1));
            associateIdentifiantAuteurExpert(chercheur,resultIdentifiantAuteurExperts.get(0));
            identifiantAuteurExpertService.update(resultIdentifiantAuteurExperts.get(0));

    }
    }

@Transactional
public int deleteById(Long id){
int res=0;
if(chercheurDao.findById(id).isPresent())  {
deleteAssociatedLists(id);
chercheurDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Chercheur update(Chercheur chercheur){
Chercheur foundedChercheur = findById(chercheur.getId());
if(foundedChercheur==null) return null;
else{
    updateAssociatedLists(chercheur);
return  chercheurDao.save(chercheur);
}
}
private void prepareSave(Chercheur chercheur){
if(chercheur.getConsentementRgpd() == null)
  chercheur.setConsentementRgpd(false);
if(chercheur.getFormationEnManagement() == null)
  chercheur.setFormationEnManagement(false);
  chercheur.setCredentialsNonExpired(false);
  chercheur.setEnabled(false);
  chercheur.setAccountNonExpired(false);
  chercheur.setAccountNonLocked(false);
  chercheur.setPasswordChanged(false);



}

@Override
public Chercheur save (Chercheur chercheur){
prepareSave(chercheur);

Chercheur result =null;
    Chercheur foundedChercheur = findByNumeroMatricule(chercheur.getNumeroMatricule());
   if(foundedChercheur == null){



Chercheur savedChercheur = chercheurDao.save(chercheur);

       saveDisciplineScientifiqueChercheurs(savedChercheur,chercheur.getDisciplineScientifiqueChercheurs());
       saveEnjeuxIrdChercheurs(savedChercheur,chercheur.getEnjeuxIrdChercheurs());
       saveIdentifiantAuteurExperts(savedChercheur,chercheur.getIdentifiantAuteurExperts());
result = savedChercheur;
   }

return result;
}

@Override
public List<Chercheur> save(List<Chercheur> chercheurs){
List<Chercheur> list = new ArrayList<>();
for(Chercheur chercheur: chercheurs){
list.add(save(chercheur));
}
return list;
}

        private List<DisciplineScientifiqueChercheur> prepareDisciplineScientifiqueChercheurs(Chercheur chercheur,List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs){
        for(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur:disciplineScientifiqueChercheurs ){
        disciplineScientifiqueChercheur.setChercheur(chercheur);
        }
        return disciplineScientifiqueChercheurs;
        }
        private List<EnjeuxIrdChercheur> prepareEnjeuxIrdChercheurs(Chercheur chercheur,List<EnjeuxIrdChercheur> enjeuxIrdChercheurs){
        for(EnjeuxIrdChercheur enjeuxIrdChercheur:enjeuxIrdChercheurs ){
        enjeuxIrdChercheur.setChercheur(chercheur);
        }
        return enjeuxIrdChercheurs;
        }
        private List<IdentifiantAuteurExpert> prepareIdentifiantAuteurExperts(Chercheur chercheur,List<IdentifiantAuteurExpert> identifiantAuteurExperts){
        for(IdentifiantAuteurExpert identifiantAuteurExpert:identifiantAuteurExperts ){
        identifiantAuteurExpert.setChercheur(chercheur);
        }
        return identifiantAuteurExperts;
        }


@Override
@Transactional
public int delete(Chercheur chercheur){
    if(chercheur.getNumeroMatricule()==null) return -1;

    Chercheur foundedChercheur = findByNumeroMatricule(chercheur.getNumeroMatricule());
    if(foundedChercheur==null) return -1;
chercheurDao.delete(foundedChercheur);
return 1;
}


public List<Chercheur> findByCriteria(ChercheurVo chercheurVo){

String query = "SELECT o FROM Chercheur o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",chercheurVo.getId());
            query += SearchUtil.addConstraint( "o", "consentementRgpd","=",chercheurVo.getConsentementRgpd());
            query += SearchUtil.addConstraint( "o", "numeroMatricule","LIKE",chercheurVo.getNumeroMatricule());
            query += SearchUtil.addConstraint( "o", "emailPrincipale","LIKE",chercheurVo.getEmailPrincipale());
            query += SearchUtil.addConstraint( "o", "resume","LIKE",chercheurVo.getResume());
            query += SearchUtil.addConstraint( "o", "natureImplication","LIKE",chercheurVo.getNatureImplication());
            query += SearchUtil.addConstraint( "o", "formationEnManagement","=",chercheurVo.getFormationEnManagement());
            query += SearchUtil.addConstraint( "o", "credentialsNonExpired","=",chercheurVo.getCredentialsNonExpired());
            query += SearchUtil.addConstraint( "o", "enabled","=",chercheurVo.getEnabled());
            query += SearchUtil.addConstraint( "o", "accountNonExpired","=",chercheurVo.getAccountNonExpired());
            query += SearchUtil.addConstraint( "o", "accountNonLocked","=",chercheurVo.getAccountNonLocked());
            query += SearchUtil.addConstraint( "o", "passwordChanged","=",chercheurVo.getPasswordChanged());
        query += SearchUtil.addConstraintDate( "o", "createdAt","=",chercheurVo.getCreatedAt());
        query += SearchUtil.addConstraintDate( "o", "updatedAt","=",chercheurVo.getUpdatedAt());
            query += SearchUtil.addConstraint( "o", "username","LIKE",chercheurVo.getUsername());
            query += SearchUtil.addConstraint( "o", "password","LIKE",chercheurVo.getPassword());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",chercheurVo.getPrenom());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",chercheurVo.getNom());
            query += SearchUtil.addConstraint( "o", "baseHorizon","LIKE",chercheurVo.getBaseHorizon());
            query += SearchUtil.addConstraint( "o", "role","LIKE",chercheurVo.getRole());
            query += SearchUtil.addConstraintMinMaxDate("o","createdAt",chercheurVo.getCreatedAtMin(),chercheurVo.getCreatedAtMax());
            query += SearchUtil.addConstraintMinMaxDate("o","updatedAt",chercheurVo.getUpdatedAtMin(),chercheurVo.getUpdatedAtMax());
return entityManager.createQuery(query).getResultList();
}
        private  void saveDisciplineScientifiqueChercheurs(Chercheur chercheur,List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs){

        if (ListUtil.isNotEmpty(chercheur.getDisciplineScientifiqueChercheurs())) {
        List<DisciplineScientifiqueChercheur> savedDisciplineScientifiqueChercheurs = new ArrayList<>();
        disciplineScientifiqueChercheurs.forEach(element -> {
        element.setChercheur(chercheur);
        disciplineScientifiqueChercheurService.save(element);
        });
        chercheur.setDisciplineScientifiqueChercheurs(savedDisciplineScientifiqueChercheurs);
        }
        }
        private  void saveEnjeuxIrdChercheurs(Chercheur chercheur,List<EnjeuxIrdChercheur> enjeuxIrdChercheurs){

        if (ListUtil.isNotEmpty(chercheur.getEnjeuxIrdChercheurs())) {
        List<EnjeuxIrdChercheur> savedEnjeuxIrdChercheurs = new ArrayList<>();
        enjeuxIrdChercheurs.forEach(element -> {
        element.setChercheur(chercheur);
        enjeuxIrdChercheurService.save(element);
        });
        chercheur.setEnjeuxIrdChercheurs(savedEnjeuxIrdChercheurs);
        }
        }
        private  void saveIdentifiantAuteurExperts(Chercheur chercheur,List<IdentifiantAuteurExpert> identifiantAuteurExperts){

        if (ListUtil.isNotEmpty(chercheur.getIdentifiantAuteurExperts())) {
        List<IdentifiantAuteurExpert> savedIdentifiantAuteurExperts = new ArrayList<>();
        identifiantAuteurExperts.forEach(element -> {
        element.setChercheur(chercheur);
        identifiantAuteurExpertService.save(element);
        });
        chercheur.setIdentifiantAuteurExperts(savedIdentifiantAuteurExperts);
        }
        }


@Override
@Transactional
public void delete(List<Chercheur> chercheurs){
        if(ListUtil.isNotEmpty(chercheurs)){
        chercheurs.forEach(e->chercheurDao.delete(e));
        }
}
@Override
public void update(List<Chercheur> chercheurs){
if(ListUtil.isNotEmpty(chercheurs)){
chercheurs.forEach(e->chercheurDao.save(e));
}
}

private void associateDisciplineScientifiqueChercheur(Chercheur chercheur, List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheur) {
    if (ListUtil.isNotEmpty(disciplineScientifiqueChercheur)) {
        disciplineScientifiqueChercheur.forEach(e -> e.setChercheur(chercheur));
    }
    }
private void associateEnjeuxIrdChercheur(Chercheur chercheur, List<EnjeuxIrdChercheur> enjeuxIrdChercheur) {
    if (ListUtil.isNotEmpty(enjeuxIrdChercheur)) {
        enjeuxIrdChercheur.forEach(e -> e.setChercheur(chercheur));
    }
    }
private void associateIdentifiantAuteurExpert(Chercheur chercheur, List<IdentifiantAuteurExpert> identifiantAuteurExpert) {
    if (ListUtil.isNotEmpty(identifiantAuteurExpert)) {
        identifiantAuteurExpert.forEach(e -> e.setChercheur(chercheur));
    }
    }


}
