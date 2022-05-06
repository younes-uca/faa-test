package com.ird.faa.service.chercheur.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import com.ird.faa.service.util.StringUtil;
import com.ird.faa.security.common.SecurityUtil;
import com.ird.faa.security.bean.User;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DisciplineScientifiqueErcParent;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.DisciplineScientifiqueErcParentDao;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcParentChercheurService;
import com.ird.faa.service.chercheur.facade.ChercheurChercheurService;

import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcParentVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DisciplineScientifiqueErcParentChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueErcParent> implements DisciplineScientifiqueErcParentChercheurService {

@Autowired
private DisciplineScientifiqueErcParentDao disciplineScientifiqueErcParentDao;

@Autowired
private ArchivableService<DisciplineScientifiqueErcParent> archivableService;
        @Autowired
        private ChercheurChercheurService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DisciplineScientifiqueErcParent> findAll(){
    String query = "SELECT o FROM DisciplineScientifiqueErcParent o ";
    query+= " WHERE (o.archive != true AND o.visible = true)";
    query+= " ORDER BY o.code";
    return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<DisciplineScientifiqueErcParent> findByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueErcParentDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueErcParentDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<DisciplineScientifiqueErcParent> findByChercheurId(Long id){
        return disciplineScientifiqueErcParentDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return disciplineScientifiqueErcParentDao.deleteByChercheurId(id);
        }

    @Override
    public DisciplineScientifiqueErcParent findByCode(String code){
    if( code==null) return null;
    return disciplineScientifiqueErcParentDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return disciplineScientifiqueErcParentDao.deleteByCode(code);
    }
    @Override
    public DisciplineScientifiqueErcParent findByIdOrCode(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
        DisciplineScientifiqueErcParent resultat=null;
        if(disciplineScientifiqueErcParent != null){
            if(StringUtil.isNotEmpty(disciplineScientifiqueErcParent.getId())){
            resultat= disciplineScientifiqueErcParentDao.getOne(disciplineScientifiqueErcParent.getId());
            }else if(StringUtil.isNotEmpty(disciplineScientifiqueErcParent.getCode())) {
            resultat= disciplineScientifiqueErcParentDao.findByCode(disciplineScientifiqueErcParent.getCode());
            }
        }
    return resultat;
    }

@Override
public DisciplineScientifiqueErcParent findById(Long id){
if(id==null) return null;
return disciplineScientifiqueErcParentDao.getOne(id);
}

@Override
public DisciplineScientifiqueErcParent findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(disciplineScientifiqueErcParentDao.findById(id).isPresent())  {
disciplineScientifiqueErcParentDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DisciplineScientifiqueErcParent update(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findById(disciplineScientifiqueErcParent.getId());
if(foundedDisciplineScientifiqueErcParent==null) return null;
else{
    archivableService.prepare(disciplineScientifiqueErcParent);
return  disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);
}
}
private void prepareSave(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
disciplineScientifiqueErcParent.setDateCreation(new Date());
if(disciplineScientifiqueErcParent.getArchive() == null)
  disciplineScientifiqueErcParent.setArchive(false);
if(disciplineScientifiqueErcParent.getAdmin() == null)
  disciplineScientifiqueErcParent.setAdmin(false);
if(disciplineScientifiqueErcParent.getVisible() == null)
  disciplineScientifiqueErcParent.setVisible(false);



}

@Override
public DisciplineScientifiqueErcParent save (DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
prepareSave(disciplineScientifiqueErcParent);

DisciplineScientifiqueErcParent result =null;
    DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findByCode(disciplineScientifiqueErcParent.getCode());
   if(foundedDisciplineScientifiqueErcParent == null){


    findChercheur(disciplineScientifiqueErcParent);

DisciplineScientifiqueErcParent savedDisciplineScientifiqueErcParent = disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);

result = savedDisciplineScientifiqueErcParent;
   }

return result;
}

@Override
public List<DisciplineScientifiqueErcParent> save(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
List<DisciplineScientifiqueErcParent> list = new ArrayList<>();
for(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent: disciplineScientifiqueErcParents){
list.add(save(disciplineScientifiqueErcParent));
}
return list;
}



@Override
@Transactional
public int delete(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
    if(disciplineScientifiqueErcParent.getCode()==null) return -1;

    DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findByCode(disciplineScientifiqueErcParent.getCode());
    if(foundedDisciplineScientifiqueErcParent==null) return -1;
disciplineScientifiqueErcParentDao.delete(foundedDisciplineScientifiqueErcParent);
return 1;
}


public List<DisciplineScientifiqueErcParent> findByCriteria(DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){

String query = "SELECT o FROM DisciplineScientifiqueErcParent o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueErcParentVo.getId());
            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",disciplineScientifiqueErcParentVo.getLibelleFr());
            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",disciplineScientifiqueErcParentVo.getLibelleEng());
            query += SearchUtil.addConstraint( "o", "code","LIKE",disciplineScientifiqueErcParentVo.getCode());
            query += SearchUtil.addConstraint( "o", "niveau","=",disciplineScientifiqueErcParentVo.getNiveau());
            query += SearchUtil.addConstraint( "o", "archive","=",disciplineScientifiqueErcParentVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",disciplineScientifiqueErcParentVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",disciplineScientifiqueErcParentVo.getDateCreation());
            query += SearchUtil.addConstraint( "o", "admin","=",disciplineScientifiqueErcParentVo.getAdmin());
            query += SearchUtil.addConstraint( "o", "visible","=",disciplineScientifiqueErcParentVo.getVisible());
            query += SearchUtil.addConstraintMinMax("o","niveau",disciplineScientifiqueErcParentVo.getNiveauMin(),disciplineScientifiqueErcParentVo.getNiveauMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",disciplineScientifiqueErcParentVo.getDateArchivageMin(),disciplineScientifiqueErcParentVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",disciplineScientifiqueErcParentVo.getDateCreationMin(),disciplineScientifiqueErcParentVo.getDateCreationMax());
    if(disciplineScientifiqueErcParentVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",disciplineScientifiqueErcParentVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",disciplineScientifiqueErcParentVo.getChercheurVo().getNumeroMatricule());
    }

query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}

    private void findChercheur(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(disciplineScientifiqueErcParent.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    disciplineScientifiqueErcParent.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
        if(ListUtil.isNotEmpty(disciplineScientifiqueErcParents)){
        disciplineScientifiqueErcParents.forEach(e->disciplineScientifiqueErcParentDao.delete(e));
        }
}
@Override
public void update(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
if(ListUtil.isNotEmpty(disciplineScientifiqueErcParents)){
disciplineScientifiqueErcParents.forEach(e->disciplineScientifiqueErcParentDao.save(e));
}
}



}
