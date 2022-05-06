package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DisciplineScientifiqueParent;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.DisciplineScientifiqueParentDao;
import com.ird.faa.service.admin.facade.DisciplineScientifiqueParentAdminService;
import com.ird.faa.service.admin.facade.ChercheurAdminService;

import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueParentVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DisciplineScientifiqueParentAdminServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueParent> implements DisciplineScientifiqueParentAdminService {

@Autowired
private DisciplineScientifiqueParentDao disciplineScientifiqueParentDao;

@Autowired
private ArchivableService<DisciplineScientifiqueParent> archivableService;
        @Autowired
        private ChercheurAdminService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DisciplineScientifiqueParent> findAll(){
        String query = "SELECT o FROM DisciplineScientifiqueParent o where 1=1 ";
        query+= " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<DisciplineScientifiqueParent> findByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueParentDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueParentDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<DisciplineScientifiqueParent> findByChercheurId(Long id){
        return disciplineScientifiqueParentDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return disciplineScientifiqueParentDao.deleteByChercheurId(id);
        }

    @Override
    public DisciplineScientifiqueParent findByCode(String code){
    if( code==null) return null;
    return disciplineScientifiqueParentDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return disciplineScientifiqueParentDao.deleteByCode(code);
    }
    @Override
    public DisciplineScientifiqueParent findByIdOrCode(DisciplineScientifiqueParent disciplineScientifiqueParent){
        DisciplineScientifiqueParent resultat=null;
        if(disciplineScientifiqueParent != null){
            if(StringUtil.isNotEmpty(disciplineScientifiqueParent.getId())){
            resultat= disciplineScientifiqueParentDao.getOne(disciplineScientifiqueParent.getId());
            }else if(StringUtil.isNotEmpty(disciplineScientifiqueParent.getCode())) {
            resultat= disciplineScientifiqueParentDao.findByCode(disciplineScientifiqueParent.getCode());
            }
        }
    return resultat;
    }

@Override
public DisciplineScientifiqueParent findById(Long id){
if(id==null) return null;
return disciplineScientifiqueParentDao.getOne(id);
}

@Override
public DisciplineScientifiqueParent findByIdWithAssociatedList(Long id){
return findById(id);
}
     @Override
    public DisciplineScientifiqueParent archiver(DisciplineScientifiqueParent disciplineScientifiqueParent) {
        if (disciplineScientifiqueParent.getArchive() == null) {
        disciplineScientifiqueParent.setArchive(false);
        }
        disciplineScientifiqueParent.setArchive(true);
        disciplineScientifiqueParent.setDateArchivage(new Date());
        disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);
        return disciplineScientifiqueParent;

    }

    @Override
    public DisciplineScientifiqueParent desarchiver(DisciplineScientifiqueParent disciplineScientifiqueParent) {
    if (disciplineScientifiqueParent.getArchive() == null) {
    disciplineScientifiqueParent.setArchive(false);
    }
    disciplineScientifiqueParent.setArchive(false);
    disciplineScientifiqueParent.setDateArchivage(null);
    disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);
    return disciplineScientifiqueParent;
    }



@Transactional
public int deleteById(Long id){
int res=0;
if(disciplineScientifiqueParentDao.findById(id).isPresent())  {
disciplineScientifiqueParentDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DisciplineScientifiqueParent update(DisciplineScientifiqueParent disciplineScientifiqueParent){
DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findById(disciplineScientifiqueParent.getId());
if(foundedDisciplineScientifiqueParent==null) return null;
else{
    archivableService.prepare(disciplineScientifiqueParent);
return  disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);
}
}
private void prepareSave(DisciplineScientifiqueParent disciplineScientifiqueParent){
disciplineScientifiqueParent.setDateCreation(new Date());
if(disciplineScientifiqueParent.getArchive() == null)
  disciplineScientifiqueParent.setArchive(false);
if(disciplineScientifiqueParent.getAdmin() == null)
  disciplineScientifiqueParent.setAdmin(false);
if(disciplineScientifiqueParent.getVisible() == null)
  disciplineScientifiqueParent.setVisible(false);



}

@Override
public DisciplineScientifiqueParent save (DisciplineScientifiqueParent disciplineScientifiqueParent){
prepareSave(disciplineScientifiqueParent);

DisciplineScientifiqueParent result =null;
    DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findByCode(disciplineScientifiqueParent.getCode());
   if(foundedDisciplineScientifiqueParent == null){


    findChercheur(disciplineScientifiqueParent);

DisciplineScientifiqueParent savedDisciplineScientifiqueParent = disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);

result = savedDisciplineScientifiqueParent;
   }

return result;
}

@Override
public List<DisciplineScientifiqueParent> save(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
List<DisciplineScientifiqueParent> list = new ArrayList<>();
for(DisciplineScientifiqueParent disciplineScientifiqueParent: disciplineScientifiqueParents){
list.add(save(disciplineScientifiqueParent));
}
return list;
}



@Override
@Transactional
public int delete(DisciplineScientifiqueParent disciplineScientifiqueParent){
    if(disciplineScientifiqueParent.getCode()==null) return -1;

    DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findByCode(disciplineScientifiqueParent.getCode());
    if(foundedDisciplineScientifiqueParent==null) return -1;
disciplineScientifiqueParentDao.delete(foundedDisciplineScientifiqueParent);
return 1;
}


public List<DisciplineScientifiqueParent> findByCriteria(DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){

String query = "SELECT o FROM DisciplineScientifiqueParent o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueParentVo.getId());
            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",disciplineScientifiqueParentVo.getLibelleFr());
            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",disciplineScientifiqueParentVo.getLibelleEng());
            query += SearchUtil.addConstraint( "o", "code","LIKE",disciplineScientifiqueParentVo.getCode());
            query += SearchUtil.addConstraint( "o", "niveau","=",disciplineScientifiqueParentVo.getNiveau());
            query += SearchUtil.addConstraint( "o", "archive","=",disciplineScientifiqueParentVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",disciplineScientifiqueParentVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",disciplineScientifiqueParentVo.getDateCreation());
            query += SearchUtil.addConstraint( "o", "admin","=",disciplineScientifiqueParentVo.getAdmin());
            query += SearchUtil.addConstraint( "o", "visible","=",disciplineScientifiqueParentVo.getVisible());
            query += SearchUtil.addConstraintMinMax("o","niveau",disciplineScientifiqueParentVo.getNiveauMin(),disciplineScientifiqueParentVo.getNiveauMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",disciplineScientifiqueParentVo.getDateArchivageMin(),disciplineScientifiqueParentVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",disciplineScientifiqueParentVo.getDateCreationMin(),disciplineScientifiqueParentVo.getDateCreationMax());
    if(disciplineScientifiqueParentVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",disciplineScientifiqueParentVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",disciplineScientifiqueParentVo.getChercheurVo().getNumeroMatricule());
    }

query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}

    private void findChercheur(DisciplineScientifiqueParent disciplineScientifiqueParent){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(disciplineScientifiqueParent.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    disciplineScientifiqueParent.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
        if(ListUtil.isNotEmpty(disciplineScientifiqueParents)){
        disciplineScientifiqueParents.forEach(e->disciplineScientifiqueParentDao.delete(e));
        }
}
@Override
public void update(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
if(ListUtil.isNotEmpty(disciplineScientifiqueParents)){
disciplineScientifiqueParents.forEach(e->disciplineScientifiqueParentDao.save(e));
}
}



}
